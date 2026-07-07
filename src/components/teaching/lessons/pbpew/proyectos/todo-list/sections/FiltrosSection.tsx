import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function FiltrosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Filtros de vista"}</h2>
      <p className="my-4">
        {
          "La variable `filtroActivo` controla qué subset muestra `render()`. Los datos en el array no se borran al filtrar."
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`const filtros = document.querySelector("#filtros");

filtros.addEventListener("click", (e) => {
  const btn = e.target.closest("button[data-filtro]");
  if (!btn) return;
  filtroActivo = btn.dataset.filtro;
  filtros.querySelectorAll("button").forEach((b) => b.classList.remove("activo"));
  btn.classList.add("activo");
  render();
});`}
      />
      <PracticeExercise
        prompt="¿Qué diferencia hay entre filtrar tareas y eliminarlas del array?"
        hints={["¿Cambia tareas.length?", "¿Qué pasa al volver a Todas?"]}
        expectedKeywords={["filtro", "vista", "array", "borrar", "eliminar"]}
        successMessage="Filtrar solo cambia qué muestra render(); eliminar quita objetos del array con filter o similar."
      />
      <p className="my-4">
        {
          "Implementa mensajes vacíos por filtro, por ejemplo: «No hay pendientes» cuando `tareasVisibles().length === 0`."
        }
      </p>
    </section>
  );
}
