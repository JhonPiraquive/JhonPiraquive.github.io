import { CodeChallenge } from "@/components/teaching/CodeChallenge";
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
      <CodeChallenge
        title="Completa la inicialización del estado"
        template={`let operandoActual = "{{blank1}}";
let operandoAnterior = "{{blank2}}";
let operadorPendiente = {{blank3}};
let esperandoNuevoOperando = {{blank4}};`}
        blanks={[
          { id: "blank1", answer: "0", placeholder: "valor inicial en pantalla" },
          { id: "blank2", answer: '""', placeholder: "sin operando guardado" },
          { id: "blank3", answer: "null", placeholder: "sin operación pendiente" },
          { id: "blank4", answer: "false", placeholder: "aún no esperamos nuevo dígito" },
        ]}
      />
    </section>
  );
}
