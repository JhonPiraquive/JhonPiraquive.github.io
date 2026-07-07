import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Arquitectura de API describe cómo se organizan los componentes internos (routing, negocio, datos), no solo la URL expuesta. REST, GraphQL y gRPC pueden compartir capas similares por dentro."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Describir las capas internas de una API REST (gateway, controlador, servicio, repositorio)."
          }
        </li>
        <li>
          {
            "Comparar arquitecturas SOAP, GraphQL y gRPC con REST en contrato, tipado y punto de entrada."
          }
        </li>
        <li>{"Explicar WSDL, SDL y .proto como contratos formales de cada estilo."}</li>
        <li>
          {
            "Identificar patrones API Gateway, BFF, Strangler Fig y CQRS y cuándo aplicarlos."
          }
        </li>
        <li>
          {
            "Elegir estilo arquitectónico según cliente, rendimiento, tipado y legado (no solo moda)."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Lección ia-en-desarrollo-web: flujo de verificación y contexto de proyecto."}</li>
        <li>
          {
            "Lecciones rest-principios, apis, http-metodos-status: verbos HTTP, status codes y recursos REST."
          }
        </li>
        <li>{"Lección principios-solid: DIP y capas de servicio/repositorio."}</li>
      </ul>
      <Callout title="Arquitectura ≠ estilo REST">
        {
          "GraphQL también tiene controladores/resolvers, servicios y repositorios. No confundas el estilo de contrato externo con la organización interna."
        }
      </Callout>
    </section>
  );
}
