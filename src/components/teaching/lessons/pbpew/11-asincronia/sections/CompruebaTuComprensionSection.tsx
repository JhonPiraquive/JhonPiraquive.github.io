import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Crea un setInterval que cuente de 1 a 5 cada segundo y se detenga solo con clearInterval al llegar a 5. ¿Qué pasa si olvidas clearInterval?"
        hints={["Guarda el id del intervalo", "if (contador >= 5) clearInterval(id)"]}
        expectedKeywords={["setInterval", "clearInterval", "5"]}
        successMessage="Correcto. Sin clearInterval el intervalo sigue ejecutándose hasta cerrar la pestaña — fuga de memoria y CPU."
      />
      <PracticeExercise
        prompt="En una cadena de promesas, ¿qué hace .catch(fn) frente a .finally(fn)? ¿Puede .finally sustituir a .catch?"
        hints={[".catch maneja rechazos", ".finally corre siempre pero no captura errores para transformar"]}
        expectedKeywords={["rechazo", "siempre", "no sustituye"]}
        successMessage="Correcto. .catch captura errores de la cadena; .finally corre siempre para limpieza pero no reemplaza el manejo de errores."
      />
      <PracticeExercise
        prompt="¿Por qué llamar async function cargar() sin try/catch ni .catch en el llamador puede «perder» un error de red?"
        hints={["async devuelve una promesa", "Rechazo sin manejador → unhandled rejection"]}
        expectedKeywords={["promesa", "rechaz", "catch"]}
        successMessage="Correcto. cargar() devuelve una promesa; si falla dentro y nadie la captura, el error queda sin manejar."
      />
    </section>
  );
}
