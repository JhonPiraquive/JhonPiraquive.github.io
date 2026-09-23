export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Herencia"}</strong>
          {" modela «es un»: Libro especializa Producto con base(...), virtual y override."}
        </li>
        <li>
          <strong>{"Polimorfismo básico:"}</strong>
          {" Producto p = new Libro(...); p.DescripcionEtiqueta() usa la versión del objeto real."}
        </li>
        <li>
          {"No todo método necesita override: lo común (p. ej. PrecioConIva) vive una sola vez en la base."}
        </li>
        <li>
          <strong>{"Composición + interfaz"}</strong>
          {" (ConfirmacionPedido + ICanalAviso) agrega canales sin jerarquías rígidas."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" override-y-sobrecarga — mismo catálogo, dos mecanismos distintos en C#."}
        </li>
      </ul>
    </section>
  );
}
