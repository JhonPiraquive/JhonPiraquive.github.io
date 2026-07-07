export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado los seis constraints REST. La mayoría de APIs del mundo real están en Richardson nivel 2; HATEOAS es el salto hacia REST según Fielding."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"REST es arquitectura, no sinónimo de JSON sobre HTTP."}</li>
        <li>{"Stateless + token — sesiones server-side impiden escalar horizontalmente."}</li>
        <li>{"URIs identifican recursos, no acciones (/productos/42, no /obtenerProducto)."}</li>
        <li>{"HATEOAS reduce acoplamiento; el cliente sigue links, no URLs fijas."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"typescript"}</code>
        {" — tipado estático para consumir APIs con seguridad."}
      </p>
    </section>
  );
}
