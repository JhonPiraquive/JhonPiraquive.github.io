import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function CasoIntegradoTiendaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tienda Andes en un solo diagrama"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Plano antes del sprint"}</h3>
      <p className="my-4">
        {
          "Este diagrama resume Clase 2: herencia en catálogo, composición en pedido confirmado, asociación cliente–pedido y referencia de línea al SKU (sin borrar catálogo)."
        }
      </p>
      <MermaidDiagram
        chart={`classDiagram
  class Cliente {
    +string Id
    +string Nombre
  }
  class Producto {
    +string Sku
    +decimal Precio
    +DescripcionEtiqueta()*
  }
  class Libro {
    +string Isbn
  }
  class Gadget {
    +string Marca
  }
  class LineaPedido {
    +string Sku
    +int Cantidad
    +decimal PrecioUnitario
    +Subtotal() decimal
  }
  class Pedido {
    +string Id
    +Total() decimal
    +AgregarLinea(string sku, int cantidad, decimal precio)
  }
  class CarritoCompras {
    +Agregar(Producto)
    +Quitar(string sku)
  }
  Producto <|-- Libro
  Producto <|-- Gadget
  Cliente "1" --> "0..*" Pedido : realiza
  Pedido *-- "1..*" LineaPedido : compone
  CarritoCompras o-- Producto : agrega`}
      />
      <StepReveal
        title="Leer el diagrama como compañero nuevo"
        steps={[
          {
            title: "Catálogo",
            content: "Producto <|-- Libro/Gadget — «es un»; override en DescripcionEtiqueta.",
          },
          {
            title: "Carrito",
            content: "o-- Producto — agregación; vaciar carrito no elimina catálogo.",
          },
          {
            title: "Pedido",
            content: "*-- LineaPedido — composición; precio congelado en la línea.",
          },
          {
            title: "Cliente",
            content: "Flecha realiza con 0..* — un cliente, varios pedidos o ninguno.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama pequeño, código alineado"}</h3>
      <p className="my-4">
        {
          "En un taller real, el equipo acordó este recorte en una hora antes de tocar C#. Regla: si cambias AgregarLinea, actualizas la caja Pedido en Mermaid."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Alerta de diseño (preview)"}</h3>
      <p className="my-4">
        {
          "Si dibujas una sola clase PedidoService con cobro, envío, inventario y reportes, el diagrama te avisa antes de Clase 3 (SOLID): demasiadas razones para cambiar en una caja."
        }
      </p>
      <PracticeExercise
        prompt="Añade CarritoCompras o-- Producto al diagrama con cardinalidad 0..*. ¿Agregación o composición? Una frase."
        hints={[
          "Producto del catálogo sobrevive al carrito",
          "Símbolo o--",
          "No uses *-- para catálogo compartido",
        ]}
        expectedKeywords={["CarritoCompras", "agregación", "o--"]}
        successMessage="Correcto. Carrito agrupa referencias al catálogo."
      />
    </section>
  );
}
