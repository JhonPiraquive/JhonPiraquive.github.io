export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has recorrido la arquitectura interna de APIs y los estilos REST, SOAP, GraphQL y gRPC."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Gateway → Controller → Service → Repository → BD es el flujo REST típico."}</li>
        <li>{"El servicio concentra negocio; el controlador solo adapta HTTP."}</li>
        <li>{"WSDL (SOAP), SDL (GraphQL) y .proto (gRPC) son contratos formales."}</li>
        <li>{"DataLoader resuelve N+1 en GraphQL; Strangler Fig migra monolitos gradualmente."}</li>
        <li>{"Elige estilo por cliente, rendimiento, tipado y legado, no por moda."}</li>
        <li>{"Evita over-engineering: CQRS y BFF solo cuando el caso lo justifica."}</li>
      </ul>
    </section>
  );
}
