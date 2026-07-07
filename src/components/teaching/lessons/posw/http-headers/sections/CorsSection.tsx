import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CorsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"CORS y preflight"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"CORS"}</strong>
          {" = mecanismo del navegador, no de curl ni apps nativas."}
        </li>
        <li>{"Bloquea peticiones entre orígenes distintos salvo permiso explícito del servidor."}</li>
        <li>{"Peticiones complejas (PUT, DELETE, Authorization) disparan preflight OPTIONS."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Petición simple vs compleja"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Simple:"}</strong>
          {
            " GET, HEAD, POST con Content-Type básico (application/x-www-form-urlencoded, multipart/form-data, text/plain) → sin preflight."
          }
        </li>
        <li>
          <strong>{"Compleja:"}</strong>
          {
            " PUT, DELETE, Authorization, headers custom, Content-Type: application/json en algunos casos → preflight OPTIONS."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flujo preflight CORS"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant B as Navegador
  participant S as api.backend.com
  B->>S: OPTIONS /api/datos (Origin, Request-Method: PUT)
  S-->>B: 204 + Access-Control-Allow-Origin
  B->>S: PUT /api/datos + Authorization
  S-->>B: 200 OK + JSON`}
      />
      <CodeFiddle
        language="http"
        title="Ejemplo preflight completo"
        code={`OPTIONS /api/datos HTTP/1.1
Host: api.backend.com
Origin: https://app.frontend.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Authorization, Content-Type

HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://app.frontend.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Max-Age: 86400`}
      />
      <Callout title="Caso real: SPA bloqueada en producción">
        {
          "Frontend en https://app.ejemplo.com, API en https://api.ejemplo.com. Postman funciona; Chrome falla con CORS. El servidor no responde OPTIONS con Access-Control-Allow-*. Solución: manejar OPTIONS y declarar origen, métodos y headers permitidos."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores CORS frecuentes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Access-Control-Allow-Origin: *"}</strong>
          {" con cookies/credenciales → incompatible; usar origen específico + Allow-Credentials: true."}
        </li>
        <li>
          <strong>{"Ignorar preflight"}</strong>
          {" en APIs con PUT/DELETE → curl funciona, el frontend no."}
        </li>
      </ul>
    </section>
  );
}
