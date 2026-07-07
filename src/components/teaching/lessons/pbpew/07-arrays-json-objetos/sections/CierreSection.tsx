export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de arrays, JSON y objetos literales en JavaScript. Estos conceptos conectan los callbacks de la lección 6 con datos estructurados que verás en APIs, `localStorage` y el DOM."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Arrays"}</strong>
          {" ordenan datos con índices desde 0; elige mutación (`push`) o transformación inmutable (`.map`, `.filter`)."}
        </li>
        <li>
          <strong>{"Callbacks"}</strong>
          {" en métodos de array: misma idea que en `repetir(n, fn)` — la función que pasas define qué hacer con cada elemento."}
        </li>
        <li>
          <strong>{"JSON"}</strong>
          {" intercambia datos como texto; `stringify` y `parse` son el puente entre memoria y red o almacenamiento."}
        </li>
        <li>
          <strong>{"Objetos literales"}</strong>
          {" modelan entidades con propiedades y métodos; "}
          <strong>{"referencia"}</strong>
          {" vs "}
          <strong>{"spread"}</strong>
          {" evita mutaciones accidentales."}
        </li>
        <li>
          <strong>{"Destructuración"}</strong>
          {" extrae valores en una línea y admite valores por defecto."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" lección `08-this-scope-clases` — `this`, alcance y clases en JavaScript."}
      </p>
    </section>
  );
}
