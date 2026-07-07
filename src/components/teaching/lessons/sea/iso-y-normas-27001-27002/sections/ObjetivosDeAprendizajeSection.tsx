export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar qué es una norma ISO en términos sencillos y para qué sirve."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Diferenciar ISO/IEC 27001 (sistema de gestión) vs 27002 (controles) en 2 frases."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Nombrar 6 temas típicos de controles (acceso, incidentes, criptografía, etc.)."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Relacionar “cumplimiento” con “reducción de riesgo” sin confundirlos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Proponer 3 evidencias que demostrarían madurez de seguridad en un equipo."}</li>
      </ul>
    </section>
  );
}
