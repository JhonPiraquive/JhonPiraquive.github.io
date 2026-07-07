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
        if (string.IsNullOrWhiteSpace(nombre)) throw new ArgumentException("Nombre requerido");
        if (precio < 0) throw new ArgumentException("Precio inválido");
        Nombre = nombre;
        Precio = precio;
    }
}

public class Program
{
    public static void Main()
    {
        var cafe = new Producto("Café", 5.5m);
        var te = new Producto("Té", 4.0m);
        Console.WriteLine($"{cafe.Nombre} - {cafe.Precio}");
        Console.WriteLine($"{te.Nombre} - {te.Precio}");
    }
}`;

export function QueEsUnaClaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es una Clase?"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Es el molde: define estructura + comportamiento."}</li>
        <li>{"No es el objeto: es la definición reutilizable."}</li>
        <li>{"Permite crear muchas instancias con new."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">{"Una clase es una definición de tipo que especifica:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Qué datos tendrá el objeto (campos o propiedades)."}</li>
        <li>{"Qué acciones podrá hacer (métodos)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Reutilizar una misma definición para múltiples objetos."}</li>
        <li>{"Mantener reglas en un solo lugar (alta cohesión)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Bien: clase con una responsabilidad clara."}</li>
        <li>{"Mal: clase “Dios” (reglas + I/O + UI + base de datos en un solo tipo)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo de vida real"}</h3>
      <p className="my-4">
        {
          "Analogía receta vs galleta: la receta es la clase; cada galleta horneada es una instancia. Producto es la clase; new Producto(\"Café\", 5.5m) crea una instancia u objeto."
        }
      </p>
      <CodeFiddle language="csharp" code={PRODUCTO_CODE} />
      <MermaidDiagram
        chart={`classDiagram
  class Producto {
    +string Nombre
    +decimal Precio
    +Producto(string nombre, decimal precio)
  }`}
      />
      <CompareTable
        headers={["Término", "Qué es", "Ejemplo en C#"]}
        rows={[
          ["Clase", "Molde / definición de tipo", "class Producto { ... }"],
          ["Instancia", "Objeto concreto creado con new", "var cafe = new Producto(...)"],
          ["Objeto", "Entidad en memoria con identidad, estado y comportamiento", "cafe con su Nombre y Precio actuales"],
        ]}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente"}</strong>
        <p>
          {
            "Confundir clase con objeto: la clase es la receta; el objeto es la galleta horneada. Producto es la clase; new Producto(...) crea una instancia."
          }
        </p>
      </ClayCard>
      <p className="my-4">
        {"Crea un Producto con precio negativo y ajusta la validación para que el mensaje diga: “Precio debe ser >= 0”."}
      </p>
      <CodeChallenge
        title="Completa el código — instanciar y proteger estado"
        template={`var cafe = {{blank1}} Producto("Café", 5.5m);
public {{blank2}} Saldo { get; private set; }`}
        blanks={[
          { id: "blank1", answer: "new", placeholder: "keyword de instanciación" },
          { id: "blank2", answer: "decimal", placeholder: "tipo del saldo" },
        ]}
      />
    </section>
  );
}
