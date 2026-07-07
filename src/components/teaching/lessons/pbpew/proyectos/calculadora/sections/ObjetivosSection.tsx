export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4">{"Al finalizar el proyecto, el estudiante podrá:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Construir"}</strong>
          {" una calculadora funcional en HTML + JavaScript sin librerías ni `eval`, integrando variables, operadores, funciones y DOM."}
        </li>
        <li>
          <strong>{"Modelar"}</strong>
          {" el estado de la calculadora con `operandoActual`, `operandoAnterior`, `operadorPendiente` y `esperandoNuevoOperando`, "}
          <strong>{"sincronizando"}</strong>
          {" la pantalla con `textContent`."}
        </li>
        <li>
          <strong>{"Implementar"}</strong>
          {" delegación de eventos en el contenedor del teclado con `data-action` / `data-value` y `closest(\"button\")`."}
        </li>
        <li>
          <strong>{"Separar"}</strong>
          {" la lógica de cálculo en una función pura `calcular(a, operador, b)` con validación de `NaN` y división por cero."}
        </li>
        <li>
          <strong>{"Manejar"}</strong>
          {" errores de usuario (divisor cero, entrada inválida) con mensajes claros y reset coherente mediante `C`."}
        </li>
        <li>
          <strong>{"Encadenar"}</strong>
          {" operaciones aritméticas con comportamiento de calculadora básica antes de pulsar `=`."}
        </li>
      </ul>
    </section>
  );
}
