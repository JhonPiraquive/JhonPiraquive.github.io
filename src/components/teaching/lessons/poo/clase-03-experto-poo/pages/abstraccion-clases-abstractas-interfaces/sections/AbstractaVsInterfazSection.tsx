import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function AbstractaVsInterfazSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"¿Abstracta o interfaz en Tienda Andes?"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Dos preguntas antes de elegir"}</h3>
      <p className="my-4">
        {
          "¿Varias clases comparten estado o pasos idénticos (validar SKU, calcular descuento base)? Piensa en clase abstracta Producto. ¿Solo necesitas intercambiar un comportamiento en el borde (pago, persistencia)? Piensa en interfaz IPago o IRepositorioPedidos."
        }
      </p>
      <CompareTable
        headers={["Criterio", "Clase abstracta", "Interfaz"]}
        rows={[
          ["Instanciable con new", "No", "No (la interfaz sola)"],
          ["Estado / campos compartidos", "Sí", "No"],
          ["Código común en base", "Sí", "No (solo contrato)"],
          ["Múltiples roles por clase", "Una base en C#", "Varias interfaces"],
          ["En la tienda", "Producto → Libro / Gadget", "IPago, IRepositorioPedidos"],
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Combinar ambos: Producto + IExportable"}</h3>
      <p className="my-4">
        {
          "Libro hereda invariantes de Producto (SKU, precio) y además puede cumplir un contrato lateral para exportar catálogo a CSV — sin mezclar eso en la jerarquía de productos."
        }
      </p>
      <CodeFiddle
        language="csharp"
        code={`public interface IExportable
{
    string ExportarLineaCsv();
}

public abstract class Producto
{
    public string Sku { get; }
    public decimal Precio { get; }
    protected Producto(string sku, decimal precio)
    {
        Sku = sku;
        Precio = precio;
    }
    public abstract decimal CalcularDescuento();
}

public class Libro : Producto, IExportable
{
    public string Isbn { get; }
    public Libro(string sku, decimal precio, string isbn) : base(sku, precio) => Isbn = isbn;
    public override decimal CalcularDescuento() => Precio * 0.10m;
    public string ExportarLineaCsv() => $"{Sku},{Precio},{Isbn}";
}`}
      />
      <MermaidDiagram
        chart={`classDiagram
  class IExportable {
    <<interface>>
    +ExportarLineaCsv()
  }
  class Producto {
    <<abstract>>
    +CalcularDescuento()*
  }
  Producto <|-- Libro
  IExportable <|.. Libro`}
      />
      <Callout title="Malentendidos en C#" variant="callout-warning">
        <ul className="mb-0 list-disc pl-5">
          <li>
            {
              "Abstracción (idea) ≠ abstract class. Puedes abstraer solo con IPago; no hace falta una clase abstracta Pago."
            }
          </li>
          <li>
            {
              "En C#: una sola clase base, muchas interfaces. Libro : Producto, IExportable compila; dos bases no."
            }
          </li>
          <li>
            {
              "«Siempre interfaz; herencia mala» es falso aquí: Libro y Gadget comparten reglas de Producto; la base está justificada."
            }
          </li>
        </ul>
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Decisión rápida"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Pagos distintos, sin flujo común en base → IPago."}</li>
        <li>{"Avisos de pedido con validación y log compartidos → NotificacionPedido abstracta."}</li>
        <li>{"Catálogo con descuento variable + exportación → Producto abstracta + IExportable."}</li>
      </ul>
    </section>
  );
}
