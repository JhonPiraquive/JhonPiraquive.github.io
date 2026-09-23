import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function HerenciaInterfacesDiagramaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Herencia e interfaces en Mermaid"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Del código al dibujo"}</h3>
      <p className="my-4">
        {
          "Antes de seguir escribiendo clases, el equipo de Tienda Andes acuerda un diagrama de clases: estructura estática (no secuencia de clics). Herencia de productos usa flecha con triángulo hacia la base: en Mermaid, Base <|-- Derivada."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Catálogo: Producto y derivadas"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Producto <|-- Libro
  Producto <|-- Gadget
  class Producto {
    +string Sku
    +decimal Precio
    +DescripcionEtiqueta()*
  }
  class Libro {
    +string Isbn
    +DescripcionEtiqueta()
  }
  class Gadget {
    +string Marca
    +DescripcionEtiqueta()
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Pago: interfaz, no herencia de Pedido"}</h3>
      <p className="my-4">
        {
          "Un contrato (interfaz) dice qué debe hacer una clase sin fijar cómo. En Mermaid: <<interface>> y línea punteada <|.. hacia la implementación."
        }
      </p>
      <MermaidDiagram
        chart={`classDiagram
  class IPasarelaPago {
    <<interface>>
    +Cobrar(decimal monto)
  }
  IPasarelaPago <|.. PasarelaTarjeta
  IPasarelaPago <|.. PasarelaTransferencia
  class Checkout {
    +Pagar(decimal monto)
  }
  Checkout --> IPasarelaPago : usa`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Confusión típica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Usar <|-- entre interfaz e implementación — debe ser <|.."}</li>
        <li>{"Invertir la flecha de herencia (--|> en lugar de <|--)."}</li>
        <li>{"Mezclar diagrama de clases con diagrama de secuencia."}</li>
      </ul>
      <PracticeExercise
        prompt="Añade Artesania : Producto al diagrama del catálogo con override de DescripcionEtiqueta en la caja. Usa <|--."
        hints={[
          "Artesania hereda de Producto",
          "Método en cuerpo de Artesania",
          "Triángulo apunta a Producto",
        ]}
        expectedKeywords={["Artesania", "<|--", "Producto"]}
        successMessage="Correcto. Jerarquía de catálogo legible en Mermaid."
      />
    </section>
  );
}
