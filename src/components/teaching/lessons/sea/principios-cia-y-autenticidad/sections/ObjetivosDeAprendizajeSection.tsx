export function ObjetivosDeAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"Definir confidencialidad, integridad, disponibilidad y autenticidad con ejemplos."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Clasificar 8 incidentes simples según qué principio se rompió."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Identificar 3 trade‑offs reales entre disponibilidad y seguridad."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Explicar por qué autenticidad no es lo mismo que confidencialidad."}</li>
      </ul>
      <ul className="my-4 list-disc pl-6">
        <li>{"Redactar una regla de diseño usando CIA+A para un endpoint de login."}</li>
      </ul>
    </section>
  );
}
