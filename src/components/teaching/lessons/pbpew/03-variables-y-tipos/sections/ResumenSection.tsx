export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Una variable es un identificador asociado a un valor en memoria; JavaScript usa tipado dinámico."}
        </li>
        <li>
          <strong>{"Regla práctica:"}</strong>{" `const` por defecto, `let` si reasignas, evita `var` en código nuevo."}
        </li>
        <li>
          <strong>{"`const`"}</strong>{" impide reasignar el enlace, pero permite mutar objetos y arrays referenciados."}
        </li>
        <li>
          <strong>{"Hoisting:"}</strong>{" `var` → `undefined` antes de la línea; `let`/`const` → TDZ hasta la declaración."}
        </li>
        <li>
          <strong>{"Primitivos"}</strong>{" se copian por valor; objetos se comparten por referencia."}
        </li>
        <li>
          <strong>{"`typeof`"}</strong>{" inspecciona tipos; `typeof null` devuelve `\"object\"` — usa `=== null` para null."}
        </li>
        <li>
          <strong>{"Coerción"}</strong>{" puede sorprender en sumas y comparaciones; preview de `===` en la lección 04-operadores-y-decisiones."}
        </li>
      </ul>
    </section>
  );
}
