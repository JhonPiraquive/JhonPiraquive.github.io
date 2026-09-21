import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Dibuja en Mermaid Usuario, Carrito y Producto; conecta carrito con varios productos. Justifica agregación vs composición."
        hints={[
          "Producto del catálogo no desaparece al vaciar carrito",
          "Rombo vacío o-- para agregación",
          "Incluye cardinalidad en la relación",
        ]}
        expectedKeywords={["Mermaid", "agregación", "Producto", "Carrito"]}
        successMessage="Correcto. Has modelado relación con ciclo de vida independiente del catálogo."
      />
      <PracticeExercise
        prompt="Añade AplicarDescuento(decimal porcentaje) al diagrama de Producto y la jerarquía Notificacion abstracta con Email y Sms."
        hints={[
          "Método en cuerpo de Producto en classDiagram",
          "<<abstract>> en Notificacion",
          "Notificacion <|-- NotificacionEmail",
        ]}
        expectedKeywords={["AplicarDescuento", "abstract", "NotificacionEmail"]}
        successMessage="Correcto. Diagrama actualizado con método y jerarquía abstracta."
      />
      <PracticeExercise
        prompt="Señala en el caso tienda una clase que podría violar SRP si se le añaden más de cinco responsabilidades distintas. ¿Cuál y por qué?"
        hints={[
          "PedidoService o clase que mezcla dominios",
          "Muchos métodos de áreas distintas en una caja",
          "Preview lección SOLID — un motivo de cambio",
        ]}
        expectedKeywords={["SRP", "responsabilidad", "Pedido"]}
        successMessage="Correcto. Diagramas con clases sobrecargadas anticipan refactor SOLID."
      />
    </section>
  );
}
