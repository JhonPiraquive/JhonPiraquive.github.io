import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PatronesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"API Gateway, BFF, Strangler Fig y CQRS"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"API Gateway"}</h3>
      <p className="my-4">
        {
          "Entrada única: auth, rate limiting, logging, enrutamiento a microservicios."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"BFF (Backend for Frontend)"}</h3>
      <p className="my-4">
        {
          "API adaptada por tipo de cliente (mobile vs web). Evita BFF idénticos sin diferencia real."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Strangler Fig"}</h3>
      <p className="my-4">
        {
          "Migrar monolito gradualmente: proxy enruta tráfico nuevo al microservicio mientras el legacy sigue activo."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart LR
  M[Monolito legacy]
  N[Nuevos endpoints microservicio]
  P[Proxy / Gateway]
  P --> M
  P --> N
  M -.->|migrar gradualmente| N`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"CQRS"}</h3>
      <p className="my-4">
        {
          "Separar lecturas y escrituras. Evitar CQRS prematuro en un CRUD de 5 tablas sin escala de lectura."
        }
      </p>
      <Callout title="Caso real: cuatro flujos OAuth en el móvil">
        {
          "Cada microservicio expone auth distinta; un cambio de JWT rompe solo la app iOS. Decisión: API Gateway centraliza auth y rate limit; BFF Mobile adapta payloads; servicios internos sin HTTP público."
        }
      </Callout>
      <CodeChallenge
        title="Completa las capas REST"
        template={`{{blank1}} recibe HTTP y traduce a llamadas
{{blank2}} contiene la lógica de negocio
{{blank3}} accede a la base de datos`}
        blanks={[
          { id: "blank1", answer: "Controller", placeholder: "capa HTTP" },
          { id: "blank2", answer: "Service", placeholder: "negocio" },
          { id: "blank3", answer: "Repository", placeholder: "persistencia" },
        ]}
      />
    </section>
  );
}
