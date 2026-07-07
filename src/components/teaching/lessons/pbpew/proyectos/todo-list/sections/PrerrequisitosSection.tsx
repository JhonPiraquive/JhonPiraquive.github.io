export function PrerrequisitosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Prerrequisitos"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Lección 07 (`07-arrays-json-objetos`):"}</strong>
          {" arrays, objetos literales, `.filter`, `.forEach`, `JSON.stringify` / `JSON.parse`."}
        </li>
        <li>
          <strong>{"Lección 10 (`10-dom-y-eventos`):"}</strong>
          {
            " `querySelector`, `createElement`, `textContent`, `addEventListener`, `preventDefault`, delegación con `closest`."
          }
        </li>
        <li>
          <strong>{"Lección 12 (`12-ajax-fetch`):"}</strong>
          {
            " serialización JSON como puente hacia APIs REST (este proyecto usa estado local; el modelo es reutilizable)."
          }
        </li>
        <li>
          <strong>{"Proyectos previos del track Programación básica para entornos web (PBPEW):"}</strong>
          {" `proyectos/calculadora`, `proyectos/piedra-papel-tijera` — experiencia con eventos y estado en el navegador."}
        </li>
        <li>
          {
            "Mini lista DOM en lección 10 — aquí se evoluciona hacia array + `render()` + filtros + persistencia opcional."
          }
        </li>
      </ul>
    </section>
  );
}
