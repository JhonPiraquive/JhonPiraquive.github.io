import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Enumera dos razones por las que un banco legacy en Java y una app móvil en Kotlin deberían integrarse vía servicio web en lugar de compartir librería nativa."
          hints={[
            "Piensa en plataformas distintas",
            "Interoperabilidad y contrato HTTP",
          ]}
          expectedKeywords={["interoperabilidad", "HTTP", "lenguaje", "contrato"]}
          successMessage="Correcto. La interoperabilidad depende de protocolo y formato, no de compartir el mismo stack o librería nativa."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Ordena el flujo: (a) servicio responde con JSON, (b) cliente envía petición HTTP, (c) servicio persiste o consulta datos, (d) servicio valida y ejecuta lógica, (e) cliente muestra resultado. Indica el orden correcto."
          hints={[
            "Empieza con la petición del cliente",
            "Termina con la presentación en el cliente",
          ]}
          expectedKeywords={["b", "d", "c", "a", "e"]}
          successMessage="Correcto. Orden: (b) petición → (d) validar/ejecutar → (c) persistir/consultar → (a) responder JSON → (e) mostrar."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Identifica qué principio SOLID se viola si /usuarios/registro también procesa pagos y envía emails de marketing."
          hints={["Un módulo, una razón para cambiar", "Letra S del acrónimo"]}
          expectedKeywords={["SRP", "Single", "Responsabilidad"]}
          successMessage="Correcto. Viola Single Responsibility: un endpoint con demasiadas responsabilidades distintas."
        />
      </div>
    </section>
  );
}
