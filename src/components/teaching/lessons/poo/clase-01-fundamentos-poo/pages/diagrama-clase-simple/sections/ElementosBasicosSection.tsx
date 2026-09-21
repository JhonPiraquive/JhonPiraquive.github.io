import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const PRODUCTO_CODE = `public class Producto
{
    public string Nombre { get; }
    public decimal Precio { get; private set; }

    public Producto(string nombre, decimal precio)
    {
        Nombre = nombre;
        Precio = precio;
    }

    public void AplicarDescuento(decimal porcentaje)
    {
        if (porcentaje < 0 || porcentaje > 100)
            throw new ArgumentException("Porcentaje inválido");
        Precio -= Precio * (porcentaje / 100m);
    }
}`;

export function ElementosBasicosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Elementos básicos del diagrama"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Compartimentos UML: nombre, atributos, métodos."}</li>
        <li>{"En Mermaid classDiagram se modelan en el cuerpo de la clase."}</li>
        <li>{"Un diagrama por módulo o caso de uso — evitar el \"mapa del universo\"."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué representa una clase en el diagrama"}</h3>
      <p className="my-4">
        {
          "Cada caja expone la interfaz pública del dominio: qué datos guarda y qué operaciones ofrece. Los detalles de framework o logs no suelen aparecer."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama Mermaid — Producto"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class Producto {
    +string Nombre
    +decimal Precio
    +Producto(string nombre, decimal precio)
    +AplicarDescuento(decimal porcentaje)
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Correspondencia diagrama ↔ C# (mínimo)"}</h3>
      <CodeFiddle language="csharp" code={PRODUCTO_CODE} />
      <StepReveal
        title="Leer un diagrama de clase"
        steps={[
          {
            title: "Nombre de la clase",
            content: "La caja superior identifica el tipo del dominio (`Producto`).",
          },
          {
            title: "Atributos",
            content: "Datos que persiste el objeto (`Nombre`, `Precio`).",
          },
          {
            title: "Métodos",
            content: "Comportamiento público (`AplicarDescuento`).",
          },
          {
            title: "Mapeo a C#",
            content: "Cada miembro del diagrama tiene equivalente en la clase C#.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Saturar la caja con detalles de implementación irrelevantes."}</li>
        <li>{"Diagrama gigante sin foco — nadie lo mantiene."}</li>
        <li>{"Dibujar solo al final sin haber pensado el diseño."}</li>
      </ul>
    </section>
  );
}
