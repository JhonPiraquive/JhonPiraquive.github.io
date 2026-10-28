import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function MiniquizSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Mini-quiz de la parte 2</h2>
      <p className="my-4">Se responde sin consultar las páginas anteriores. La retroalimentación de cada pregunta indica qué repasar.</p>
      <QuizSection slug="apoyo-react-02-interfaces-mui-router" track="tecnologias-emergentes" />
    </section>
  );
}
