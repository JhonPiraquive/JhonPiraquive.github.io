import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SeguridadHeadersSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Headers de seguridad"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Capa de defensa en el navegador del usuario."}</li>
        <li>
          {"Complementan (no reemplazan) sanitización de entrada y HTTPS."}
        </li>
        <li>
          {"HSTS, CSP, X-Frame-Options, nosniff son esenciales en producción."}
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — SeguridadHeaders"
        chart={`mindmap
  root((SeguridadHeaders))
    Capa de defensa en el navegador del usuario
    Complementan no reemplazan sanitización de entrada y HTTPS
    HSTS CSP X-Frame-Options nosniff son esenciales en produc`}
      />

      <CompareTable
        headers={["Header", "Ataque mitigado", "Ejemplo de valor"]}
        rows={[
          [
            "Strict-Transport-Security (HSTS)",
            "Downgrade HTTP / SSL stripping",
            "max-age=31536000; includeSubDomains",
          ],
          [
            "Content-Security-Policy (CSP)",
            "XSS (scripts inyectados)",
            "default-src 'self'; script-src 'self'",
          ],
          [
            "X-Frame-Options",
            "Clickjacking (iframe malicioso)",
            "DENY o SAMEORIGIN",
          ],
          ["X-Content-Type-Options", "MIME sniffing", "nosniff"],
          [
            "Referrer-Policy",
            "Filtración de URL en Referer",
            "strict-origin-when-cross-origin",
          ],
          [
            "Permissions-Policy",
            "APIs del navegador (cámara, geo)",
            "geolocation=()",
          ],
        ]}
      />
      <CodeFiddle
        language="javascript"
        title="Configuración con Helmet (Express)"
        code={`const helmet = require('helmet');
app.use(helmet());
// Configura HSTS, X-Content-Type-Options, X-Frame-Options,
// Content-Security-Policy básico y Referrer-Policy`}
      />
      <Callout title="Caso real: fintech sin CSP">
        {
          "Dashboard sin Content-Security-Policy ni X-Frame-Options. Un atacante embebe la app en iframe (clickjacking) y explota XSS reflejado. Helmet + sanitización de entrada cierran la brecha del lado navegador."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cookies seguras"}</h3>
      <p className="my-4">
        <code>{"Set-Cookie"}</code>
        {
          " debe incluir flags HttpOnly (no accesible desde JS), Secure (solo HTTPS) y SameSite=Strict o Lax según el flujo."
        }
      </p>
    </section>
  );
}
