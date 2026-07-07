import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { StepReveal } from "@/components/teaching/StepReveal";

const FILEZILLA_QUICK = `# Datos de conexión en FileZilla (FTP plano — solo redes confiables)
# Host:     203.0.113.10  o  localhost si prueba local
# Puerto:   21            (o puerto mapeado, ej. 2121)
# Usuario:  transferencia
# Contraseña: (asignada en el servidor)
# Tipo:     FTP — Transferencia de archivos
# Modo:     Pasivo (recomendado detrás de NAT)`;

export function ClientesFtpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Clientes FTP: conexión y documentación"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Un cliente FTP es la aplicación en el equipo del usuario que inicia la conexión hacia el servidor (puerto 21), autentica con USER/PASS y gestiona la transferencia de archivos con interfaz gráfica o línea de comandos. Los más usados en entornos corporativos y académicos son FileZilla, WinSCP, Cyberduck y el cliente integrado del sistema operativo."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Documentar host, puerto, protocolo, usuario y herramienta permite reproducir la conexión desde otra estación o escalar un incidente a soporte. Una captura del panel remoto con listado de archivos o del log «Conexión establecida» es evidencia verificable de acceso exitoso, igual que whoami en SSH."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Herramientas comparadas"}</h3>
      <CompareTable
        headers={["Cliente", "Plataformas", "Protocolos", "Notas"]}
        rows={[
          ["FileZilla", "Win, macOS, Linux", "FTP, FTPS, SFTP", "Gestor sitio; modo pasivo en Site Manager"],
          ["WinSCP", "Windows", "SFTP, SCP, FTP, FTPS", "Muy usado en empresas Windows + Linux"],
          ["Cyberduck", "Win, macOS", "FTP, SFTP, WebDAV, S3", "Interfaz simple; bookmark de conexiones"],
          ["Cliente SO", "Explorador / ftp CLI", "FTP básico", "ftp(1) en Linux; Explorer en Windows (legado)"],
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo conectar con FileZilla (modo pasivo)"}</h3>
      <StepReveal
        title="Procedimiento FileZilla"
        steps={[
          {
            title: "Abrir Site Manager",
            content: "Archivo → Gestor de sitios → Nuevo sitio. Nombre descriptivo (ej. Servidor transferencia corp).",
          },
          {
            title: "Protocolo y host",
            content: "FTP — Transferencia de archivos; Host = IP o hostname; Puerto = 21 o el mapeado (2121 en host local).",
          },
          {
            title: "Credenciales",
            content: "Tipo de acceso: Normal. Usuario y contraseña del servidor. No guardar en PCs compartidos sin cifrar.",
          },
          {
            title: "Modo de transferencia",
            content: "Transferencia → Modo pasivo. Evita fallos cuando el cliente está detrás de NAT.",
          },
          {
            title: "Conectar y evidenciar",
            content: "Panel derecho muestra archivos remotos. Captura log «Estado: Conectado» y listado del directorio.",
          },
        ]}
      />

      <CodeFiddle language="bash" title="Parámetros de conexión (referencia)" code={FILEZILLA_QUICK} />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Plantilla de documentación de conexión FTP"}</h3>
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
            <td className="border p-2">{"203.0.113.10"}</td>
            <td className="border p-2">{"IP pública o localhost en prueba local"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Puerto FTP"}</td>
            <td className="border p-2">{"21 o 2121"}</td>
            <td className="border p-2">{"Coincidir con mapeo Docker -p si aplica"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Usuario"}</td>
            <td className="border p-2">{"transferencia"}</td>
            <td className="border p-2">{"Cuenta dedicada, no root"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Herramienta"}</td>
            <td className="border p-2">{"FileZilla 3.66"}</td>
            <td className="border p-2">{"Indicar versión y modo pasivo"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Evidencias"}</td>
            <td className="border p-2">{"Captura panel remoto + log conectado"}</td>
            <td className="border p-2">{"Demuestra sesión FTP activa"}</td>
          </tr>
        </tbody>
      </table>

      <Callout title="WinSCP y Cyberduck">
        {
          "WinSCP: sesión nueva → FTP o SFTP según protocolo acordado; guardar sesión con nombre. Cyberduck: Open Connection → FTP; bookmark para reutilizar. En macOS, Cyberduck es alternativa frecuente a FileZilla."
        }
      </Callout>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Desde un PC en Bogotá, el analista abre FileZilla, conecta a 203.0.113.10:21 con usuario transferencia en modo pasivo, y documenta captura del directorio remoto /archivos con tres PDF visibles. Si la conexión falla con «ECONNREFUSED», verifica puerto y que vsftpd esté active antes de reintentar."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" modo pasivo documentado; evidencia de listado remoto; no compartir contraseñas por chat sin cifrar."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" modo activo en red doméstica sin probar pasivo; omitir puerto cuando no es 21; FTP plano en Wi‑Fi pública."}
        </li>
      </ul>
    </section>
  );
}
