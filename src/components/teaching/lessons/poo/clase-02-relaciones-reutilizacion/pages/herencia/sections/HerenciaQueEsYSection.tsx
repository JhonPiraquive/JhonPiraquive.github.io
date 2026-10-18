import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HerenciaQueEsYSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Herencia en el catálogo de Tienda Andes"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"El problema: tres productos, mucho código repetido"}</h3>
      <p className="my-4">
        {
          "Un compañero del equipo creó LibroTienda, GadgetTienda y ArtesaniaTienda con el mismo SKU, precio y validaciones copiadas. Si mañana cambias cómo se valida el precio, tocas tres archivos. Necesitas un solo lugar para lo común y clases concretas para lo específico."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"La idea: «es un» (herencia)"}</h3>
      <p className="my-4">
        {
          "Herencia es un mecanismo de Programación Orientada a Objetos (POO) donde una clase derivada recibe estado y comportamiento de una clase base. Un Libro es un Producto; un Gadget es un Producto. En C# se escribe con dos puntos:"
        }
      </p>
      <CodeFiddle language="csharp" code={`class Libro : Producto { }`} />
      <p className="my-4">
        {
          "No debe confundirse con «tiene un»: un Pedido tiene líneas de pedido, pero no es una línea. Eso se verá en la lección de asociación y composición."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Constructor y base(...)"}</h3>
      <p className="my-4">
        {
          "Si Producto exige SKU en su constructor, Libro debe llamar base(sku, precio) antes de guardar el ISBN. Si olvidas base(...) y la base no tiene constructor vacío, el compilador te detiene."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"virtual y override"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"virtual en la base: el método puede redefinirse en las hijas."}</li>
        <li>{"override en la derivada: nueva implementación con la misma firma."}</li>
        <li>{"Sin virtual, override falla; new solo oculta y no da polimorfismo real."}</li>
      </ul>
      <CompareTable title="Qué pasa al hacer new Libro(...)" headers={["Paso", "Qué ocurre"]} rows={[
          { title: "Cliente", content: 'Se ejecuta new Libro("SKU-01", 29.99m, "978-…").' },
          { title: "Constructor de Libro", content: "Entra Libro y delega en base(sku, precio)." },
          { title: "Constructor de Producto", content: "Producto valida SKU y precio y los asigna." },
          {
            title: "Objeto listo",
            content: "La instancia es Libro; puede declararse como Producto o como Libro.",
          },
        ].map((s) => [s.title, s.content])} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Código: Producto, Libro y Gadget"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System;

public class Producto
{
    public string Sku { get; }
    public decimal Precio { get; }

    public Producto(string sku, decimal precio)
    {
        if (string.IsNullOrWhiteSpace(sku))
            throw new ArgumentException("SKU requerido");
        if (precio < 0)
            throw new ArgumentOutOfRangeException(nameof(precio));
        Sku = sku;
        Precio = precio;
    }

    public virtual string DescripcionEtiqueta()
        => $"{Sku} — {Precio:C}";
}

public class Libro : Producto
{
    public string Isbn { get; }

    public Libro(string sku, decimal precio, string isbn) : base(sku, precio)
    {
        Isbn = isbn ?? throw new ArgumentNullException(nameof(isbn));
    }

    public override string DescripcionEtiqueta()
        => $"Libro {Isbn} / {base.DescripcionEtiqueta()}";
}

public class Gadget : Producto
{
    public string Marca { get; }

    public Gadget(string sku, decimal precio, string marca) : base(sku, precio)
    {
        Marca = marca ?? throw new ArgumentNullException(nameof(marca));
    }

    public override string DescripcionEtiqueta()
        => $"{Marca} — {base.DescripcionEtiqueta()}";
}`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Polimorfismo: una lista, muchos tipos"}</h3>
      <p className="my-4">
        {
          "Polimorfismo significa tratar objetos distintos con la misma interfaz de uso: se declara Producto pero el objeto real puede ser Libro o Gadget."
        }
      </p>
      <CodeFiddle
        language="csharp"
        code={`Producto p1 = new Libro("L-01", 45m, "978-123");
Producto p2 = new Gadget("G-99", 120m, "AndesTech");

Console.WriteLine(p1.DescripcionEtiqueta()); // override de Libro
Console.WriteLine(p2.DescripcionEtiqueta()); // override de Gadget`}
      />
      <CompareTable title="Por qué imprime la etiqueta del libro" headers={["Paso", "Qué ocurre"]} rows={[
          {
            title: "Referencia",
            content: "Producto p = new Libro(...); — la variable es de tipo base.",
          },
          { title: "Objeto real", content: "En memoria vive un Libro." },
          {
            title: "Dispatch en runtime",
            content: "p.DescripcionEtiqueta() ejecuta Libro.DescripcionEtiqueta (override).",
          },
        ].map((s) => [s.title, s.content])} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cuando no hace falta override"}</h3>
      <p className="my-4">
        {
          "Si todas las derivadas comparten el mismo comportamiento, defínelo una vez en Producto sin virtual:"
        }
      </p>
      <CodeFiddle
        language="csharp"
        code={`public decimal PrecioConIva(decimal tasa)
    => Precio * (1 + tasa);
// Libro y Gadget lo heredan igual; no redefinen.`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Inventario polimórfico"}</h3>
      <CodeFiddle
        language="csharp"
        code={`using System.Collections.Generic;

var vitrina = new List<Producto>
{
    new Libro("L-01", 45m, "978-123"),
    new Gadget("G-99", 120m, "AndesTech"),
    new Producto("GEN-1", 9.99m)
};

foreach (var item in vitrina)
    Console.WriteLine(item.DescripcionEtiqueta());`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Malentendido frecuente"}</h3>
      <p className="my-4">
        {
          "Alguien propone class Pedido : Producto «para reutilizar el precio». Un pedido no es un producto: mezcla roles y rompe el modelo. Herencia aquí sería un atajo que después cuesta arreglar."
        }
      </p>
      <MermaidDiagram
        chart={`classDiagram
  Producto <|-- Libro
  Producto <|-- Gadget
  class Producto {
    +string Sku
    +decimal Precio
    +DescripcionEtiqueta()*
  }
  class Libro {
    +string Isbn
    +DescripcionEtiqueta()
  }
  class Gadget {
    +string Marca
    +DescripcionEtiqueta()
  }`}
      />
      <Callout title="Error frecuente">
        {
          "Olvidar base(sku, precio) en el constructor de la derivada. También intentar override sin virtual en Producto — el compilador lo rechaza."
        }
      </Callout>
    </section>
  );
}
