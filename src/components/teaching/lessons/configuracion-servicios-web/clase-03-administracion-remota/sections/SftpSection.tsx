import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function SftpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SFTP: transferencia cifrada sobre SSH"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Protocolo para transferir y gestionar archivos sobre un canal cifrado SSH. No confundir con FTPS (FTP + TLS). SFTP es subsistema de SSH en el puerto 22 (por defecto)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Es el método recomendado para subir código, plantillas de .env, backups y assets a un VPS o hosting que expone SSH. Cifra autenticación y contenido de archivos en un solo puerto, simplificando el firewall frente a FTP (21 + rango pasivo)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cliente establece sesión SSH (handshake, intercambio de claves, autenticación)."}</li>
        <li>{"Cliente solicita subsistema sftp."}</li>
        <li>{"Comandos (put, get, ls, chmod) viajan cifrados dentro del túnel SSH."}</li>
        <li>{"Un solo puerto (22) simplifica reglas de firewall."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Capa"}</th>
            <th className="border p-2 text-left">{"Protocolo"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{"Aplicación"}</td>
            <td className="border p-2">{"SFTP (comandos de archivo)"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Seguridad"}</td>
            <td className="border p-2">{"SSH (cifrado simétrico + autenticación)"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Transporte"}</td>
            <td className="border p-2">{"TCP puerto 22"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <p className="my-4">
        <strong>{"Ventajas:"}</strong>
        {
          " cifrado extremo a extremo; misma clave SSH para terminal y archivos; auditoría centralizada en logs de sshd."
        }
      </p>
      <p className="my-4">
        <strong>{"Desventajas:"}</strong>
        {
          " requiere SSH habilitado en servidor; hosting compartido a veces solo ofrece FTP legado; sin resume parcial estándar como algunos clientes FTP avanzados."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "En FileZilla: Protocolo SFTP, host vps.agencia.co, puerto 22, autenticación por archivo de clave (id_ed25519). Subir carpeta dist/ de React a /var/www/html."
        }
      </p>
      <CodeFiddle
        language="text"
        title="FileZilla — Site Manager SFTP"
        code={`Protocolo: SFTP - SSH File Transfer Protocol
Host: vps.miempresa.co
Puerto: 22
Tipo de inicio de sesión: Archivo de clave
Usuario: deploy
Archivo de clave: /home/user/.ssh/id_ed25519`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {
            " claves SSH en lugar de contraseña; permisos chmod 600 en clave privada; verificar que el sitio guardado en FileZilla dice SFTP, no FTP."
          }
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {" elegir «FTP» en FileZilla por inercia; compartir la misma contraseña de cPanel y SFTP."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparativa FTP / SFTP / FTPS"}</h3>
      <CompareTable
        headers={["Criterio", "FTP plano", "SFTP", "FTPS"]}
        rows={[
          ["Puerto típico", "21 (+ datos 20 o altos)", "22", "21 + TLS"],
          ["Cifrado", "No", "Sí (SSH)", "Sí (TLS sobre FTP)"],
          [
            "Autenticación",
            "USER/PASS texto claro",
            "Clave SSH o contraseña cifrada",
            "USER/PASS cifrado",
          ],
          [
            "Uso recomendado",
            "Solo laboratorio",
            "Producción (VPS, cloud)",
            "Legado que exige FTP+TLS",
          ],
        ]}
      />
    </section>
  );
}
