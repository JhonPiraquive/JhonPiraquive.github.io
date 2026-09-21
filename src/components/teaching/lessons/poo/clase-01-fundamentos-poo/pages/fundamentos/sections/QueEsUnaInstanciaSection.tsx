import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const INSTANCIAS_CODE = `var p1 = new Producto("Café", 5.5m);
var p2 = new Producto("Té", 4.0m);`;

const CATALOGO_CODE = `using System;
using System.Collections.Generic;

var catalogo = new List<Producto>
{
    new Producto("Café", 5.5m),
    new Producto("Té", 4.0m),
    new Producto("Jugo", 6.0m)
};

foreach (var p in catalogo)
    Console.WriteLine(p.Nombre);`;

export function QueEsUnaInstanciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es una Instancia?"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Instancia = objeto concreto creado desde una clase."}</li>
        <li>{"Dos instancias de la misma clase pueden tener estados distintos."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué es"}</h3>
      <p className="my-4">{"Una instancia es un objeto específico creado a partir de una clase:"}</p>
      <CodeFiddle language="csharp" code={INSTANCIAS_CODE} />
      <p className="my-4">
        {"p1 y p2 son instancias diferentes con estados distintos. Modificar p1 no cambia p2 automáticamente."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Para qué sirve"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Representar múltiples elementos del mismo tipo en el sistema."}</li>
        <li>{"Guardarlos en colecciones, procesarlos, compararlos."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Señales de buen y mal uso"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Bien: crear instancias cuando necesitas identidad y estado propio."}</li>
        <li>{"Mal: crear instancias solo para agrupar funciones sin datos (quizá basta un helper estático)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ejemplo de vida real"}</h3>
      <p className="my-4">{"Usuario (clase) vs “Ana” y “Juan” (instancias con nombres y permisos distintos)."}</p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Instancias independientes en colección"}</h3>
      <CodeFiddle language="csharp" code={CATALOGO_CODE} />
      <MermaidDiagram
        chart={`flowchart LR
  Clase[Clase Producto] -->|new| p1["Instancia p1: Café"]
  Clase -->|new| p2["Instancia p2: Té"]`}
      />
      <StepReveal
        title="Creación de un objeto en C#"
        steps={[
          {
            title: "1. Defines la clase",
            content:
              "Escribes class Producto con propiedades, constructor y métodos. Es el molde reutilizable.",
          },
          {
            title: "2. Escribes new Producto(...)",
            content:
              "La expresión new reserva memoria e invoca el constructor con los argumentos proporcionados.",
          },
          {
            title: "3. Se ejecuta el constructor",
            content:
              "El constructor valida entradas y asigna valores iniciales. El objeto nace en estado válido.",
          },
          {
            title: "4. El objeto queda listo en memoria",
            content:
              "La variable (por ejemplo, var cafe) referencia la instancia concreta con su propio estado.",
          },
          {
            title: "5. Llamas métodos que respetan reglas",
            content:
              "Operaciones como Retirar() o Pagar() modifican el estado solo si las reglas del dominio lo permiten.",
          },
        ]}
      />
      <PracticeExercise
        prompt='Analogía receta vs galleta: en var cafe = new Producto("Café", 5.5m);, ¿qué parte es la clase y qué parte es la instancia?'
        hints={["Producto sin new es solo el tipo", "new crea el objeto concreto en memoria"]}
        expectedKeywords={["Producto", "clase", "cafe", "instancia"]}
        successMessage="Correcto. Producto es la clase (molde); cafe es la instancia u objeto concreto creado con new."
      />
    </section>
  );
}
