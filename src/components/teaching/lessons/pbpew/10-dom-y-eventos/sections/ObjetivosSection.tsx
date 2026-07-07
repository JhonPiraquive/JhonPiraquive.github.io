export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Seleccionar"}</strong>
          {" nodos del DOM con `querySelector`, `querySelectorAll` y `getElementById`, "}
          <strong>{"comprobando"}</strong>
          {" `null` cuando no hay coincidencias."}
        </li>
        <li>
          <strong>{"Leer y modificar"}</strong>
          {" contenido con `textContent` e `innerHTML`, "}
          <strong>{"explicando"}</strong>
          {" cuándo cada uno es seguro frente a entrada de usuario (XSS)."}
        </li>
        <li>
          <strong>{"Aplicar"}</strong>
          {" estilos inline y clases con `style` y `classList` (`.add`, `.remove`, `.toggle`, `.contains`)."}
        </li>
        <li>
          <strong>{"Crear y eliminar"}</strong>
          {" nodos con `createElement`, `appendChild` y `remove` / `removeChild`."}
        </li>
        <li>
          <strong>{"Registrar"}</strong>
          {" reacciones con `addEventListener`, "}
          <strong>{"usar"}</strong>
          {" el objeto evento (`target`, `currentTarget`, `key`, `preventDefault`) y "}
          <strong>{"implementar"}</strong>
          {" delegación en listas dinámicas."}
        </li>
        <li>
          <strong>{"Integrar"}</strong>
          {" selección, mutación del DOM y eventos en una lista de tareas en la página (reto integrador)."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Prerrequisitos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Lección 01 (`01-intro-js-y-dom`):"}</strong>
          {" concepto de DOM como árbol en memoria y objeto `document`."}
        </li>
        <li>
          <strong>{"Lección 02 (`02-js-en-html`):"}</strong>
          {" enlazar `<script>`, orden de carga y `DOMContentLoaded` / script al final del `<body>`."}
        </li>
        <li>
          <strong>{"Lecciones 03–05:"}</strong>
          {" variables, operadores, bucles y manejo básico de errores."}
        </li>
        <li>
          <strong>{"Lección 06 (`06-funciones-y-callbacks`):"}</strong>
          {" funciones y callbacks — base de los listeners."}
        </li>
        <li>
          <strong>{"Lección 09 (`09-estructuras-de-datos`):"}</strong>
          {" cola FIFO — paralelo con la cola de eventos del navegador."}
        </li>
        <li>{"Saber leer HTML básico (`id`, `class`, formularios, botones, listas)."}</li>
      </ul>
    </section>
  );
}
