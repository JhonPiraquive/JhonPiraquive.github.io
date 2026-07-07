export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has completado el panorama del frontend: qué hace, con qué tecnologías y cómo elegir framework. La mejor elección sirve al equipo y al producto, no a la moda del momento."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"El frontend consume APIs; no es la fuente de verdad de reglas de negocio críticas."}</li>
        <li>{"SPA sin SSR puede perder SEO — evalúa Next/Nuxt/SvelteKit cuando importa indexación."}</li>
        <li>{"React = librería flexible; Angular = framework enterprise; elige según equipo y plazo."}</li>
        <li>{"Siempre maneja loading y error en fetch; la UI congelada confunde al usuario."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"backend"}</code>
        {" — servidor, APIs, base de datos y lógica de negocio."}
      </p>
    </section>
  );
}
