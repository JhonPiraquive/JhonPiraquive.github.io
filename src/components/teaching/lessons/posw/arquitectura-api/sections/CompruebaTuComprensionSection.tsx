import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comprueba tu comprensión"}
      </h2>
      <PracticeExercise
        prompt="Dibuja mentalmente el flujo Cliente → Gateway → Controller → Service → Repository → BD para POST /pedidos. ¿Qué capa valida stock y qué capa ejecuta SQL?"
        hints={["Negocio en Service", "SQL en Repository"]}
        expectedKeywords={["Service", "Repository", "stock"]}
        successMessage="Correcto. El servicio valida stock y reglas de negocio; el repositorio ejecuta persistencia."
      />
    </section>
  );
}
