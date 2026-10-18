export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Usar map, filter y forEach sobre arrays, y serializar datos con JSON."}</li>
        <li>{"Explicar el ámbito, el valor de this y la herencia con clases."}</li>
        <li>{"Elegir Map, Set, pila o cola según el problema."}</li>
        <li>{"Seleccionar nodos del DOM, modificarlos y responder a eventos."}</li>
        <li>{"Armar un juego pequeño separando estado, lógica y vista."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noreferrer">Referencia de Array (MDN)</a>{": métodos de arrays."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model" target="_blank" rel="noreferrer">Modelo de objetos del documento (MDN)</a>{": API del DOM."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/API/Event" target="_blank" rel="noreferrer">Eventos (MDN)</a>{": tipos de eventos y su uso."}
        </li>
      </ul>
    </section>
  );
}
