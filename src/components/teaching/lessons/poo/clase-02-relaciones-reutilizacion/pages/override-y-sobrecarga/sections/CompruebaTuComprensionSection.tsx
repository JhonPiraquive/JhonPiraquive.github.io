import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Verifica override vs overload antes del reto."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Añade Artesania : Producto con override de DescripcionEtiqueta a List<Producto> y comprueba la salida en foreach."
          hints={[
            "Artesania override con texto propio",
            "Lista tipada como Producto",
            "foreach llama DescripcionEtiqueta polimórficamente",
          ]}
          expectedKeywords={["Artesania", "override", "foreach"]}
          successMessage="Correcto. Override permite un bucle uniforme sobre la vitrina."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Qué Total usa CalculadoraPedido para Total(20m, 3, 5m)? ¿Runtime o compile time?"
          hints={[
            "Tres argumentos: decimal, int, decimal",
            "Coincide con la sobrecarga con descuento",
            "Overload se resuelve al compilar",
          ]}
          expectedKeywords={["descuento", "compile", "Total"]}
          successMessage="Correcto. Tercera sobrecarga; decisión del compilador."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Si Gadget usara new string DescripcionEtiqueta() en lugar de override, ¿qué vería un foreach sobre List<Producto>?"
          hints={[
            "new no participa en dispatch polimórfico",
            "Referencia Producto llama versión base",
            "override es necesario para vitrina uniforme",
          ]}
          expectedKeywords={["new", "base", "override", "Producto"]}
          successMessage="Correcto. Con new, el cliente con referencia Producto no ve la etiqueta del gadget."
        />
      </div>
    </section>
  );
}
