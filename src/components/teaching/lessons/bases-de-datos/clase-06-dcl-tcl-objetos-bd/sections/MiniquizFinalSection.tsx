import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function MiniquizFinalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Miniquiz"}</h2>
      <QuizSection slug="clase-06-dcl-tcl-objetos-bd" track="bases-de-datos" />
    </section>
  );
}
