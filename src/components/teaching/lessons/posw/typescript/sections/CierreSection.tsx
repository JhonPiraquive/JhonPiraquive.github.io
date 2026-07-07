export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado los fundamentos de TypeScript: superset de JS, sistema de tipos, interfaces, genéricos y configuración estricta."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"TypeScript extiende JavaScript; compila a JS con tsc."}</li>
        <li>{"Los errores de tipo se detectan en desarrollo, no en runtime."}</li>
        <li>{"unknown + narrowing es más seguro que any para datos externos."}</li>
        <li>{"interface para objetos; type para uniones; genéricos para APIs reutilizables."}</li>
        <li>{"strict: true evita bugs silenciosos de null y any implícito."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"angular"}</code>
        {" — framework de Google que aprovecha TypeScript en componentes, servicios y DI."}
      </p>
    </section>
  );
}
