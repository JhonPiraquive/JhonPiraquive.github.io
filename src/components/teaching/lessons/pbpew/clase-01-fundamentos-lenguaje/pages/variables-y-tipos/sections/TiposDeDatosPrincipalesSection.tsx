import { ClayCard } from "@/components/clay/ClayCard";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function TiposDeDatosPrincipalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Tipos de datos principales"}</h2>
      <p className="my-4">
        {
          "JavaScript distingue valores primitivos (siete) y objetos (tipo referencia)."
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
        <strong>{"Peculiaridad histórica:"}</strong>{" `typeof null === \"object\"`. Para comprobar null se usa `valor === null`."}
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
      <CompareTable title="typeof en consola — resultado esperado" headers={["Paso", "Qué ocurre"]} rows={[
          { title: 'typeof "María"', content: 'Devuelve "string" — texto entre comillas.' },
          { title: "typeof 22", content: 'Devuelve "number" — enteros y decimales comparten el tipo number.' },
          { title: "typeof true", content: 'Devuelve "boolean" — solo true o false.' },
          { title: "typeof (variable sin asignar)", content: 'Devuelve "undefined" — declarada pero sin valor.' },
          {
            title: "typeof null",
            content:
              'Devuelve "object" — bug histórico del lenguaje. Se usa valor === null para comprobar null.',
          },
        ].map((s) => [s.title, s.content])} />
      <CodeFiddle
        language="javascript"
        code={`const original = { puntos: 10 };
const copiaReferencia = original;
copiaReferencia.puntos = 99;

console.log(original.puntos);              // 99 — mismo objeto en memoria
console.log(copiaReferencia === original); // true`}
      />
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Coerción de tipos (adelanto)"}</strong>
        <p>
          {
            'JavaScript convierte tipos en contextos como concatenación ("5" + 1 → "51") o comparaciones sueltas (==). El operador === evita sorpresas al exigir mismo tipo y valor. Se profundiza en el tema de operadores y decisiones.'
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
    </section>
  );
}
