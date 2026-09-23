import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function MiniquizFinalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Mini-quiz — Clase 3 experto"}</h2>
      <p className="my-4">
        {
          "Preguntas sobre abstracción, polimorfismo, SOLID y diseño modular en Tienda Andes. Si dudas, repasa el checklist del capstone antes de enviar."
        }
      </p>
      <QuizSection slug="clase-03-experto-poo" track="poo" />
    </section>
  );
}
