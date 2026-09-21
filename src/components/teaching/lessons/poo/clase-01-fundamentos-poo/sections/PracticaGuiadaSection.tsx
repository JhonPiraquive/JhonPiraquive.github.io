import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Práctica guiada — Tienda Andes (parte 1)"}
      </h2>
      <p className="my-4">
        {
          "Caso transversal del módulo: una tienda universitaria vende productos (libros, gadgets) con clientes y pedidos. Trabaja en C#."
        }
      </p>
      <MermaidDiagram
        title="Mapa del caso Tienda Andes"
        description="Vista de alto nivel del dominio que atraviesa las 3 clases"
        chart={`classDiagram
  direction TB
  class Cliente {
    +string Nombre
    +RealizarPedido()
  }
  class Pedido {
    +Date Fecha
    +AgregarLinea()
  }
  class LineaPedido {
    +int Cantidad
  }
  class Producto {
    +string Sku
    +decimal Precio
  }
  class Libro {
    +string Isbn
  }
  class Gadget {
    +string Marca
  }
  Cliente "1" --> "*" Pedido : realiza
  Pedido "1" *-- "*" LineaPedido : compone
  LineaPedido --> Producto : referencia
  Libro --|> Producto
  Gadget --|> Producto`}
      />
      <Callout title="Entregable de esta clase" variant="callout-tip">
        <p className="mb-0">
          {
            "Completa el reto de abajo en papel o en tu IDE. Guarda nombres de clases y relaciones: la siguiente clase las reutiliza."
          }
        </p>
      </Callout>
      <CodeFiddle
        title="Plantilla mínima (C#)"
        language="csharp"
        filename="Producto.cs"
        code={`public class Producto
{
    public string Sku { get; private set; }
    public decimal Precio { get; private set; }

    public Producto(string sku, decimal precio)
    {
        if (string.IsNullOrWhiteSpace(sku)) throw new ArgumentException(nameof(sku));
        if (precio < 0) throw new ArgumentOutOfRangeException(nameof(precio));
        Sku = sku;
        Precio = precio;
    }
}
`}
      />
    </section>
  );
}
