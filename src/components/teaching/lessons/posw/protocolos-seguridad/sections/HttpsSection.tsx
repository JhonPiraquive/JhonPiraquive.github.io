import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HttpsSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"HTTPS: HTTP Secure"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"HTTP + capa de cifrado "}
          <strong>{"TLS"}</strong>
          {" debajo."}
        </li>
        <li>
          {"Puerto "}
          <strong>{"443"}</strong>
          {"."}
        </li>
        <li>
          {"Certificado digital de una "}
          <strong>{"CA"}</strong>
          {" de confianza."}
        </li>
        <li>{"Tres pilares: confidencialidad, integridad, autenticación."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Https"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Https))
    HTTP capa de cifrado TLS debajo
    Puerto 443
    Certificado digital de una CA de confianza
    Tres pilares confidencialidad integridad autenticación`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        <strong>{"HTTPS"}</strong>
        {
          " es HTTP sobre TLS. El servidor presenta un certificado; el navegador valida con la CA; se negocia una clave de sesión simétrica; el tráfico posterior viaja cifrado."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Los tres pilares"}</h3>
      <div className="my-4 overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Pilar"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Qué garantiza"}
              </th>
              <th className="border-b-2 border-[var(--color-secondary)] bg-[var(--color-neutral-light)] px-4 py-3 text-left font-semibold">
                {"Ataque que mitiga"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Confidencialidad"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Terceros no leen el contenido"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Sniffing en Wi-Fi pública"}
              </td>
            </tr>
            <tr className="bg-[var(--color-neutral-light)]/50">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Integridad"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Detección de alteración en tránsito"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Man-in-the-middle que modifica respuestas"}
              </td>
            </tr>
            <tr className="bg-white">
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Autenticación"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"El servidor es quien dice ser"}
              </td>
              <td className="border-b border-[var(--color-neutral-mid)]/20 px-4 py-3">
                {"Impostor con certificado inválido"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"URL: esquema define seguridad del transporte"}
      </h3>
      <CodeFiddle
        language="text"
        title="URL: esquema define seguridad"
        code={`http://api.ejemplo.com/recursos   → puerto 80, sin cifrado TLS
https://api.ejemplo.com/recursos  → puerto 443, con TLS`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Misma petición tras HTTPS (conceptual)"}
      </h3>
      <CodeFiddle
        language="http"
        title="Petición dentro del túnel TLS"
        code={`# Lo que viaja dentro del túnel TLS (misma línea HTTP, cifrada en red):
GET /api/datos HTTP/1.1
Host: api.ejemplo.com
Accept: application/json`}
      />
      <CodeFiddle
        language="http"
        title="Respuesta HTTP/JSON (cifrada en red)"
        code={`HTTP/1.1 200 OK
Content-Type: application/json

{"id":42,"nombre":"Ana García"}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Pila HTTP vs HTTPS"}
      </h3>
      <MermaidDiagram
        chart={`flowchart TB
  subgraph HTTP_stack [HTTP]
    APP1[HTTP mensajes texto plano]
    TCP1[TCP puerto 80]
  end
  subgraph HTTPS_stack [HTTPS]
    APP2[HTTP mensajes]
    TLS[TLS cifrado]
    TCP2[TCP puerto 443]
  end
  APP1 --> TCP1
  APP2 --> TLS --> TCP2`}
      />
      <Callout title="HTTPS no reemplaza login">
        {
          "TLS protege el transporte. Aún necesitas tokens, sesiones o API keys en la capa HTTP para autenticar usuarios. Un candado en el navegador no significa que la API esté autorizada para todos."
        }
      </Callout>
    </section>
  );
}
