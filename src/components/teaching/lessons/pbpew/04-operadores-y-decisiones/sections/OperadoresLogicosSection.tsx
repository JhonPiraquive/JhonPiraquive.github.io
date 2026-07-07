import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function OperadoresLogicosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Operadores lógicos y valores truthy"}
      </h2>
      <p className="my-4">
        {
          "En contextos booleanos (condición de `if`, operadores lógicos), JavaScript convierte valores a truthy o falsy."
        }
      </p>
      <p className="my-4">
        <strong>{"Valores falsy:"}</strong>{" `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined`, `NaN`."}
      </p>
      <p className="my-4">
        {"Casi todo lo demás es truthy (incluye `\"0\"`, `\"false\"`, `[]`, `{}`)."}
      </p>
      <CompareTable
        headers={["Operador", "Nombre", "Comportamiento"]}
        rows={[
          ["&&", "AND", "Verdadero solo si ambos operandos son truthy"],
          ["||", "OR", "Verdadero si al menos uno es truthy"],
          ["!", "NOT", "Invierte truthiness a boolean explícito"],
        ]}
      />
      <p className="my-4">
        <strong>{"Cortocircuito (short-circuit):"}</strong>
        {
          " `&&` deja de evaluar si el izquierdo es falsy; `||` si el izquierdo es truthy. Patrón común: `const nombre = input || \"invitado\";` — valor por defecto cuando `input` es falsy."
        }
      </p>
      <p className="my-4">{"Antes del if, JavaScript evalúa truthiness:"}</p>
      <MermaidDiagram
        chart={`flowchart LR
  V[Valor en if] --> Q{¿Es falsy?}
  Q -->|false 0 '' null undefined NaN 0n| F[No entra al if]
  Q -->|cualquier otro| T[Entra al if]`}
      />
      <CodeFiddle
        language="javascript"
        code={`console.log(true && false);  // false
console.log(true || false);  // true
console.log(!true);          // false

const nombre = "" || "invitado";  // "invitado"
const edad = 0 || 18;             // 18 — cuidado: 0 es válido a veces
const usuario = perfil && perfil.nombre; // undefined si perfil es null`}
      />
      <CodeFiddle
        language="javascript"
        code={`if ("0") console.log("truthy");     // se ejecuta — string "0" es truthy
if (0) console.log("no");           // no se ejecuta — número 0 es falsy
if ([]) console.log("array vacío es truthy"); // se ejecuta`}
      />
      <StepReveal
        title="Evaluación de una condición compuesta"
        steps={[
          { title: "1. Sustituir variables", content: "edad = 20, vip = false" },
          { title: "2. Evaluar edad >= 18", content: "20 >= 18 → true" },
          { title: "3. Evaluar vip", content: "false es falsy" },
          { title: "4. Aplicar &&", content: "true && false → false" },
          {
            title: "5. Decisión del if",
            content:
              "La condición es falsy → se salta el bloque if; se ejecuta else si existe.",
          },
        ]}
      />
      <p className="my-4">{"El operador && puede evitar evaluar el segundo operando:"}</p>
      <MermaidDiagram
        chart={`flowchart LR
  A[Evaluar A] -->|falsy| R[Resultado: A sin evaluar B]
  A -->|truthy| B[Evaluar B]
  B --> R2[Resultado: valor de B]`}
      />
      <Callout title="Error frecuente">
        {
          'if ("0") ejecuta el bloque porque el string "0" es truthy; if (0) no. Los valores de <input> llegan como string — no confundas "vacío visual" con falsy. Agrupa condiciones compuestas con paréntesis: (a && b) || c.'
        }
      </Callout>
      <PracticeExercise
        prompt='Lista cinco valores falsy en JavaScript y un valor que parezca "vacío" pero sea truthy.'
        hints={['Falsy: false, 0, "", null, undefined, NaN, 0n', "¿Un array vacío [] es truthy o falsy?"]}
        expectedKeywords={["false", "0", "null", "undefined", "truthy"]}
        successMessage='Correcto. Falsy clásicos: false, 0, "", null, undefined, NaN. [] y {} son truthy aunque estén vacíos.'
      />
      <CodeChallenge
        title="Completa el código: acceso condicional"
        template={`const edad = 20;
const tieneLicencia = true;

if (edad >= 18 {{blank1}} tieneLicencia) {
  console.log("Puede conducir");
} else if (edad >= 18 {{blank2}} !tieneLicencia) {
  console.log("Necesita licencia");
} else {
  console.log("Menor de edad");
}`}
        blanks={[
          { id: "blank1", answer: "&&", placeholder: "operador AND" },
          { id: "blank2", answer: "&&", placeholder: "operador AND" },
        ]}
      />
    </section>
  );
}
