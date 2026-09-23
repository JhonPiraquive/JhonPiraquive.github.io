import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const CARRITO_PRODUCTO_CODE = `using System;
using System.Collections.Generic;

public class Producto
{
    public string Sku { get; }
    public decimal Precio { get; }
    public Producto(string sku, decimal precio)
    {
        Sku = sku;
        Precio = precio;
    }
}

public class CarritoCompras
{
    private readonly List<Producto> _items = new();

    public void Agregar(Producto producto) => _items.Add(producto);

    public bool Quitar(string sku)
    {
        var idx = _items.FindIndex(p => p.Sku == sku);
        if (idx < 0) return false;
        _items.RemoveAt(idx);
        return true;
    }

    public void Listar()
    {
        foreach (var p in _items)
            Console.WriteLine($"{p.Sku} — {p.Precio:C}");
    }
}`;

export function AgregacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Agregación: el carrito agrupa productos del catálogo"}
      </h2>
      <p className="my-4">
        {
          "Agregación es una relación todo–parte débil: el todo (carrito) agrupa partes (productos) que existen por su cuenta. Si vacías el carrito, los productos siguen en el catálogo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Problema de la vitrina"}</h3>
      <p className="my-4">
        {
          "Los Producto viven en el catálogo de Tienda Andes aunque nadie los compre hoy. El carrito solo guarda referencias a ítems que el cliente eligió."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Código"}</h3>
      <CodeFiddle language="csharp" code={CARRITO_PRODUCTO_CODE} />
      <StepReveal
        title="Agregar y quitar del carrito"
        steps={[
          {
            title: "Crear Producto",
            content: 'var te = new Producto("TE-ANDES", 12m); — existe fuera del carrito.',
          },
          { title: "Agregar", content: "carrito.Agregar(te); — el carrito guarda una referencia." },
          { title: "Quitar", content: 'carrito.Quitar("TE-ANDES"); — solo sale de la lista interna.' },
          {
            title: "Producto sigue vivo",
            content: "Si la variable te sigue en Main, te.Precio sigue siendo válido.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`classDiagram
  CarritoCompras o-- Producto : agrega
  class CarritoCompras {
    -List~Producto~ _items
    +Agregar(Producto)
    +Quitar(string sku)
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Confusión típica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Marcar composición porque hay List<T> — la clave es quién crea el Producto y si vive sin el carrito."}</li>
        <li>{"Eliminar el objeto Producto al quitarlo del carrito — en agregación solo sueltas la referencia."}</li>
      </ul>
      <PracticeExercise
        prompt="¿Por qué CarritoCompras con List<Producto> privada es agregación? Menciona quién crea el Producto y qué pasa al Quitar."
        hints={[
          "Producto se crea en catálogo o Main",
          "Quitar no destruye el objeto",
          "El mismo SKU puede estar en otro carrito",
        ]}
        expectedKeywords={["referencia", "catálogo", "quitar", "independiente"]}
        successMessage="Correcto. El carrito agrupa referencias; el catálogo sobrevive."
      />
    </section>
  );
}
