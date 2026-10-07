export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Al terminar esta clase, como estudiante de tecnología, podrás mirar una empresa y explicar qué problema
        resuelve su sistema de información, sin programar todavía.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Explicar qué es un sistema de información y señalar entrada, proceso y salida en un caso real.</li>
        <li>Distinguir clasificación por entorno (abierto/cerrado) de clasificación por uso (TPS, DSS, ERP).</li>
        <li>Nombrar los roles del equipo y aplicar criterios de calidad a un sistema existente o propuesto.</li>
      </ul>
    </section>
  );
}
