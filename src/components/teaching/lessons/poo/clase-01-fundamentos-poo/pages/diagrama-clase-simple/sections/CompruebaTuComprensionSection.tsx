import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">
        {
          "Verifica solo lo de esta página: leer y completar una caja. Las relaciones (herencia, agregación) se practican en Clase 2."
        }
      </p>
      <PracticeExercise
        prompt="Traduce esta caja a C#: Producto con +string Sku, +decimal Precio (solo lectura pública) y un constructor que recibe sku y precio. ¿Qué propiedades usarías con private set?"
        hints={[
          "Sku y Precio: { get; private set; }",
          "Validar sku no vacío y precio >= 0 en el constructor",
          "No hace falta herencia todavía",
        ]}
        expectedKeywords={["private set", "Sku", "Precio", "constructor"]}
        successMessage="Correcto. La caja UML guió encapsulamiento sin inventar relaciones aún."
      />
      <PracticeExercise
        prompt="En Mermaid classDiagram, añade a Producto el método +void AplicarDescuento(decimal porcentaje). ¿En qué compartimento de la caja va (atributos vs métodos)?"
        hints={[
          "Tercer compartimento: operaciones",
          "Sintaxis: +AplicarDescuento(decimal porcentaje) void",
          "El porcentaje no es atributo permanente salvo que lo modeles así",
        ]}
        expectedKeywords={["AplicarDescuento", "método", "classDiagram"]}
        successMessage="Correcto. Sabes ampliar la caja sin confundir estado y comportamiento."
      />
      <PracticeExercise
        prompt="Un compañero dibuja +Producto() en el compartimento de atributos. ¿Qué le corriges en una frase?"
        hints={[
          "El constructor es operación, no dato",
          "En C# no tiene tipo de retorno",
          "Va con los métodos",
        ]}
        expectedKeywords={["constructor", "método", "atributo"]}
        successMessage="Correcto. Evitaste el malentendido típico de mezclar datos y operaciones."
      />
    </section>
  );
}
