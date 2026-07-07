import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comprueba tu comprensión"}
      </h2>
      <PracticeExercise
        prompt="Ordena mentalmente el flujo: prompt → código → entender → tests → lint → review → merge. ¿Qué paso saltarías NUNCA?"
        hints={["Entender antes de integrar", "Review humano"]}
        expectedKeywords={["entender", "review", "tests"]}
        successMessage="Correcto. Nunca saltar entender el código ni el code review humano."
      />
    </section>
  );
}
