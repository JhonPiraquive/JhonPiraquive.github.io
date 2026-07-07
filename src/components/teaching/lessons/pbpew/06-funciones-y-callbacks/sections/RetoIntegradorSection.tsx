import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: mini biblioteca de transformaciones"}
      </h2>
      <p className="my-4 font-semibold">{"“Mini biblioteca de transformaciones”"}</p>
      <p className="my-4">
        {"Implementa en un solo archivo (consola o `<script>`):"}
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "`function aplicarLista(valores, transformar)` — recorre `valores` con un `for`, llama `transformar(valor)` en cada elemento y devuelve un nuevo array con los resultados (sin `.map` aún; usa bucle de la lección 5)."
          }
        </li>
        <li>{"`const aMayusculas = (texto) => texto.toUpperCase();`"}</li>
        <li>{"`const conPrefijo = (n) => \"ID-\" + n;`"}</li>
        <li>
          {"Prueba: `aplicarLista([\"hola\", \"pbpew\"], aMayusculas)` → `[\"HOLA\", \"PBPEW\"]`."}
        </li>
        <li>{"Prueba: `aplicarLista([1, 2, 3], conPrefijo)` → `[\"ID-1\", \"ID-2\", \"ID-3\"]`."}</li>
        <li>
          {
            "Añade `function filtrarLista(valores, cumple)` que devuelva solo elementos donde `cumple(valor)` sea `true` (callback predicado)."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: usa declaración y flecha, `return` correcto, callbacks como argumentos, bucles vistos en lección 5, sin modificar el array original de entrada."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Esqueleto — completa aplicarLista y filtrarLista"
        code={`// Esqueleto de partida — completa aplicarLista y filtrarLista
function aplicarLista(valores, transformar) {
  const resultado = [];
  for (let i = 0; i < valores.length; i++) {
    // tu código aquí
  }
  return resultado;
}

const aMayusculas = (texto) => texto.toUpperCase();
const conPrefijo = (n) => "ID-" + n;

// Pruebas esperadas:
// console.log(aplicarLista(["hola", "pbpew"], aMayusculas)); // ["HOLA", "PBPEW"]
// console.log(aplicarLista([1, 2, 3], conPrefijo));             // ["ID-1", "ID-2", "ID-3"]`}
      />
      <PracticeExercise
        prompt="Implementa aplicarLista y filtrarLista según el reto. Pega tu código o describe cómo usas el callback transformar/cumple dentro del bucle for y qué devuelven las dos pruebas con aMayusculas y conPrefijo."
        hints={[
          "resultado.push(transformar(valores[i])) en cada iteración",
          "filtrarLista: if (cumple(valores[i])) resultado.push(valores[i])",
          "No modifiques el array valores original — crea uno nuevo",
          "return resultado al final de cada función",
        ]}
        expectedKeywords={["push", "return", "for", "callback"]}
        successMessage="Excelente. Has integrado declaración, arrow, return, bucles y callbacks en un patrón similar a .map y .filter de la lección 7."
        rows={8}
      />
    </section>
  );
}
