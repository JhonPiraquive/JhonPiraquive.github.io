import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function ArrayCallbacksSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Callbacks en métodos de array"}
      </h2>
      <p className="my-4">
        {
          "Callbacks en arrays (conexión lección 6): `.forEach`, `.map` y `.filter` reciben una función que el motor invoca por cada elemento."
        }
      </p>
      <CompareTable
        headers={["Operación", "¿Modifica original?", "¿Devuelve nuevo array?", "Ejemplo"]}
        rows={[
          ["push / pop / shift / unshift", "Sí", "No (longitud o elemento)", "arr.push(1)"],
          [".map / .filter", "No", "Sí", "arr.map(x => x * 2)"],
          [".forEach", "No*", "No (undefined)", "arr.forEach(console.log)"],
        ]}
      />
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {"* `.forEach` no cambia la estructura por sí solo, pero el callback puede mutar elementos si el programador lo hace."}
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{".forEach(fn):"}</strong>{" ejecuta `fn(elemento, indice, array)` por cada posición. No devuelve un array útil."}
        </li>
        <li>
          <strong>{".map(fn):"}</strong>{" devuelve nuevo array con el resultado de `fn` en cada elemento. Misma longitud que el original."}
        </li>
        <li>
          <strong>{".filter(fn):"}</strong>{" devuelve nuevo array solo con elementos donde `fn` devuelve valor truthy."}
        </li>
      </ul>
      <p className="my-4">
        {
          "Preview: `.reduce`, `.find`, `.some` y `.every` se profundizan en lecciones posteriores."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart LR
  A["nums [2,4,6]"]
  A --> M[".map(x => x * 2)"]
  M --> C["callback x=2 → 4"]
  M --> C2["callback x=4 → 8"]
  M --> C3["callback x=6 → 12"]
  C --> R["nuevo [4,8,12]"]
  C2 --> R
  C3 --> R
  A -.->|"sin mutar"| A`}
      />
      <CodeFiddle
        language="javascript"
        code={`const nums = [2, 4, 6];

const dobles = nums.map((x) => x * 2);
// [4, 8, 12] — nums sigue [2, 4, 6]

const pares = nums.filter((x) => x % 2 === 0);
// [2, 4, 6]

nums.forEach((x) => console.log("valor:", x));
// efecto por elemento, sin array nuevo`}
      />
      <Callout title="Caso real: totales en cero tras forEach">
        {
          "Un equipo escribe productos.forEach(p => p.precio * 1.19) esperando precios con IVA. Los precios no cambian porque forEach ignora el retorno del callback. Solución: const conIva = productos.map(p => p.precio * 1.19) y asignar el resultado."
        }
      </Callout>
      <Callout title="Error frecuente — map sin asignar">
        {
          "nums.map(x => x * 2) sin asignar el resultado deja nums igual. .map devuelve un array nuevo; si no lo guardas, parece que no funcionó. Usa const dobles = nums.map(...)."
        }
      </Callout>
      <Callout title="Error frecuente — return en callback con llaves">
        {
          "(x) => { x * 2 } devuelve undefined por elemento. Opciones: (x) => x * 2 sin llaves, o (x) => { return x * 2; } con return explícito."
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        title="Preview — combinar con reduce"
        code={`// Preview — combinar en un solo valor
const nums = [2, 4, 6];
const suma = nums.reduce((acc, x) => acc + x, 0);
console.log(suma); // 12`}
      />
      <CodeChallenge
        title="Completa el código — duplicar con map"
        template={`const numeros = [3, 5, 7];
const dobles = numeros.___((n) => n * 2);
console.log(dobles); // [6, 10, 14]`}
        blanks={[{ id: "blank1", answer: "map", placeholder: "método de transformación" }]}
      />
      <PracticeExercise
        prompt="Explica la diferencia entre .forEach y .map cuando quieres duplicar cada número de una lista [1, 2, 3]."
        hints={[
          ".forEach no devuelve un array acumulado",
          ".map devuelve un nuevo array con los resultados del callback",
        ]}
        expectedKeywords={["forEach", "map", "nuevo", "devuelve", "undefined"]}
        successMessage="Correcto. .map devuelve un nuevo array con los valores transformados; .forEach solo ejecuta el callback por elemento y retorna undefined."
      />
      <PracticeExercise
        prompt="Crea const notas = [6, 7, 8, 5] y obtén un array solo con notas ≥ 6 usando .filter. Pega tu código o describe el resultado."
        hints={["El predicado devuelve true o false", "n => n >= 6"]}
        expectedKeywords={["filter", "6", "7", "8"]}
        successMessage="Correcto. const aprobadas = notas.filter(n => n >= 6); → [6, 7, 8]."
      />
    </section>
  );
}
