export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar qué es SQL Injection (SQLi) y por qué ocurre."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Reconocer 4 patrones de entrada sospechosa en campos/URLs."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Describir el impacto de SQLi en CIA (qué se puede romper)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Enumerar 5 mitigaciones concretas (priorizando server-side)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Distinguir “validación” vs “parametrización” con claridad."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Proponer un plan de pruebas básico para detectar SQLi en un endpoint."}</li>
      </ul>
    </section>
  );
}
