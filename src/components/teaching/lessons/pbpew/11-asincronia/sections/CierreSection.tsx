export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de sincronía, asincronía, temporizadores, promesas y `async/await` en JavaScript. Estos conceptos conectan los callbacks de la lección 6 y los eventos del DOM (lección 10) con el consumo de APIs en la lección 12."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Sincrónico"}</strong>
          {" bloquea el hilo si tarda; "}
          <strong>{"asíncrono"}</strong>
          {" programa el resultado y la UI sigue viva."}
        </li>
        <li>
          <strong>{"setTimeout / setInterval"}</strong>
          {" devuelven ids — limpia siempre que dejes de necesitar el timer."}
        </li>
        <li>
          <strong>{"Promesas"}</strong>
          {" evitan callback hell; "}
          <strong>{".catch"}</strong>
          {" o "}
          <strong>{"`try/catch`"}</strong>
          {" son obligatorios para errores."}
        </li>
        <li>
          <strong>{"`async/await`"}</strong>
          {" aplana flujos largos; `await` solo dentro de `async`."}
        </li>
        <li>
          <strong>{"Template literals"}</strong>
          {" con backticks interpolan `${expresion}` en mensajes dinámicos."}
        </li>
        <li>
          <strong>{"Event loop:"}</strong>
          {" código sync primero; callbacks asíncronos después, vía cola de tareas."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"lección 12-ajax-fetch — `fetch`, respuestas HTTP, cabeceras y consumo de APIs REST."}
      </p>
    </section>
  );
}
