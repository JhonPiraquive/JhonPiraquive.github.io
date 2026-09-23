import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">
        {"Responde con tus palabras antes de pasar a override y sobrecarga."}
      </p>
      <PracticeExercise
        prompt="Gadget usa override en DescripcionEtiqueta, pero podrías dejar PrecioConIva solo en Producto. ¿Qué decide el programador en cada caso?"
        hints={[
          "override cuando el texto de la etiqueta cambia por tipo",
          "sin override cuando el cálculo es igual para todos",
          "virtual solo donde esperas redefinir",
        ]}
        expectedKeywords={["override", "virtual", "comportamiento"]}
        successMessage="Correcto. Override es opcional: lo usas cuando la derivada debe comportarse distinto; si la base basta, heredas tal cual."
      />
      <PracticeExercise
        prompt="¿Por qué ConfirmacionPedido no debería heredar de AvisoEmail aunque «envíe correos»?"
        hints={[
          "Email no es un tipo de confirmación de pedido",
          "Mañana querrás SMS sin nueva subclase de ConfirmacionPedido",
          "ICanalAviso intercambia implementaciones",
        ]}
        expectedKeywords={["composición", "interfaz", "es un"]}
        successMessage="Correcto. El canal es una estrategia intercambiable, no una especialización «es un»."
      />
      <PracticeExercise
        prompt='Orden al ejecutar new Libro("L-1", 10m, "978-x"): (a) constructor Libro, (b) base(...), (c) Producto asigna SKU/precio, (d) objeto listo. ¿Cuál es el orden?'
        hints={[
          "Primero entra el constructor de la derivada",
          "base delega al constructor de Producto",
          "La base termina antes de completar la derivada",
        ]}
        expectedKeywords={["base", "constructor", "Producto"]}
        successMessage="Correcto. Orden: (a) → (b) → (c) → (d)."
      />
    </section>
  );
}
