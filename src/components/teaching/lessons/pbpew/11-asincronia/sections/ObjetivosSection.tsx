export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Distinguir"}</strong>
          {" código sincrónico de asíncrono y "}
          <strong>{"explicar"}</strong>
          {" por qué temporizadores y red no bloquean el hilo principal de la UI."}
        </li>
        <li>
          <strong>{"Usar"}</strong>
          {" `setTimeout`, `clearTimeout`, `setInterval` y `clearInterval`, "}
          <strong>{"reconociendo"}</strong>
          {" que el retardo es mínimo y que los intervalos deben limpiarse al terminar."}
        </li>
        <li>
          <strong>{"Crear y encadenar"}</strong>
          {" promesas con `new Promise`, `.then`, `.catch` y `.finally`, "}
          <strong>{"manejando"}</strong>
          {" rechazos sin dejar errores sin capturar."}
        </li>
        <li>
          <strong>{"Escribir"}</strong>
          {" funciones `async` con `await` y `try/catch` para flujos lineales que consumen promesas (preview de `fetch`)."}
        </li>
        <li>
          <strong>{"Aplicar"}</strong>
          {" template literals con interpolación `${}` para mensajes dinámicos en logs y errores."}
        </li>
        <li>
          <strong>{"Describir"}</strong>
          {" el event loop de forma básica: call stack, Web APIs y cola de tareas."}
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6 text-sm text-[var(--color-neutral-mid)]">
        <li>
          <strong>{"Lección 06 (`06-funciones-y-callbacks`):"}</strong>
          {" funciones, callbacks — base de temporizadores y handlers de promesas."}
        </li>
        <li>
          <strong>{"Lección 10 (`10-dom-y-eventos`):"}</strong>
          {" eventos, `addEventListener`, cola de eventos del navegador."}
        </li>
        <li>
          <strong>{"Lecciones 01–05 y 07–09:"}</strong>
          {" variables, bucles, `try/catch`, objetos y estructuras de datos para leer respuestas JSON."}
        </li>
        <li>{"Capacidad para ejecutar fragmentos en consola o `<script>` y leer salida en orden."}</li>
      </ul>
    </section>
  );
}
