export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Explicar qué es JavaScript y qué es el DOM, y cómo se vincula un script a una página."}</li>
        <li>{"Declarar variables con const y let, y reconocer los tipos de datos principales."}</li>
        <li>{"Escribir decisiones con if, else y switch usando comparación estricta."}</li>
        <li>{"Elegir entre for, while y do-while, y capturar errores con try/catch."}</li>
        <li>{"Definir funciones con parámetros y retorno, y pasar un callback."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide" target="_blank" rel="noreferrer">Guía de JavaScript (MDN)</a>{": guía oficial del lenguaje."}
        </li>
        <li>
          <a href="https://es.javascript.info/" target="_blank" rel="noreferrer">El tutorial de JavaScript moderno</a>{": explicaciones y ejercicios del lenguaje."}
        </li>
        <li>
          <a href="https://developer.mozilla.org/es/docs/Web/API/console" target="_blank" rel="noreferrer">Referencia de la consola (MDN)</a>{": métodos de depuración."}
        </li>
      </ul>
    </section>
  );
}
