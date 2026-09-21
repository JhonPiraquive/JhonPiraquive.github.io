export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el modelado visual con diagramas de clases. El diagrama es el plano compartido entre equipo y código — no sustituye C#, pero reduce malentendidos antes del sprint."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Estructura estática"}</strong>
          {" — no secuencia ni logs de runtime."}
        </li>
        <li>
          <strong>{"Símbolos Mermaid"}</strong>
          {" — herencia, interfaz, asociación, agregación, composición, cardinalidad."}
        </li>
        <li>
          <strong>{"Diagramas focalizados"}</strong>
          {" — un módulo por figura, actualizados con el código."}
        </li>
        <li>
          <strong>{"Señales de alerta"}</strong>
          {" — clases \"Dios\", relaciones mal elegidas, desincronía."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"solid-principios"}</code>
        {" — convertir señales del diagrama en reglas de diseño mantenible."}
      </p>
    </section>
  );
}
