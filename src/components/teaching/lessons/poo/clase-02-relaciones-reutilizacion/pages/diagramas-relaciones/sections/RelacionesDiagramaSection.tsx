import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RelacionesDiagramaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Relaciones: asociación, agregación y composición"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Asociación (-->): clases relacionadas sin propiedad fuerte."}</li>
        <li>{"Agregación (o--): parte puede existir fuera del todo."}</li>
        <li>{"Composición (*--): ciclo de vida ligado — parte muere con el todo."}</li>
        <li>{"Cardinalidad: 1, 0..*, 1..* en los extremos."}</li>
      </ul>
      <CompareTable
        headers={["Relación", "Símbolo Mermaid", "Ciclo de vida", "Ejemplo típico"]}
        rows={[
          ["Asociación", "-->", "Independientes", "Cliente → Pedido"],
          ["Agregación", "o--", "Parte puede existir sola", "Equipo o-- Jugador"],
          ["Composición", "*--", "Parte muere con el todo", "Pedido *-- LineaPedido"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Relaciones recordatorio"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Equipo o-- Jugador
  Pedido *-- LineaPedido
  Doctor --> Paciente : atiende`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Composición Pedido — LineaPedido"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Pedido *-- "1..*" LineaPedido : compone
  class Pedido {
    +string Id
    +Total() decimal
    +AgregarLinea(string productoId, int cantidad)
  }
  class LineaPedido {
    +string ProductoId
    +int Cantidad
    +decimal PrecioUnitario
    +Subtotal() decimal
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: onboarding tienda online"}</h3>
      <p className="my-4">
        {
          "Sin diagrama, un dev asumió que Producto pertenece al Pedido por composición y borró catálogo al cancelar pedidos. El diagrama aclaró: Pedido *-- LineaPedido (composición), LineaPedido --> Producto (referencia al catálogo)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Composición donde hay agregación (Equipo/Jugador)."}</li>
        <li>{"Asociación tratada como composición."}</li>
        <li>{"Omitir cardinalidad — deja ambiguo el modelo."}</li>
      </ul>
      <PracticeExercise
        prompt="Para Doctor y Paciente en una consulta, ¿asociación, agregación o composición? Argumenta ciclo de vida en 2–3 frases."
        hints={[
          "El paciente existe sin esa consulta específica",
          "No es composición — el paciente no muere con la consulta",
          "Asociación simple con flecha suele bastar",
        ]}
        expectedKeywords={["asociación", "ciclo de vida", "independiente"]}
        successMessage="Correcto. Doctor y Paciente se relacionan sin propiedad fuerte de ciclo de vida."
      />
    </section>
  );
}
