import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <PracticeExercise
        title="Reto integrador de la clase"
        prompt="Una lista de tareas se guarda como un array de objetos. Indicar qué método devuelve solo las pendientes y cómo mostrarlas en la página sin insertar texto del usuario como HTML."
        hints={["Un método de array crea un nuevo array con los elementos que cumplen una condición.", "Una propiedad del nodo escribe texto sin interpretarlo como HTML."]}
        expectedKeywords={["filter", "textcontent", "createelement"]}
        rows={5}
      />
    </section>
  );
}
