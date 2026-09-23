import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

const INSTANCIAS_CODE = `var cafe = new Producto("Café de Nariño", 12_000m);
var panela = new Producto("Panela orgánica", 8_500m);
// cafe y panela son instancias distintas: cambiar una no cambia la otra`;

const CATALOGO_CODE = `using System;
using System.Collections.Generic;

var catalogo = new List<Producto>
{
    new Producto("Café de Nariño", 12_000m),
    new Producto("Panela orgánica", 8_500m),
    new Producto("Mochila Wayuu", 95_000m)
};

foreach (var p in catalogo)
    Console.WriteLine(p.Nombre);`;

export function QueEsUnaInstanciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Instancia: el objeto concreto"}
      </h2>
      <p className="my-4">
        {
          "“Instancia” es solo la palabra técnica para “este objeto creado a partir de la clase”. Cuando escribes new Producto(...), estás instanciando: nace un objeto con su propio estado."
        }
      </p>
      <CodeFiddle language="csharp" code={INSTANCIAS_CODE} />
      <p className="my-4">
        {
          "En el catálogo de Tienda Andes puedes tener decenas de productos. Todos salen del mismo molde Producto, pero cada uno es independiente: el café a 12 000 y la panela a 8 500 no se pisan entre sí."
        }
      </p>
      <CodeFiddle language="csharp" title="Varias instancias en una lista" code={CATALOGO_CODE} />
      <MermaidDiagram
        chart={`flowchart LR
  Clase[Clase Producto] -->|new| cafe["Instancia cafe"]
  Clase -->|new| panela["Instancia panela"]`}
      />
      <StepReveal
        title="Qué pasa cuando escribes new en C#"
        steps={[
          {
            title: "1. Ya existe la clase",
            content:
              "Definiste class Producto con propiedades y constructor. Eso es el molde, todavía sin objeto.",
          },
          {
            title: "2. Escribes new Producto(...)",
            content:
              "new reserva memoria e invoca el constructor con los argumentos que pasaste.",
          },
          {
            title: "3. Corre el constructor",
            content:
              "Valida entradas y deja el objeto en un estado inicial válido (por ejemplo, precio >= 0).",
          },
          {
            title: "4. La variable apunta a la instancia",
            content:
              "var cafe referencia ese objeto concreto. A partir de ahí llamas métodos sobre cafe.",
          },
        ]}
      />
      <p className="my-4">
        {
          "No crees instancias “por deporte”. Si no hay estado propio ni identidad que cuidar, a veces basta un método estático helper. Si hay datos que cambian y reglas, sí: instancia."
        }
      </p>
      <PracticeExercise
        prompt='En var cafe = new Producto("Café de Nariño", 12000m); ¿qué es la clase y qué es la instancia?'
        hints={["Producto sin new es el tipo", "new crea el objeto en memoria"]}
        expectedKeywords={["Producto", "clase", "cafe", "instancia"]}
        successMessage="Correcto. Producto es la clase; cafe es la instancia."
      />
    </section>
  );
}
