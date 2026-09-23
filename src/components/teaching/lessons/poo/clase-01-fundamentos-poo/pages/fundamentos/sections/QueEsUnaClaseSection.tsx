import { ClayCard } from "@/components/clay/ClayCard";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const PRODUCTO_CODE = `using System;

public class Producto
{
    public string Nombre { get; }
    public decimal Precio { get; }

    public Producto(string nombre, decimal precio)
    {
        if (string.IsNullOrWhiteSpace(nombre))
            throw new ArgumentException("Nombre requerido");
        if (precio < 0)
            throw new ArgumentException("Precio debe ser >= 0");
        Nombre = nombre;
        Precio = precio;
    }
}

public class Program
{
    public static void Main()
    {
        var cafe = new Producto("Café de Nariño", 12_000m);
        var panela = new Producto("Panela orgánica", 8_500m);
        Console.WriteLine($"{cafe.Nombre} - {cafe.Precio}");
        Console.WriteLine($"{panela.Nombre} - {panela.Precio}");
    }
}`;

export function QueEsUnaClaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"La clase: el molde, no la galleta"}
      </h2>
      <p className="my-4">
        {
          "Si Producto es “cómo se ve y se comporta un producto en Tienda Andes”, eso es una clase: una definición reutilizable. Todavía no es el café concreto que está en el estante."
        }
      </p>
      <p className="my-4">
        {
          "La clase dice: cada producto tendrá Nombre y Precio, y al crearlo hay que validar esos datos. Con new Producto(...) fabricas muchas instancias distintas a partir del mismo molde."
        }
      </p>
      <CodeFiddle language="csharp" code={PRODUCTO_CODE} />
      <MermaidDiagram
        title="Clase vs objetos en memoria"
        description="Un molde Producto; dos instancias con estados distintos"
        chart={`flowchart LR
  subgraph Molde["Clase (definición)"]
    P["Producto\nNombre, Precio\n+constructor"]
  end
  subgraph Memoria["Objetos (instancias)"]
    A["cafe\nCafé de Nariño\n12000"]
    B["panela\nPanela orgánica\n8500"]
  end
  P -->|new Producto| A
  P -->|new Producto| B`}
      />
      <CompareTable
        headers={["Término", "Significado", "En el ejemplo"]}
        rows={[
          ["Clase", "Molde / definición de tipo", "class Producto { ... }"],
          ["Instancia", "Objeto concreto creado con new", "var cafe = new Producto(...)"],
          ["Objeto", "La instancia viva en memoria", "cafe con su Nombre y Precio"],
        ]}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Confusión clásica"}</strong>
        <p>
          {
            "Decir “el objeto Producto” cuando hablas del molde. Producto es la clase; cafe es el objeto. Si mezclas esos dos, el resto de POO se vuelve confuso."
          }
        </p>
      </ClayCard>
      <p className="my-4">
        {
          "Una clase útil suele tener una responsabilidad clara (por ejemplo, “ser un producto del catálogo”). Si metes UI, base de datos e impresión de facturas en el mismo tipo, nace una “clase Dios”: difícil de probar y de cambiar."
        }
      </p>
      <CodeChallenge
        title="Completa — instanciar y tipar"
        template={`var cafe = {{blank1}} Producto("Café de Nariño", 12000m);
public {{blank2}} Precio { get; }`}
        blanks={[
          { id: "blank1", answer: "new", placeholder: "keyword de creación" },
          { id: "blank2", answer: "decimal", placeholder: "tipo del precio" },
        ]}
      />
    </section>
  );
}
