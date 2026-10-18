export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Autoevaluación</h2>
      <p className="my-4">El estudiante puede pasar a la siguiente clase cuando cumple cada punto:</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Definir UML y usar con precisión clase, objeto, actor, requerimiento y caso de uso.</li>
        <li>Ordenar las fases del ciclo de vida del software.</li>
        <li>Explicar en qué se diferencia el enfoque secuencial del ágil.</li>
        <li>Nombrar las cinco actas de planificación y su entregable.</li>
        <li>Redactar preguntas abiertas para una entrevista de requerimientos.</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Para seguir explorando</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://www.uml.org/" target="_blank" rel="noreferrer">UML.org</a>: sitio oficial de la notación.
        </li>
        <li>
          <a href="https://agilemanifesto.org/iso/es/manifesto.html" target="_blank" rel="noreferrer">Manifiesto ágil</a>: los valores y principios originales, en español.
        </li>
      </ul>
    </section>
  );
}
