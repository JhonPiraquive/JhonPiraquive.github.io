export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de herencia y su alternativa por composición en C#. Estos conceptos son la base para polimorfismo avanzado, clases abstractas e interfaces en lecciones posteriores del track de Programación Orientada a Objetos (POO)."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Herencia"}</strong>
          {" = “es un” + virtual/override + base(...); polimorfismo resuelve el tipo real en runtime."}
        </li>
        <li>
          <strong>{"Composición"}</strong>
          {" = “tiene un”; intercambiar implementaciones sin jerarquías profundas."}
        </li>
        <li>
          {
            "Criterio de decisión: sustituibilidad y estabilidad del dominio, no solo evitar duplicar líneas de código."
          }
        </li>
        <li>
          <strong>{"Antipatrón:"}</strong>
          {" heredar para copiar utilidades o forzar relaciones que no son “es un”."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"asociacion-agregacion-composicion"}</code>
        {" — matiza las relaciones “tiene un” (asociación, agregación, composición)."}
      </p>
    </section>
  );
}
