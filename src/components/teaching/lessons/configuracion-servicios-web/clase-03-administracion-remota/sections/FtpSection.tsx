import { ClayCard } from "@/components/clay/ClayCard";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function FtpSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"FTP: modo activo y pasivo"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "Protocolo de aplicación (capa 7) para transferir archivos entre hosts, definido originalmente en los años 70. Usa puerto 21 para control (comandos) y puerto 20 (modo activo) o puertos dinámicos altos (modo pasivo) para datos."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Históricamente fue el estándar para subir sitios a hosting compartido. Hoy se encuentra en legado y paneles antiguos, pero no debe usarse en producción sin cifrado: usuario y contraseña viajan en texto plano, interceptables en redes no confiables."
        }
      </p>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"FTP plano: no en producción"}</strong>
        <p>
          {
            "FTP sin TLS envía credenciales y contenido sin cifrar. En Wi‑Fi público, cyber o ISP compartido un atacante puede capturar usuario y contraseña. Usa SFTP (puerto 22) o FTPS en cualquier entorno real."
          }
        </p>
      </ClayCard>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Modo activo"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cliente conecta al puerto 21 del servidor (canal de control)."}</li>
        <li>
          {"Cliente informa su IP y un puerto local alto (ej. 50001) con comando PORT."}
        </li>
        <li>
          {"El servidor inicia conexión de datos desde puerto 20 hacia el puerto del cliente."}
        </li>
        <li>
          {
            "Problema: firewalls y NAT del cliente bloquean la conexión entrante del servidor → fallos frecuentes en redes domésticas LATAM."
          }
        </li>
      </ol>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente (FileZilla)
  participant S as Servidor FTP
  Note over C,S: MODO ACTIVO — canal CONTROL puerto 21
  C->>S: Conexión TCP puerto 21
  C->>S: USER / PASS
  C->>S: PORT (IP cliente + puerto alto)
  Note over C,S: Canal DATOS — servidor inicia desde puerto 20
  S->>C: Conexión puerto 20 → puerto cliente
  C-->>S: LIST / RETR`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Modo pasivo"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cliente conecta al puerto 21 (control)."}</li>
        <li>
          {"Servidor responde con PASV e indica IP + puerto alto propio (ej. 50000–51000)."}
        </li>
        <li>{"El cliente inicia la segunda conexión hacia ese puerto del servidor."}</li>
        <li>
          {"Funciona mejor detrás de NAT porque ambas conexiones las inicia el cliente."}
        </li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición"}</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[var(--color-neutral-light)]">
            <th className="border p-2 text-left">{"Canal"}</th>
            <th className="border p-2 text-left">{"Puerto típico"}</th>
            <th className="border p-2 text-left">{"Contenido"}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">{"Control"}</td>
            <td className="border p-2">{"21"}</td>
            <td className="border p-2">{"USER, PASS, LIST, RETR, STOR"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Datos (activo)"}</td>
            <td className="border p-2">{"20 → puerto cliente"}</td>
            <td className="border p-2">{"Archivo o listado"}</td>
          </tr>
          <tr>
            <td className="border p-2">{"Datos (pasivo)"}</td>
            <td className="border p-2">{"50000+ en servidor"}</td>
            <td className="border p-2">{"Archivo o listado"}</td>
          </tr>
        </tbody>
      </table>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <p className="my-4">
        <strong>{"Ventajas:"}</strong>
        {
          " ampliamente soportado en hosting antiguo; clientes gráficos maduros (FileZilla); modo pasivo atraviesa NAT del cliente."
        }
      </p>
      <p className="my-4">
        <strong>{"Desventajas:"}</strong>
        {
          " sin cifrado en FTP plano; credenciales interceptables (sniffing en Wi‑Fi público); modo activo falla con firewalls estrictos; requiere abrir rango de puertos pasivos en el servidor."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <p className="my-4">
        {
          "Técnico en una cyber de Barranquilla usa FileZilla en modo pasivo contra ftp.empresa.com.co:21. Aunque la transferencia funcione, un atacante en la misma red podría capturar la contraseña. La decisión correcta es migrar a SFTP puerto 22."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Buen uso:"}</strong>
          {" solo en laboratorio o red aislada; preferir SFTP/FTPS en cualquier entorno real."}
        </li>
        <li>
          <strong>{"Mal uso:"}</strong>
          {
            " FTP plano sobre Internet para desplegar producción; dejar puerto 21 abierto a todo el mundo sin necesidad."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"FTP activo detrás de NAT:"}</strong>
          {" Transferencias fallaban aleatoriamente desde oficina Medellín. Corrección: SFTP o FTP pasivo con rango de puertos en firewall."}
        </li>
        <li>
          <strong>{"Usuario ftp con shell /bin/bash:"}</strong>
          {" Cuenta ftp comprometida → shell interactivo. Corrección: nologin shell y chroot para cuentas solo transferencia."}
        </li>
      </ul>

      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente (FileZilla)
  participant S as Servidor FTP
  Note over C,S: MODO PASIVO — canal CONTROL puerto 21
  C->>S: Conexión TCP puerto 21
  C->>S: USER / PASS
  C->>S: PASV
  S-->>C: IP servidor + puerto alto (ej. 50023)
  Note over C,S: Canal DATOS — cliente inicia
  C->>S: Conexión TCP a puerto 50023
  C-->>S: STOR / RETR`}
      />
    </section>
  );
}
