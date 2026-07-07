import { CompareTable } from "@/components/teaching/CompareTable";
import { StepReveal } from "@/components/teaching/StepReveal";
import { Callout } from "@/components/teaching/Callout";

export function HerramientasGraficasSshSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Clientes SSH gráficos: PuTTY, MobaXterm y Bitvise"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué son"}</h3>
      <p className="my-4">
        {
          "Los clientes SSH gráficos son aplicaciones con interfaz visual para establecer sesiones remotas sin depender exclusivamente de la terminal integrada. En Windows son especialmente útiles cuando OpenSSH nativo no está habilitado o cuando se prefieren perfiles guardados, SFTP integrado y gestión de claves visual."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirven / Por qué importan"}</h3>
      <p className="my-4">
        {
          "Muchos técnicos en LATAM operan desde Windows corporativo. PuTTY es el clásico ligero para terminal; MobaXterm combina SSH, SFTP y pestañas en una sola ventana; Bitvise SSH Client ofrece terminal y transferencia con enfoque empresarial. Elegir la herramienta adecuada reduce errores de configuración (puerto, protocolo) y acelera el soporte."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparativa de herramientas"}</h3>
      <CompareTable
        headers={["Herramienta", "Plataforma", "Fortalezas", "Limitaciones", "Cuándo elegirla"]}
        rows={[
          [
            "PuTTY",
            "Windows (portable)",
            "Ligero, ampliamente conocido, soporta claves .ppk",
            "Solo terminal; SFTP requiere WinSCP aparte",
            "Acceso SSH puntual en PC Windows sin instalación pesada",
          ],
          [
            "MobaXterm",
            "Windows",
            "SSH + SFTP + pestañas + X11 en una app; perfiles guardados",
            "Versión gratuita limita sesiones; instalador más pesado",
            "Técnico que alterna terminal y transferencia de archivos a diario",
          ],
          [
            "Bitvise SSH Client",
            "Windows",
            "Terminal y SFTP integrados; túneles; perfiles por servidor",
            "Interfaz menos conocida que PuTTY en aulas",
            "Entornos corporativos Windows con política de cliente único",
          ],
          [
            "OpenSSH (terminal)",
            "Linux, macOS, Windows 10+",
            "Estándar, scriptable, sin GUI",
            "Curva en Windows si no está activado",
            "DevOps, CI/CD, servidores Linux nativos",
          ],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo configurar cada cliente"}</h3>
      <StepReveal
        title="PuTTY — sesión SSH básica"
        steps={[
          {
            title: "Session",
            content: "Host Name: IP o hostname. Port: 22 o el puerto indicado (ej. 2222). Connection type: SSH.",
          },
          {
            title: "Saved Sessions",
            content: "Escribe un nombre descriptivo (corp-prod-2222) y Save para reutilizar.",
          },
          {
            title: "Auth (opcional)",
            content: "Connection → SSH → Auth → Credentials: ruta a clave privada .ppk (convertida desde OpenSSH si hace falta).",
          },
          {
            title: "Open",
            content: "Acepta la clave del host la primera vez. Documenta captura del prompt tras login.",
          },
        ]}
      />

      <StepReveal
        title="MobaXterm — SSH con SFTP en panel lateral"
        steps={[
          {
            title: "Session → SSH",
            content: "Remote host, username, port. Specify username at login si hay varios perfiles.",
          },
          {
            title: "Advanced SSH settings",
            content: "Use private key: seleccionar id_ed25519 o .ppk según formato.",
          },
          {
            title: "Start session",
            content: "Terminal a la izquierda; explorador SFTP a la derecha sin segundo cliente.",
          },
          {
            title: "Bookmark",
            content: "Guardar sesión en MobaXterm sessions para acceso rápido en soporte recurrente.",
          },
        ]}
      />

      <StepReveal
        title="Bitvise SSH Client — perfil corporativo"
        steps={[
          {
            title: "Login tab",
            content: "Host, port, username. Initial method: password o publickey según política.",
          },
          {
            title: "Options → Terminal",
            content: "Ajustar codificación UTF-8 si hay caracteres especiales en logs.",
          },
          {
            title: "SFTP tab",
            content: "Transferencia de archivos en la misma ventana tras conectar.",
          },
          {
            title: "Save profile",
            content: "Exportar perfil .bscp cifrado solo si la política de seguridad lo permite.",
          },
        ]}
      />

      <Callout title="Puerto no predeterminado">
        {
          "Si el servidor escucha SSH en un puerto distinto de 22, los tres clientes requieren cambiar el campo Port antes de conectar. Olvidar esto produce «Connection refused» aunque el servicio esté activo en otro puerto."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Un soporte en Bogotá recibe ticket «no puedo entrar al servidor». Revisa la ficha: IP 203.0.113.50, puerto 2222, usuario operador. Prueba con PuTTY (Port 2222) — falla porque tenía 22. Corrige el perfil, conecta y adjunta captura de whoami como evidencia. Documenta en la ficha: «PuTTY 0.78, puerto 2222, verificado 2026-07-06»."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" perfiles nombrados por servidor y puerto; claves en lugar de contraseñas; misma ficha para terminal y GUI."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" reutilizar perfil «servidor» sin puerto; mezclar FTP (21) con SFTP (22) en MobaXterm; guardar contraseñas en texto plano en perfiles compartidos."}
        </li>
      </ul>
    </section>
  );
}
