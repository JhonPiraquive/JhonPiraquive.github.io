import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

const INSTALAR_DOCKER = `# Debian/Ubuntu — instalación oficial (resumen)
sudo apt update
sudo apt install -y ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg \\
  -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc

# Agregar repositorio e instalar engine + compose plugin
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Verificar
docker --version
docker compose version`;

const CICLO_CONTENEDOR = `# Descargar imagen oficial
docker pull debian:bookworm-slim

# Crear y ejecutar contenedor interactivo en segundo plano
docker run -d --name mi-servidor \\
  -p 2121:21 \\
  debian:bookworm-slim sleep infinity

# Ver contenedores activos
docker ps

# Inspeccionar SO dentro del contenedor
docker exec mi-servidor uname -a
docker exec mi-servidor cat /etc/os-release

# Detener y eliminar (limpieza)
docker stop mi-servidor
docker rm mi-servidor`;

const EVIDENCIAS_SO = `# Información básica del sistema operativo (dentro del contenedor o servidor)
uname -a
# Kernel, arquitectura, hostname, fecha

cat /etc/os-release
# NAME, VERSION, ID — identifica Debian, Ubuntu, etc.

hostname
whoami`;

export function DespliegueContenedorBasicoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Despliegue básico con Docker"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El despliegue básico con Docker consiste en instalar el motor de contenedores, descargar una imagen (plantilla de SO + software), crear un contenedor a partir de ella y verificar que está en ejecución. Un contenedor aísla procesos y el sistema de archivos sin virtualizar un SO completo como una VM."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En operaciones modernas, Docker permite reproducir entornos de servidor (Linux Debian, servicios FTP, bases de datos) en segundos sobre cualquier PC docente o de desarrollo. Documentar cada comando y su salida demuestra que sabes levantar un entorno aislado antes de instalar servicios como vsftpd o Nginx dentro de él."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona — ciclo pull → run → ps → exec"}</h3>
      <StepReveal
        title="Secuencia de despliegue"
        steps={[
          {
            title: "Instalar Docker Engine",
            content:
              "Motor + CLI + plugin Compose. En Linux nativo suele bastar apt; en Windows/macOS se usa Docker Desktop con backend Linux.",
          },
          {
            title: "docker pull IMAGEN:TAG",
            content:
              "Descarga capas desde un registro (Docker Hub). Ejemplo: debian:bookworm-slim. La salida muestra progreso de descarga.",
          },
          {
            title: "docker run",
            content:
              "Crea y arranca un contenedor. Flags comunes: -d (detached), --name (nombre), -p host:contenedor (puertos), comando final (ej. sleep infinity para mantenerlo vivo).",
          },
          {
            title: "docker ps",
            content:
              "Lista contenedores en ejecución: CONTAINER ID, IMAGE, STATUS, PORTS. Evidencia de que el despliegue fue exitoso.",
          },
          {
            title: "docker exec",
            content:
              "Ejecuta comandos dentro del contenedor ya corriendo (bash, uname, systemctl). No requiere entrar con docker attach.",
          },
        ]}
      />

      <CodeFiddle language="bash" title="Instalación Docker en Linux (resumen)" code={INSTALAR_DOCKER} />

      <CodeFiddle
        language="bash"
        title="Descargar imagen, ejecutar contenedor y verificar"
        code={CICLO_CONTENEDOR}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Documentar evidencias del entorno"}</h3>
      <p className="my-4">
        {
          "Tras levantar un contenedor o conectarte a un servidor Linux, registra la información del SO: salida de uname, contenido de /etc/os-release y el usuario activo. Estas evidencias permiten a otro técnico confirmar en qué distribución y kernel operas antes de instalar servicios."
        }
      </p>
      <CodeFiddle language="bash" title="Comandos de reconocimiento del SO" code={EVIDENCIAS_SO} />

      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Campo en documentación"}</th>
            <th className="border p-2 text-left">{"Comando / acción"}</th>
            <th className="border p-2 text-left">{"Evidencia esperada"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{"Imagen usada"}</td>
            <td className="border p-2">{"docker pull …"}</td>
            <td className="border p-2">{"Nombre:tag y digest o captura de descarga OK"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Contenedor activo"}</td>
            <td className="border p-2">{"docker ps"}</td>
            <td className="border p-2">{"STATUS Up …; PORTS mapeados si aplica"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Kernel y arquitectura"}</td>
            <td className="border p-2">{"uname -a (vía docker exec)"}</td>
            <td className="border p-2">{"x86_64, kernel Linux, hostname"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Distribución"}</td>
            <td className="border p-2">{"cat /etc/os-release"}</td>
            <td className="border p-2">{"PRETTY_NAME=Debian GNU/Linux …"}</td>
          </tr>
        </tbody>
      </table>

      <Callout title="Buenas prácticas de documentación">
        {
          "Anota fecha, versión de Docker (`docker --version`) y el comando exacto de run con todos los flags. Si algo falla, captura el mensaje de error completo (puerto en uso, permiso denegado) antes de cambiar parámetros."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Un técnico en Medellín prepara un servidor Linux aislado para transferencia de archivos: instala Docker, ejecuta `docker pull debian:bookworm-slim`, levanta un contenedor con `docker run -d --name ftp-lab debian:bookworm-slim sleep infinity` y documenta en su bitácora la salida de `docker ps` (STATUS Up) y `docker exec ftp-lab cat /etc/os-release` (Debian 12 bookworm). Con eso demuestra que el entorno base está listo antes de instalar vsftpd dentro del contenedor."
        }
      </p>

      <PracticeExercise
        prompt="Tras `docker run -d --name web -p 8080:80 nginx:alpine`, ¿qué comando confirma que el contenedor escucha el puerto 80 internamente y qué columna de docker ps verifica el mapeo al host?"
        hints={["docker exec …", "Columna PORTS"]}
        expectedKeywords={["docker ps", "PORTS", "8080", "exec"]}
        successMessage="docker ps muestra PORTS 0.0.0.0:8080->80/tcp; docker exec web ss -tlnp | grep :80 confirma escucha interna."
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" nombrar contenedores (--name), documentar puertos -p, limpiar con stop/rm al terminar."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" ejecutar contenedores como root en producción sin revisar imagen; omitir evidencias de docker ps tras el run."}
        </li>
      </ul>
    </section>
  );
}
