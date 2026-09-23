import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Práctica guiada — mapa final Tienda Andes"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué integrar"}</h3>
      <p className="my-4">
        {
          "Contratos en el borde (pago, persistencia), polimorfismo en catálogo (Libro/Gadget), SOLID en servicios y módulos con frontera dominio/infra. No abras otro caso: este diagrama es la foto del capstone."
        }
      </p>
      <MermaidDiagram
        title="Dominio + contratos"
        description="Herencia de productos e interfaces en el borde"
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
    <<abstract>>
    +string Sku
    +decimal Precio
    +CalcularDescuento()* decimal
  }
  class Libro {
    +string Isbn
  }
  class Gadget {
    +string Marca
  }
  class IPasarelaPago {
    <<interface>>
    +Cobrar(decimal monto)
  }
  class IRepositorioPedidos {
    <<interface>>
    +Guardar(Pedido p)
  }
  Cliente "1" --> "*" Pedido : realiza
  Pedido "1" *-- "*" LineaPedido : compone
  LineaPedido --> Producto : referencia
  Producto <|-- Libro
  Producto <|-- Gadget
  Pedido ..> IPasarelaPago : usa
  Pedido ..> IRepositorioPedidos : usa`}
      />
      <Callout title="En el aula" variant="callout-tip">
        <p className="mb-0">
          {
            "~15 min: rotula en el diagrama qué es dominio y qué es infra. Luego el reto capstone. Esta página cierra el track POO."
          }
        </p>
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Esqueleto C# de contratos"}</h3>
      <CodeFiddle
        title="ContratosTienda.cs"
        language="csharp"
        filename="ContratosTienda.cs"
        code={`public interface IPasarelaPago
{
    void Cobrar(decimal monto);
}

public interface IRepositorioPedidos
{
    void Guardar(Pedido pedido);
}

public abstract class Producto
{
    public string Sku { get; private set; }
    public decimal Precio { get; private set; }
    protected Producto(string sku, decimal precio)
    {
        if (string.IsNullOrWhiteSpace(sku)) throw new ArgumentException(nameof(sku));
        if (precio < 0) throw new ArgumentOutOfRangeException(nameof(precio));
        Sku = sku;
        Precio = precio;
    }
    public abstract decimal CalcularDescuento();
}
`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comprueba antes del reto"}</h3>
      <p className="my-4">
        {
          "¿Podrías sustituir IPasarelaPago en Main sin recompilar la lógica de Pedido? ¿CalcularDescuento cumple LSP en todas las derivadas? Si sí, avanza al capstone."
        }
      </p>
    </section>
  );
}
