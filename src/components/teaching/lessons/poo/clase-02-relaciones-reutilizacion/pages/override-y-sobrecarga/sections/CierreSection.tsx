export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Override materializa el polimorfismo del catálogo; overload hace cómoda la caja sin crear subclases innecesarias. Lleva esa distinción al diagrama y al pedido completo."
        }
      </p>
      <p className="my-4 font-semibold">{"Llévate esto:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Override = herencia + misma firma + runtime."}</li>
        <li>{"Overload = misma clase + firmas distintas + compile time."}</li>
        <li>{"new no reemplaza override cuando trabajas con referencias de tipo base."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"asociacion-agregacion-composicion"}</code>
        {" — pedidos, clientes y catálogo sin confundir «tiene un» con herencia."}
      </p>
    </section>
  );
}
