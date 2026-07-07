export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Una función agrupa lógica reutilizable; evita repetir código y mejora legibilidad y pruebas."}
        </li>
        <li>
          <strong>{"Declaración"}</strong>{" tiene hoisting del nombre; "}
          <strong>{"expresión"}</strong>{" y "}
          <strong>{"flecha"}</strong>{" se asignan a variables sin hoisting de la asignación."}
        </li>
        <li>
          <strong>{"Parámetros"}</strong>{" = nombres en la definición; "}
          <strong>{"argumentos"}</strong>{" = valores en la llamada. "}
          <strong>{"return"}</strong>{" devuelve un valor y termina la función; sin return → `undefined`."}
        </li>
        <li>
          <strong>{"Arrow function"}</strong>{" con una expresión sin llaves tiene retorno implícito; con llaves hace falta `return` explícito."}
        </li>
        <li>
          {"Variables `let`/`const` dentro de una función tienen alcance local."}
        </li>
        <li>
          {"Un callback es una función pasada como argumento para ejecutarse más tarde (bucle, evento, temporizador)."}
        </li>
        <li>
          {"Pasa referencia de función (`fn` o `() => fn()`) cuando quieres ejecutarla después; `fn()` la invoca al instante."}
        </li>
        <li>
          <strong>{"Preview lección 7:"}</strong>{" `.forEach`, `.map` y `.filter` usan el mismo patrón de callbacks."}
        </li>
      </ul>
    </section>
  );
}
