import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: calculadora interactiva completa"}
      </h2>
      <p className="my-4 font-semibold">{"«Calculadora interactiva completa»"}</p>
      <p className="my-4">
        {"Construye la calculadora en un único HTML + JS (o sección equivalente), sin librerías de terceros ni `eval`."}
      </p>
      <p className="my-4 font-semibold">{"Requisitos funcionales"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "UI: pantalla `#display` y teclado con `C`, dígitos `0`–`9`, `.`, `+`, `−`, `×`, `÷`, `=`. Layout legible en móvil (botones mín. ~44px)."
          }
        </li>
        <li>
          {
            "Estado: variables `operandoActual`, `operandoAnterior`, `operadorPendiente`, `esperandoNuevoOperando`."
          }
        </li>
        <li>
          {
            "Eventos: `addEventListener` con delegación en el contenedor del teclado; `data-action` / `data-value` en botones."
          }
        </li>
        <li>
          {"Operaciones: suma, resta, multiplicación, división; encadenar operaciones sin pulsar `=` entre cada par."}
        </li>
        <li>
          {
            "Errores: división por cero → `\"División por cero\"`; entrada inválida → `\"Error\"`; botón `C` restaura estado inicial desde cualquier estado."
          }
        </li>
        <li>
          {
            "Código limpio: función `calcular(a, operador, b)` separada de la manipulación DOM; función `actualizarPantalla()`."
          }
        </li>
        <li>
          {
            "Extra (opcional): historial de las últimas 3 operaciones en `<ul id=\"historial\">`; soporte de teclado numérico con `keydown`."
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: demo usable en navegador; sin errores en consola en flujo normal; división por cero manejada; estado coherente tras `C` y tras `=`; código legible en funciones pequeñas."
        }
      </p>
      <CodeFiddle
        language="html"
        code={`<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Calculadora PBPEW</title>
</head>
<body>
  <div class="calculadora">
    <output id="display" aria-live="polite">0</output>
    <div class="teclado" role="group" aria-label="Teclado calculadora">
      <!-- Completa la rejilla de botones con data-action y data-value -->
    </div>
  </div>
  <script src="calculadora.js" defer></script>
</body>
</html>`}
      />
      <CodeFiddle
        language="javascript"
        title="Esqueleto de partida — completa las funciones"
        code={`// Esqueleto de partida — completa las funciones marcadas
const display = document.querySelector("#display");
const teclado = document.querySelector(".teclado");

let operandoActual = "0";
let operandoAnterior = "";
let operadorPendiente = null;
let esperandoNuevoOperando = false;

function actualizarPantalla() {
  display.textContent = operandoActual;
}

function calcular(a, operador, b) {
  // Implementa validación NaN, división por cero y switch
}

function manejarDigito(digito) { /* … */ }
function manejarPunto() { /* … */ }
function manejarOperador(op) { /* … */ }
function manejarIgual() { /* … */ }
function limpiar() { /* … */ }
function mostrarError(mensaje) { /* … */ }

teclado.addEventListener("click", (event) => {
  // Delegación: closest, dataset.action
});`}
      />
      <PracticeExercise
        prompt="Implementa el reto «Calculadora interactiva completa». Pega tu código o enlaza tu repositorio. Indica qué parte fue más difícil: estado, eventos o errores."
        hints={[
          "Empieza por estado + actualizarPantalla antes del listener",
          "Prueba 3 * 4 + 2 sin pulsar = entre operadores",
          "Prueba 8 ÷ 0 = y luego C",
          "Separa calcular() del DOM",
        ]}
        expectedKeywords={["calcular", "deleg", "operando", "textContent"]}
        successMessage="Excelente. Has integrado estado, delegación, funciones puras y manejo de errores en un proyecto front completo."
        rows={10}
      />
    </section>
  );
}
