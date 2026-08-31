import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaReflexionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Práctica: un proceso de tu entorno"}
      </h2>
      <PracticeExercise
        title="Un proceso de tu entorno que merece una BD"
        prompt="En 4–6 líneas, describe un proceso de tu entorno (casa, trabajo, estudio o un negocio conocido) que hoy se lleva en papel, chat o Excel y que se beneficiaría de una base de datos. Indica qué datos guardarías y qué pregunta querrías responder con ellos (ej. «¿cuánto stock queda?»)."
        hints={[
          "Piensa en algo concreto: inventario, asistencia, préstamos, pedidos, horarios.",
          "Nombra al menos un tipo de dato a guardar (producto, cliente, fecha, cantidad…).",
          "Formula una pregunta de negocio que hoy es difícil de responder con papel o WhatsApp.",
        ]}
        expectedKeywords={[
          "dato",
          "datos",
          "stock",
          "inventario",
          "cliente",
          "consulta",
          "pregunta",
          "excel",
          "papel",
          "guardar",
        ]}
        rows={6}
        successMessage="Bien. Mencionaste datos a guardar y una pregunta que una base de datos podría responder."
      />
    </section>
  );
}
