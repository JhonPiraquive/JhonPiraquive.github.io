export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Describir el flujo cliente-servidor de una petición HTTP y las arquitecturas en capas."}</li>
        <li>{"Distinguir servicio web de API y los tipos de servicio (REST, SOAP, GraphQL, gRPC, WebSockets)."}</li>
        <li>{"Elegir el método HTTP y el código de estado adecuados para cada operación."}</li>
        <li>{"Reconocer las cabeceras principales y explicar CORS."}</li>
        <li>{"Elegir entre XML y JSON y escribir ambos con corrección."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/HTTP" target="_blank" rel="noreferrer">HTTP (MDN)</a>{": guía completa del protocolo."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/HTTP/Methods" target="_blank" rel="noreferrer">Métodos de petición HTTP (MDN)</a>{": verbos y su semántica."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/HTTP/CORS" target="_blank" rel="noreferrer">CORS (MDN)</a>{": intercambio de recursos entre orígenes."}
        </li>
        <li>
          <a href="https://www.json.org/json-es.html" target="_blank" rel="noreferrer">Introducción a JSON</a>{": la sintaxis del formato."}
        </li>
      </ul>
    </section>
  );
}
