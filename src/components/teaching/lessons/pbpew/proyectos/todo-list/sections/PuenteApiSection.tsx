import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PuenteApiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Puente hacia API REST"}
      </h2>
      <p className="my-4">
        {
          "Hoy el estado es local; mañana el mismo modelo podría sincronizarse con `fetch`. Mantén funciones puras separadas de `render()` y `guardar()`:"
        }
      </p>
      <CodeFiddle
        language="javascript"
        code={`function exportarJson() {
  console.log(JSON.stringify(tareas, null, 2));
}`}
      />
      <PracticeExercise
        prompt="Si mañana sincronizas con fetch, ¿qué funciones separarías de la lógica de pintado?"
        hints={["agregarTarea, eliminarPorId", "render y guardar", "¿Qué devuelve el servidor?"]}
        expectedKeywords={["agregar", "eliminar", "render", "guardar", "fetch", "API"]}
        successMessage="Separa mutaciones de datos (agregar, toggle, eliminar) y persistencia (guardar/cargar/fetch) de render(), que solo pinta."
      />
    </section>
  );
}
