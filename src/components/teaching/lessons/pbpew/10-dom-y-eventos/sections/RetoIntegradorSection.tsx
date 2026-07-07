import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: lista de tareas en la página"}
      </h2>
      <p className="my-4 font-semibold">{"«Lista de tareas en la página»"}</p>
      <p className="my-4">{"Implementa en un `<script>` o bloque de práctica con HTML mínimo:"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            'Estructura: `<input id="nueva">`, `<button id="agregar">`, `<ul id="lista"></ul>`, `<span id="total">0 tareas</span>`.'
          }
        </li>
        <li>
          {
            'Al pulsar "Agregar" (o Enter en el input): lee el texto, crea `<li>` con `createElement`, muestra el texto con `textContent`, añade un `<button class="eliminar">×</button>` dentro del `<li>`, y `appendChild` al `<ul>`. Limpia el input.'
          }
        </li>
        <li>
          {
            'Delegación: un solo `addEventListener("click")` en `#lista` que elimine el `<li>` si el clic fue en `.eliminar` (`closest`).'
          }
        </li>
        <li>
          {
            'Actualiza `#total` con el número de `<li>` tras cada alta o baja (`querySelectorAll("#lista li").length`).'
          }
        </li>
        <li>{"Intercepta el submit si usas `<form>` con `preventDefault` para no recargar."}</li>
        <li>
          {
            'Opcional: `classList.toggle("completada")` al hacer clic en el texto del ítem (no en eliminar).'
          }
        </li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: usa selección, creación de nodos, `textContent`, `classList`, `addEventListener`, objeto evento, `preventDefault` si aplica y delegación en la lista. Sin `innerHTML` con datos del input."
        }
      </p>
      <CodeFiddle
        language="html"
        code={`<input id="nueva" type="text" placeholder="Nueva tarea" />
<button id="agregar" type="button">Agregar</button>
<ul id="lista"></ul>
<span id="total">0 tareas</span>`}
      />
      <CodeFiddle
        language="javascript"
        title="Esqueleto de partida — completa las funciones"
        code={`// Esqueleto de partida — completa las funciones
const input = document.querySelector("#nueva");
const btnAgregar = document.querySelector("#agregar");
const lista = document.querySelector("#lista");
const total = document.querySelector("#total");

function actualizarTotal() {
  const n = document.querySelectorAll("#lista li").length;
  total.textContent = \`\${n} tareas\`;
}

function agregarTarea() {
  const texto = input.value.trim();
  if (!texto) return;
  // createElement, textContent, botón eliminar, appendChild, limpiar input
  actualizarTotal();
}

btnAgregar.addEventListener("click", agregarTarea);

lista.addEventListener("click", (e) => {
  // delegación: closest("button.eliminar"), remove li, actualizarTotal
});`}
      />
      <PracticeExercise
        prompt="Implementa el reto «Lista de tareas en la página». Pega tu código o describe cómo usas delegación, textContent (no innerHTML con el input) y actualizarTotal."
        hints={[
          'li.textContent para el texto del ítem; createElement("button") con classList.add("eliminar")',
          'lista.addEventListener("click", ...) con e.target.closest("button.eliminar")',
          'actualizarTotal: querySelectorAll("#lista li").length',
          "No uses innerHTML con input.value",
        ]}
        expectedKeywords={["createElement", "deleg", "textContent", "appendChild"]}
        successMessage="Excelente. Has integrado selección, mutación del DOM, eventos y delegación en un flujo real."
        rows={8}
      />
    </section>
  );
}
