import { ClayCard } from "@/components/clay/ClayCard";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function TiposDeDatosPrincipalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Tipos de datos principales"}</h2>
      <p className="my-4">
        {
          "JavaScript distingue valores primitivos (7 en ES2024) y objetos (tipo referencia)."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tipos primitivos"}</h3>
      <CompareTable
        headers={["Tipo", "Descripción", "Ejemplo de uso"]}
        rows={[
          ["string", "Texto entre comillas", "Nombre de usuario, mensaje de error"],
          ["number", "Enteros y decimales (IEEE 754)", "Precio, edad, coordenada"],
          ["boolean", "`true` o `false`", "¿Aceptó términos?, ¿formulario válido?"],
          ["undefined", "Valor por defecto sin asignar", "Variable declarada sin valor"],
          ["null", "Vacío intencional del programador", "“Sin usuario activo”"],
          ["symbol", "Identificador único (ES6)", "Claves de propiedades avanzadas"],
          ["bigint", "Enteros grandes (`123n`)", "IDs que exceden Number.MAX_SAFE_INTEGER"],
        ]}
      />
      <p className="my-4">
        {"Los primitivos se copian por valor al asignar o pasar como argumento."}
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Objetos (tipo referencia)"}</h3>
      <p className="my-4">
        {
          "Objetos `{}`, arrays `[]`, funciones, instancias de `Date`, etc. Al asignar o pasar un objeto, se copia la referencia (apuntan al mismo dato en memoria), no un clon."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Inspeccionar tipos con `typeof`"}</h3>
      <p className="my-4">
        {
          'Operador unario que devuelve un string: `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"object"`, `"function"`, `"symbol"`, `"bigint"`.'
        }
      </p>
      <p className="my-4">
        <strong>{"Peculiaridad histórica:"}</strong>{" `typeof null === \"object\"`. Para comprobar null usa `valor === null`."}
      </p>
      <MermaidDiagram
        chart={`flowchart TB
  JS[Valores en JavaScript]
  JS --> P[Primitivos]
  JS --> O[Objetos / referencias]
  P --> S[string]
  P --> N[number]
  P --> B[boolean]
  P --> U[undefined]
  P --> NU[null]
  P --> SY[symbol]
  P --> BI[bigint]
  O --> OBJ[Object]
  O --> ARR[Array]
  O --> FUN[Function]`}
      />
      <CodeFiddle
        language="javascript"
        code={`const nombre = "María";
const edad = 22;
const aprobado = true;
let nota;                    // undefined
const sesion = null;         // null intencional
const id = Symbol("id");     // symbol
const grande = 9007199254740991n; // bigint

console.log(typeof nombre);   // "string"
console.log(typeof edad);     // "number"
console.log(typeof aprobado); // "boolean"
console.log(typeof nota);     // "undefined"
console.log(typeof sesion);   // "object" (peculiaridad con null)
console.log(typeof id);       // "symbol"
console.log(typeof grande);   // "bigint"`}
      />
      <StepReveal
        title="typeof en consola — resultado esperado"
        steps={[
          { title: 'typeof "María"', content: 'Devuelve "string" — texto entre comillas.' },
          { title: "typeof 22", content: 'Devuelve "number" — enteros y decimales comparten el tipo number.' },
          { title: "typeof true", content: 'Devuelve "boolean" — solo true o false.' },
          { title: "typeof (variable sin asignar)", content: 'Devuelve "undefined" — declarada pero sin valor.' },
          {
            title: "typeof null",
            content:
              'Devuelve "object" — bug histórico del lenguaje. Usa valor === null para comprobar null.',
          },
        ]}
      />
      <CodeFiddle
        language="javascript"
        code={`const original = { puntos: 10 };
const copiaReferencia = original;
copiaReferencia.puntos = 99;

console.log(original.puntos);              // 99 — mismo objeto en memoria
console.log(copiaReferencia === original); // true`}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Coerción de tipos (preview lección 04)"}</strong>
        <p>
          {
            'JavaScript convierte tipos en contextos como concatenación ("5" + 1 → "51") o comparaciones sueltas (==). El operador === evita sorpresas al exigir mismo tipo y valor. Profundizarás en la lección 04-operadores-y-decisiones.'
          }
        </p>
      </ClayCard>
      <CodeFiddle
        language="javascript"
        code={`console.log("5" + 1);    // "51" — concatenación
console.log("5" - 1);    // 4 — resta fuerza número
console.log(5 == "5");   // true — coerción con ==
console.log(5 === "5");  // false — sin coerción, tipos distintos`}
      />
      <PracticeExercise
        prompt="Explica con tus palabras por qué se recomienda const por defecto y let solo cuando hace falta reasignar. Incluye qué problema evita const en equipos de desarrollo."
        hints={["Piensa en valores que no cambian: URLs, límites", "const no impide mutar objetos, solo reasignar"]}
        expectedKeywords={["const", "let", "reasign", "referencia"]}
        successMessage="Correcto. const comunica intención de estabilidad; let reserva reasignación explícita cuando el valor debe cambiar."
      />
      <PracticeExercise
        prompt="¿Cuál es la diferencia entre undefined y null? Da un ejemplo de cuándo usarías cada uno en una app web."
        hints={["undefined = no se asignó valor", "null = vacío intencional del programador"]}
        expectedKeywords={["undefined", "null", "asign"]}
        successMessage="Correcto. undefined es el default sin asignar; null indica ausencia deliberada (p. ej. usuarioActivo = null cuando no hay sesión)."
      />
      <CodeChallenge
        title="Completa el código — inspeccionar tipos"
        template={`const mensaje = "Hola";
const activo = true;
let sinValor;

console.log(typeof {{blank1}}, typeof {{blank2}}, typeof {{blank3}});`}
        blanks={[
          { id: "blank1", answer: "mensaje", placeholder: "variable string" },
          { id: "blank2", answer: "activo", placeholder: "variable boolean" },
          { id: "blank3", answer: "sinValor", placeholder: "variable sin asignar" },
        ]}
      />
    </section>
  );
}
