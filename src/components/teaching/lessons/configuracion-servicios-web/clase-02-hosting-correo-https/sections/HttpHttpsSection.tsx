import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HttpHttpsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"HTTP y HTTPS en el despliegue web"}
      </h2>

      <h3 className="mt-6 mb-2 text-xl font-semibold">{"HTTP: protocolo de aplicación"}</h3>

      <h4 className="mt-4 mb-2 font-semibold">{"Qué es"}</h4>
      <p className="my-4">
        {
          "HTTP (HyperText Transfer Protocol) es el protocolo de capa de aplicación que define el formato de mensajes entre cliente (navegador, curl) y servidor web. Es stateless: cada petición es independiente. Puerto por defecto: 80. Los mensajes viajan en texto plano (sin cifrado TLS)."
        }
      </p>

      <h4 className="mt-4 mb-2 font-semibold">{"Para qué sirve / Por qué importa"}</h4>
      <p className="my-4">
        {
          "HTTP es el lenguaje con el que el navegador pide index.html, APIs JSON, imágenes y CSS. Al desplegar en hosting, el servidor debe responder correctamente en el puerto 80 (o redirigir a 443). Entender HTTP ayuda a diagnosticar errores 404, 500 y cabeceras de caché."
        }
      </p>

      <h4 className="mt-4 mb-2 font-semibold">{"Cómo funciona"}</h4>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cliente abre conexión TCP al puerto 80 del servidor."}</li>
        <li>{"Envía una request (método, ruta, cabeceras, cuerpo opcional)."}</li>
        <li>{"Servidor procesa y devuelve response (código de estado, cabeceras, cuerpo)."}</li>
        <li>{"Conexión puede cerrarse o reutilizarse (HTTP/1.1 keep-alive, HTTP/2 multiplexado)."}</li>
      </ol>

      <h4 className="mt-4 mb-2 font-semibold">{"Estructura / Composición"}</h4>
      <p className="my-4 font-medium">{"Request:"}</p>
      <CodeFiddle
        language="http"
        title="Request HTTP"
        code={`GET /index.html HTTP/1.1
Host: tienda.com.co
User-Agent: curl/8.5.0
Accept: text/html
Connection: close`}
      />
      <p className="my-4 font-medium">{"Response:"}</p>
      <CodeFiddle
        language="http"
        title="Response HTTP"
        code={`HTTP/1.1 200 OK
Content-Type: text/html; charset=UTF-8
Content-Length: 1234

<!DOCTYPE html>...`}
      />
      <p className="my-4">
        {
          "Versiones comunes: HTTP/1.1, HTTP/2 (multiplexación), HTTP/3 (sobre QUIC). En esta lección el foco es HTTP como transporte de la aplicación web en hosting; métodos detallados (GET, POST, PUT…) se profundizan en la lección http-metodos-status del track Programación Orientada a Sitios Web (POSW)."
        }
      </p>

      <h4 className="mt-4 mb-2 font-semibold">{"Ventajas y desventajas"}</h4>
      <p className="my-4">
        {
          "HTTP es simple de depurar (mensajes legibles) y universal: todo hosting lo soporta. Sin cifrado, credenciales y cookies son visibles en la red; es vulnerable a interceptación en Wi-Fi pública. Aceptable en localhost para desarrollo; no aceptable en producción para datos sensibles."
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
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Simple de depurar (mensajes legibles)"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Sin cifrado: credenciales visibles en red"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Universal; todo hosting lo soporta"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Vulnerable a interceptación en Wi-Fi pública"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Aceptable en localhost para desarrollo"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"No aceptable en producción para datos sensibles"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h4 className="mt-4 mb-2 font-semibold">{"Ejemplo concreto"}</h4>
      <p className="my-4">{"Tras subir archivos al hosting, el estudiante prueba la respuesta del servidor:"}</p>
      <CodeFiddle
        language="bash"
        title="Probar HTTP con curl"
        code={`curl -v http://miempresa.com.co/
# Debe devolver HTTP/1.1 200 OK (o 301 si redirige a HTTPS)`}
      />

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
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"HTTP solo en desarrollo local"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Login o pagos por HTTP en producción"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Redirigir todo HTTP→HTTPS en hosting real"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Servir sitio mixto: página HTTPS con API HTTP"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Revisar códigos de estado al desplegar"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Asumir que «carga en el navegador» = configuración correcta"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mt-10 mb-2 text-xl font-semibold">{"HTTPS: HTTP sobre TLS"}</h3>

      <h4 className="mt-4 mb-2 font-semibold">{"Qué es"}</h4>
      <p className="my-4">
        {
          "HTTPS es HTTP ejecutándose sobre una capa de cifrado TLS. Puerto por defecto: 443. La URL usa el esquema https://. El navegador muestra candado cuando el certificado es válido y confiable."
        }
      </p>

      <h4 className="mt-4 mb-2 font-semibold">{"Para qué sirve / Por qué importa"}</h4>
      <p className="my-4">
        {
          "Protege confidencialidad (nadie lee el tráfico en tránsito), integridad (detecta alteraciones) y autenticación del servidor (el sitio es quien dice ser, no un impostor). Google penaliza sitios sin HTTPS en SEO; navegadores marcan HTTP como «No seguro». En LATAM, pasarelas de pago y bancos exigen HTTPS para integraciones."
        }
      </p>

      <h4 className="mt-4 mb-2 font-semibold">{"Cómo funciona"}</h4>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cliente conecta por TCP al puerto 443."}</li>
        <li>{"Handshake TLS negocia versión, cifrados y claves; servidor presenta certificado."}</li>
        <li>{"Navegador valida certificado contra CAs de confianza."}</li>
        <li>{"Canal cifrado establecido → mensajes HTTP idénticos en semántica pero cifrados en la red."}</li>
        <li>{"Servidor web (Nginx/Apache) termina TLS y pasa la request HTTP al backend."}</li>
      </ol>

      <h4 className="mt-4 mb-2 font-semibold">{"Relación con HTTP"}</h4>
      <p className="my-4">
        {
          "HTTPS no reemplaza HTTP como protocolo de aplicación; lo envuelve con TLS. Una vez establecido el túnel, el servidor sigue hablando HTTP internamente."
        }
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Aspecto"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"HTTP"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"HTTPS"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Semántica"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"GET, POST, headers, códigos"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"La misma"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Puerto"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"80"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"443"}</td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Cifrado"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"No"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Sí (TLS debajo)"}</td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"Certificado"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"No requerido"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Requerido (CA o Let's Encrypt)"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"URL"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"http://"}</td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">{"https://"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <MermaidDiagram
        chart={`flowchart TB
  subgraph HTTP_only [Sitio solo HTTP — puerto 80]
    H1[Mensajes HTTP texto plano]
    T1[TCP]
    H1 --> T1
  end
  subgraph HTTPS_site [Sitio HTTPS — puerto 443]
    H2[Mensajes HTTP misma semántica]
    TLS[TLS 1.2/1.3 cifrado]
    T2[TCP]
    H2 --> TLS --> T2
  end`}
      />

      <h4 className="mt-4 mb-2 font-semibold">{"Estructura / Composición en el hosting"}</h4>
      <ul className="my-4 list-disc pl-6">
        <li>{"Certificado (.crt / fullchain)"}</li>
        <li>{"Clave privada (.key, nunca pública)"}</li>
        <li>{"Cadena intermedia (CA bundle)"}</li>
        <li>{"Configuración virtual host (Nginx listen 443 ssl)"}</li>
        <li>{"Regla redirect 80→443"}</li>
      </ul>

      <h4 className="mt-4 mb-2 font-semibold">{"Ventajas y desventajas"}</h4>
      <p className="my-4">
        {
          "HTTPS protege en tránsito y genera confianza del usuario; Let's Encrypt es gratuito. Los certificados deben renovarse (~90 días con LE); configuración incorrecta produce errores de cadena; hay overhead mínimo de handshake (mitigado con TLS 1.3)."
        }
      </p>

      <h4 className="mt-4 mb-2 font-semibold">{"Ejemplo concreto"}</h4>
      <p className="my-4">
        {
          "Migración de hosting: tras copiar archivos, el sitio carga por HTTP pero no HTTPS. En cPanel → SSL/TLS → AutoSSL, o con certbot en VPS. Luego regla Nginx:"
        }
      </p>
      <CodeFiddle
        language="nginx"
        title="Redirect HTTP→HTTPS (Nginx)"
        code={`server {
    listen 80;
    server_name tienda.com.co www.tienda.com.co;
    return 301 https://$host$request_uri;
}`}
      />
      <p className="my-4">{"Misma semántica HTTP, cifrada en red:"}</p>
      <CodeFiddle
        language="http"
        title="GET cifrado tras handshake TLS"
        code={`GET /api/productos HTTP/1.1
Host: tienda.com.co
Accept: application/json
# Viaja cifrado por TLS 1.3 tras el handshake`}
      />

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
                {"HTTPS en todo el sitio; HSTS en prod madura"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Certificado vencido sin cron certbot renew"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Renovar antes de 30 días al vencimiento"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Mixed content: imágenes http:// en página HTTPS"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Probar con SSL Labs o curl -vI https://..."}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Instalar cert solo en www y olvidar apex"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Buen uso: HTTPS en todo el sitio; redirect 301 HTTP→HTTPS; probar con curl -vI."}</li>
        <li>{"Mal uso: login o pagos por HTTP; mixed content; certificado vencido sin monitoreo."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malas prácticas en el mundo real"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Login por HTTP en Wi-Fi de aeropuerto:"}</strong>
          {" Contador en CDMX accedió al panel admin por http://; credenciales capturadas en red pública. Corrección: forzar HTTPS, HSTS y cookies Secure."}
        </li>
        <li>
          <strong>{"Mixed content tras migración TLS:"}</strong>
          {" Tienda en Bogotá activó HTTPS pero imágenes seguían en http://; navegador bloqueó contenido y checkout falló silenciosamente. Corrección: URLs relativas o Content-Security-Policy upgrade-insecure-requests."}
        </li>
        <li>
          <strong>{"Certificado solo en www:"}</strong>
          {" Clientes que escribían dominio.com.co sin www veían «No seguro». Corrección: cert multi-SAN apex+www y redirect 301 desde ambos."}
        </li>
        <li>
          <strong>{"Redirect 302 temporal permanente:"}</strong>
          {" SEO de restaurante en Lima cayó: 302 en lugar de 301 de HTTP a HTTPS durante 6 meses. Corrección: 301 permanente y verificar con curl -I."}
        </li>
      </ul>
      <Callout title="Caso real: migración Lima — «No seguro»">
        {
          "Consultora migra WordPress a nuevo VPS. Sitio carga por HTTP; clientes reportan «No seguro» y formulario no envía (mixed content + cert autofirmado). Resolución: certbot --nginx, URLs en BD a HTTPS, redirect 80→443."
        }
      </Callout>
    </section>
  );
}
