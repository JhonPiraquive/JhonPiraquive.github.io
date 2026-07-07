export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce las funciones como unidad de lógica reutilizable en JavaScript: cómo definirlas, devolver valores, recibir parámetros y pasar otras funciones como callbacks."
        }
      </p>
      <p className="my-4">{"Al finalizar la lección, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Definir"}</strong>{" qué es una función en JavaScript y "}
          <strong>{"explicar"}</strong>{" por qué agrupa lógica reutilizable."}
        </li>
        <li>
          <strong>{"Escribir"}</strong>{" funciones con declaración, expresión y arrow function, "}
          <strong>{"distinguiendo"}</strong>{" hoisting y retorno implícito."}
        </li>
        <li>
          <strong>{"Diferenciar"}</strong>{" parámetros de argumentos y "}
          <strong>{"usar"}</strong>{" parámetros por defecto y `return` correctamente."}
        </li>
        <li>
          <strong>{"Identificar"}</strong>{" el alcance local de variables dentro de una función con `let`/`const`."}
        </li>
        <li>
          <strong>{"Explicar"}</strong>{" qué es un callback y "}
          <strong>{"pasar"}</strong>{" referencias de función (no invocaciones accidentales) a funciones de orden superior y eventos del DOM."}
        </li>
        <li>
          <strong>{"Implementar"}</strong>{" una función de orden superior simple con bucle `for` que ejecute un callback en cada iteración (preview de `.map`/`.forEach` en lección 7)."}
        </li>
      </ul>
    </section>
  );
}
