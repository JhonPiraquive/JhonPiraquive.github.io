import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <p className="my-4">
        {
          "Has construido tu primera app de gestión de estado en el navegador sin frameworks. El patrón array → render() → delegación es la base de React, Vue y cualquier SPA; aquí lo viste en JavaScript puro."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"El array modela el estado; el DOM solo lo muestra."}</li>
        <li>{"`render()` centraliza la vista; muta el array primero, pinta después."}</li>
        <li>{"`preventDefault` evita recargas que destruyen el estado en memoria."}</li>
        <li>{"`textContent` para entrada de usuario; `filter` por `id` para eliminar con seguridad."}</li>
        <li>{"El filtro afecta la vista, no borra datos."}</li>
        <li>{"`localStorage` es una copia opcional; llama `guardar()` tras cada mutación."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {
          " proyectos hermanos (`proyectos/ajedrez`) o reutilizar este modelo con `fetch` para sincronizar tareas con un backend REST."
        }
      </p>
      <h2 className="mb-4 mt-8 text-2xl font-bold text-[var(--color-primary)]">{"Mini-quiz"}</h2>
      <QuizSection slug="proyectos/todo-list" track="pbpew" />
    </section>
  );
}
