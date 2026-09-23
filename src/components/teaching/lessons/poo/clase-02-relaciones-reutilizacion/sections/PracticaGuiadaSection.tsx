import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Práctica guiada — Tienda Andes (parte 2)"}
      </h2>
      <p className="my-4">
        {
          "Retomas el Producto encapsulado de Clase 1. Hoy especializas el catálogo con herencia y cierras ventas con un Pedido que compone sus líneas — tal como acordaste en el diagrama."
        }
      </p>
      <MermaidDiagram
        title="Tienda Andes — relaciones de Clase 2"
        description="Herencia en catálogo y composición en pedido confirmado"
        chart={`classDiagram
  direction TB
  class Cliente {
    +string Nombre
  }
  class Pedido {
    +DateTime Fecha
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
  Producto <|-- Libro
  Producto <|-- Gadget`}
      />
      <Callout title="Pasos en el aula" variant="callout-tip">
        <ol className="mb-0 list-decimal pl-5">
          <li>
            {"Implementa "}
            <code>{"Libro : Producto"}</code>
            {" y "}
            <code>{"Gadget : Producto"}</code>
            {"."}
          </li>
          <li>{"Override en Descripcion() o DescripcionEtiqueta() en al menos una derivada."}</li>
          <li>{"Pedido crea LineaPedido solo dentro de AgregarLinea (composición)."}</li>
          <li>{"En Mermaid usa Producto <|-- Derivada (triángulo hacia Producto)."}</li>
        </ol>
      </Callout>
      <Callout title="Error común" variant="callout-warning">
        <p className="mb-0">
          {
            "class Pedido : LineaPedido o heredar de List<>. Un pedido tiene líneas; no es una línea ni una lista genérica."
          }
        </p>
      </Callout>
      <CodeFiddle
        title="Esqueleto herencia + composición (C#)"
        language="csharp"
        filename="TiendaAndesParte2.cs"
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
    public virtual string Descripcion() => $"{Sku} — {Precio:C}";
}

public class Libro : Producto
{
    public string Isbn { get; private set; }
    public Libro(string sku, decimal precio, string isbn) : base(sku, precio)
    {
        Isbn = isbn;
    }
    public override string Descripcion() => $"Libro {Isbn} / {base.Descripcion()}";
}

public class LineaPedido
{
    public string Sku { get; }
    public int Cantidad { get; }
    public decimal PrecioUnitario { get; }
    public LineaPedido(string sku, int cantidad, decimal precioUnitario)
    {
        Sku = sku;
        Cantidad = cantidad;
        PrecioUnitario = precioUnitario;
    }
}

public class Pedido
{
    private readonly List<LineaPedido> _lineas = new();
    public DateTime Fecha { get; } = DateTime.UtcNow;
    public void AgregarLinea(string sku, int cantidad, decimal precioUnitario)
        => _lineas.Add(new LineaPedido(sku, cantidad, precioUnitario));
}
`}
      />
    </section>
  );
}
