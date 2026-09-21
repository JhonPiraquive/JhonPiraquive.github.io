export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de asociación, agregación y composición en C#. Estas relaciones complementan la herencia y preparan el terreno para programar contra contratos."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Relacionar ≠ heredar:"}</strong>
          {" “tiene un” y “usa un” tienen tres matices según ciclo de vida."}
        </li>
        <li>
          <strong>{"Agregación vs composición:"}</strong>
          {" misma sintaxis de lista, distinto origen y control de las partes."}
        </li>
        <li>
          <strong>{"Clase de enlace:"}</strong>
          {" formaliza asociaciones con contexto (Cita, Clase)."}
        </li>
        <li>
          <strong>{"Encapsulamiento:"}</strong>
          {" colecciones privadas + métodos Agregar/Quitar protegen invariantes."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"abstraccion-clases-abstractas-interfaces"}</code>
        {" — abstracción, clases abstractas e interfaces como contratos sobre implementaciones."}
      </p>
    </section>
  );
}
