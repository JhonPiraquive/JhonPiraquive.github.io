import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function PracticaProfundaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica profunda"}</h2>
      <p className="my-4">{"Consolida delegación, estado y manejo de errores antes del reto integrador."}</p>
      <PracticeExercise
        prompt="Tras pulsar 12, luego +, luego 5 (sin pulsar =), describe qué valores tienen operandoActual, operandoAnterior, operadorPendiente y esperandoNuevoOperando."
        hints={[
          "operandoAnterior guarda el primer número al pulsar +",
          "La pantalla muestra el operando en edición (5)",
        ]}
        expectedKeywords={["12", "+", "5", "true", "operandoAnterior"]}
        successMessage='Correcto. operandoAnterior = "12", operadorPendiente = "+", operandoActual = "5", esperandoNuevoOperando = true.'
      />
      <PracticeExercise
        prompt="Se da un fragmento que solo hace display.textContent += digito sin variables de estado. Explica en 5–8 líneas qué falla al encadenar 3 * 4 + 2 y qué variables añadirías."
        hints={[
          "Sin operador pendiente no puedes encadenar operaciones",
          "Necesitas operandoAnterior, operadorPendiente y esperandoNuevoOperando",
        ]}
        expectedKeywords={["estado", "operador", "encaden", "operandoAnterior"]}
        successMessage="Correcto. Solo concatenar en pantalla pierde el operador pendiente y el primer operando; hace falta estado en memoria."
      />
      <PracticeExercise
        prompt='Escribe el bloque if que detecta división por cero antes de calcular y llama a mostrarError("División por cero").'
        hints={["Comprueba operador === \"/\" y el divisor parseado", "y === 0 o parseFloat(b) === 0"]}
        expectedKeywords={["/", "0", "mostrarError", "División"]}
        successMessage='Correcto. if (operador === "/" && y === 0) { mostrarError("División por cero"); return; }'
      />
      <PracticeExercise
        prompt='¿Por qué parseFloat("12.5.3") devuelve 12.5 y cómo previene la calculadora el segundo punto en el mismo operando?'
        hints={['parseFloat lee hasta el segundo punto inválido', 'includes(".") antes de concatenar']}
        expectedKeywords={["12.5", "includes", "punto"]}
        successMessage='Correcto. parseFloat para en el segundo punto; manejarPunto comprueba !operandoActual.includes(".") antes de añadir.'
      />
      <PracticeExercise
        prompt="En una sola frase: ¿por qué textContent es preferible a innerHTML en la pantalla de la calculadora?"
        hints={["La pantalla solo muestra texto", "innerHTML interpreta etiquetas"]}
        expectedKeywords={["texto", "segur", "HTML"]}
        successMessage="Correcto. textContent muestra texto plano sin interpretar HTML; basta para números y mensajes de error."
      />
      <PracticeExercise
        prompt="¿Por qué conviene guardar el estado en variables JavaScript y no solo leer/escribir el texto del #display en cada clic?"
        hints={[
          "El display no guarda el operador pendiente",
          "Flags como esperandoNuevoOperando no son visibles en pantalla",
        ]}
        expectedKeywords={["operador", "pendiente", "flag", "vista"]}
        successMessage="Correcto. El display es la vista; el estado lógico incluye operador pendiente y flags que no siempre se ven."
      />
      <PracticeExercise
        prompt="Ordena el flujo al pulsar 7, luego +, luego 3, luego =: (a) guardar operador y marcar esperandoNuevoOperando, (b) mostrar 3 como nuevo operando, (c) calcular(7, +, 3), (d) concatenar 7 en operando actual, (e) mostrar resultado 10. Indica el orden correcto."
        hints={["Primero el dígito 7", "El = dispara calcular al final"]}
        expectedKeywords={["d", "a", "b", "c", "e"]}
        successMessage="Correcto. Orden: (d) 7 → (a) + guarda operador → (b) 3 → (c) calcular → (e) muestra 10."
      />
    </section>
  );
}
