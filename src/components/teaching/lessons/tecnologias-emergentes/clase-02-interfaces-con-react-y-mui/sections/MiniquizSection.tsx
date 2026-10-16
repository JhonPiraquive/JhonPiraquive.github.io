import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function MiniquizSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Mini-quiz de la clase 2</h2>
      <p className="my-4">Responde sin mirar las páginas anteriores. El feedback de cada pregunta te dice qué repasar.</p>
      <QuizSection slug="clase-02-interfaces-con-react-y-mui" track="tecnologias-emergentes" />
    </section>
  );
}
