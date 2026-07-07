import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Un script de mantenimiento hace producto.Cantidad = 0 sin pasar por reglas. ¿Qué cambio en la clase Producto evitaría esa asignación directa?"
        hints={["Piensa en private set", "Métodos Ingresar/Retirar/Ajustar"]}
        expectedKeywords={["private set", "método", "encapsul"]}
        successMessage="Correcto. Cantidad { get; private set; } más métodos de dominio impiden asignación externa y centralizan reglas."
      />
      <PracticeExercise
        prompt="¿Por qué validar invariantes solo en la capa de presentación (UI) no es suficiente?"
        hints={["¿Otros servicios pueden mutar el objeto?", "¿Dónde debe vivir la regla?"]}
        expectedKeywords={["objeto", "servicio", "centraliz", "dominio"]}
        successMessage="Correcto. Cualquier código con referencia al objeto puede mutarlo; la regla debe vivir en el dominio, no solo en la vista."
      />
      <PracticeExercise
        prompt="Ordena mentalmente el flujo al crear Reserva con fechas: validar → asignar → recibir en constructor → lanzar excepción si falla. ¿Cuál es el orden correcto?"
        hints={["Primero recibes parámetros", "Validas antes de asignar"]}
        expectedKeywords={["constructor", "validar", "asignar", "excepción"]}
        successMessage="Correcto. Recibir en constructor → validar invariantes → si falla, excepción → si OK, asignar propiedades."
      />
    </section>
  );
}
