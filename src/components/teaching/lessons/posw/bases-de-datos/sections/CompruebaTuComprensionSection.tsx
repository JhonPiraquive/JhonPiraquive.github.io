import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Comprueba tu comprensión"}
      </h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Un equipo quiere guardar logs de clics con campos que cambian cada semana. ¿SQL o NoSQL? ¿Qué motor del caso e-commerce políglota usarías?"
          hints={["Esquema variable", "MongoDB en el brief", "PostgreSQL para pedidos"]}
          expectedKeywords={["NoSQL", "MongoDB", "logs"]}
          successMessage="Correcto. Logs variables encajan en documentos; pedidos y stock siguen en SQL con ACID."
        />
      </div>
    </section>
  );
}
