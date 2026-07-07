export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir activo, amenaza, vulnerabilidad, impacto y probabilidad con un ejemplo."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Construir una matriz 3x3 (bajo/medio/alto) con 6 riesgos de una app web."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Priorizar 3 mitigaciones que den mayor reducción de riesgo por esfuerzo."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Relacionar riesgos con controles (ISO/IEC 27002 como referencia conceptual)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Redactar una justificación corta de decisión (“aceptar, mitigar, transferir, evitar”)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Detectar duplicados: mismo riesgo con diferentes síntomas."}</li>
      </ul>
    </section>
  );
}
