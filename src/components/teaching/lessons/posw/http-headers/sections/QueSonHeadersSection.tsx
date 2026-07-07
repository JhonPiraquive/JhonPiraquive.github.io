import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function QueSonHeadersSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Qué son los HTTP headers?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Pares clave-valor en cada mensaje HTTP."}</li>
        <li>{"Línea de inicio → headers → línea en blanco → body opcional."}</li>
        <li>{"Categorías: Request, Response, General, Entity."}</li>
        <li>{"Transportan metadatos; el body transporta el payload."}</li>
      </ul>
      <StepReveal
        title="Anatomía del mensaje HTTP"
        steps={[
          {
            title: "1. Línea de inicio",
            content: "Request: GET /api/productos/42 HTTP/1.1 — Response: HTTP/1.1 200 OK",
          },
          {
            title: "2. Headers",
            content: "Pares Clave: Valor, uno por línea. Ej.: Host, Content-Type, Authorization.",
          },
          {
            title: "3. Línea en blanco",
            content: "Separa headers del cuerpo. Sin ella el parser no sabe dónde termina el header block.",
          },
          {
            title: "4. Body (opcional)",
            content: "JSON, XML, HTML, binario. Puede estar vacío (GET, DELETE 204).",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Categorías de headers"}</h3>
      <CompareTable
        headers={["Categoría", "Quién los envía", "Ejemplos"]}
        rows={[
          ["Request", "Cliente", "Host, Authorization, Accept, User-Agent, Cookie, Origin"],
          ["Response", "Servidor", "Content-Type, ETag, Set-Cookie, Location, Access-Control-Allow-Origin"],
          ["General", "Ambos", "Cache-Control, Connection, Date"],
          ["Entity", "Ambos (describen el body)", "Content-Type, Content-Length, Content-Encoding"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TB
  MSG[Mensaje HTTP]
  MSG --> REQ[Request headers<br/>Host, Accept, Authorization]
  MSG --> RES[Response headers<br/>Content-Type, ETag, Set-Cookie]
  MSG --> GEN[General / Entity<br/>Cache-Control, Content-Length]`}
      />
    </section>
  );
}
