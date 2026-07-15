import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ResponseHeadersSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Response headers"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Enviados por el servidor con cada respuesta."}</li>
        <li>{"Describen el cuerpo, caché, cookies y redirecciones."}</li>
        <li>
          {"Relacionados con códigos de estado vistos en la lección anterior."}
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — ResponseHeaders"
        chart={`mindmap
  root((ResponseHeaders))
    Enviados por el servidor con cada respuesta
    Describen el cuerpo caché cookies y redirecciones
    Relacionados con códigos de estado vistos en la lección ante`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Headers de respuesta frecuentes"}
      </h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Header"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Propósito"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Cuándo aparece"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Content-Type"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Tipo del body recibido"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Casi siempre con cuerpo"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Content-Length"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Tamaño en bytes"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Respuestas con body"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"ETag"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Versión del recurso"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Recursos cacheables"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Cache-Control"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Instrucciones de caché"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"max-age=3600, public"}</code>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Location"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"URI del recurso creado o redirect"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"201, 3xx"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Set-Cookie"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Establece cookie en cliente"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Login, sesión"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"WWW-Authenticate"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Esquema auth requerido"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"401"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Retry-After"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Segundos antes de reintentar"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"429, 503"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeFiddle
        language="http"
        title="Respuesta con caché y ETag"
        code={`HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 1842
Cache-Control: max-age=3600, public
ETag: "v3-a3f9b2c1"
Last-Modified: Mon, 06 Jan 2025 10:00:00 GMT

{"id": 42, "nombre": "Laptop Pro 15", "precio": 4500000}`}
      />
      <CodeFiddle
        language="http"
        title="Respuesta 401 con WWW-Authenticate"
        code={`HTTP/1.1 401 Unauthorized
Content-Type: application/json
WWW-Authenticate: Bearer realm="api"

`}
      />
      <CodeFiddle
        language="json"
        title="Cuerpo JSON de error 401"
        code={`{
  "error": "UNAUTHORIZED",
  "mensaje": "Token ausente o expirado"
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"¿Qué header esperar en DELETE y POST?"}
      </h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"DELETE exitoso sin cuerpo:"}</strong>
          {" típicamente 204 No Content (sin Content-Type de JSON)."}
        </li>
        <li>
          <strong>{"POST que crea usuario id 99:"}</strong>
          {" 201 Created + header Location: /api/usuarios/99."}
        </li>
      </ul>
      <CodeChallenge
        title="Headers según operación"
        template={`POST exitoso que crea recurso → código {{blank1}} y header {{blank2}}
DELETE exitoso sin cuerpo → código {{blank3}}`}
        blanks={[
          { id: "blank1", answer: "201", placeholder: "código" },
          { id: "blank2", answer: "Location", placeholder: "header" },
          { id: "blank3", answer: "204", placeholder: "código" },
        ]}
      />
    </section>
  );
}
