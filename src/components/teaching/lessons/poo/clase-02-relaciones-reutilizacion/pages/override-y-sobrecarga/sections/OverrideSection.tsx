import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const ETIQUETAS_CODE = `using System;
using System.Collections.Generic;

public class Producto
{
    public string Sku { get; }

    public Producto(string sku) => Sku = sku;

    public virtual string DescripcionEtiqueta()
        => $"Producto {Sku}";
}

public class Libro : Producto
{
    public string Isbn { get; }

    public Libro(string sku, string isbn) : base(sku)
    {
        Isbn = isbn;
    }

    public override string DescripcionEtiqueta()
        => $"Libro {Isbn} ({Sku})";
}

public class Artesania : Producto
{
    public string Artesano { get; }

    public Artesania(string sku, string artesano) : base(sku)
    {
        Artesano = artesano;
    }

    public override string DescripcionEtiqueta()
        => $"Artesanía de {Artesano} — {Sku}";
}`;

const LISTA_ETIQUETAS_CODE = `var vitrina = new List<Producto>
{
    new Libro("L-01", "978-123"),
    new Artesania("A-07", "María Quispe")
};

foreach (var item in vitrina)
    Console.WriteLine(item.DescripcionEtiqueta());`;

export function OverrideSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Override: misma firma, otro comportamiento"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Etiquetas distintas en la misma vitrina"}</h3>
      <p className="my-4">
        {
          "En Tienda Andes imprimes etiquetas para estantería. Todos los ítems tienen DescripcionEtiqueta(), pero un libro muestra ISBN y una artesanía muestra el nombre del artesano. Override (sobrescritura) reemplaza la implementación heredada manteniendo el mismo nombre y parámetros."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Reglas en C#"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"La base marca el método como virtual o abstract."}</li>
        <li>{"La derivada usa override, no new, si quieres polimorfismo."}</li>
        <li>{"Con Producto p = new Libro(...), p.DescripcionEtiqueta() llama a Libro en runtime."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Código"}</h3>
      <CodeFiddle language="csharp" code={ETIQUETAS_CODE} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Imprimir sin preguntar el tipo"}</h3>
      <CodeFiddle language="csharp" code={LISTA_ETIQUETAS_CODE} />
      <StepReveal
        title="Qué hace el foreach"
        steps={[
          {
            title: "Lista de tipo base",
            content: "List<Producto> acepta Libro y Artesania por polimorfismo.",
          },
          {
            title: "Referencia Producto",
            content: "Cada item se ve como Producto desde el bucle.",
          },
          {
            title: "Dispatch",
            content: "El runtime ejecuta el override de la clase real.",
          },
          {
            title: "Sin if por tipo",
            content: "No necesitas if (item is Libro) para imprimir.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`classDiagram
  Producto <|-- Libro
  Producto <|-- Artesania
  class Producto {
    +DescripcionEtiqueta()*
  }
  class Libro {
    +DescripcionEtiqueta()
  }
  class Artesania {
    +DescripcionEtiqueta()
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Confusión típica"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"override sin virtual en Producto — error de compilación."}</li>
        <li>{"new void DescripcionEtiqueta() creyendo que polimorfiza — con referencia Producto gana la base."}</li>
        <li>{"Override que lanza excepción donde la base no — rompe expectativas (preview LSP)."}</li>
      </ul>
      <CodeChallenge
        title="Completa el override"
        template={`public class Artesania : Producto
{
    public {{b1}} string DescripcionEtiqueta()
        => $"Artesanía de {Artesano} — {Sku}";
}`}
        blanks={[
          {
            id: "b1",
            answer: "override",
            placeholder: "Palabra clave para redefinir un virtual",
          },
        ]}
      />
    </section>
  );
}
