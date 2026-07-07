import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function AsyncAwaitSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"async / await"}</h2>
      <p className="my-4">
        <strong>{"`async function`"}</strong>
        {
          " — una función marcada `async` siempre devuelve una promesa. Si haces `return 42`, el llamador recibe una promesa resuelta con `42`."
        }
      </p>
      <p className="my-4">
        <strong>{"`await`"}</strong>
        {
          " — solo dentro de funciones `async`. Pausa la ejecución de esa función hasta que la promesa a la derecha se settle; mientras tanto, el hilo principal sigue libre. El código parece sincrónico pero no bloquea la UI."
        }
      </p>
      <p className="my-4">
        <strong>{"`try/catch` con `await`:"}</strong>
        {
          " errores de promesas rechazadas se capturan igual que excepciones sincrónicas — lectura más clara que `.catch` anidado para flujos lineales."
        }
      </p>
      <CompareTable
        headers={["Criterio", "Cadena .then", "async/await"]}
        rows={[
          ["Estilo", "Funcional, encadenado", "Imperativo, parecido a sync"],
          ["Errores", ".catch al final", "try/catch local"],
          ["Cuándo usar en PBPEW", "Transformaciones cortas", "Flujos lineales largos"],
        ]}
      />
      <MermaidDiagram
        chart={`flowchart TD
  A["async function cargar()"] --> B["await fetch(url)"]
  B --> C{"¿ok?"}
  C -->|sí| D["await res.json()"]
  C -->|no| E["throw / catch"]
  D --> F["usar data"]
  E --> G["console.error"]`}
      />
      <CodeFiddle
        language="javascript"
        code={`async function cargar() {
  try {
    const res = await fetch("/api/datos.json");
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
}

cargar();`}
      />
      <CodeFiddle
        language="javascript"
        code={`function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function tresPasos() {
  console.log("paso 1");
  await esperar(300);
  console.log("paso 2");
  await esperar(300);
  console.log("paso 3");
}

tresPasos();`}
      />
      <CodeChallenge
        title="Completa async y await"
        template={`{{blank1}} function leer() {
  try {
    const res = {{blank2}} fetch("/api");
    const data = await res.json();
  } catch (e) {
    console.error(e);
  }
}`}
        blanks={[
          { id: "blank1", answer: "async", placeholder: "palabra clave función" },
          { id: "blank2", answer: "await", placeholder: "esperar promesa" },
        ]}
      />
      <Callout title="Error frecuente — await fuera de async">
        {
          'const data = await fetch("/api") en el cuerpo global del script da SyntaxError en PBPEW. Envuelve en async function obtener() { ... } y llama obtener(). await solo pausa esa función async; no bloquea todo el navegador.'
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        code={`// ❌ SyntaxError en script clásico
// const data = await fetch("/api");

// ✅
async function obtener() {
  const data = await fetch("/api");
  return data;
}`}
      />
      <PracticeExercise
        prompt="Implementa async function tresPasos() que espere 300 ms entre tres console.log consecutivos usando await esperar(300)."
        hints={["Reutiliza function esperar(ms) con Promise + setTimeout", "await esperar(300) entre cada log"]}
        expectedKeywords={["async", "await", "esperar", "300"]}
        successMessage="Correcto. async/await aplana el flujo sin bloquear la UI entre pasos."
      />
    </section>
  );
}
