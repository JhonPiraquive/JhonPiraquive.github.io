import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function SwitchSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"La sentencia `switch`"}</h2>
      <p className="my-4">
        {
          "`switch` elige una rama según el valor de una expresión (`switch (expresión)`). Cada `case` compara con `===` (igualdad estricta)."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"`break`:"}</strong>{" sale del `switch`; sin `break`, la ejecución cae al siguiente `case` (fall-through)."}
        </li>
        <li>
          <strong>{"`default`:"}</strong>{" cubre valores no listados."}
        </li>
        <li>
          <strong>{"Rangos:"}</strong>{" `switch` no evalúa `case nota >= 3`; para rangos usa `if/else if`."}
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Cuándo `if` vs `switch`:"}</strong>
        {
          " `if` para rangos, condiciones compuestas o pocos casos; `switch` cuando comparas la misma variable contra muchos valores discretos constantes."
        }
      </p>
      <p className="my-4">{"Elige la estructura según el criterio del problema:"}</p>
      <CompareTable
        headers={["Criterio", "if / else if", "switch"]}
        rows={[
          ["Mejor para", "Rangos, condiciones compuestas", "Un valor vs muchas constantes"],
          ["Comparación", "Cualquier expresión booleana", "Igualdad estricta === con case"],
          ["Riesgo típico", "Orden de condiciones incorrecto", "Olvidar break"],
          ["Rama por defecto", "else final", "default"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TD
  S[switch expresión] --> M{Coincide case}
  M -->|sí| E1[Ejecutar código del case]
  E1 --> B{¿break?}
  B -->|sí| OUT[Salir del switch]
  B -->|no| E2[Caer al siguiente case — fall-through]
  E2 --> B
  M -->|no| D[default o siguiente case]
  D --> OUT`}
      />
      <CodeFiddle
        language="javascript"
        code={`const dia = "lunes";

switch (dia) {
  case "lunes":
  case "miércoles":
    console.log("Hay clase de PBPEW");
    break;
  case "viernes":
    console.log("Repaso");
    break;
  default:
    console.log("Otro día");
}`}
      />
      <CodeFiddle
        language="javascript"
        code={`let mensaje = "";
const codigo = "A";

switch (codigo) {
  case "A":
    mensaje = "Opción A";
    // falta break — cae a B
  case "B":
    mensaje += " + Opción B";
    break;
}
console.log(mensaje); // "Opción A + Opción B" — bug típico`}
      />
      <StepReveal
        title="Ejecución paso a paso de switch"
        steps={[
          {
            title: "1. Calcular expresión",
            content: 'Se evalúa el valor dentro de switch (expresión), p. ej. dia = "lunes".',
          },
          {
            title: "2. Buscar case coincidente",
            content: "Se salta al case cuyo valor coincide con ===. Si no hay coincidencia, se va a default.",
          },
          {
            title: "3. Ejecutar líneas",
            content: "Se ejecuta el código del case encontrado línea a línea.",
          },
          {
            title: "4. ¿Hay break?",
            content: "Con break → sale del switch. Sin break → cae al siguiente case (fall-through).",
          },
          {
            title: "5. default",
            content: "Si ningún case coincide, se ejecuta default si existe; si no, el switch termina sin acción.",
          },
        ]}
      />
      <Callout title="Caso real: descuento duplicado en e-commerce">
        {
          'Un switch sin break tras case "electronica" hace que el producto reciba también el descuento de "hogar". Cada case que no debe continuar al siguiente necesita break. Si varios casos comparten la misma acción, agrúpalos sin código intermedio — fall-through intencional, no accidental.'
        }
      </Callout>
      <CodeChallenge
        title="Completa el código: switch de fin de semana"
        template={`const dia = "sabado";

switch (dia) {
  case "sabado":
  case "domingo":
    console.log("Fin de semana");
    {{blank1}}
  default:
    console.log("Día laboral");
}`}
        blanks={[{ id: "blank1", answer: "break", placeholder: "salir del switch" }]}
      />
      <PracticeExercise
        prompt='Predice y ejecuta en consola: console.log(0 == false, 0 === false, "" == false, "" === false). Anota qué pares usan coerción y cuáles no.'
        hints={["== aplica coerción", "=== no convierte tipos", "false se convierte a 0 con =="]}
        expectedKeywords={["true", "false", "coerción", "==="]}
        successMessage='Correcto. 0 == false y "" == false son true (coerción); con === ambos son false.'
      />
    </section>
  );
}
