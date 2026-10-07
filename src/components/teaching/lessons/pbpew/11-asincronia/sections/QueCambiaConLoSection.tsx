import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { StepReveal } from "@/components/teaching/StepReveal";

export function QueCambiaConLoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"¿Qué cambia con lo asíncrono?"}</h2>
      <p className="my-4">
        <strong>{"Código sincrónico"}</strong>
        {
          " se ejecuta línea a línea; cada instrucción espera a que termine la anterior. Si una operación tarda mucho (un bucle enorme, procesamiento masivo), el hilo principal queda bloqueado y la interfaz puede congelarse."
        }
      </p>
      <p className="my-4">
        <strong>{"Código asíncrono"}</strong>
        {
          " programa trabajo que se completará más tarde (temporizador, red, disco) y sigue ejecutando el resto del script. El navegador puede seguir respondiendo a clics y pintar la UI mientras espera."
        }
      </p>
      <p className="my-4">
        {
          "JavaScript en el navegador corre en un solo hilo principal (call stack). No hay paralelismo real de tu código de aplicación; la coordinación la hacen el motor y las Web APIs del navegador."
        }
      </p>
      <p className="my-4 font-semibold">{"Event loop (idea básica):"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"El call stack ejecuta código sincrónico."}</li>
        <li>{"Tareas asíncronas (`setTimeout`, `fetch`, eventos DOM) las gestionan las Web APIs."}</li>
        <li>{"Cuando terminan, sus callbacks van a una cola de tareas."}</li>
        <li>{"Cuando el stack está vacío, el event loop saca el siguiente callback y lo ejecuta."}</li>
      </ol>
      <p className="my-4">
        {
          "No hace falta memorizar la implementación interna — sí entender que «más tarde» ≠ inmediatamente después de la línea actual."
        }
      </p>
      <p className="my-4">
        {
          "Un callback (repaso lección 6) es una función que pasas para que se ejecute cuando algo ocurre. `setTimeout(fn, 1000)` y `addEventListener(\"click\", fn)` son asíncronos porque `fn` corre después, no en la misma vuelta del stack."
        }
      </p>
      <CompareTable
        headers={["Criterio", "Sincrónico", "Asíncrono"]}
        rows={[
          ["Orden", "Línea a línea, inmediato", "Resultado «más tarde»"],
          ["Bloqueo UI", "Sí, si tarda mucho", "No; el hilo sigue atendiendo eventos"],
          ["Ejemplos PBPEW", "`for`, cálculos, DOM inmediato", "`setTimeout`, `fetch`, listeners"],
          ["Lectura del código", "Secuencial arriba-abajo", "Callbacks, `.then`, `await`"],
        ]}
      />
      <Callout title="Caso real: dashboard que se congela">
        {
          "Un equipo pinta un spinner y luego ejecuta un bucle pesado sincrónico para «procesar» 50 000 filas antes de ocultar el spinner. Los usuarios no pueden cerrar modales ni hacer scroll durante 8 segundos. El bug no es el spinner — es bloquear el hilo principal. La corrección: trocear el trabajo o no mezclar procesamiento masivo sincrónico con expectativa de UI viva."
        }
      </Callout>
      <StepReveal
        title="Orden de impresión A → C → B"
        steps={[
          {
            title: "1. Código en el editor",
            content: 'console.log("A"); setTimeout(() => console.log("B"), 0); console.log("C");',
          },
          {
            title: "2. Ejecución sincrónica",
            content:
              "Se imprime A. setTimeout registra el callback en Web API (delay 0 ms mínimo). Se imprime C. El stack sincrónico termina.",
          },
          {
            title: "3. Event loop",
            content:
              "Cuando el stack está vacío, el callback de setTimeout pasa de la cola al stack. Se imprime B al final.",
          },
          {
            title: "4. Resultado",
            content:
              "Salida: A, C, B — aunque el delay sea 0, el timeout siempre corre después del código sincrónico pendiente.",
          },
        ]}
      />
      <CodeFiddle
        language="javascript"
        code={`console.log("1: inicio");

setTimeout(() => {
  console.log("3: timeout");
}, 0);

console.log("2: fin");
// Imprime: 1 → 2 → 3`}
      />
    </section>
  );
}
