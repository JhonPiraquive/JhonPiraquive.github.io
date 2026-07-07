import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ProtocolosHttpsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Instalación HTTPS: certbot, redirect y renovación"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "El bloque operativo que transforma un sitio HTTP en HTTPS de producción: obtener certificado, configurar el servidor web, forzar redirect y automatizar renovación."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve / Por qué importa"}</h3>
      <p className="my-4">
        {
          "Un certificado instalado una sola vez sin cron de renovación deja el sitio «No seguro» a los ~90 días (Let's Encrypt). Sin redirect 80→443, usuarios y buscadores siguen entrando por HTTP. Sin cadena completa, algunos clientes (móviles) fallan aunque desktop «funcione»."
        }
      </p>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cómo funciona"}</h3>
      <StepReveal
        title="Certificado Let's Encrypt"
        steps={[
          {
            title: "1. Validación",
            content: "HTTP-01: archivo en /.well-known/acme-challenge/ — o DNS-01: TXT _acme-challenge.dominio",
          },
          {
            title: "2. Emisión e instalación",
            content: "certbot --nginx o panel AutoSSL. Guardar fullchain.pem y privkey.pem.",
          },
          {
            title: "3. Redirect HTTP→HTTPS",
            content: "Regla en Nginx o .htaccess para que todo el tráfico use puerto 443.",
          },
          {
            title: "4. Renovación automática",
            content: "Cron certbot renew; probar con certbot renew --dry-run antes de confiar.",
          },
        ]}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo: Nginx completo SSL + redirect"}</h3>
      <CodeFiddle
        language="nginx"
        title="Nginx SSL + redirect"
        code={`server {
    listen 443 ssl http2;
    server_name tienda.com.co;
    ssl_certificate     /etc/letsencrypt/live/tienda.com.co/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/tienda.com.co/privkey.pem;
    ssl_protocols       TLSv1.2 TLSv1.3;
    root /var/www/tienda.com.co;
}

server {
    listen 80;
    server_name tienda.com.co;
    return 301 https://$host$request_uri;
}`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo: Apache (.htaccess)"}</h3>
      <CodeFiddle
        language="apache"
        title="Redirect HTTPS (.htaccess)"
        code={`RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]`}
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
                {"certbot renew --dry-run tras configurar cron"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Descubrir cron roto el día del vencimiento"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"HTTPS en apex y www"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Cert solo en www, apex sin cubrir"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Actualizar URLs en BD tras migración"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Mixed content por imágenes http:// hardcodeadas"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"HSTS sin probar redirect previo:"}</strong>
          {" HSTS preload activado con cert mal configurado; usuarios atrapados en error irrecuperable sin borrar HSTS. Corrección: validar HTTPS estable antes de max-age largo."}
        </li>
        <li>
          <strong>{"OCSP stapling mal configurado:"}</strong>
          {" Latencia extra en handshake TLS en usuarios de Perú. Corrección: ssl_stapling on con resolver válido en Nginx."}
        </li>
        <li>
          <strong>{"Renovación manual olvidada:"}</strong>
          {" E-commerce en Lima perdió ventas 6 horas por cert vencido en domingo; cron certbot deshabilitado tras update del SO. Corrección: timer systemd + alerta 30 días antes."}
        </li>
      </ul>
    </section>
  );
}
