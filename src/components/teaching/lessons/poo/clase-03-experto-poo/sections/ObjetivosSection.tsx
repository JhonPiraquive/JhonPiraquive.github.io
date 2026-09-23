export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta clase podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Usar abstracción con clases abstractas e interfaces; elegir cuándo cada una en Tienda Andes."
          }
        </li>
        <li>
          {
            "Aplicar polimorfismo (misma llamada, comportamiento distinto en runtime) sobre contratos y herencia."
          }
        </li>
        <li>
          {
            "Enunciar y aplicar los cinco principios SOLID (S, O, L, I, D) con ejemplos del caso."
          }
        </li>
        <li>
          {
            "Evaluar modularidad, cohesión y acoplamiento al empaquetar dominio e infraestructura."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Entregable de esta clase"}</p>
      <p className="my-4">
        {
          "Diseño extensible de cobros/avisos/persistencia con contratos, SOLID aplicado y frontera dominio/infra clara — cierre del track."
        }
      </p>
      <p className="my-4">
        <strong>{"Prerrequisitos:"}</strong>{" "}
        {"Clase 2: herencia Producto→Libro/Gadget, composición Pedido→líneas, diagramas con relaciones."}
      </p>
    </section>
  );
}