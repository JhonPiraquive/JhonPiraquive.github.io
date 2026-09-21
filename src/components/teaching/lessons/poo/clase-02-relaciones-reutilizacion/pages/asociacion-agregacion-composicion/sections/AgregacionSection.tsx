import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const BIBLIOTECA_LIBRO_CODE = `using System;
using System.Collections.Generic;

public class Libro
{
    public string Titulo { get; }
    public Libro(string titulo) => Titulo = titulo;
}

public class Biblioteca
{
    private readonly List<Libro> _libros = new();

    public void Agregar(Libro libro) => _libros.Add(libro);

    public bool Quitar(string titulo)
    {
        var idx = _libros.FindIndex(l => l.Titulo == titulo);
        if (idx < 0) return false;
        _libros.RemoveAt(idx);
        return true;
    }

    public void Listar()
    {
        foreach (var libro in _libros)
            Console.WriteLine(libro.Titulo);
    }
}`;

export function AgregacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Agregación: todo–parte débil"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Agregación = todo agrupa partes que pueden existir sin él."}</li>
        <li>{"El todo mantiene referencias; usualmente no crea las partes."}</li>
        <li>{"Quitar una parte del todo no destruye la parte en el sistema."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">
        {
          "En agregación, hay relación todo–parte pero la parte tiene vida propia. Ejemplo: una Biblioteca agrupa Libro creados afuera; quitar un libro de la biblioteca no elimina el libro si otra variable lo referencia."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de agregación"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Las partes se instancian fuera del todo y se pasan con Agregar."}</li>
        <li>{"El todo ofrece Quitar sin destruir el objeto parte."}</li>
        <li>{"Las partes pueden compartirse entre varios todos o existir antes del todo."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo C#: Biblioteca y Libro"}</h3>
      <CodeFiddle language="csharp" code={BIBLIOTECA_LIBRO_CODE} />
      <StepReveal
        title="Agregar y quitar libro"
        steps={[
          {
            title: "Crear Libro",
            content: "En Main: var libro = new Libro(\"C# POO\"); — existe independiente de la biblioteca.",
          },
          { title: "Agregar", content: "biblioteca.Agregar(libro); — el todo mantiene una referencia." },
          { title: "Listar", content: "La biblioteca imprime títulos de sus referencias." },
          {
            title: "Quitar",
            content: "biblioteca.Quitar(\"C# POO\"); — solo se elimina la referencia interna.",
          },
          {
            title: "Parte viva",
            content: "Si libro sigue en una variable local, libro.Titulo sigue siendo válido.",
          },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Caso real: e-commerce (carrito)"}</h3>
      <p className="my-4">
        {
          "Un Carrito agrega referencias a Producto del catálogo. Los productos viven sin el carrito; el carrito solo agrupa lo que el usuario selecciona temporalmente."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Diagrama UML (preview)"}</h3>
      <MermaidDiagram
        chart={`classDiagram
  Biblioteca o-- Libro : agrega
  class Biblioteca {
    -List~Libro~ _libros
    +Agregar(Libro)
    +Quitar(string)
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Etiquetar todo como composición cuando las partes se comparten o existen antes del todo."}</li>
        <li>{"Destruir o invalidar la parte al quitarla de una agregación."}</li>
      </ul>
      <PracticeExercise
        prompt="¿Por qué Biblioteca con List<Libro> privada es agregación y no composición? Menciona quién crea el Libro y qué pasa al quitar."
        hints={[
          "El Libro se crea fuera de Biblioteca",
          "Quitar solo elimina la referencia en la lista",
          "El objeto Libro puede seguir existiendo",
        ]}
        expectedKeywords={["referencia", "crea", "quitar", "independiente"]}
        successMessage="Correcto. Agregación: el todo agrupa referencias; las partes tienen ciclo de vida propio."
      />
    </section>
  );
}
