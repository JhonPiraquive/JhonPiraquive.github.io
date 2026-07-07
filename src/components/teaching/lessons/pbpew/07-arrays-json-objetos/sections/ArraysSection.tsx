import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function ArraysSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Arrays en JavaScript"}</h2>
      <p className="my-4">
        {
          "Un array (arreglo) es una lista ordenada de valores en una sola variable. Los índices empiezan en 0: el primer elemento es `arr[0]`, el último `arr[arr.length - 1]`. Un índice fuera de rango devuelve `undefined` (no lanza error)."
        }
      </p>
      <p className="my-4">
        {
          "Sintaxis literal: elementos entre corchetes, separados por comas. Puedes mezclar tipos: `[1, \"hola\", true]`."
        }
      </p>
      <p className="my-4">
        <strong>{"Longitud:"}</strong>{" propiedad `arr.length` — número de elementos."}
      </p>
      <p className="my-4">
        <strong>{"Mutación al final:"}</strong>{" `push(valor)` añade al final y devuelve la nueva longitud; `pop()` quita el último y lo devuelve."}
      </p>
      <p className="my-4">
        <strong>{"Mutación al inicio:"}</strong>{" `unshift(valor)` añade al inicio; `shift()` quita el primero y lo devuelve. Útil en colas simples; en arrays muy grandes es más costoso por la reindexación."}
      </p>
      <Callout title="Error frecuente — índice vs valor">
        {
          "El primer elemento tiene índice 0, no 1. arr[1] es el segundo elemento. Si esperas el primero, usa arr[0]."
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        code={`const nums = [2, 4, 6];
console.log(nums[0]);      // 2 — primer elemento
console.log(nums.length);  // 3
console.log(nums[nums.length - 1]); // 6 — último

nums.push(8);    // [2, 4, 6, 8]
const ultimo = nums.pop();  // ultimo === 8, nums === [2, 4, 6]

const cola = ["a", "b"];
cola.unshift("z");  // ["z", "a", "b"]
const primero = cola.shift();  // primero === "z"`}
      />
    </section>
  );
}
