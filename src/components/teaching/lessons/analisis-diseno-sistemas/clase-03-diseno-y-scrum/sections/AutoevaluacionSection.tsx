export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Autoevaluación</h2>
      <p className="my-4">El estudiante puede pasar a la siguiente clase cuando cumple cada punto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Pasar de un caso a actores, clases y un diagrama con cardinalidades.</li>
        <li>Especificar un caso de uso con include y extend.</li>
        <li>Distinguir requisito funcional de no funcional.</li>
        <li>Bosquejar un prototipo de navegación.</li>
        <li>Escribir historias de usuario y ubicarlas en el product backlog.</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para seguir explorando</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://scrumguides.org/scrum-guide.html" target="_blank" rel="noreferrer">Guía de Scrum</a>: la definición oficial del marco, en español.
        </li>
      </ul>
    </section>
  );
}
