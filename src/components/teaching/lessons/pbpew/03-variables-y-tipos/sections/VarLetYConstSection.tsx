import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function VarLetYConstSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"var, let y const"}</h2>
      <p className="my-4">
        {
          "Desde ES6 (2015), el estándar recomienda `let` y `const`. `var` es estilo legacy (pre-ES6)."
        }
      </p>
      <p className="my-4 font-semibold">{"Regla práctica del curso:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          <strong>{"`const` por defecto"}</strong>{" — valores que no reasignarás."}
        </li>
        <li>
          <strong>{"`let` solo cuando necesites reasignar"}</strong>{" — contadores, acumuladores, estado temporal."}
        </li>
        <li>
          <strong>{"Evitar `var` en código nuevo"}</strong>{" — alcance de función, hoisting confuso, sombreado impredecible."}
        </li>
      </ol>
      <p className="my-4">
        {
          "`const` y objetos: no puedes reasignar la variable a otro valor, pero sí mutar propiedades o elementos si el valor es un objeto o array. `const` protege la referencia, no un clon profundo."
        }
      </p>
      <CompareTable
        headers={["Palabra", "Reasignar", "Redeclarar", "Alcance", "Hoisting inicial"]}
        rows={[
          ["var", "Sí", "Sí", "Función", "undefined"],
          ["let", "Sí", "No", "Bloque", "TDZ (ReferenceError si accedes)"],
          ["const", "No", "No", "Bloque", "TDZ (ReferenceError si accedes)"],
        ]}
      />
      <CodeFiddle
        language="javascript"
        code={`let contador = 0;
contador = contador + 1;

const URL_API = "https://api.ejemplo.com";
// URL_API = "otro"; // TypeError: Assignment to constant variable`}
      />
      <CodeFiddle
        language="javascript"
        code={`const usuario = { nombre: "Ana", activo: true };
usuario.nombre = "Luis";   // válido: mutación de propiedad
usuario.activo = false;    // válido
// usuario = { nombre: "Pedro" }; // TypeError: reasignación prohibida`}
      />
      <CodeFiddle
        language="javascript"
        code={`if (true) {
  var xVar = 1;
  let xLet = 2;
}
console.log(xVar); // 1 — var ignora el bloque
// console.log(xLet); // ReferenceError — let respeta el bloque`}
      />
      <h4 className="mt-4 mb-2 text-lg font-semibold">{"Hoisting (“elevación”)"}</h4>
      <p className="my-4">
        {
          "Antes de ejecutar el código línea a línea, el motor procesa las declaraciones (hoisting):"
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Con `var`, la declaración se eleva al inicio de su función y queda inicializada como `undefined`. Por eso `console.log(a); var a = 5;` imprime `undefined`, no error."
          }
        </li>
        <li>
          {
            "Con `let` y `const`, también hay hoisting, pero entran en la zona muerta temporal (TDZ): no puedes leerlas antes de la línea de declaración → `ReferenceError`."
          }
        </li>
      </ul>
      <StepReveal
        title="Ciclo de vida de una variable"
        steps={[
          {
            title: "1. Declaración",
            content:
              "El motor registra el identificador (`let`, `const` o `var`) en el ámbito correspondiente (bloque o función).",
          },
          {
            title: "2. Fase de hoisting",
            content:
              "`var` → el identificador existe como `undefined`. `let`/`const` → identificador en TDZ; leer antes de la línea de declaración lanza ReferenceError.",
          },
          {
            title: "3. Inicialización",
            content:
              "En la línea de código (`let x = 10`), se asigna el valor. Con `const`, la inicialización es obligatoria en la misma línea.",
          },
          {
            title: "4. Uso",
            content:
              "Lectura del valor, reasignación (`let` sí, `const` no). Mutación de propiedades en objetos referenciados por `const` sí está permitida.",
          },
          {
            title: "5. Fin de alcance",
            content:
              "Al salir del bloque `{}`, los enlaces de `let`/`const` dejan de existir. `var` persiste fuera del bloque si el ámbito es función.",
          },
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TB
  subgraph fase [Fases al ejecutar un bloque]
    P[Parseo / compilación]
    H[Hoisting de declaraciones]
    E[Ejecución línea a línea]
  end
  P --> H --> E
  H --> V[var: identificador existe como undefined]
  H --> L[let/const: identificador en TDZ]
  E --> OK[Tras let/const x = valor: x usable]
  E --> ERR[Leer x antes de declaración: ReferenceError]`}
      />
      <CodeFiddle
        language="javascript"
        code={`console.log(a); // undefined (declaración elevada, aún no asignada)
var a = 5;
console.log(a); // 5`}
      />
      <CodeFiddle
        language="javascript"
        code={`try {
  console.log(b);
} catch (e) {
  console.error(e.name); // "ReferenceError"
}
let b = 10;`}
      />
      <Callout title="Caso real: panel de configuración">
        {
          'Un equipo define const CONFIG = { apiUrl: "https://v1.api.com" }. Reasignar CONFIG = {} falla (TypeError). Mutar CONFIG.apiUrl funciona, pero genera confusión en code review si se documentó como inmutable. const protege la referencia, no un clon profundo del objeto.'
        }
      </Callout>
      <CodeChallenge
        title="Completa el código — contador con let y const"
        template={`{{blank1}} intentos = 0;
intentos = intentos + 1;
intentos = intentos + 1;
console.log(intentos); // debe imprimir 2

{{blank2}} MAX_INTENTOS = 3;
// MAX_INTENTOS = 5; // ¿qué error esperarías?`}
        blanks={[
          { id: "blank1", answer: "let", placeholder: "palabra clave reasignable" },
          { id: "blank2", answer: "const", placeholder: "palabra clave para constante" },
        ]}
      />
    </section>
  );
}
