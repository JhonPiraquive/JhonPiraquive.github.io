export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Autoevaluación</h2>
      <p className="my-4">El estudiante puede pasar a la siguiente clase cuando cumple cada punto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Definir un sistema de información y señalar entrada, proceso y salida en un caso.</li>
        <li>Distinguir un sistema abierto de uno cerrado.</li>
        <li>Reconocer cuándo se trata de un TPS, un DSS, un sistema estratégico o un ERP.</li>
        <li>Nombrar los roles del equipo y tres criterios de calidad de un sistema.</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para seguir explorando</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://es.wikipedia.org/wiki/Sistema_de_informaci%C3%B3n" target="_blank" rel="noreferrer">Wikipedia: Sistema de información</a>: definición general y ejemplos.
        </li>
      </ul>
    </section>
  );
}
