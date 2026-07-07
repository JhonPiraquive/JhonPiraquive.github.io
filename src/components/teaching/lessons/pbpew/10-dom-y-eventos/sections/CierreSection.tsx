export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado la manipulación práctica del DOM y el manejo de eventos en JavaScript. Estas APIs son la base de interfaces interactivas en el navegador y conectan con callbacks (lección 6) y la cola FIFO de eventos (lección 9)."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Seleccionar"}</strong>
          {" con `querySelector` / `querySelectorAll`; validar `null`."}
        </li>
        <li>
          <strong>{"`textContent`"}</strong>
          {" para mostrar datos de usuario; "}
          <strong>{"`innerHTML`"}</strong>
          {" solo con marcado de confianza."}
        </li>
        <li>
          <strong>{"`classList`"}</strong>
          {" para clases; "}
          <strong>{"`createElement` + `appendChild`"}</strong>
          {" para nodos nuevos."}
        </li>
        <li>
          <strong>{"`addEventListener`"}</strong>
          {" en lugar de `onclick` en HTML; "}
          <strong>{"`preventDefault`"}</strong>
          {" en formularios."}
        </li>
        <li>
          <strong>{"Delegación"}</strong>
          {" en listas: un listener en el padre + `closest`."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {
          "lección 11-asincronia — fetch, promesas y async/await actualizarán el DOM cuando lleguen datos del servidor sin recargar la página."
        }
      </p>
    </section>
  );
}
