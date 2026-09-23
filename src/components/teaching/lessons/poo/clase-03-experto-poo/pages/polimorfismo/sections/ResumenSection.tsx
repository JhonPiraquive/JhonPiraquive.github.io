export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Polimorfismo:"}</strong>
          {" misma llamada; el objeto real decide el comportamiento en runtime."}
        </li>
        <li>
          <strong>{"Interfaces:"}</strong>
          {" IPasarelaPago + Checkout; Nequi = clase nueva."}
        </li>
        <li>
          <strong>{"Herencia:"}</strong>
          {" Producto + override; List<Producto> en la caja."}
        </li>
        <li>
          <strong>{"Cliente estable:"}</strong>
          {" indicador clave — sin switch por tipo en dominio."}
        </li>
        <li>
          <strong>{"Siguiente página:"}</strong>
          {" solid-principios — nombrar violaciones en el mismo checkout y catálogo."}
        </li>
      </ul>
    </section>
  );
}
