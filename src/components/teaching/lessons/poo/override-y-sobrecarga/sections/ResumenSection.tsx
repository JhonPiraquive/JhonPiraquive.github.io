export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Override:"}</strong>
          {" misma firma en jerarquía; virtual/abstract + override; resolución en runtime."}
        </li>
        <li>
          <strong>{"Overload:"}</strong>
          {" firmas distintas en la misma clase; resolución en compile time; misma intención operativa."}
        </li>
        <li>
          <strong>{"new:"}</strong>
          {" oculta sin polimorfismo — no sustituye a override en diseño polimórfico."}
        </li>
        <li>
          <strong>{"Coexistencia:"}</strong>
          {" Animal puede tener overload de Comer y Perro override de Hablar."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" diagramas-de-clases — representar jerarquías y relaciones en UML/Mermaid."}
        </li>
      </ul>
    </section>
  );
}
