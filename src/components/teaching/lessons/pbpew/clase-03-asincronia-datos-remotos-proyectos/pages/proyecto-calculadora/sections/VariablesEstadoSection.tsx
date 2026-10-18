import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function VariablesEstadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Variables de estado y referencias DOM"}
      </h2>
      <p className="my-4">
        {
          "Enlaza eventos solo cuando existan `#display` y `.teclado` (script al final del body, `defer` o `DOMContentLoaded`)."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`const display = document.querySelector("#display");
const teclado = document.querySelector(".teclado");

let operandoActual = "0";
let operandoAnterior = "";
let operadorPendiente = null;
let esperandoNuevoOperando = false;

function actualizarPantalla() {
  display.textContent = operandoActual;
}`}
      />
    </section>
  );
}
