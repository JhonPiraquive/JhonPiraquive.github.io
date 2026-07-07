import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function OperadoresAritmeticosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Operadores aritméticos"}</h2>
      <p className="my-4">
        {"Los operadores aritméticos actúan sobre números (y en algunos casos sobre strings con `+`):"}
      </p>
      <CompareTable
        headers={["Operador", "Nombre", "Ejemplo", "Resultado"]}
        rows={[
          ["+", "Suma o concatenación", "10 + 3", "13"],
          ["-", "Resta", "10 - 3", "7"],
          ["*", "Multiplicación", "10 * 3", "30"],
          ["/", "División", "10 / 3", "3.333…"],
          ["%", "Módulo (resto entero)", "10 % 3", "1"],
          ["**", "Potencia (ES2016)", "2 ** 8", "256"],
        ]}
      />
      <p className="my-4">
        <strong>{"Precedencia:"}</strong>
        {
          " `*` y `/` se evalúan antes que `+` y `-` salvo que uses paréntesis: `(2 + 3) * 4` → `20`. Con strings, `+` concatena: `\"10\" + 5` → `\"105\"` (coerción — ver lección 03)."
        }
      </p>
      <p className="my-4">
        <strong>{"División por cero:"}</strong>
        {" `10 / 0` → `Infinity` (truthy); no lanza error — valida el divisor si el dominio lo exige."}
      </p>
      <CodeFiddle
        language="javascript"
        code={`let a = 10 + 3;   // 13
let b = 10 - 3;   // 7
let c = 10 * 3;   // 30
let d = 10 / 3;   // 3.333...
let e = 10 % 3;   // 1 (resto)
let f = 2 ** 8;   // 256`}
      />
      <CodeFiddle
        language="javascript"
        code={`console.log((2 + 3) * 4);  // 20 — paréntesis primero
console.log("10" + 5);     // "105" — concatenación, no suma`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comparación estricta frente a coerción"}</h3>
      <p className="my-4">{"Los operadores de comparación devuelven `boolean`:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"Igualdad estricta:"}</strong>{" `===` y `!==` — valor y tipo deben coincidir."}
        </li>
        <li>
          <strong>{"Igualdad suelta:"}</strong>{" `==` y `!=` — aplican coerción; evitar en código nuevo."}
        </li>
        <li>
          <strong>{"Relacionales:"}</strong>{" `>`, `<`, `>=`, `<=`."}
        </li>
      </ul>
      <CodeFiddle
        language="javascript"
        code={`console.log(5 === "5");   // false — tipos distintos
console.log(5 == "5");    // true — coerción (evitar)
console.log(10 > 3);      // true
console.log(10 <= 10);    // true
console.log("a" !== "b"); // true`}
      />
      <Callout title="Caso real: portal con roles">
        {
          'Un portal interno evalúa if (rol == 0) con rol leído de un <select> (string). La coerción hace que valores distintos parezcan equivalentes: 5 == "5" es true. Decisión clave: comparar con === contra strings explícitos (rol === "admin") y validar contra una lista blanca de roles permitidos.'
        }
      </Callout>
      <PracticeExercise
        prompt="Explica por qué === es más seguro que == cuando lees valores de un <input> o de una API. Menciona un ejemplo con número y string."
        hints={['Los inputs devuelven string', '5 === "5" vs 5 == "5"']}
        expectedKeywords={["===", "tipo", "string", "coerción"]}
        successMessage='Correcto. === exige mismo tipo y valor; un input "5" no es estrictamente igual al número 5.'
      />
    </section>
  );
}
