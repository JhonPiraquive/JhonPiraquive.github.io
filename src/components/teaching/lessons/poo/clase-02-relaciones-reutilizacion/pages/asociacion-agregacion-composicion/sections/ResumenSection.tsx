export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Asociación:"}</strong>
          {" colaboración sin propiedad fuerte; parámetro o clase de enlace (Cita)."}
        </li>
        <li>
          <strong>{"Agregación:"}</strong>
          {" todo agrupa partes independientes; Agregar/Quitar sin destruir la parte."}
        </li>
        <li>
          <strong>{"Composición:"}</strong>
          {" el todo crea y controla partes con ciclo de vida acoplado; lista privada."}
        </li>
        <li>
          <strong>{"Criterio:"}</strong>
          {" ciclo de vida + quién instancia — no la sola presencia de List<T>."}
        </li>
        <li>
          <strong>{"Anti-patrones:"}</strong>
          {" herencia para “tiene un”, listas públicas mutables, composición donde las partes son compartidas."}
        </li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" abstraccion-clases-abstractas-interfaces — contratos sobre implementaciones."}
        </li>
      </ul>
    </section>
  );
}
