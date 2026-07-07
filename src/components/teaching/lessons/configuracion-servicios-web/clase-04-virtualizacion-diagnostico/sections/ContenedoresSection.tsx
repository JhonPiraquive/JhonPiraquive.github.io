import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const DOCKERFILE_API = `FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN addgroup -S app && adduser -S app -G app
USER app

EXPOSE 3000
CMD ["node", "server.js"]`;

const DOCKER_COMPOSE_STAGING = `services:
  api:
    build: .
    environment:
      DATABASE_URL: postgres://app:secret@db:5432/staging
      NODE_ENV: staging
    depends_on:
      db:
        condition: service_healthy
    networks:
      - backend

  db:
    image: postgres:16-alpine
    environment:
      POSTGRES_USER: app
      POSTGRES_PASSWORD: secret
      POSTGRES_DB: staging
    volumes:
      - pgdata:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U app"]
      interval: 5s
      retries: 5
    networks:
      - backend

  web:
    image: nginx:1.25-alpine
    ports:
      - "8080:80"
    volumes:
      - ./nginx.conf:/etc/nginx/conf.d/default.conf:ro
    depends_on:
      - api
    networks:
      - backend

volumes:
  pgdata:

networks:
  backend:`;

const COMANDOS_DOCKER = `# Construir imagen desde Dockerfile
docker build -t mi-api:staging .

# Primer contenedor de prueba
docker pull nginx:alpine
docker run -d -p 8080:80 --name web nginx:alpine
docker ps
docker logs web

# Stack completo con Compose
docker compose up -d --build
docker compose ps
docker compose logs -f api
docker compose down`;

const DEPLOY_SSH_COMPOSE = `# Desde la laptop del desarrollador
ssh deploy@190.25.80.42
cd /opt/staging-tienda
git pull origin main
docker compose pull
docker compose up -d --build
curl -I http://localhost:8080/health`;

const MERMAID_CAPAS = `flowchart TB
  subgraph VM["Máquina virtual"]
    H1[Hardware físico]
    HV[Hipervisor<br/>VirtualBox / Hyper-V / KVM]
    SO1[SO invitado completo<br/>kernel + userspace]
    APP1[Aplicación]
    H1 --> HV --> SO1 --> APP1
  end

  subgraph CTR["Contenedor Docker"]
    H2[Hardware físico]
    SO2[SO host — un solo kernel]
    ENG[Motor Docker<br/>containerd / runc]
    APP2[Contenedor<br/>proceso aislado]
    H2 --> SO2 --> ENG --> APP2
  end`;

const MERMAID_STAGING = `sequenceDiagram
  participant Dev as Desarrollador
  participant DNS as DNS
  participant VPS as VPS + Nginx HTTPS
  participant DC as Docker Compose

  Dev->>DNS: Crear A staging.tienda.mx → IP VPS
  Dev->>VPS: ssh deploy@IP
  Dev->>VPS: certbot --nginx -d staging.tienda.mx
  Dev->>DC: docker compose up -d --build
  DC-->>Dev: API en puerto interno 3000
  VPS-->>Dev: https://staging.tienda.mx responde 200`;

export function ContenedoresSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Contenedores: qué son y por qué importan"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un contenedor empaqueta una aplicación junto con sus dependencias — binarios, librerías, variables de entorno y configuración — en una imagen portable. Al ejecutarse, el contenedor corre como proceso aislado que comparte el kernel del sistema operativo host. No virtualiza hardware ni un sistema operativo completo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <p className="my-4">
        {
          "En LATAM, equipos pequeños despliegan en VPS regionales (DigitalOcean, AWS sa-east-1, proveedores locales) sin presupuesto para clusters. Un contenedor garantiza que la API que funciona en la laptop del desarrollador en Bogotá se comporte igual en el servidor de São Paulo. Reduce el clásico «en mi máquina sí corre»."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <p className="my-4">{"El ciclo de vida de un contenedor sigue tres pasos claros:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {"Se construye una "}
          <strong>{"imagen"}</strong>
          {" (plantilla inmutable) a partir de un Dockerfile o se descarga de un registro como Docker Hub."}
        </li>
        <li>
          {"`docker run` crea un "}
          <strong>{"contenedor"}</strong>
          {" — la instancia en ejecución — a partir de esa imagen."}
        </li>
        <li>
          {
            "El motor de contenedores (containerd/runc en Docker) usa namespaces y cgroups del kernel Linux para aislar procesos, red y sistema de archivos sin arrancar un SO invitado."
          }
        </li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura y composición"}</h3>
      <p className="my-4">
        {
          "Un stack basado en contenedores se compone de piezas con roles distintos. La imagen es la plantilla de solo lectura formada por capas apiladas; el contenedor es la instancia viva de esa imagen. El registro (Docker Hub, GHCR) almacena imágenes remotas para compartir entre equipos. Los volúmenes persisten datos fuera del ciclo de vida del contenedor — sin ellos, al borrar el contenedor se pierde el estado. Las redes permiten que varios contenedores se comuniquen entre sí y con el host."
        }
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Elemento"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Rol"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3 font-medium">{"Imagen"}</td>
              <td className="px-4 py-3">{"Plantilla de solo lectura (capas apiladas)"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-neutral-light)]/50">
              <td className="px-4 py-3 font-medium">{"Contenedor"}</td>
              <td className="px-4 py-3">{"Instancia en ejecución de una imagen"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3 font-medium">{"Registro"}</td>
              <td className="px-4 py-3">{"Repositorio remoto de imágenes (Docker Hub, GHCR)"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-neutral-light)]/50">
              <td className="px-4 py-3 font-medium">{"Volumen"}</td>
              <td className="px-4 py-3">{"Persistencia de datos fuera del ciclo de vida del contenedor"}</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">{"Red"}</td>
              <td className="px-4 py-3">{"Comunicación entre contenedores y el host"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <p className="my-4">
        {
          "Los contenedores arrancan en segundos y consumen menos RAM y CPU que una VM porque no duplican un kernel completo. La imagen es reproducible de desarrollo a CI y producción, y el escalado horizontal (más réplicas) es natural. Sin embargo, requieren un kernel compatible — Linux nativo o WSL 2 en Windows — y no sustituyen una VM si necesitas otro sistema operativo o kernel distinto."
        }
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Ventajas"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Desventajas"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3">{"Arranque en segundos"}</td>
              <td className="px-4 py-3">{"Requiere kernel compatible (Linux nativo o WSL 2 en Windows)"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-neutral-light)]/50">
              <td className="px-4 py-3">{"Imagen reproducible dev → CI → prod"}</td>
              <td className="px-4 py-3">{"No sustituye una VM si necesitas otro SO o kernel"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3">{"Menor consumo de RAM/CPU que una VM"}</td>
              <td className="px-4 py-3">{"Curva de aprendizaje (redes, volúmenes, permisos)"}</td>
            </tr>
            <tr>
              <td className="px-4 py-3">{"Escalado horizontal (más réplicas)"}</td>
              <td className="px-4 py-3">{"Orquestación manual no escala; Compose/K8s para muchos servicios"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Una fintech en Medellín empaqueta su API Node.js en una imagen `node:20-alpine`. En staging corre un contenedor; en producción, tres réplicas detrás de Nginx. Misma imagen, distinto `docker compose` o variables de entorno."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" imagen pequeña (Alpine), usuario no-root, variables sensibles fuera de la imagen, healthcheck definido."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " contenedor como root sin necesidad, secretos hardcodeados en Dockerfile, imagen de 2 GB con SO completo innecesario, tratar el contenedor como VM persistente sin volúmenes."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Imagen latest en producción:"}</strong>
          {" Rebuild nocturno cambió versión Node; API cayó sin cambio de código. Corrección: tag semver fijo node:20.11-alpine."}
        </li>
        <li>
          <strong>{"Secretos en ENV del Dockerfile:"}</strong>
          {" Token AWS en capa de imagen subida a Docker Hub público. Corrección: secrets en runtime, .dockerignore, scan Trivy."}
        </li>
        <li>
          <strong>{"Contenedor como root:"}</strong>
          {" Escape de contenedor comprometió host en VPS compartido. Corrección: USER no-root en Dockerfile."}
        </li>
      </ul>

      <Callout title="Error frecuente">
        {
          "Confundir contenedor con VM: no puedes instalar Windows dentro de un contenedor Linux. Para otro SO completo, usa una máquina virtual."
        }
      </Callout>

      <h2 className="mb-4 mt-12 text-2xl font-bold text-[var(--color-primary)]">
        {"Docker: Dockerfile y Docker Compose"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Docker es la plataforma más extendida para crear, distribuir y ejecutar contenedores. Incluye el Docker Engine (daemon que gestiona imágenes y contenedores), la Docker CLI (`docker build`, `docker run`, `docker compose`) y Docker Desktop (entorno gráfico para Windows/macOS que usa WSL 2 o un hypervisor ligero)."
        }
      </p>
      <p className="my-4">
        {
          "Kubernetes (K8s) orquesta cientos de contenedores en clusters; Docker Compose orquesta pocos servicios en un solo host — ideal para staging y laboratorio de Programación Orientada a Sitios Web (POSW)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <p className="my-4">
        {
          "Docker estandariza el despliegue en el curso: el estudiante no instala Node, PostgreSQL ni Nginx directamente en el VPS de prueba; levanta un `docker-compose.yml` y replica el entorno en minutos. Es el puente entre administración remota (clase 3) y el stack web completo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Dockerfile"}</h3>
      <p className="my-4">
        {
          "El Dockerfile es un script declarativo que define cómo construir la imagen. Cada instrucción añade una capa: `FROM` (imagen base), `WORKDIR` (directorio de trabajo), `COPY`/`ADD` (archivos al contexto de build), `RUN` (comandos durante la construcción), `EXPOSE` (puerto documentado) y `CMD`/`ENTRYPOINT` (comando al arrancar el contenedor)."
        }
      </p>
      <CodeFiddle language="dockerfile" title="Dockerfile API Node.js" filename="Dockerfile" code={DOCKERFILE_API} />
      <p className="my-4">
        {
          "Este Dockerfile instala dependencias de producción, copia el código, crea un usuario no-root y expone el puerto 3000. Es el patrón recomendado para staging de una API Node.js."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Docker Compose"}</h3>
      <p className="my-4">
        {
          "Docker Compose lee un archivo `docker-compose.yml` y levanta varios servicios (app, base de datos, proxy) con redes y volúmenes compartidos. Un solo `docker compose up -d` despliega el stack completo."
        }
      </p>
      <CodeFiddle
        language="yaml"
        title="docker-compose.yml staging"
        filename="docker-compose.yml"
        code={DOCKER_COMPOSE_STAGING}
      />
      <p className="my-4">
        {
          "Observa el `depends_on` con `condition: service_healthy`: la API no arranca hasta que PostgreSQL responda a `pg_isready`. Sin ese healthcheck, la API puede entrar en crash loop al intentar conectar a una BD que aún no escucha."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos y variantes"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Herramienta"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Alcance"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Cuándo usarla"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3 font-medium">{"`docker run`"}</td>
              <td className="px-4 py-3">{"Un contenedor"}</td>
              <td className="px-4 py-3">{"Prueba rápida, laboratorio"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-neutral-light)]/50">
              <td className="px-4 py-3 font-medium">{"Dockerfile + `docker build`"}</td>
              <td className="px-4 py-3">{"Imagen propia"}</td>
              <td className="px-4 py-3">{"App custom"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3 font-medium">{"Docker Compose"}</td>
              <td className="px-4 py-3">{"Multi-servicio, un host"}</td>
              <td className="px-4 py-3">{"Staging, desarrollo local"}</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">{"Kubernetes"}</td>
              <td className="px-4 py-3">{"Cluster, autoescalado"}</td>
              <td className="px-4 py-3">{"Producción a escala (mención)"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comandos esenciales"}</h3>
      <CodeFiddle language="bash" title="Comandos esenciales Docker" code={COMANDOS_DOCKER} />
      <Callout title="Docker Compose multi-servicio">
        {
          "En entornos de staging es habitual orquestar DNS, servidor web y correo en contenedores separados con un docker-compose.yml y variables de entorno por proyecto (red, IPs, puertos). Cada servicio tiene su imagen versionada; `docker compose pull && docker compose up -d` levanta el stack completo."
        }
      </Callout>
      <CodeFiddle
        language="bash"
        title="Arranque de stack multi-servicio"
        code={`docker compose pull
docker compose up -d
docker compose ps
docker compose logs -f --tail 50`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" `.dockerignore`, multi-etapa para reducir tamaño, `depends_on` con healthcheck, puertos mapeados explícitos (`8080:80`)."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " `latest` sin fijar versión en producción, montar `/` del host, olvidar `docker compose down` y dejar contenedores huérfanos consumiendo puertos."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Volumen montado sobre /etc del host:"}</strong>
          {" Compose de prueba sobrescribió resolv.conf del VPS. Corrección: volúmenes nombrados, nunca bind / críticos."}
        </li>
        <li>
          <strong>{"depends_on sin healthcheck:"}</strong>
          {" API arrancó antes que Postgres; errores en loop silencioso. Corrección: healthcheck y condition: service_healthy."}
        </li>
        <li>
          <strong>{"Puerto 80:80 en host ocupado:"}</strong>
          {" Segundo stack no levantó; nginx principal caído por conflicto. Corrección: mapear 8080:80 o reverse proxy único."}
        </li>
      </ul>

      <StepReveal
        title="Docker Desktop en Windows"
        steps={[
          {
            title: "1. Requisitos de hardware",
            content:
              "Habilita virtualización en BIOS/UEFI. Docker Desktop en Windows requiere WSL 2 o un hypervisor compatible.",
          },
          {
            title: "2. Instalar WSL 2",
            content:
              "Ejecuta `wsl --install` en PowerShell como administrador. Reinicia el equipo y verifica con `wsl --status`.",
          },
          {
            title: "3. Instalar Docker Desktop",
            content:
              "Descarga Docker Desktop, activa la integración con WSL 2 y reinicia el daemon si aparece error de virtualización.",
          },
          {
            title: "4. Verificar instalación",
            content: "Ejecuta `docker run hello-world`. Si el contenedor imprime mensaje de éxito, el motor está operativo.",
          },
        ]}
      />
      <PracticeExercise
        prompt="¿Por qué un contenedor arranca en segundos y una VM en minutos? Relaciona tu respuesta con el kernel compartido frente al SO invitado completo."
        hints={["Piensa en qué capas arranca cada tecnología", "¿Cuántos kernels corren en el host?"]}
        expectedKeywords={["kernel", "SO invitado", "segundos", "virtualiza"]}
        successMessage="Correcto. El contenedor reutiliza el kernel del host; la VM debe arrancar un sistema operativo completo con su propio kernel."
      />
      <CodeChallenge
        title="Completar docker-compose.yml"
        template={`services:
  web:
    image: nginx:1.25-alpine
    ports:
      - "{{PUERTO}}"
  api:
    build: .
    depends_on:
      - {{SERVICIO}}`}
        blanks={[
          { id: "PUERTO", answer: "8080:80", placeholder: "Mapea el puerto del host al 80 del contenedor" },
          { id: "SERVICIO", answer: "db", placeholder: "La API depende de la base de datos" },
        ]}
      />

      <h2 className="mb-4 mt-12 text-2xl font-bold text-[var(--color-primary)]">
        {"Contenedor frente a máquina virtual"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Una máquina virtual (VM) emula hardware completo mediante un hipervisor (VirtualBox, Hyper-V, KVM, VMware) y ejecuta un sistema operativo invitado independiente con su propio kernel. Un contenedor comparte el kernel del host y solo aísla el espacio de procesos del usuario."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <p className="my-4">
        {
          "Elegir mal cuesta tiempo y dinero: una startup en CDMX no necesita una VM Windows completa para servir una API Node; un contenedor basta. Pero si el laboratorio requiere practicar Ubuntu Server + `systemd` + firewall como en un VPS real, la VM reproduce mejor ese escenario."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparación de capas"}</h3>
      <MermaidDiagram chart={MERMAID_CAPAS} />
      <p className="my-4">
        {
          "En la VM, cada capa inferior sostiene un SO invitado completo. En el contenedor, el kernel del host es compartido; Docker solo aísla procesos, red y filesystem."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Hipervisores habituales"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Hipervisor"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Plataforma"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Uso típico en POSW"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3 font-medium">{"VirtualBox"}</td>
              <td className="px-4 py-3">{"Win/macOS/Linux"}</td>
              <td className="px-4 py-3">{"Laboratorio gratuito, snapshots"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-neutral-light)]/50">
              <td className="px-4 py-3 font-medium">{"Hyper-V"}</td>
              <td className="px-4 py-3">{"Windows Pro/Enterprise"}</td>
              <td className="px-4 py-3">{"VMs en equipos institucionales"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/30">
              <td className="px-4 py-3 font-medium">{"KVM"}</td>
              <td className="px-4 py-3">{"Linux"}</td>
              <td className="px-4 py-3">{"Base de muchos clouds"}</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-medium">{"VMware Workstation/Fusion"}</td>
              <td className="px-4 py-3">{"Multi"}</td>
              <td className="px-4 py-3">{"Rendimiento y snapshots avanzados"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CompareTable
        headers={["Criterio", "VM", "Contenedor"]}
        rows={[
          ["SO", "Completo por instancia", "Comparte kernel del host"],
          ["Tamaño", "Gigabytes", "Megabytes"],
          ["Arranque", "Minutos", "Segundos"],
          ["Aislamiento", "Fuerte (hardware virtualizado)", "Proceso/red (namespaces)"],
          ["Uso típico", "SO distinto, laboratorio GUI, legacy", "Microservicios, APIs, staging web"],
          ["Snapshots", "Sí (estado de disco completo)", "No equivalente; imágenes inmutables"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        <strong>{"Escenario VM:"}</strong>
        {
          " practicar `certbot --nginx` en Ubuntu Server 22.04 dentro de VirtualBox antes de tocar el VPS de la universidad. Snapshot «limpio» antes de romper `ufw`."
        }
      </p>
      <p className="my-4">
        <strong>{"Escenario contenedor:"}</strong>
        {" levantar `nginx:alpine` + API en staging con Compose; si falla, `docker compose down && docker compose up` en segundos."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Elegir VM cuando:"}</strong>
          {" necesitas kernel/SO distinto al host, GUI completa, simular servidor bare-metal, probar Hyper-V en Windows."}
        </li>
        <li>
          <strong>{"Elegir contenedor cuando:"}</strong>
          {" empaquetar app web/API, CI/CD, mismo kernel Linux en host y destino, despliegue rápido en VPS."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"VM completa para servir HTML estático:"}</strong>
          {" 512 MB RAM para nginx de 3 archivos. Corrección: contenedor nginx:alpine o hosting estático."}
        </li>
        <li>
          <strong>{"Contenedor para probar drivers GPU:"}</strong>
          {" Docker no expone GPU sin nvidia-runtime; días perdidos. Corrección: VM con passthrough o bare metal para ese caso."}
        </li>
      </ul>

      <PracticeExercise
        prompt="Un equipo en Buenos Aires debe probar `ufw` y `systemd` en Ubuntu Server antes de tocar el VPS de producción. ¿Recomendarías VM o contenedor? Justifica en una frase."
        hints={["¿Necesitas un SO completo con su propio kernel?", "¿El laboratorio simula un servidor bare-metal?"]}
        expectedKeywords={["VM", "Ubuntu", "snapshot", "laboratorio"]}
        successMessage="Correcto. La VM reproduce mejor un servidor completo con firewall y systemd; los snapshots permiten volver atrás si algo sale mal."
      />

      <h2 className="mb-4 mt-12 text-2xl font-bold text-[var(--color-primary)]">
        {"Deploy por SSH y Docker Compose"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Secuencia staging completa"}</h3>
      <MermaidDiagram chart={MERMAID_STAGING} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Deploy por SSH + Compose"}</h3>
      <CodeFiddle language="bash" title="Deploy por SSH + Compose" code={DEPLOY_SSH_COMPOSE} />
      <p className="my-4">
        {
          "Este flujo conecta la clase 3 (SSH sin contraseña root) con contenedores: el usuario `deploy` tiene permisos Docker y el stack se actualiza de forma reproducible."
        }
      </p>
    </section>
  );
}
