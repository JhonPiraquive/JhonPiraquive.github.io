import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function ApiKeySesionesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"API Key y sesiones por cookie"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"API Key"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Cadena única que identifica una aplicación (no un usuario)."}</li>
        <li>{"Se envía como header (X-API-Key) — nunca en query string (queda en logs)."}</li>
        <li>{"Prefijos de entorno: sk_live_ producción, sk_test_ desarrollo (como Stripe)."}</li>
        <li>{"Limitaciones: sin expiración nativa, revocación manual si se filtra, no identifica usuario."}</li>
      </ul>
      <CodeFiddle
        language="bash"
        title="API Key en header vs query"
        code={`# Como header (recomendado)
curl -H "X-API-Key: sk_live_abc123XYZ" \\
     https://api.ejemplo.com/datos

# Como query parameter (menos seguro, queda en logs)
curl "https://api.ejemplo.com/datos?api_key=sk_live_abc123XYZ"`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Sesión por cookie"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Servidor crea registro de sesión (stateful), envía session_id en cookie."}</li>
        <li>{"Navegador reenvía la cookie automáticamente en cada request."}</li>
        <li>{"Revocación inmediata al borrar la sesión en el servidor."}</li>
      </ul>
      <CodeFiddle
        language="http"
        title="Sesión por cookie"
        code={`POST /login HTTP/1.1
Content-Type: application/json

{"email": "ana@ejemplo.com", "password": "***"}

HTTP/1.1 200 OK
Set-Cookie: sid=abc123; HttpOnly; Secure; SameSite=Strict

GET /perfil HTTP/1.1
Cookie: sid=abc123`}
      />
      <Callout title="Caso real: API Key filtrada en GitHub">
        {
          "Un desarrollador commitea .env con sk_live_xyz a un repo público. Un bot la detecta en minutos y consume toda la cuota mensual ($12,000 USD). Decisión: secret scanning en CI, rotación inmediata, rate limiting por key, nunca commitear keys."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Completar headers de autenticación"}</h3>
      <CodeChallenge
        title="Completa el mecanismo de envío"
        template={`JWT en SPA → Authorization: {{blank1}} eyJ...
API Key → {{blank2}}: sk_live_abc
Sesión web → header {{blank3}}: sid=abc123`}
        blanks={[
          { id: "blank1", answer: "Bearer", placeholder: "esquema" },
          { id: "blank2", answer: "X-API-Key", placeholder: "header" },
          { id: "blank3", answer: "Cookie", placeholder: "header" },
        ]}
      />
    </section>
  );
}
