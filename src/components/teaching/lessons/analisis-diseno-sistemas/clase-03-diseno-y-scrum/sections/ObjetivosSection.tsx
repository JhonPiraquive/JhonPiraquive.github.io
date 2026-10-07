export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Cierras el módulo con diseño: del caso Logística SAS al modelo, a los casos de uso y a las historias
        de usuario en Scrum.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Pasar del caso a actores, clases y un diagrama de análisis con cardinalidades.</li>
        <li>Especificar casos de uso con include y extend, y distinguir requisito funcional de no funcional.</li>
        <li>Bosquejar un prototipo de navegación y escribir historias de usuario en el product backlog.</li>
      </ul>
    </section>
  );
}