export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Los operadores aritméticos transforman números; `+` con string concatena; respeta precedencia y paréntesis."
          }
        </li>
        <li>
          <strong>{"`===` y `!==`"}</strong>{" comparan valor y tipo; evita `==` en código nuevo del curso."}
        </li>
        <li>
          <strong>{"Truthy/falsy"}</strong>
          {" determinan si una condición entra al `if`; `\"0\"` y `[]` son truthy; `0` y `\"\"` son falsy."}
        </li>
        <li>
          <strong>{"`&&`, `||`, `!`"}</strong>
          {" combinan condiciones; el cortocircuito evita evaluar el segundo operando cuando no hace falta."}
        </li>
        <li>
          <strong>{"`if` / `else if` / `else`"}</strong>
          {" clasifican rangos y validan con `Number.isNaN` antes de comparar."}
        </li>
        <li>
          <strong>{"`switch`"}</strong>
          {" compara con `===`; cada `case` necesita `break` salvo fall-through intencional; `default` cubre el resto."}
        </li>
        <li>
          <strong>{"`if` vs `switch`:"}</strong>
          {" rangos y condiciones compuestas → `if`; un valor vs muchas constantes → `switch`."}
        </li>
      </ul>
      <p className="my-4">
        {
          "En la lección 05-bucles-y-errores verás bucles `for`/`while` y manejo de errores con `try/catch`."
        }
      </p>
    </section>
  );
}
