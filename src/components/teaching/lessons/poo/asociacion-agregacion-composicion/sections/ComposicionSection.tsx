import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const PEDIDO_LINEA_CODE = `using System;
using System.Collections.Generic;
using System.Linq;

public class LineaPedido
{
    public string Producto { get; }
    public int Cantidad { get; }
    public decimal PrecioUnitario { get; }

    public LineaPedido(string producto, int cantidad, decimal precioUnitario)
    {
        if (string.IsNullOrWhiteSpace(producto)) throw new ArgumentException("Producto requerido");
        if (cantidad <= 0) throw new ArgumentException("Cantidad inválida");
        if (precioUnitario < 0) throw new ArgumentException("Precio inválido");
        Producto = producto;
        Cantidad = cantidad;
        PrecioUnitario = precioUnitario;
    }

    public decimal Subtotal() => Cantidad * PrecioUnitario;
}

public class Pedido
{
    private readonly List<LineaPedido> _lineas = new();

    public void AgregarLinea(string producto, int cantidad, decimal precioUnitario)
    {
        _lineas.Add(new LineaPedido(producto, cantidad, precioUnitario));
    }

    public void QuitarProducto(string producto)
    {
        _lineas.RemoveAll(l => l.Producto == producto);
    }

    public decimal Total() => _lineas.Sum(l => l.Subtotal());
}`;

const ANTIPATRON_LISTA_CODE = `// MAL: rompe el control del Pedido sobre sus líneas
public List<LineaPedido> Lineas { get; set; }`;

export function ComposicionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Composición: todo–parte fuerte"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Composición = la parte no tiene sentido (o no existe en el modelo) sin el todo."}</li>
        <li>{"El todo crea y controla las partes internamente."}</li>
        <li>{"Ciclo de vida acoplado: si el todo desaparece, las partes del modelo van con él."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "En composición, el todo es responsable de instanciar y gobernar sus partes. Ejemplo: un Pedido compone LineaPedido; la línea pertenece a un pedido concreto con precio congelado."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de composición"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Las partes se crean solo mediante métodos del todo (AgregarLinea)."}</li>
        <li>{"No se pasa una parte ya construida desde afuera si el dominio exige que solo exista dentro del todo."}</li>
        <li>{"La lista interna es privada; no se expone mutable al exterior."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: Pedido y LineaPedido"}</h3>
      <CodeFiddle language="csharp" code={PEDIDO_LINEA_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Anti-patrón: lista pública"}</h3>
      <CodeFiddle language="csharp" code={ANTIPATRON_LISTA_CODE} />
      <p className="my-4">
        {"Código externo puede mutar o reemplazar líneas sin pasar por reglas del Pedido."}
      </p>
      <StepReveal
        title="Línea de pedido"
        steps={[
          { title: "Cliente llama", content: 'pedido.AgregarLinea("Teclado", 2, 49.99m);' },
          {
            title: "Pedido instancia",
            content: "Internamente new LineaPedido(...) — la parte nace dentro del todo.",
          },
          {
            title: "Validación",
            content: "El constructor de LineaPedido valida producto, cantidad y precio.",
          },
          { title: "Total", content: "pedido.Total() suma subtotales sin exponer la lista." },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: pedido confirmado vs catálogo"}</h3>
      <p className="my-4">
        {
          "Un marketplace reutilizaba instancias de Producto del catálogo como líneas de pedido. Un cambio de precio en catálogo alteraba pedidos históricos."
        }
      </p>
      <p className="my-4">
        {
          "Lección: Pedido compone LineaPedido con precio y cantidad congelados al momento de la compra."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama UML (preview)"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Pedido *-- LineaPedido : compone
  class Pedido {
    -List~LineaPedido~ _lineas
    +AgregarLinea(...)
    +Total()
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Crear LineaPedido en Main y pasarla a Pedido cuando el dominio exige composición."}</li>
        <li>{"Olvidar validar en AgregarLinea — delegar todo afuera rompe invariantes."}</li>
      </ul>
    </section>
  );
}
