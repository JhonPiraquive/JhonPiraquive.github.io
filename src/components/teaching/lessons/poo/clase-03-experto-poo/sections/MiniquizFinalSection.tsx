import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function MiniquizFinalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Mini-quiz — Clase 3 experto"}</h2>
      <p className="my-4">
        {
          "Preguntas sobre abstracción, polimorfismo, SOLID y diseño modular en Tienda Andes. Ante una duda, conviene repasar el checklist de diseño de la página de modularidad."
        }
      </p>
      <QuizSection slug="clase-03-experto-poo" track="poo" />
    </section>
  );
}
