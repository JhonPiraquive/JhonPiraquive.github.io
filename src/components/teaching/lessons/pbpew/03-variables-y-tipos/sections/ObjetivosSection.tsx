export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Al finalizar la lección, el estudiante podrá:"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Definir"}</strong>{" qué es una variable en JavaScript y "}
          <strong>{"distinguir"}</strong>{" declaración de asignación."}
        </li>
        <li>
          <strong>{"Elegir"}</strong>{" entre `const`, `let` y `var` según la regla práctica del curso (`const` por defecto, `let` si hay reasignación, evitar `var` en código nuevo)."}
        </li>
        <li>
          <strong>{"Explicar"}</strong>{" hoisting y la zona muerta temporal (TDZ) con `let`/`const`, y "}
          <strong>{"contrastar"}</strong>{" el comportamiento de `var`."}
        </li>
        <li>
          <strong>{"Identificar"}</strong>{" los tipos primitivos principales y "}
          <strong>{"usar"}</strong>{" `typeof` para inspeccionarlos, incluyendo la peculiaridad de `typeof null`."}
        </li>
        <li>
          <strong>{"Distinguir"}</strong>{" copia por valor (primitivos) de copia por referencia (objetos) y "}
          <strong>{"reconocer"}</strong>{" mutación válida frente a reasignación prohibida con `const`."}
        </li>
        <li>
          <strong>{"Detectar"}</strong>{" errores comunes de coerción de tipos en contextos básicos (preview de la lección 04)."}
        </li>
      </ul>
    </section>
  );
}
