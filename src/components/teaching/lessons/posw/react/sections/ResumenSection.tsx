export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"React es una librería de UI con componentes, Virtual DOM y flujo unidireccional."}</li>
        <li>{"JSX compila a createElement; usa className, llaves {} y componentes con mayúscula."}</li>
        <li>{"Props son de solo lectura; el padre controla datos y callbacks."}</li>
        <li>{"useState gestiona estado local sin mutación directa."}</li>
        <li>{"Hooks conectan lógica al componente funcional (useState, useEffect, etc.)."}</li>
        <li>{"useEffect maneja side effects con dependencias y función de limpieza."}</li>
        <li>{"key estable (ID) en listas para reconciliación correcta del Virtual DOM."}</li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"modelo-cliente-servidor"}</code>
          {" — arquitectura completa cliente-servidor."}
        </li>
      </ul>
    </section>
  );
}
