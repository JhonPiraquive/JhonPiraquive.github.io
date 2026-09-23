export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Override:"}</strong>
          {" misma firma en jerarquía; virtual + override; runtime en List<Producto>."}
        </li>
        <li>
          <strong>{"Overload:"}</strong>
          {" firmas distintas en CalculadoraPedido; compile time; misma intención (calcular total)."}
        </li>
        <li>
          <strong>{"new:"}</strong>
          {" oculta sin polimorfismo — no sustituye override en la vitrina."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" asociacion-agregacion-composicion — cómo se relacionan pedido, cliente y catálogo."}
        </li>
      </ul>
    </section>
  );
}
