import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <PracticeExercise
        title="Reto integrador de la clase"
        prompt="Elegir un riesgo de una aplicación web (por ejemplo, un token JWT sin expiración), ubicarlo en la matriz por probabilidad e impacto y proponer un control respaldado por una norma."
        hints={["Primero estimar probabilidad e impacto.", "El control debe poder verificarse con una evidencia."]}
        expectedKeywords={["probabilidad", "impacto", "expiración", "expiracion", "control"]}
        rows={5}
      />
    </section>
  );
}
