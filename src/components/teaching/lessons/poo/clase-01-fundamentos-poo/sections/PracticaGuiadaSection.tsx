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
          "Hilo del curso: Tienda Andes. Hoy solo el catálogo: un Producto encapsulado (Sku, Precio, descuento). Cliente, Pedido y “es-un” llegan en Clase 2."
        }
      </p>
      <MermaidDiagram
        title="Producto — caja de Clase 1"
        description="Sin herencia ni composición todavía"
        chart={`classDiagram
  direction TB
  class Producto {
    +string Sku
    +decimal Precio
    +Producto(string sku, decimal precio)
    +void AplicarDescuento(decimal porcentaje)
  }`}
      />
      <Callout title="Pasos en el aula" variant="callout-tip">
        <ol className="mb-0 list-decimal pl-5">
          <li>{"Crea un proyecto consola: "}<code>{"dotnet new console"}</code>{"."}</li>
          <li>{"Pega la plantilla Producto y prueba un SKU vacío (debe fallar)."}</li>
          <li>{"Dibuja la misma caja en Mermaid o papel; guarda el diagrama para Clase 2."}</li>
        </ol>
      </Callout>
      <Callout title="Error común" variant="callout-warning">
        <p className="mb-0">
          {
            "Malentendido: creer que dibujar Libro y Gadget ya es obligatorio. Hoy no: primero un Producto válido y encapsulado."
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

    public void AplicarDescuento(decimal porcentaje)
    {
        if (porcentaje < 0 || porcentaje > 100)
            throw new ArgumentOutOfRangeException(nameof(porcentaje));
        Precio = Precio * (1 - porcentaje / 100m);
    }
}
`}
      />
    </section>
  );
}
