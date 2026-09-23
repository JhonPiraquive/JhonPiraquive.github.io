export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Ya puedes nombrar cómo colaboran cliente, carrito y pedido sin forzar herencia. Ese vocabulario aparece en el diagrama y en la práctica final de Clase 2."
        }
      </p>
      <p className="my-4 font-semibold">{"Llévate esto:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Asociación = uso puntual o clase de enlace."}</li>
        <li>{"Agregación = agrupar lo que ya existe (catálogo)."}</li>
        <li>{"Composición = partes que el todo crea y gobierna."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"diagramas-relaciones"}</code>
        {" — herencia Producto←Libro y composición Pedido→LineaPedido en un solo diagrama."}
      </p>
    </section>
  );
}
