import { Callout } from "@/components/teaching/Callout";
import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";

export function SettimeoutYSetintervalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"setTimeout y setInterval"}</h2>
      <p className="my-4">
        <strong>{"`setTimeout(callback, delayMs)`"}</strong>
        {
          " programa `callback` tras al menos `delayMs` milisegundos. Devuelve un id numérico del temporizador. El retardo es mínimo, no exacto — el navegador puede demorar más si el hilo está ocupado."
        }
      </p>
      <p className="my-4">
        <strong>{"`clearTimeout(id)`"}</strong>
        {" cancela un `setTimeout` pendiente. Si ya se ejecutó, no hace nada."}
      </p>
      <p className="my-4">
        <strong>{"`setInterval(callback, intervalMs)`"}</strong>
        {" ejecuta `callback` repetidamente cada `intervalMs` (mínimo). También devuelve un id."}
      </p>
      <p className="my-4">
        <strong>{"`clearInterval(id)`"}</strong>
        {" detiene un `setInterval`. Sin esto, el intervalo sigue hasta cerrar la pestaña — fuga de memoria y trabajo innecesario."}
      </p>
      <Callout title="Caso real: polling sin clearInterval">
        {
          "Un checkout consulta cada 2 s si el pago se confirmó con setInterval(consultarEstado, 2000). Al redirigir a «gracias», nadie llama clearInterval. En segundo plano siguen las peticiones y a veces aparecen toasts en la página equivocada. Todo temporizador recurrente necesita ciclo de vida: crear al montar, limpiar al salir."
        }
      </Callout>
      <CodeFiddle
        language="javascript"
        code={`const avisoId = setTimeout(() => {
  console.log("Este mensaje no debería verse");
}, 5000);

clearTimeout(avisoId);

setTimeout(() => console.log("Hola tras 1 s"), 1000);`}
      />
      <CodeFiddle
        language="javascript"
        code={`let segundos = 0;
const tickId = setInterval(() => {
  segundos += 1;
  console.log(\`tic \${segundos}\`);
  if (segundos >= 3) {
    clearInterval(tickId);
    console.log("intervalo detenido");
  }
}, 1000);`}
      />
      <Callout title="Errores frecuentes">
        {
          "No confundas clearTimeout con clearInterval — cada función limpia su propio tipo. setTimeout(fn, 1000) es un mínimo de 1 s, no una garantía exacta. setTimeout(..., 0) no es instantáneo: significa «cuando el stack esté libre»."
        }
      </Callout>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Promesas"}</h3>
      <p className="my-4">
        {
          "Una Promise representa un valor futuro: puede estar pendiente (pending), cumplida (fulfilled/resolved) o rechazada (rejected). Encapsula éxito o error de operaciones asíncronas sin anidar callbacks infinitos (callback hell)."
        }
      </p>
      <p className="my-4">
        <strong>{"Constructor:"}</strong>
        {
          " `new Promise((resolve, reject) => { ... })` — `resolve(valor)` marca éxito; `reject(error)` marca fallo. El ejecutor corre sincrónicamente al crear la promesa; lo asíncrono suele estar dentro (p. ej. un `setTimeout` que llama a `resolve`)."
        }
      </p>
      <p className="my-4">
        <strong>{"Patrón `esperar(ms)`:"}</strong>
        {" promesa que se cumple cuando pasa el tiempo. Base para encadenar con `.then`."}
      </p>
      <MermaidDiagram
        chart={`stateDiagram-v2
  [*] --> pending
  pending --> fulfilled: resolve(valor)
  pending --> rejected: reject(error)
  fulfilled --> [*]
  rejected --> [*]`}
      />
      <CodeFiddle
        language="javascript"
        code={`function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

esperar(500).then(() => console.log("listo tras medio segundo"));

const promesa = new Promise((resolve, reject) => {
  const ok = true;
  if (ok) resolve({ id: 1, nombre: "Ana" });
  else reject(new Error("falló"));
});`}
      />
      <StepReveal
        title="Promesa pendiente → fulfilled"
        steps={[
          {
            title: "1. Crear la promesa",
            content:
              "const p = new Promise((resolve) => { setTimeout(() => resolve(42), 500); }); — estado pending.",
          },
          {
            title: "2. Registrar .then",
            content:
              "p.then((valor) => console.log(valor)); — el handler queda en cola hasta que la promesa se settle.",
          },
          {
            title: "3. Tras el timeout",
            content: "resolve(42) marca fulfilled. El callback de .then se ejecuta con 42.",
          },
        ]}
      />
      <CodeChallenge
        title="Completa esperar y el encadenamiento"
        template={`function esperar(ms) {
  return new Promise((resolve) => {{blank1}}(resolve, ms));
}

esperar(500)
  .then(() => console.log("uno"))
  .then(() => esperar(500))
  .then(() => console.log({{blank2}}));`}
        blanks={[
          { id: "blank1", answer: "setTimeout", placeholder: "temporizador" },
          { id: "blank2", answer: '"dos"', placeholder: "segundo mensaje" },
        ]}
      />
      <PracticeExercise
        prompt='Escribe esperar(ms) que devuelva una promesa resuelta tras ms milisegundos. Encadénala para imprimir "uno", esperar 500 ms e imprimir "dos".'
        hints={[
          "return new Promise((resolve) => setTimeout(resolve, ms))",
          "Encadena con .then(() => esperar(500))",
        ]}
        expectedKeywords={["Promise", "setTimeout", "then"]}
        successMessage="Correcto. esperar envuelve setTimeout en una promesa; .then encadena pasos en orden."
      />
    </section>
  );
}
