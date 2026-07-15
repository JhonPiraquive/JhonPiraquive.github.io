import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function LayeredSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Layered System (sistema en capas)"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "El cliente no sabe si habla con el servidor final o con un intermediario."
          }
        </li>
        <li>{"Solo conoce la capa adyacente."}</li>
        <li>
          {"Capas típicas: CDN → API Gateway → Load Balancer → servidores."}
        </li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Layered"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Layered))
    El cliente no sabe si habla con el servidor final o con un intermediario
    Solo conoce la capa adyacente
    Capas típicas CDN a API Gateway a Load Balancer a servidores`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama de capas"}</h3>
      <MermaidDiagram
        chart={`flowchart TD
  C[Cliente] --> CDN[CDN - caché DDoS]
  CDN --> GW[API Gateway - auth rate limit]
  GW --> LB[Load Balancer]
  LB --> A[Servidor A]
  LB --> B[Servidor B]
  LB --> C2[Servidor C]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué ve el cliente"}</h3>
      <p className="my-4">
        {
          "Solo api.ejemplo.com — no IPs internas de microservicios. Acoplar el cliente a la topología interna viola Layered System."
        }
      </p>
    </section>
  );
}
