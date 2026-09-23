import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Traduce relaciones a Mermaid antes de la práctica final."}</p>
      <PracticeExercise
        prompt="Dibuja CarritoCompras, Producto y Pedido *-- LineaPedido en Mermaid. Justifica o-- vs *-- en una frase cada uno."
        hints={[
          "Carrito referencia catálogo",
          "Pedido crea líneas",
          "Incluye cardinalidad si puedes",
        ]}
        expectedKeywords={["o--", "*--", "CarritoCompras", "LineaPedido"]}
        successMessage="Correcto. Símbolos alineados al ciclo de vida."
      />
      <PracticeExercise
        prompt="Añade IPasarelaPago <|.. dos implementaciones y Checkout --> IPasarelaPago al diagrama de Tienda Andes."
        hints={[
          "<<interface>> en IPasarelaPago",
          "Línea punteada a implementaciones",
          "Checkout depende del contrato, no de Tarjeta concreta",
        ]}
        expectedKeywords={["interface", "<|..", "Checkout"]}
        successMessage="Correcto. Contrato de pago modelado aparte del pedido."
      />
      <PracticeExercise
        prompt="¿Qué clase del diagrama integrado sería candidata a «demasiadas responsabilidades» si mezcla cobro, envío e inventario? Una frase (preview SRP)."
        hints={[
          "Busca la caja con muchos dominios",
          "PedidoService o similar",
          "Un motivo de cambio por clase",
        ]}
        expectedKeywords={["SRP", "responsabilidad", "Pedido"]}
        successMessage="Correcto. El diagrama anticipa refactor en Clase 3."
      />
    </section>
  );
}
