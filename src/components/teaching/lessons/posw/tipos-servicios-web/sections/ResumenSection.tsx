export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"SOAP:"}</strong>
          {" protocolo XML + WSDL; legacy regulado (banca, gobierno)."}
        </li>
        <li>
          <strong>{"REST:"}</strong>
          {" estilo sobre HTTP con recursos y verbos; JSON + OpenAPI para APIs públicas."}
        </li>
        <li>
          <strong>{"GraphQL:"}</strong>
          {" endpoint único; el cliente define la forma; resuelve over/under-fetching."}
        </li>
        <li>
          <strong>{"gRPC:"}</strong>
          {" HTTP/2 + protobuf; microservicios internos; no directo al navegador."}
        </li>
        <li>
          <strong>{"WebSockets:"}</strong>
          {" conexión persistente bidireccional; tiempo real con handshake 101."}
        </li>
        <li>
          <strong>{"Selección por contexto"}</strong>
          {", no por moda."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"apis"}</code>
          {" — diseño y consumo de APIs en la práctica."}
        </li>
      </ul>
    </section>
  );
}
