export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Crear y manipular"}</strong>{" arrays con índices, `length`, `push`/`pop` y `unshift`/`shift`, "}
          <strong>{"distinguiendo"}</strong>{" mutación del original frente a métodos que devuelven un nuevo array."}
        </li>
        <li>
          <strong>{"Aplicar"}</strong>{" callbacks de la lección 6 con `.forEach`, `.map` y `.filter`, "}
          <strong>{"eligiendo"}</strong>{" el método adecuado según si necesita efecto secundario o un array transformado."}
        </li>
        <li>
          <strong>{"Serializar y deserializar"}</strong>{" datos con `JSON.stringify` y `JSON.parse`, "}
          <strong>{"reconociendo"}</strong>{" qué tipos JS no son válidos en JSON."}
        </li>
        <li>
          <strong>{"Definir"}</strong>{" objetos literales con propiedades y métodos, "}
          <strong>{"acceder"}</strong>{" con punto o corchetes y "}
          <strong>{"usar"}</strong>{" destructuración y spread para copiar o actualizar sin mutar directamente."}
        </li>
        <li>
          <strong>{"Explicar"}</strong>{" referencia vs valor en arrays y objetos, "}
          <strong>{"demostrando"}</strong>{" cuándo dos variables comparten el mismo dato en memoria."}
        </li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Prerrequisitos"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Lección 01 (`01-intro-js-y-dom`):"}</strong>{" JavaScript en el navegador, `console.log`."}
        </li>
        <li>
          <strong>{"Lección 02 (`02-js-en-html`):"}</strong>{" scripts en HTML, ejecutar código en consola."}
        </li>
        <li>
          <strong>{"Lección 03 (`03-variables-y-tipos`):"}</strong>{" `let`/`const`, tipos primitivos (número, string, boolean)."}
        </li>
        <li>
          <strong>{"Lección 04 (`04-operadores-y-decisiones`):"}</strong>{" operadores, `if`, comparaciones."}
        </li>
        <li>
          <strong>{"Lección 05 (`05-bucles-y-errores`):"}</strong>{" bucles `for`, índices `0` a `length - 1`."}
        </li>
        <li>
          <strong>{"Lección 06 (`06-funciones-y-callbacks`):"}</strong>{" funciones, `return`, arrow functions, callbacks y funciones de orden superior — base para `.map`, `.filter` y `.forEach`."}
        </li>
        <li>{"Capacidad para leer y escribir fragmentos en consola o `<script>` sin errores de sintaxis básica."}</li>
      </ul>
    </section>
  );
}
