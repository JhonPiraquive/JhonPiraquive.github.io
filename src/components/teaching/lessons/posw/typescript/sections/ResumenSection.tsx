export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"TypeScript es un superset tipado de JavaScript que compila a JS con tsc."}</li>
        <li>{"Ventaja principal: detectar errores de tipo en desarrollo, no en producción."}</li>
        <li>{"Sistema de tipos: primitivos → compuestos → interfaces/types → genéricos."}</li>
        <li>{"unknown > any para datos externos; validar JSON en runtime además de tipar."}</li>
        <li>{"interface para objetos; type para uniones; string enums para APIs REST."}</li>
        <li>{"Genéricos reutilizan código conservando información de tipo (ApiResponse<T>)."}</li>
        <li>{"strict: true en tsconfig.json es la base de un proyecto mantenible."}</li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"angular"}</code>
          {" — framework opinionado que usa TypeScript de forma nativa."}
        </li>
      </ul>
    </section>
  );
}
