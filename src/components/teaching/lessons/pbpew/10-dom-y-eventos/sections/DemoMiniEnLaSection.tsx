import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function DemoMiniEnLaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Demo: contador de clics en la página"}
      </h2>
      <p className="my-4">
        {"Practica el ciclo seleccionar → escuchar → actualizar con un contador de clics en vivo."}
      </p>
      <p className="my-4 font-semibold">{"Estructura HTML mínima:"}</p>
      <CodeFiddle
        language="html"
        code={`<button id="pulsar">Pulsar</button>
<span id="contador">Clics: 0</span>`}
      />
      <p className="my-4 font-semibold">{"Lógica:"}</p>
      <CodeFiddle
        language="javascript"
        code={`let clics = 0;
const contador = document.querySelector("#contador");
const btn = document.querySelector("#pulsar");

btn.addEventListener("click", () => {
  clics += 1;
  contador.textContent = \`Clics: \${clics}\`;
});`}
      />
      <PracticeExercise
        prompt="Implementa el contador de clics: botón #pulsar y span #contador que muestre Clics: N. Usa addEventListener y textContent (no innerHTML)."
        hints={[
          "let clics = 0 al inicio",
          'btn.addEventListener("click", () => { clics += 1; ... })',
          "contador.textContent = `Clics: ${clics}`",
        ]}
        expectedKeywords={["addEventListener", "textContent", "clics"]}
        successMessage="Excelente. Has cerrado el ciclo selección → evento → mutación del DOM."
      />
    </section>
  );
}
