import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <div className="my-8">
        <PracticeExercise
          prompt="Crea `MensajeSms : Mensaje` con `override` de `Enviar`; añádela a `List<Mensaje>` y verifica salida en `foreach`."
          hints={[
            "MensajeSms implementa override Enviar con formato SMS",
            "Añade instancia a List<Mensaje> junto a MensajeEmail",
            "foreach llama Enviar polimórficamente",
          ]}
          expectedKeywords={["MensajeSms", "override", "foreach"]}
          successMessage="Correcto. Override permite procesar canales distintos en un bucle uniforme."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Añade `Sumar(params int[] valores)` a `Calculadora` si no existe. Predice qué firma usa `Sumar(1, 2, 3, 4)` antes de ejecutar."
          hints={[
            "params acepta arreglo variable de int",
            "Cuatro argumentos no encajan en Sumar(int,int) ni Sumar(int,int,int)",
            "Compilador elige en compile time",
          ]}
          expectedKeywords={["params", "10", "compile"]}
          successMessage="Correcto. La sobrecarga variádica suma todos los valores."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Documenta en un comentario qué pasaría si `MensajePush` usara `new void Enviar` en lugar de `override` con variable `Mensaje`."
          hints={[
            "new oculta sin dispatch polimórfico",
            "foreach sobre List<Mensaje> llamaría versión base",
            "override es necesario para polimorfismo real",
          ]}
          expectedKeywords={["new", "base", "override", "Mensaje"]}
          successMessage="Correcto. Con new, el cliente con referencia Mensaje no ve la implementación de la derivada."
        />
      </div>
    </section>
  );
}
