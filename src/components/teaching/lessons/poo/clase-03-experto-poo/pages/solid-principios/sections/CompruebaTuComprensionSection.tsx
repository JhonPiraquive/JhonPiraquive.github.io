import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Implementa EnvioGratis : IEnvio (peso ≤ 1 → 0, si no → 3) sin modificar EnvioExpress ni EnvioNormal."
        hints={[
          "OCP — nueva clase, no editar existentes",
          "Calcular implementa la regla de negocio",
          "Cliente usa IEnvio polimórficamente",
        ]}
        expectedKeywords={["EnvioGratis", "OCP", "Calcular"]}
        successMessage="Correcto. Has aplicado OCP con extensión por nueva implementación."
      />
      <PracticeExercise
        prompt="¿Qué principio viola Pinguino : Ave con Volar() que lanza? Propón rediseño con IVolador o clases separadas."
        hints={[
          "Liskov Substitution Principle",
          "Cliente con List<Ave> espera Volar exitoso",
          "Separar capacidades por interfaz o modelo",
        ]}
        expectedKeywords={["LSP", "Liskov", "IVolador"]}
        successMessage="Correcto. LSP protege sustituibilidad en jerarquías polimórficas."
      />
      <PracticeExercise
        prompt="Identifica en PedidoService monolítico qué principios viola (al menos SRP y DIP) y nombra dos clases del refactor."
        hints={[
          "Mezcla crear y notificar — SRP",
          "Sin abstracción de persistencia o notificación — DIP",
          "CreadorPedido e INotificador del refactor",
        ]}
        expectedKeywords={["SRP", "DIP", "CreadorPedido", "INotificador"]}
        successMessage="Correcto. El monolito concentra motivos de cambio y depende de detalles concretos."
      />
    </section>
  );
}
