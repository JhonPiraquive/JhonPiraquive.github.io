export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el panorama de tipos de servicios web. Ninguna tecnología gana siempre: la decisión correcta depende del consumidor, el contrato exigido y el rendimiento requerido."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"SOAP"}</strong>
          {" persiste donde el regulador y el partner exigen XML + WS-Security."}
        </li>
        <li>
          <strong>{"REST"}</strong>
          {' sigue siendo el default para APIs públicas; no confundas "API HTTP" con RESTful.'}
        </li>
        <li>
          <strong>{"GraphQL"}</strong>
          {" brilla en BFF; añade complejidad operativa (caché, rate limit)."}
        </li>
        <li>
          <strong>{"gRPC"}</strong>
          {" es para dentro del datacenter; "}
          <strong>{"WebSockets"}</strong>
          {" para push al cliente."}
        </li>
        <li>
          <strong>{"Gateway"}</strong>
          {" traduce entre mundos (SOAP↔REST, gRPC↔REST)."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"apis"}</code>
        {" — diseño práctico, versionado y consumo de APIs."}
      </p>
    </section>
  );
}
