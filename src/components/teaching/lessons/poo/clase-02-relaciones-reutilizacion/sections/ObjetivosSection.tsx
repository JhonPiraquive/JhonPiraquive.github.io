export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta clase podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Modelar «es un» con herencia (Producto → Libro / Gadget) y saber cuándo no heredar."
          }
        </li>
        <li>
          {
            "Distinguir override (misma firma, runtime) de sobrecarga / overload (firmas distintas, compile time)."
          }
        </li>
        <li>
          {
            "Elegir asociación, agregación o composición según ciclo de vida (asesor–cliente, carrito, Pedido→líneas)."
          }
        </li>
        <li>
          {
            "Dibujar UML con herencia, interfaces y vínculos del caso Tienda Andes."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Entregable de esta clase"}</p>
      <p className="my-4">
        {
          "Jerarquía de catálogo + Pedido que compone líneas, con diagrama coherente. Eso alimenta abstracción y polimorfismo en la Clase 3."
        }
      </p>
      <p className="my-4">
        <strong>{"Prerrequisitos:"}</strong>{" "}
        {"Clase 1: clase/objeto, encapsulamiento e invariantes en Producto."}
      </p>
    </section>
  );
}
