import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { StepReveal } from "@/components/teaching/StepReveal";

export function DocumentacionConexionSshSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Documentar una conexión SSH remota"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Documentar una conexión SSH es registrar de forma clara y reproducible los datos necesarios para acceder a un servidor remoto: dirección IP o hostname, puerto, usuario, herramienta cliente y evidencias de que el acceso funcionó. Es una práctica profesional que permite a otro técnico retomar el trabajo sin adivinar parámetros."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "En soporte corporativo, auditorías y equipos rotativos, la documentación evita perder tiempo reconfigurando clientes SSH. Un registro incompleto («conectarse al servidor de la empresa») no indica si el puerto es 22 o uno alternativo, ni qué usuario tiene permisos limitados. Documentar bien acelera la resolución de incidentes y demuestra competencia técnica."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona — conexión por terminal"}</h3>
      <p className="my-4">
        {
          "OpenSSH en Linux, macOS y Windows 10+ usa la sintaxis `ssh -p PUERTO usuario@host`. El flag `-p` indica el puerto cuando no es el predeterminado (22). La primera conexión muestra la huella del servidor; al aceptarla, queda guardada en `~/.ssh/known_hosts`."
        }
      </p>
      <CodeFiddle
        language="bash"
        title="Conexión SSH con puerto personalizado"
        code={`# Sintaxis general
ssh -p PUERTO usuario@IP_o_hostname

# Ejemplo: servidor corporativo en puerto 2222
ssh -p 2222 operador@203.0.113.50

# Primera conexión: aceptar huella del host (yes)
# Evidencia: captura del prompt tras login exitoso
# operador@servidor-corp:~$`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Plantilla de documentación de conexión"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Campo"}</th>
            <th className="border p-2 text-left">{"Ejemplo"}</th>
            <th className="border p-2 text-left">{"Notas"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{"Host / IP"}</td>
            <td className="border p-2">{"203.0.113.50 o srv.intranet.empresa.co"}</td>
            <td className="border p-2">{"IP pública o nombre resoluble en la red"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Puerto SSH"}</td>
            <td className="border p-2">{"22 (default) o 2222"}</td>
            <td className="border p-2">{"Verificar con el administrador si no es 22"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Usuario"}</td>
            <td className="border p-2">{"operador"}</td>
            <td className="border p-2">{"Cuenta con permisos mínimos necesarios"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Herramienta"}</td>
            <td className="border p-2">{"OpenSSH, PuTTY, MobaXterm, Bitvise"}</td>
            <td className="border p-2">{"Indicar versión si aplica (ej. PuTTY 0.78)"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Autenticación"}</td>
            <td className="border p-2">{"Clave Ed25519 o contraseña"}</td>
            <td className="border p-2">{"No documentar contraseñas en texto plano compartido"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Evidencias"}</td>
            <td className="border p-2">{"Captura del prompt, salida de whoami"}</td>
            <td className="border p-2">{"Demuestra acceso exitoso y usuario activo"}</td>
          </tr>
        </tbody>
      </table>

      <StepReveal
        title="Procedimiento de conexión documentado"
        steps={[
          {
            title: "Recopilar datos del administrador",
            content:
              "IP o hostname, puerto SSH, usuario asignado y tipo de autenticación (clave o contraseña temporal).",
          },
          {
            title: "Probar conexión desde terminal",
            content:
              "Ejecutar ssh -p PUERTO usuario@host. Anotar mensaje de error si falla (refused, timeout, permission denied).",
          },
          {
            title: "Registrar herramienta y parámetros",
            content:
              "Si usas cliente gráfico, documentar host, puerto y perfil guardado con el mismo rigor que la terminal.",
          },
          {
            title: "Capturar evidencias",
            content:
              "Salida de whoami, hostname -I y fecha/hora de la sesión. Ocultar datos sensibles en capturas compartidas.",
          },
        ]}
      />

      <CodeFiddle
        language="bash"
        title="Comandos para evidencia de acceso"
        code={`# Tras conectar por SSH, verificar identidad y servidor
whoami
hostname
hostname -I
date

# Salida esperada (ejemplo):
# operador
# servidor-corp
# 192.168.10.5
# Mon Jul  6 14:30:00 -05 2026`}
      />

      <Callout title="Buenas prácticas de documentación">
        {
          "Usa tablas o fichas técnicas con fecha de verificación. Si cambia el puerto o el usuario, actualiza el registro el mismo día. Las contraseñas van en gestores seguros, no en documentos compartidos por correo."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {
            " ficha con IP, puerto, usuario, herramienta, comando exacto y captura de prompt; fecha de última verificación."
          }
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " «SSH al servidor» sin puerto; compartir contraseñas por WhatsApp; no registrar qué herramienta usó quien configuró el acceso."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Runbook con IP vieja post-migración:"}</strong>
          {" Nuevo técnico bloqueado 2 h en incidente P1. Corrección: runbook versionado y revisión post-cambio DNS/IP."}
        </li>
        <li>
          <strong>{"Hostname vs IP sin alias:"}</strong>
          {" Cambio de IP rompió 15 scripts con IP hardcodeada. Corrección: DNS interno deploy.empresa.local y ~/.ssh/config Host aliases."}
        </li>
      </ul>

    </section>
  );
}
