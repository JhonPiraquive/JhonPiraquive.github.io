import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Aplica ciclo de vida al modelo de Tienda Andes."}</p>
      <PracticeExercise
        prompt="Clasifica: (1) AsesorVentas–Cliente, (2) CarritoCompras–Producto, (3) Pedido–LineaPedido, (4) Cliente–Pedido. Justifica con quién crea la parte."
        hints={[
          "¿Existe la parte sin el todo?",
          "¿El carrito crea Producto o solo referencia?",
          "¿LineaPedido nace en AgregarLinea?",
        ]}
        expectedKeywords={["asociación", "agregación", "composición", "ciclo"]}
        successMessage="Correcto. Ciclo de vida y creación pesan más que la palabra List."
      />
      <PracticeExercise
        prompt="Implementa SesionMostrador y cambia Recomendar para usar Atender(SesionMostrador) imprimiendo fecha y nombres."
        hints={[
          "SesionMostrador guarda asesor, cliente, inicio",
          "Atender lee propiedades de la sesión",
          "Valida null en constructores",
        ]}
        expectedKeywords={["SesionMostrador", "DateTime", "Atender"]}
        successMessage="Correcto. Formalizaste una asociación con contexto."
      />
      <PracticeExercise
        prompt="En CarritoCompras, quita un SKU y muestra en comentario que la variable local al Producto sigue usable."
        hints={[
          "Crea Producto antes de Agregar",
          "Guarda referencia local",
          "Quitar no destruye el objeto",
        ]}
        expectedKeywords={["Quitar", "referencia", "Producto"]}
        successMessage="Correcto. Agregación suelta referencias, no borra catálogo."
      />
    </section>
  );
}
