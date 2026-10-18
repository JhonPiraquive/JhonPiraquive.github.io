import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <PracticeExercise
        title="Reto integrador de la clase"
        prompt="Diseñar la protección de un formulario de inicio de sesión: qué se protege con HTTPS, qué con hash y qué con consultas parametrizadas."
        hints={["Separar tránsito, almacenamiento y consulta.", "Cada técnica cubre una fase distinta."]}
        expectedKeywords={["https", "hash", "parametriz"]}
        rows={5}
      />
    </section>
  );
}
