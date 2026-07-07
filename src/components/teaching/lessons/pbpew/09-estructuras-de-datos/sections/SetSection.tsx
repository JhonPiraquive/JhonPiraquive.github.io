import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function SetSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"`Set` en JavaScript: valores únicos"}
      </h2>
      <p className="my-4">
        {
          "`Set` es una colección de valores únicos (sin duplicados). Se crea con `new Set(iterable)` o `new Set()` vacío."
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Método / propiedad"}</th>
            <th className="py-2 text-left font-semibold">{"Acción"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".add(valor)"}</td>
            <td className="py-2">{"Añade un valor (ignora duplicados)"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".has(valor)"}</td>
            <td className="py-2">{"Comprueba pertenencia"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".delete(valor)"}</td>
            <td className="py-2">{"Elimina un valor"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4">{".clear()"}</td>
            <td className="py-2">{"Vacía el conjunto"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4">{".size"}</td>
            <td className="py-2">{"Número de valores únicos"}</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        {
          "La comparación usa `===`: `\"2\"` y `2` son distintos; dos objetos con el mismo contenido cuentan como referencias distintas."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`const ids = new Set([1, 2, 2, 3]);
console.log(ids.size); // 3 — el segundo 2 no se almacena otra vez
console.log(ids.has(2)); // true

const etiquetas = ["js", "web", "js", "pbpew"];
const unicas = [...new Set(etiquetas)];
console.log(unicas); // ["js", "web", "pbpew"]`}
      />
      <StepReveal
        title="Set elimina duplicados — paso a paso"
        steps={[
          {
            title: "1. Array con repetidos",
            content: "const nums = [1, 1, 2, 3, 3, 4]; — seis elementos, pero solo cuatro valores distintos.",
          },
          {
            title: "2. new Set(array)",
            content: "const unicos = new Set(nums); — Set ignora duplicados según ===. unicos.size vale 4.",
          },
          {
            title: "3. Spread de vuelta a array",
            content: "const limpio = [...unicos]; // [1, 2, 3, 4] — patrón habitual: [...new Set(arr)]",
          },
        ]}
      />
      <CodeChallenge
        title="Completa el Set — registrar visitas"
        template={`const vistos = new Set();

function registrar(id) {
  if (vistos.{{blank1}}(id)) return false;
  vistos.{{blank2}}(id);
  return true;
}

console.log(registrar(101)); // true
console.log(registrar(101)); // false`}
        blanks={[
          { id: "blank1", answer: "has", placeholder: "¿ya existe?" },
          { id: "blank2", answer: "add", placeholder: "añadir valor" },
        ]}
      />
      <PracticeExercise
        prompt="¿Por qué new Set([1, 2, 2, 3]).size es 3 y no 4? Explica con tus palabras qué hace Set con valores repetidos."
        hints={["Set guarda solo valores únicos", "La comparación usa ==="]}
        expectedKeywords={["único", "duplicad", "repet"]}
        successMessage="Correcto. Set almacena cada valor una sola vez; el segundo 2 no aumenta el tamaño."
      />
    </section>
  );
}
