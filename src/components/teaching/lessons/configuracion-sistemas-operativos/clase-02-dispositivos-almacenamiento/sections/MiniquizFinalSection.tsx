import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function MiniquizFinalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Mini-quiz"}</h2>
      <QuizSection slug="clase-02-dispositivos-almacenamiento" track="configuracion-sistemas-operativos" />
    </section>
  );
}
