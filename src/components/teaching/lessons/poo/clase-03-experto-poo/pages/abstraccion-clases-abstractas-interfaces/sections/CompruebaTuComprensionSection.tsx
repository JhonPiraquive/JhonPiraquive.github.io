import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">
        {"Responde en consola o en tu cuaderno; usa el código de la lección como base."}
      </p>
      <PracticeExercise
        prompt="Implementa PagoNequi : IPago y cobra desde Caja sin editar la clase Caja. ¿Qué ganaste respecto a un switch por método?"
        hints={[
          "PagoNequi implementa void Pagar(decimal monto)",
          "Caja solo conoce IPago en su constructor",
          "Nueva clase en lugar de nueva rama",
        ]}
        expectedKeywords={["IPago", "Caja", "desacoplamiento"]}
        successMessage="Correcto. Extensión por clase nueva; el cliente de cobro sigue estable."
      />
      <PracticeExercise
        prompt="NotificacionSms exige destino con prefijo +. ¿Dónde va esa regla: en la base, en Sms o en ambos con criterio?"
        hints={[
          "Mensaje no vacío es común a todos los canales → base",
          "Formato +57… es regla del canal SMS",
          "Constructor de Sms puede validar antes de base(destino)",
        ]}
        expectedKeywords={["NotificacionSms", "destino", "validación"]}
        successMessage="Correcto. Lo común en la abstracta; lo específico en la derivada."
      />
      <PracticeExercise
        prompt="Para persistencia de pedidos vs exportación CSV de Libro: ¿interfaz, abstracta o ambas? Justifica en tres bullets."
        hints={[
          "Guardar pedido → contrato IRepositorioPedidos",
          "Libro comparte Producto y además exporta",
          "Una base + interfaz lateral encaja con C#",
        ]}
        expectedKeywords={["abstracta", "interfaz", "Producto"]}
        successMessage="Correcto. La elección sigue estado compartido y roles, no moda."
      />
    </section>
  );
}
