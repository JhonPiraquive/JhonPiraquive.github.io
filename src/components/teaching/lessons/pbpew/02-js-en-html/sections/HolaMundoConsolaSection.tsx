import { ClayCard } from "@/components/clay/ClayCard";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function HolaMundoConsolaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Hola mundo, consola y comentarios"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Consola del navegador"}</h3>
      <p className="my-4">
        {
          "La consola de DevTools (F12 → Console) muestra logs, warnings, errores y permite ejecutar JavaScript ad hoc. La pestaña Network ayuda a confirmar si un .js cargó (200) o falló (404)."
        }
      </p>
      <p className="my-4">
        {
          "console.log() es la primera herramienta de salida y depuración; no modifica la página visible. Para cambiar la UI hay que tocar el DOM (por ejemplo, document.body.innerHTML)."
        }
      </p>
      <ClayCard className="my-6 border-l-4 border-[var(--color-accent)]">
        <strong className="mb-2 block">{"Error frecuente"}</strong>
        <p>
          {
            "No confundas console.log con cambio de página: solo imprime en consola. Para modificar lo visible debes manipular el DOM."
          }
        </p>
      </ClayCard>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Métodos de consola"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"console.log: mensaje general de depuración."}</li>
        <li>{"console.info: informativo (apariencia puede variar según navegador)."}</li>
        <li>{"console.warn: advertencias (suele mostrarse en amarillo)."}</li>
        <li>{"console.error: errores con traza."}</li>
        <li>{"console.table: datos tabulares a partir de arrays u objetos."}</li>
        <li>{"console.time / console.timeEnd: medir duración de un bloque."}</li>
      </ul>
      <CodeFiddle
        language="javascript"
        code={`console.log("Paso 1: inicio");
console.info("Información para el desarrollador");
console.warn("Cuidado: valor límite alcanzado");
console.error("Algo falló — revisa la traza");

console.table([
  { nombre: "Ana", nota: 5 },
  { nombre: "Luis", nota: 4.5 },
]);

console.time("bucle");
for (let i = 0; i < 1e6; i++) {}
console.timeEnd("bucle");`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Comentarios en JavaScript"}</h3>
      <p className="my-4">
        {
          "Los comentarios documentan el por qué, no lo obvio; el motor los ignora al ejecutar."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Una línea: //"}</li>
        <li>{"Varias líneas: /* ... */"}</li>
      </ul>
      <CodeFiddle
        language="javascript"
        code={`// Comentario de una línea: explica el propósito del bloque siguiente

/*
  Comentario multilínea:
  documentamos una decisión de diseño temporal
*/

const MAX_INTENTOS = 3; // límite acordado con negocio, no un número mágico
console.log(MAX_INTENTOS);`}
      />
      <MermaidDiagram
        chart={`flowchart TD
  A[Página carga HTML/CSS] --> B{Network: script.js?}
  B -->|200 OK| C[Motor ejecuta JS]
  B -->|404 Not Found| D[JS no ejecuta]
  D --> E[Sin logs en consola / sin eventos]
  C --> F[console.log visible en Console]`}
      />
      <PracticeExercise
        prompt='Crea index.html con un <script> inline que imprima console.log("Hola, PBPEW"). Abre el archivo en el navegador y verifica el mensaje en DevTools → Console.'
        hints={["Usa etiquetas <script>...</script> antes de cerrar </body>", "F12 → pestaña Console"]}
        expectedKeywords={["hola", "pbpew", "consola"]}
        successMessage="Correcto. Has vinculado JS inline al HTML y verificado la salida en DevTools."
      />
    </section>
  );
}
