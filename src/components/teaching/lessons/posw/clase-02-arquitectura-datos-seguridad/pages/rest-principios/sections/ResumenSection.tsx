export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "REST es estilo arquitectónico (Fielding), no protocolo; seis constraints definen RESTfulness."
          }
        </li>
        <li>{"Stateless: cada request autosuficiente; JWT en lugar de sesión server-side."}</li>
        <li>{"Client-Server: UI separada de lógica/persistencia; evolución independiente."}</li>
        <li>{"Cacheable: respuestas declaran cacheabilidad con Cache-Control y ETag."}</li>
        <li>{"Layered System: cliente solo ve capa adyacente (CDN, gateway, LB)."}</li>
        <li>{"Uniform Interface: recursos en URI, representaciones, mensajes autodescriptivos, HATEOAS."}</li>
        <li>{"Code on Demand: opcional; SPAs al servir JS."}</li>
        <li>{"Richardson: mayoría en nivel 2; HATEOAS (nivel 3) distingue REST verdadero."}</li>
      </ul>
    </section>
  );
}
