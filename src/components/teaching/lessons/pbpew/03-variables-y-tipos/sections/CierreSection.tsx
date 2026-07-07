export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el estudio de variables, hoisting y tipos de datos en JavaScript. Estos conceptos son la base para operadores, decisiones con `if` y manipulación del DOM en lecciones posteriores: sin dominar `let`/`const`, alcance y tipos, los errores de referencia y coerción aparecerán en cada script que escribas."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"const por defecto, let si reasignas, evita var"}</strong>{" en código nuevo."}
        </li>
        <li>
          <strong>{"Hoisting + TDZ:"}</strong>{" `var` imprime `undefined` antes de la línea; `let`/`const` lanzan ReferenceError."}
        </li>
        <li>
          <strong>{"Primitivos"}</strong>{" = copia por valor · Objetos = copia por referencia."}
        </li>
        <li>
          <strong>{"`typeof null`"}</strong>{" devuelve `\"object\"` — usa `=== null` para comprobar null."}
        </li>
        <li>
          <strong>{"Coerción"}</strong>{" puede alterar sumas y comparaciones; la lección 04 profundiza operadores y `===`."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>{" "}
        {"lección 04-operadores-y-decisiones — operadores aritméticos, lógicos, comparación estricta (`===`) y estructuras de decisión."}
      </p>
    </section>
  );
}
