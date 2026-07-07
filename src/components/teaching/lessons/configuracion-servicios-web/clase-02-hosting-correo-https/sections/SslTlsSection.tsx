import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SslTlsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"SSL vs TLS: certificados y versiones"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "SSL (Secure Sockets Layer): protocolo de cifrado histórico (Netscape, SSL 2.0/3.0). Obsoleto por vulnerabilidades (POODLE, etc.)."
          }
        </li>
        <li>
          {
            "TLS (Transport Layer Security): sucesor estandarizado por IETF (TLS 1.0 → 1.3). Es lo que realmente usa HTTPS hoy."
          }
        </li>
      </ul>
      <p className="my-4">
        {
          "En la industria se dice coloquialmente «certificado SSL», pero técnicamente se instala TLS 1.2 o 1.3."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "TLS cifra el canal entre cliente y servidor. Sin TLS válido, hosting y correo (SMTP/IMAP con SSL) quedan expuestos. Proveedores y estándares (PCI-DSS, OWASP) exigen TLS moderno; SSL 3.0 y TLS 1.0/1.1 están deprecados desde 2020."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona (handshake TLS 1.3 simplificado)"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant B as Navegador
  participant S as Servidor hosting
  B->>S: ClientHello TLS 1.3
  S->>B: ServerHello + Certificate
  B->>B: Valida CA Let's Encrypt
  B->>S: Finished
  Note over B,S: Canal cifrado
  B->>S: GET / (HTTP cifrado)
  S->>B: 200 OK (cifrado)`}
      />
      <ol className="my-4 list-decimal pl-6">
        <li>{"ClientHello — versiones y cipher suites soportadas."}</li>
        <li>{"ServerHello + Certificate — elige parámetros y envía certificado."}</li>
        <li>{"Finished — ambas partes confirman; canal simétrico activo."}</li>
        <li>{"Tráfico HTTP cifrado sobre ese canal."}</li>
      </ol>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diferencias SSL vs TLS"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Criterio"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"SSL (2.0/3.0)"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"TLS (1.2/1.3)"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Estado 2025"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Prohibido"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Aceptable (1.2/1.3)"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Handshake"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Más lento, cifrados débiles"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"1.3: 1-RTT, PFS obligatorio"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Estándar"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Propietario / obsoleto"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"IETF RFC 8446 (1.3)"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"En paneles hosting"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Opción «SSL» suele mean TLS"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Configurar mínimo TLS 1.2"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Estructura / Composición del certificado"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Sujeto (CN/SAN): dominios cubiertos (ejemplo.com, www.ejemplo.com)"}</li>
        <li>{"Emisor: CA (Let's Encrypt, DigiCert, etc.)"}</li>
        <li>{"Validez: fechas notBefore / notAfter"}</li>
        <li>{"Clave pública del servidor + firma de la CA"}</li>
        <li>{"Clave privada guardada solo en el servidor"}</li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Validación al emitir (Let's Encrypt)"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Método"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Cómo funciona"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"HTTP-01"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Archivo en /.well-known/acme-challenge/"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"DNS-01"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Registro TXT _acme-challenge.dominio"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Email"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Menos común en automatización"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ventajas y desventajas"}</h3>
      <p className="my-4">
        {
          "TLS 1.2/1.3 con Let's Encrypt es gratis, con renovación automatizable y confianza del navegador. SSL obsoleto tiene vulnerabilidades conocidas; certificado autofirmado en producción muestra advertencia roja al usuario."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo concreto"}</h3>
      <CodeFiddle
        language="bash"
        title="certbot en VPS con Nginx"
        code={`# Instalar y obtener certificado (VPS con Nginx, Ubuntu)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d ong.org.co -d www.ong.org.co

# Verificar renovación automática
sudo certbot renew --dry-run

# Comprobar versión TLS negociada
openssl s_client -connect ong.org.co:443 -tls1_2 </dev/null 2>/dev/null | grep Protocol`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Buen uso"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Mal uso"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"TLS 1.2+ únicamente; deshabilitar SSLv3"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Panel con «SSL 3.0» habilitado «por compatibilidad»"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Cron semanal certbot renew"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Cert vencido en Black Friday sin monitor"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Cadena completa (fullchain.pem)"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Instalar solo .crt sin intermediarios → error en móviles"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}
