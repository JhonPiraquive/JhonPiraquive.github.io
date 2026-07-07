import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Implementa `PagoTransferencia : IPago` y verifica que `Caja` no se editó al usarla en `Main`. ¿Qué principio de diseño demuestra esto?"
        hints={[
          "PagoTransferencia implementa void Pagar(decimal monto)",
          "Caja solo conoce IPago en su constructor",
          "El cliente permanece estable al añadir variantes",
        ]}
        expectedKeywords={["IPago", "Caja", "desacoplamiento"]}
        successMessage="Correcto. Nueva implementación sin modificar el cliente — abstracción bien aplicada."
      />
      <PracticeExercise
        prompt="Crea `NotificacionSms` con validación mínima de destino (debe empezar con `+`) y úsala en `Main`. ¿Dónde conviene poner la validación de destino: base o derivada?"
        hints={[
          "Si todos los canales exigen el mismo formato, la base es mejor",
          "Sms con prefijo + es regla específica del canal",
          "Constructor de NotificacionSms puede validar antes de base(destino)",
        ]}
        expectedKeywords={["NotificacionSms", "destino", "validación"]}
        successMessage="Correcto. Reglas comunes en la base; reglas específicas del canal en la derivada."
      />
      <PracticeExercise
        prompt="Para `Reporte`, `Factura` y `Contrato`: indica si usarías clase abstracta, interfaz o ambas; justifica en 3 bullets por tipo."
        hints={[
          "¿Comparten flujo o validación común?",
          "¿Necesitan capacidades cruzadas como Firmar?",
          "¿Hay variación real de implementación?",
        ]}
        expectedKeywords={["abstracta", "interfaz", "contrato"]}
        successMessage="Correcto. La elección depende de estado compartido, Template Method y multi-rol."
      />
    </section>
  );
}
