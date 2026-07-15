import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function RequestHeadersSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Request headers"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Enviados por el cliente con cada petición."}</li>
        <li>{"Indican destino, formato aceptado, credenciales y estado."}</li>
        <li>
          <code>{"Host"}</code>
          {" es obligatorio en HTTP/1.1."}
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — RequestHeaders"
        chart={`mindmap
  root((Request headers))
    Destino
      Host
    Formato aceptado
      Accept
    Credenciales
      Authorization
    Cuerpo
      Content Type
    Contexto del cliente
      Cookie y User Agent`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Headers de petición frecuentes"}
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
                {"Ejemplo"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Host"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Dominio destino (virtual hosting)"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Host: api.github.com"}</code>
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Authorization"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Credenciales"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Bearer eyJhbGci..."}</code>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Accept"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Tipos de media aceptados"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"application/json, text/html"}</code>
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Content-Type"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Tipo del body enviado"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"application/json; charset=utf-8"}</code>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"User-Agent"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Identificador del cliente"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Mozilla/5.0 (Linux)"}</code>
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Cookie"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Estado en cliente"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"sessionId=abc123"}</code>
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"Origin"}</code>
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Origen del navegador (CORS)"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                <code>{"https://app.ejemplo.com"}</code>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeFiddle
        language="http"
        title="Mensaje HTTP completo (request)"
        code={`GET /api/productos/42 HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept-Encoding: gzip, deflate, br
User-Agent: Mozilla/5.0 (Linux)

`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Errores frecuentes en request"}
      </h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Omitir Host"}</strong>
          {
            " en HTTP/1.1 → petición malformada en proxies y servidores virtuales."
          }
        </li>
        <li>
          <strong>{"Omitir Content-Type: application/json"}</strong>
          {" en POST/PUT/PATCH → el servidor no parsea el cuerpo → 400."}
        </li>
        <li>
          <strong>{"Credenciales en query string"}</strong>
          {
            " en lugar de Authorization → URLs se loguean y cachean; exponen tokens."
          }
        </li>
      </ul>
      <Callout title="Origin vs Referer">
        {
          "Origin es solo esquema+host+puerto (https://app.ejemplo.com). Referer es la URL completa de la página anterior. CORS usa Origin; no los confundas."
        }
      </Callout>
      <PracticeExercise
        prompt="En un POST /api/usuarios con body JSON, lista cinco headers que el cliente debería enviar y explica el propósito de cada uno."
        hints={[
          "Host es obligatorio",
          "Content-Type para JSON",
          "Authorization si requiere auth",
        ]}
        expectedKeywords={["Host", "Content-Type", "Authorization", "Accept"]}
        successMessage="Correcto. Mínimo: Host, Content-Type, Accept; más Authorization si la ruta es protegida."
      />
    </section>
  );
}
