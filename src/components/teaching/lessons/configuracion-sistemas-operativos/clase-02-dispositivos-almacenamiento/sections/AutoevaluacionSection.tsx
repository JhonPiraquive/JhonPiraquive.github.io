export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Comparar HDD, SSD y SAS según capacidad, velocidad y costo."}</li>
        <li>{"Elegir periféricos y resolución de monitor acordes al uso."}</li>
        <li>{"Armar una hoja de vida completa de un PC."}</li>
        <li>{"Distinguir software libre, freeware, shareware y propietario."}</li>
        <li>{"Proponer un plan de almacenamiento y licencias para un laboratorio."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://www.gnu.org/philosophy/free-sw.es.html" target="_blank" rel="noreferrer">GNU: qué es el software libre</a>{": las cuatro libertades, en español."}
        </li>
        <li>
          <a href="https://opensource.org/licenses" target="_blank" rel="noreferrer">Open Source Initiative: licencias</a>{": catálogo de licencias de código abierto."}
        </li>
      </ul>
    </section>
  );
}
