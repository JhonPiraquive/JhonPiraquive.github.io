export function ObjetivosAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Modelar un dominio sencillo con clases, objetos y encapsulamiento en C#."}</li>
        <li>{"Elegir herencia, composición o interfaces según la relación real entre conceptos."}</li>
        <li>{"Aplicar polimorfismo y principios SOLID para mantener el diseño extensible."}</li>
        <li>{"Leer y dibujar diagramas de clases UML que comuniquen el diseño."}</li>
      </ul>
    </section>
  );
}
