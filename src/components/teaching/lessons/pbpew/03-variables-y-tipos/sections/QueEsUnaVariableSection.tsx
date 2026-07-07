import { ClayCard } from "@/components/clay/ClayCard";
import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsUnaVariableSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué es una variable?"}</h2>
      <p className="my-4">
        {
          "Una variable es un identificador (nombre) que el programa asocia a un valor en memoria. Permite guardar datos que cambian —contador, texto del usuario— o referencias a configuración estable —URL de API, objeto de perfil."
        }
      </p>
      <p className="my-4 font-semibold">{"Dos operaciones distintas:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Declaración:"}</strong>{" reserva el nombre (`let x;`, `const PI = 3.14;`)."}
        </li>
        <li>
          <strong>{"Asignación:"}</strong>{" guarda un valor (`x = 5;`). Con `const`, la declaración debe incluir inicialización."}
        </li>
      </ul>
      <p className="my-4">
        {
          "JavaScript es de tipado dinámico: no declaras el tipo al crear la variable; el tipo lo determina el valor en tiempo de ejecución. Con `let`, una misma variable puede apuntar a distintos tipos si reasignas."
        }
      </p>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente"}</strong>
        <p>
          {
            "No confundas el nombre de la variable con el valor que guarda. `let edad = 22` crea un enlace llamado edad que apunta al número 22; el enlace y el valor son cosas distintas."
          }
        </p>
      </ClayCard>
      <MermaidDiagram
        chart={`flowchart LR
  subgraph primitivo [Primitivo — copia por valor]
    v1[let edad = 22]
    m1[(valor 22)]
    v1 --> m1
  end
  subgraph referencia [Objeto — copia por referencia]
    v2[const a = objeto]
    v3[const b = a]
    m2[(objeto en memoria)]
    v2 --> m2
    v3 --> m2
  end`}
      />
      <CodeFiddle
        language="javascript"
        code={`let contador = 0;           // declaración + asignación
contador = contador + 1;    // reasignación (válida con let)

const URL_API = "https://api.ejemplo.com";
// URL_API = "otro";       // TypeError: no puedes reasignar const`}
      />
      <Callout title="Caso real: checkout e-commerce">
        {
          'Un input envía la cantidad como string ("3"). Si sumas precio (number) + cantidad (string), JavaScript concatena: 29.99 + "3" → "29.993". Solución: convertir con Number() o parseInt() y validar con typeof o Number.isNaN.'
        }
      </Callout>
    </section>
  );
}
