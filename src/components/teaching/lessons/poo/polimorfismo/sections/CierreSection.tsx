export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio del polimorfismo en C#. Este mecanismo materializa la abstracción en tiempo de ejecución."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Polimorfismo"}</strong>
          {" = dispatch en runtime según tipo real del objeto."}
        </li>
        <li>
          <strong>{"Interfaz y abstracta"}</strong>
          {" son los dos vehículos principales en C#."}
        </li>
        <li>
          <strong>{"Colecciones polimórficas"}</strong>
          {" simplifican bucles y reglas variables (pagos, impuestos)."}
        </li>
        <li>
          <strong>{"Cliente estable"}</strong>
          {" es el indicador de diseño correcto; switch por tipo es señal de alerta."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"override-y-sobrecarga"}</code>
        {" — diferencias entre redefinición polimórfica y sobrecarga por firma."}
      </p>
    </section>
  );
}
