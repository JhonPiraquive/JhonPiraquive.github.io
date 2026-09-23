export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "El diagrama de Tienda Andes no reemplaza C#, pero evita que medio equipo crea que Producto «muere» con el pedido. Mantén figura y código sincronizados."
        }
      </p>
      <p className="my-4 font-semibold">{"Llévate esto:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"<|-- hacia la base en herencia de catálogo."}</li>
        <li>{"o-- carrito, *-- pedido; cardinalidad en cliente–pedido."}</li>
        <li>{"Interfaces de pago con <|.., no con herencia de Pedido."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"practica-y-cierre"}</code>
        {" — código y diagrama parte 2 + miniquiz de relaciones."}
      </p>
    </section>
  );
}
