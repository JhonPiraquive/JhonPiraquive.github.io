export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Esta clase arma el vocabulario y el proceso de análisis que usarás en cualquier proyecto de software
        de una tecnología.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Definir UML y usar con precisión clase, objeto, actor, requerimiento y caso de uso.</li>
        <li>Ordenar las fases del ciclo de vida y elegir entre un enfoque secuencial y uno ágil.</li>
        <li>Preparar actas de planificación y preguntas de entrevista para levantar requerimientos.</li>
      </ul>
    </section>
  );
}
