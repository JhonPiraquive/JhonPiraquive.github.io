import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function CasoIntegradoTiendaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Caso integrado: tienda de pedidos"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Modelo completo: Cliente, Pedido, LineaPedido, Producto."}</li>
        <li>{"Cardinalidades explícitas en cada relación."}</li>
        <li>{"Señal de diseño: clase con 15 métodos de dominios distintos — preview SRP."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso integrado tienda (modelo completo)"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  class Cliente {
    +string Id
    +string Nombre
  }
  class Producto {
    +string Id
    +string Nombre
    +decimal Precio
  }
  class LineaPedido {
    +string ProductoId
    +int Cantidad
    +decimal PrecioUnitario
    +Subtotal() decimal
  }
  class Pedido {
    +string Id
    +EstadoPedido Estado
    +Total() decimal
    +AgregarLinea(string productoId, int cantidad)
  }
  Cliente "1" --> "0..*" Pedido : realiza
  Pedido *-- "1..*" LineaPedido : compone
  LineaPedido --> Producto : referencia`}
      />
      <StepReveal
        title="Caso tienda: de UML a C#"
        steps={[
          {
            title: "Caja Pedido con métodos",
            content: "Total() y AgregarLinea definen comportamiento del agregado raíz.",
          },
          {
            title: "Flecha composición a LineaPedido",
            content: "Las líneas se crean y destruyen con el pedido — *-- con cardinalidad 1..*.",
          },
          {
            title: "Referencia a Producto",
            content: "LineaPedido apunta al catálogo; no borra Producto al eliminar línea.",
          },
          {
            title: "Validar cardinalidad",
            content: "Cliente 1 realiza 0..* Pedidos — un cliente puede tener varios pedidos o ninguno.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: refactor de checkout"}</h3>
      <p className="my-4">
        {
          "Un equipo de e-commerce dibujó en 90 minutos Cliente, Pedido, LineaPedido, Producto, IPasarelaPago y implementaciones. Cardinalidad y composición acordadas antes de tocar código."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Clase \"Dios\" en el diagrama — PedidoService con 15 métodos de dominios distintos."}</li>
        <li>{"Desincronía diagrama-código — acordar quién actualiza el Mermaid."}</li>
        <li>{"Incluir todo el sistema en una sola figura."}</li>
      </ul>
      <PracticeExercise
        prompt="Dibuja en Mermaid Usuario, Carrito y Producto. Conecta carrito con varios productos. Justifica agregación vs composición."
        hints={[
          "Carrito o-- Producto si el producto existe en catálogo sin carrito",
          "Cardinalidad 0..* en productos del carrito",
          "No uses composición si Producto es catálogo compartido",
        ]}
        expectedKeywords={["Carrito", "Producto", "agregación", "o--"]}
        successMessage="Correcto. Agregación refleja que el producto del catálogo sobrevive al carrito."
      />
    </section>
  );
}
