import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del reto integrador, verifica que dominas estado, eventos y errores."}</p>
      <PracticeExercise
        prompt='Escribe function limpiar() que resetee operandoActual, operandoAnterior, operadorPendiente, esperandoNuevoOperando y deje la pantalla en "0".'
        hints={[
          'operandoActual = "0"; operandoAnterior = ""',
          "operadorPendiente = null; esperandoNuevoOperando = false",
          "Llama actualizarPantalla() al final",
        ]}
        expectedKeywords={["0", "null", "false", "actualizarPantalla"]}
        successMessage="Correcto. Las cuatro variables vuelven a su valor inicial y actualizarPantalla sincroniza el DOM."
      />
      <PracticeExercise
        prompt="¿Qué ocurre en JavaScript con 8 / 0 y por qué la calculadora debe comprobar el divisor explícitamente?"
        hints={["No lanza excepción", "Devuelve Infinity"]}
        expectedKeywords={["Infinity", "excepción", "divisor", "cero"]}
        successMessage="Correcto. 8 / 0 es Infinity sin error; la UX debe validar y mostrar un mensaje controlado."
      />
      <PracticeExercise
        prompt="¿Por qué evitamos eval() para evaluar la expresión de la calculadora?"
        hints={["Riesgo de seguridad", "Refuerza switch e if de la lección 04"]}
        expectedKeywords={["seguridad", "eval", "control"]}
        successMessage="Correcto. eval ejecuta código arbitrario; switch e if dan control explícito y son más seguros."
      />
    </section>
  );
}
