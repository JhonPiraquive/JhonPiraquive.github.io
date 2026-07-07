import { Callout } from "@/components/teaching/Callout";

export function ObjetivosDelTemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce las APIs como contrato entre aplicaciones: qué son, cómo se clasifican, con qué herramientas se prueban y qué decisiones de diseño evitan integraciones frágiles."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Definir API (Application Programming Interface) como contrato de comunicación entre aplicaciones que oculta la implementación interna."
          }
        </li>
        <li>
          {
            "Clasificar APIs por accesibilidad (pública, privada, partner) y por arquitectura (REST, SOAP, GraphQL, gRPC), enlazando con la lección de tipos de servicios web."
          }
        </li>
        <li>
          {
            "Describir el flujo cliente → API → fuente de datos con request HTTP y respuesta JSON."
          }
        </li>
        <li>
          {
            "Usar herramientas (Postman, curl, Swagger UI, Thunder Client) para probar endpoints y documentar contratos."
          }
        </li>
        <li>
          {
            "Aplicar buenas prácticas de diseño (URIs con sustantivos, versionado, códigos de estado, paginación, OpenAPI) y detectar anti-patrones comunes."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección tipos-servicios-web: REST, SOAP, GraphQL, gRPC y cuándo usar cada arquitectura."
          }
        </li>
        <li>
          {
            "Lección http-metodos-status: verbos HTTP y códigos de estado semánticos."
          }
        </li>
        <li>{"Familiaridad con JSON como formato de intercambio."}</li>
      </ul>
      <Callout title="API ≠ backend completo">
        {
          "La API es la interfaz expuesta; el backend incluye lógica, base de datos y procesos internos que el consumidor no ve. Confundir ambos lleva a diseños acoplados y difíciles de versionar."
        }
      </Callout>
    </section>
  );
}
