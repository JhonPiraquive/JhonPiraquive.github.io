import { ClayCard } from "@/components/clay/ClayCard";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ExpresionDeFuncionYArrowFunctionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Expresión de función y arrow function"}
      </h2>
      <p className="my-4">
        {
          "Además de la declaración, puedes definir funciones como expresiones (asignadas a una variable) o con sintaxis flecha (arrow function, ES6). Elige la forma según legibilidad, hoisting y si necesitas callback corto."
        }
      </p>
      <CompareTable
        headers={["Forma", "Sintaxis típica", "Hoisting", "Cuándo usar en PBPEW"]}
        rows={[
          ["Declaración", "function f() {}", "Sí (nombre)", "Utilidades con nombre claro, handlers nombrados"],
          ["Expresión", "const f = function () {}", "No", "Asignar a variable/constante"],
          ["Flecha", "const f = () => {}", "No", "Callbacks cortos, una expresión"],
        ]}
      />
      <p className="my-4">
        <strong>{"Expresión de función:"}</strong>{" la función se asigna a una variable. No tiene hoisting de la asignación: no puedes usar la variable antes de esa línea."}
      </p>
      <p className="my-4">
        <strong>{"Función flecha:"}</strong>{" sintaxis compacta. Si el cuerpo es una sola expresión sin llaves, el `return` es implícito."}
      </p>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente — arrow con llaves"}</strong>
        <p>
          {
            "(x) => { x * 2 } con llaves pero sin return explícito devuelve undefined. Opciones: (x) => x * 2 sin llaves, o (x) => { return x * 2; } con return dentro de llaves."
          }
        </p>
      </ClayCard>
      <CodeFiddle
        language="javascript"
        code={`// Expresión — no puedes usar duplicar antes de esta línea
const duplicar = function (x) {
  return x * 2;
};

// Flecha — retorno implícito
const triple = (x) => x * 3;

console.log(duplicar(4)); // 8
console.log(triple(4));   // 12`}
      />
      <CodeFiddle
        language="javascript"
        code={`// Equivalente arrow de function esPar(n) { return n % 2 === 0; }
const esPar = (n) => n % 2 === 0;
console.log(esPar(4)); // true
console.log(esPar(7)); // false`}
      />
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Preview avanzado (no profundizar aún): arrow y function difieren en this y arguments en algunos contextos. En esta lección basta con la sintaxis."
        }
      </p>
      <CodeChallenge
        title="Completa el código — arrow con retorno implícito"
        template={`const mitad = (x) => {{blank1}};
console.log(mitad(10)); // debe imprimir 5`}
        blanks={[{ id: "blank1", answer: "x / 2", placeholder: "expresión que devuelve la mitad" }]}
      />
      <PracticeExercise
        prompt="Convierte function esPar(n) { return n % 2 === 0; } a arrow function equivalente y comprueba con esPar(4) y esPar(7). Pega tu código o describe el resultado esperado."
        hints={["Una expresión sin llaves → return implícito", "n % 2 === 0 devuelve true o false"]}
        expectedKeywords={["=>", "n % 2", "true", "false"]}
        successMessage="Correcto. const esPar = (n) => n % 2 === 0; esPar(4) → true, esPar(7) → false."
      />
    </section>
  );
}
