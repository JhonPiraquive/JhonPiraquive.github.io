import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function MiniquizSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Mini-quiz de la clase 1</h2>
      <p className="my-4">Se responde sin consultar las páginas anteriores. Cada respuesta incorrecta indica qué tema repasar.</p>
      <QuizSection slug="clase-01-fundamentos" track="tecnologias-emergentes" />
    </section>
  );
}
