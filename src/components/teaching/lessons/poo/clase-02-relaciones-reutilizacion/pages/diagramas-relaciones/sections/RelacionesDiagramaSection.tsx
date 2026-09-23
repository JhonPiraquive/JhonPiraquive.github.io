import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RelacionesDiagramaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Vínculos en el diagrama de Tienda Andes"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Símbolos que ya codificaste"}</h3>
      <p className="my-4">
        {
          "Asociación (-->): se relacionan sin propiedad fuerte. Agregación (o--): el todo agrupa partes que viven fuera. Composición (*--): la parte va ligada al todo. Cardinalidad (\"1\", \"0..*\") evita ambigüedad."
        }
      </p>
      <CompareTable
        headers={["Relación", "Mermaid", "En la tienda"]}
        rows={[
          ["Asociación", "-->", "Cliente realiza Pedido"],
          ["Agregación", "o--", "CarritoCompras agrupa Producto"],
          ["Composición", "*--", "Pedido compone LineaPedido"],
        ]}
      />
      <MermaidDiagram
        chart={`classDiagram
  Cliente "1" --> "0..*" Pedido : realiza
  CarritoCompras o-- Producto : agrega
  Pedido *-- LineaPedido : compone
  AsesorVentas --> Cliente : atiende`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Pedido y líneas con cardinalidad"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Pedido *-- "1..*" LineaPedido : compone
  class Pedido {
    +string Id
    +Total() decimal
    +AgregarLinea(string sku, int cantidad, decimal precio)
  }
  class LineaPedido {
    +string Sku
    +int Cantidad
    +decimal PrecioUnitario
    +Subtotal() decimal
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Incidente de onboarding"}</h3>
      <p className="my-4">
        {
          "Sin diagrama, un dev modeló Producto dentro del Pedido por composición y borraba catálogo al cancelar. El dibujo aclaró: Pedido *-- LineaPedido; LineaPedido guarda SKU y precio, no «posee» el Producto vivo del catálogo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Confusión típica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"*-- entre CarritoCompras y Producto — debería ser o--."}</li>
        <li>{"Omitir cardinalidad en Cliente–Pedido."}</li>
      </ul>
      <PracticeExercise
        prompt="¿AsesorVentas y Cliente en una sesión de mostrador: asociación, agregación o composición? Dos frases con ciclo de vida."
        hints={[
          "El cliente existe sin esa sesión",
          "No hay todo–parte fuerte",
          "Flecha simple --> suele bastar",
        ]}
        expectedKeywords={["asociación", "ciclo", "independiente"]}
        successMessage="Correcto. Colaboración puntual sin composición."
      />
    </section>
  );
}
