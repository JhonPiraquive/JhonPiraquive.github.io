import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function AmbitoScopeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ámbito (scope) en JavaScript"}
      </h2>
      <p className="my-4">
        {
          "El ámbito (scope) es la región del código donde un identificador (variable, función) es visible y puede usarse. Si el nombre no está en scope, obtienes `ReferenceError`."
        }
      </p>
      <p className="my-4 font-semibold">{"Tipos de ámbito en PBPEW:"}</p>
      <CompareTable
        headers={["Tipo", "Declaración típica", "Visible fuera de..."]}
        rows={[
          ["Global", "top-level let/const", "N/A (todo el módulo/script)"],
          ["Función", "dentro de function", "La función"],
          ["Bloque", "let/const en { }", "Ese bloque"],
        ]}
      />
      <p className="my-4">
        {
          "Ámbito global: declaraciones en el nivel superior del script o módulo. En apps grandes conviene no llenar el global de nombres sueltos — riesgo de colisiones y bugs difíciles de rastrear."
        }
      </p>
      <p className="my-4">
        {
          "Ámbito de función: variables declaradas con `var`, `let` o `const` dentro de una función existen solo ahí (y en closures internas). Los parámetros también son locales a la función."
        }
      </p>
      <p className="my-4">
        {
          "Ámbito de bloque: `let` y `const` dentro de `{ }` (bloque `if`, `for`, etc.) no son visibles fuera del bloque. `var` no respeta bloque — solo función — (legacy; preferir `let`/`const`)."
        }
      </p>
      <p className="my-4">
        {
          "Sombreado (shadowing): declarar `let x` dentro de un bloque interno oculta el `x` del bloque exterior en esa región; puede confundir al depurar."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart TB
  G["Ámbito global\\nlet global"]
  G --> F["Ámbito de función demo()\\nlet enFuncion"]
  F --> B["Ámbito de bloque if {}\\nlet enBloque"]
  B --> X["enBloque no visible fuera del if"]
  F --> Y["enFuncion no visible fuera de demo"]`}
      />
      <p className="my-4">{"Sigue qué nombres desaparecen al salir de cada capa:"}</p>
      <StepReveal
        title="Capas de scope: entrar y salir"
        steps={[
          {
            title: "1. Ámbito global",
            content:
              "let global = 'visible arriba' — accesible en todo el script o módulo (con matices de módulos ES).",
          },
          {
            title: "2. Entrar a función demo()",
            content:
              "let enFuncion = 'solo aquí' — existe solo dentro de demo. Fuera de demo → ReferenceError.",
          },
          {
            title: "3. Entrar a bloque if { }",
            content:
              "let enBloque = 'solo en el if' — visible dentro del if. Fuera del if pero dentro de demo → ReferenceError para enBloque.",
          },
          {
            title: "4. Salir del bloque",
            content: "enBloque ya no existe. enFuncion sigue disponible dentro de demo.",
          },
          {
            title: "5. Salir de la función",
            content: "enFuncion desaparece. global sigue accesible en el nivel superior.",
          },
        ]}
      />
      <CodeFiddle
        language="javascript"
        code={`let global = "visible arriba";

function demo() {
  let enFuncion = "solo aquí";
  if (true) {
    let enBloque = "solo en el if";
    console.log(enBloque); // OK
  }
  // console.log(enBloque); // ReferenceError
  return enFuncion;
}

console.log(global); // OK
// console.log(enFuncion); // ReferenceError`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Sombreado y `let` frente a `var` en bucles"}
      </h3>
      <p className="my-4">
        {
          "`let` en bucle vs `var`: con `let`, cada iteración del `for` tiene su propia variable; con `var`, todas las callbacks comparten la misma — bug clásico con `setTimeout`."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`// Con let — cada iteración tiene su i
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 50);
}
// 0, 1, 2

// Con var — un solo i compartido (evitar)
for (var j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 50);
}
// 3, 3, 3`}
      />
      <Callout title="Error frecuente">
        {
          "if (true) { let x = 1; } console.log(x) provoca ReferenceError: x no existe fuera del bloque. Con var no habría error, pero x sería undefined fuera — otro bug sutil. Usa let o const y respeta los límites del bloque { }."
        }
      </Callout>
      <CodeChallenge
        title="Completa el código: ámbito de bloque"
        template={`if (true) {
  {{blank1}} x = 10;
}
// console.log(x) → ReferenceError si usaste let/const`}
        blanks={[{ id: "blank1", answer: "let", placeholder: "let o const (no var)" }]}
      />
      <PracticeExercise
        prompt="Explica la diferencia entre ámbito de función y ámbito de bloque con let frente a var en un if."
        hints={["let/const respetan { }", "var solo respeta function"]}
        expectedKeywords={["bloque", "función", "let", "var"]}
        successMessage="Correcto. let/const viven solo en el bloque { }; var se eleva a toda la función, no al bloque."
      />
    </section>
  );
}
