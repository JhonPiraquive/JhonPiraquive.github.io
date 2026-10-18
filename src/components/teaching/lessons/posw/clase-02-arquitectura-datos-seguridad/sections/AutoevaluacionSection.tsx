export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Explicar las restricciones de REST y aplicarlas al diseñar una API."}</li>
        <li>{"Comparar REST, GraphQL y gRPC y justificar la elección."}</li>
        <li>{"Describir las responsabilidades del backend y elegir un modelo de datos (SQL o NoSQL)."}</li>
        <li>{"Usar caché con criterio y las cabeceras que la controlan."}</li>
        <li>{"Explicar HTTPS, TLS y los mecanismos de autenticación (API key, sesión, JWT, OAuth)."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://www.openapis.org/" target="_blank" rel="noreferrer">Iniciativa OpenAPI</a>{": especificación para describir APIs REST."}
        </li>
        <li>
          <a href="https://graphql.org/learn/" target="_blank" rel="noreferrer">GraphQL</a>{": introducción al lenguaje de consulta."}
        </li>
        <li>
          <a href="https://grpc.io/docs/" target="_blank" rel="noreferrer">gRPC</a>{": documentación oficial."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Caching" target="_blank" rel="noreferrer">Caché HTTP (MDN)</a>{": cabeceras y estrategias de caché."}
        </li>
        <li>
          <a href="https://jwt.io/introduction" target="_blank" rel="noreferrer">JSON Web Tokens</a>{": estructura y uso de los tokens."}
        </li>
        <li>
          <a href="https://oauth.net/2/" target="_blank" rel="noreferrer">OAuth 2.0</a>{": visión general del protocolo."}
        </li>
      </ul>
    </section>
  );
}
