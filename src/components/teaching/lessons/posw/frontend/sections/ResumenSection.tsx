export function ResumenSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resumen"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Frontend ejecuta en el navegador: UI, consumo de APIs, estado, routing y UX."}</li>
        <li>{"JavaScript es la base; TypeScript añade tipado; los componentes encapsulan props y eventos."}</li>
        <li>
          {
            "React (librería + JSX), Angular (framework enterprise + TS), Vue (progresivo), Svelte (compilador, sin Virtual DOM runtime)."
          }
        </li>
        <li>{"Elegir framework: tamaño de equipo, experiencia TS, demanda laboral, necesidad de SSR/SEO."}</li>
        <li>{"Meta-frameworks SSR: Next.js, Nuxt.js, SvelteKit."}</li>
        <li>
          <strong>{"Siguiente lección:"}</strong>
          {" "}
          <code>{"backend"}</code>
          {" — capa servidor, lógica de negocio y persistencia."}
        </li>
      </ul>
    </section>
  );
}
