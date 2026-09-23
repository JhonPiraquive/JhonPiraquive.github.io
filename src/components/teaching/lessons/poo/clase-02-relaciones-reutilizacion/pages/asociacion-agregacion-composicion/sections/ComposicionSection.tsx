import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const PEDIDO_LINEA_CODE = `using System;
using System.Collections.Generic;
using System.Linq;

public class LineaPedido
{
    public string Sku { get; }
    public int Cantidad { get; }
    public decimal PrecioUnitario { get; }

    public LineaPedido(string sku, int cantidad, decimal precioUnitario)
    {
        if (string.IsNullOrWhiteSpace(sku)) throw new ArgumentException("SKU requerido");
        if (cantidad <= 0) throw new ArgumentException("Cantidad inválida");
        if (precioUnitario < 0) throw new ArgumentException("Precio inválido");
        Sku = sku;
        Cantidad = cantidad;
        PrecioUnitario = precioUnitario;
    }

    public decimal Subtotal() => Cantidad * PrecioUnitario;
}

public class Pedido
{
    private readonly List<LineaPedido> _lineas = new();

    public void AgregarLinea(string sku, int cantidad, decimal precioUnitario)
    {
        _lineas.Add(new LineaPedido(sku, cantidad, precioUnitario));
    }

    public void QuitarSku(string sku) => _lineas.RemoveAll(l => l.Sku == sku);

    public decimal Total() => _lineas.Sum(l => l.Subtotal());
}`;

const ANTIPATRON_LISTA_CODE = `// MAL: cualquiera muta las líneas sin pasar por Pedido
public List<LineaPedido> Lineas { get; set; }`;

export function ComposicionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Composición: el pedido «fabrica» sus líneas"}
      </h2>
      <p className="my-4">
        {
          "Composición es una relación todo–parte fuerte: la parte (LineaPedido) nace y muere con el todo (Pedido). No tiene sentido suelta en el modelo de negocio."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Precio congelado al confirmar"}</h3>
      <p className="my-4">
        {
          "Cuando el cliente paga, Tienda Andes guarda SKU, cantidad y precio unitario de ese momento. Si mañana sube el precio en catálogo, el pedido histórico no cambia. LineaPedido nace dentro de un Pedido concreto."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Código"}</h3>
      <CodeFiddle language="csharp" code={PEDIDO_LINEA_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Lista pública = pierdes el control"}</h3>
      <CodeFiddle language="csharp" code={ANTIPATRON_LISTA_CODE} />
      <p className="my-4">
        {"Código externo podría insertar líneas inválidas o vaciar la lista sin reglas de negocio."}
      </p>
      <StepReveal
        title="AgregarLinea por dentro"
        steps={[
          { title: "Cliente", content: 'pedido.AgregarLinea("TE-ANDES", 2, 12m);' },
          {
            title: "Pedido crea",
            content: "Internamente new LineaPedido(...) — la línea nace con el pedido.",
          },
          { title: "Validación", content: "El constructor de LineaPedido valida cantidad y precio." },
          { title: "Total", content: "pedido.Total() sin exponer la lista mutable." },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"No confundir con el catálogo"}</h3>
      <p className="my-4">
        {
          "Un error grave es reutilizar la misma instancia de Producto del catálogo como línea: un cambio de Precio en vitrina alteraría pedidos viejos. La línea guarda copia del precio (y SKU) al confirmar."
        }
      </p>
      <MermaidDiagram
        chart={`classDiagram
  Pedido *-- LineaPedido : compone
  class Pedido {
    -List~LineaPedido~ _lineas
    +AgregarLinea(...)
    +Total()
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Confusión típica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Crear LineaPedido en Main y pasarla a Pedido cuando el dominio exige composición."}</li>
        <li>{"Exponer List<LineaPedido> pública «para facilitar» — rompe encapsulamiento."}</li>
      </ul>
    </section>
  );
}
