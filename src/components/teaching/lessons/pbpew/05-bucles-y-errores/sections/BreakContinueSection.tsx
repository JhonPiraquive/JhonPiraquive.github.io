import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function BreakContinueSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"break y continue: control de flujo dentro del bucle"}
      </h2>
      <p className="my-4">
        {"Dos palabras clave controlan el flujo dentro de un bucle (`for`, `while`, `do...while`) o `switch`:"}
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"break"}</strong>{" — sale inmediatamente del bucle más interno. Las iteraciones restantes no se ejecutan."}
        </li>
        <li>
          <strong>{"continue"}</strong>{" — salta el resto del cuerpo en la iteración actual y pasa a la siguiente iteración."}
        </li>
      </ul>
      <CompareTable
        headers={["Palabra clave", "Efecto en la iteración actual", "Efecto en el bucle"]}
        rows={[
          ["break", "Detiene de inmediato", "Termina el bucle"],
          ["continue", "Salta el resto del cuerpo", "Sigue con la siguiente iteración"],
        ]}
      />
      <CodeFiddle
        language="javascript"
        code={`for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // salta el 2
  if (i === 4) break;    // sale antes del 4
  console.log(i);
}
// Imprime: 0, 1, 3`}
      />
      <p className="my-4 font-semibold">{"Combinar bucle + condición (lección 04):"}</p>
      <CodeFiddle
        language="javascript"
        code={`const notas = [4, 2, 5, 0, 3];
let aprobadas = 0;
for (let i = 0; i < notas.length; i++) {
  if (notas[i] < 3) continue;
  aprobadas++;
}
console.log("Aprobadas:", aprobadas); // 3`}
      />
      <MermaidDiagram
        chart={`flowchart TD
  iter([Nueva iteración]) --> check{if dentro del cuerpo}
  check -->|continue| next[Siguiente iteración]
  check -->|break| exit([Sale del bucle])
  check -->|ninguno| rest[Resto del cuerpo]
  rest --> next
  next --> iter`}
      />
      <Callout title="Error frecuente">
        {
          "break y continue solo son válidos dentro de for, while, do...while o switch. Fuera de un bucle provocan SyntaxError. No confundas break (salir del bucle) con continue (saltar a la siguiente vuelta)."
        }
      </Callout>
      <PracticeExercise
        prompt="Usando continue, escribe un for que imprima del 1 al 6 excepto el 3 y el 5."
        hints={["if (i === 3 || i === 5) continue;", "for (let i = 1; i <= 6; i++)"]}
        expectedKeywords={["continue", "3", "5", "for"]}
        successMessage="Correcto. continue ignora el resto del cuerpo en esas iteraciones; el bucle sigue con 4 y 6."
      />
      <CodeChallenge
        title="Completa el bucle for"
        template={"for (let i = 0; i {{blank1}} 5; i{{blank2}}) {\n  console.log(i);\n}"}
        blanks={[
          { id: "blank1", answer: "<", placeholder: "operador" },
          { id: "blank2", answer: "++", placeholder: "actualización" },
        ]}
      />
    </section>
  );
}
