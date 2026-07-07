export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Una API es un contrato que permite comunicación entre aplicaciones ocultando la implementación interna (abstracción, interoperabilidad)."
          }
        </li>
        <li>
          {
            "Se clasifican por accesibilidad (pública, privada, partner) y por arquitectura (REST, SOAP, GraphQL, gRPC)."
          }
        </li>
        <li>
          {
            "El flujo típico: cliente → HTTP request → API → fuente de datos → HTTP response JSON."
          }
        </li>
        <li>
          {
            "Herramientas: Postman/Swagger para exploración manual; curl para CLI y CI; OpenAPI para documentar el contrato."
          }
        </li>
        <li>
          {
            "Diseño: sustantivos en URIs, versionado /api/v1/, códigos de estado semánticos, paginación, rate limiting y auth con tokens."
          }
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"tokens"}</code>
          {" — JWT, OAuth 2.0, API Keys y sesiones."}
        </li>
      </ul>
    </section>
  );
}
