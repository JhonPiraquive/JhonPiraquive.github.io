import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function ComparativaTiposSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comparativa y selección"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Panorama de arquitecturas"}</h3>
      <MermaidDiagram
        chart={`flowchart TB
  subgraph public [Cliente público]
    WEB[Web / Mobile]
  end
  subgraph styles [Estilos de servicio]
    REST[REST JSON]
    GQL[GraphQL]
    WS[WebSockets]
  end
  subgraph internal [Backend interno]
    GRPC[gRPC protobuf]
    SOAP[SOAP XML]
  end
  WEB --> REST
  WEB --> GQL
  WEB --> WS
  REST --> GRPC
  SOAP --> GRPC`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tabla comparativa general"}</h3>
      <CompareTable
        headers={["Tecnología", "Tipo", "Formato", "Contrato", "Ideal para"]}
        rows={[
          ["SOAP", "Protocolo", "XML", "WSDL + WS-Security", "Banca, gobierno, legacy SAP/HL7"],
          ["REST", "Estilo arquitectónico", "JSON (típico)", "OpenAPI (opcional)", "APIs públicas web y móvil"],
          ["GraphQL", "Lenguaje de consulta", "JSON", "Schema GraphQL", "BFF, frontends con datos específicos"],
          ["gRPC", "Framework RPC", "Protobuf", ".proto", "Microservicios internos alto rendimiento"],
          ["WebSockets", "Protocolo full-duplex", "JSON/texto", "Mensajes ad-hoc o schema", "Tiempo real, push, chat"],
        ]}
      />
      <StepReveal
        title="¿Qué tecnología elegir?"
        steps={[
          {
            title: "¿API pública web/mobile?",
            content:
              "→ REST + JSON con OpenAPI. Estándar de facto, caché HTTP nativo, curva de aprendizaje baja.",
          },
          {
            title: "¿Frontend necesita formas de datos muy distintas?",
            content:
              "→ GraphQL en BFF. Una query con campos exactos; cuidado con caching y autorización por campo.",
          },
          {
            title: "¿Comunicación interna entre microservicios?",
            content:
              "→ gRPC + protobuf. Eficiencia en LAN/datacenter; no exponer directo al browser.",
          },
          {
            title: "¿Eventos en tiempo real al cliente?",
            content: "→ WebSockets (handshake 101). No uses WebSockets si polling o SSE bastan.",
          },
          {
            title: "¿Partner legacy exige XML y WS-Security?",
            content: "→ SOAP. Mantén el canal legacy; traduce hacia REST/gRPC en gateway interno.",
          },
        ]}
      />
    </section>
  );
}
