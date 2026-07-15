import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function TiposApiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tipos de API"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Clasificación por accesibilidad: pública, privada, partner."}</li>
        <li>
          {
            "Clasificación por arquitectura: REST, SOAP, GraphQL, gRPC (ver lección tipos-servicios-web)."
          }
        </li>
        <li>
          {
            "Cada tipo implica distintos riesgos de exposición y modelos de consumo."
          }
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Tipos Api"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Tipos Api))
    Clasificación por accesibilidad pública privada partner
    Clasificación por arquitectura REST SOAP GraphQL gRPC ver lección tipos serv
    Cada tipo implica distintos riesgos de exposición y modelos de consumo`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Clasificación visual"}
      </h3>
      <MermaidDiagram
        chart={`flowchart TD
  API[API] --> ACC[Por accesibilidad]
  API --> ARQ[Por arquitectura]
  ACC --> PUB[Pública + API Key]
  ACC --> PRI[Privada interna]
  ACC --> PAR[Partner acordado]
  ARQ --> REST[REST HTTP+JSON]
  ARQ --> SOAP[SOAP XML]
  ARQ --> GQL[GraphQL]
  ARQ --> GRPC[gRPC protobuf]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Por accesibilidad"}</h3>
      <CompareTable
        headers={["Tipo", "Quién accede", "Ejemplos", "Riesgo principal"]}
        rows={[
          [
            "Pública (Open API)",
            "Cualquier desarrollador con registro/API key",
            "OpenWeatherMap, Google Maps, Stripe",
            "Abuso sin rate limiting; keys filtradas",
          ],
          [
            "Privada (interna)",
            "Solo dentro de la organización",
            "Microservicios de inventario, payroll interno",
            "Exposición accidental al internet público",
          ],
          [
            "Partner",
            "Socios comerciales con acuerdo",
            "APIs de pago entre plataformas B2B",
            "Contratos rotos por cambios sin versionar",
          ],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Por arquitectura"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"REST: HTTP + JSON; la más común en APIs web modernas."}</li>
        <li>{"SOAP: XML estricto; sectores financieros y legacy."}</li>
        <li>
          {
            "GraphQL: el cliente define la forma de la respuesta en una sola consulta."
          }
        </li>
        <li>
          {
            "gRPC: alto rendimiento con Protocol Buffers; común en microservicios internos."
          }
        </li>
      </ul>
      <Callout title="Caso real: API interna expuesta por error">
        {
          "Un API Gateway de inventario queda accesible desde internet sin auth. Un scraper descubre GET /internal/stock y extrae precios mayoristas. Decisión: clasificar APIs (pública/partner/privada); internas solo en red privada o con mTLS; nunca exponer /internal/ sin autenticación."
        }
      </Callout>
    </section>
  );
}
