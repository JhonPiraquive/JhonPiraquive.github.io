import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function CodigosEstadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Códigos de estado HTTP"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Código de 3 dígitos en la línea de estado de la respuesta."}</li>
        <li>{"Primer dígito = familia (1xx–5xx)."}</li>
        <li>{"Debe reflejar el resultado real; no ocultar errores en JSON con 200 OK."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Familias de códigos"}</h3>
      <MermaidDiagram
        chart={`flowchart LR
  R[Respuesta HTTP] --> F1[1xx Info]
  R --> F2[2xx Éxito]
  R --> F3[3xx Redirección]
  R --> F4[4xx Error cliente]
  R --> F5[5xx Error servidor]`}
      />
      <StepReveal
        title="Familias de status codes"
        steps={[
          {
            title: "1xx — Informativos",
            content:
              "100 Continue, 101 Switching Protocols (upgrade WebSocket). Raramente visibles en APIs REST típicas.",
          },
          {
            title: "2xx — Éxito",
            content:
              "200 OK, 201 Created (POST + Location), 204 No Content (DELETE sin cuerpo), 206 Partial Content.",
          },
          {
            title: "3xx — Redirecciones",
            content: "301 Moved Permanently, 302 Found, 304 Not Modified (caché válida con ETag).",
          },
          {
            title: "4xx — Errores del cliente",
            content:
              "400 Bad Request, 401 Unauthorized (falta auth), 403 Forbidden (sin permiso), 404 Not Found, 422 Unprocessable Entity (validación), 429 Too Many Requests.",
          },
          {
            title: "5xx — Errores del servidor",
            content: "500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"401 vs 403"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "401 Unauthorized: no autenticado — falta token o credencial inválida. El cliente debe autenticarse antes de reintentar."
          }
        </li>
        <li>
          {
            "403 Forbidden: autenticado pero sin permiso para ese recurso. Reintentar sin cambiar credenciales no ayuda."
          }
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplos de respuestas"}</h3>
      <CodeFiddle
        language="http"
        title="201 Created (POST exitoso)"
        code={`HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/usuarios/99

{
  "id": 99,
  "nombre": "Carlos López",
  "email": "carlos@ejemplo.com",
  "creado_en": "2025-09-01T10:30:00Z"
}`}
      />
      <CodeFiddle
        language="http"
        title="404 Not Found"
        code={`HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": "NOT_FOUND",
  "mensaje": "El producto con id 999 no existe.",
  "timestamp": "2025-09-01T10:31:00Z"
}`}
      />
      <CodeFiddle
        language="json"
        title="422 Unprocessable Entity (validación)"
        code={`{
  "error": "VALIDATION_ERROR",
  "campos": {
    "email": "El formato del email es inválido.",
    "precio": "El precio debe ser mayor a 0."
  }
}`}
      />
      <Callout title="Caso real: API con siempre 200 OK">
        {
          'Una API devuelve HTTP 200 con { "ok": false, "mensaje": "Producto no encontrado" }. Clientes que solo miran el status muestran stock incorrecto. Decisión: usar 404, 422 y 429 con cuerpo JSON estructurado.'
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores frecuentes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Devolver 404 cuando el recurso existe pero los datos son inválidos → usar 400 o 422."}</li>
        <li>{"Devolver 500 por validación fallida del cliente → reservar 5xx para fallos internos."}</li>
        <li>{"Omitir header Location en 201 Created → el cliente no sabe dónde quedó el recurso nuevo."}</li>
      </ul>
    </section>
  );
}
