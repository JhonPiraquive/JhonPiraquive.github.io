import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt='A un botón #alternar añade un listener que haga classList.toggle("activo") en #panel. Describe el código en una o dos líneas.'
        hints={["document.querySelector para ambos nodos", 'addEventListener("click", ...)']}
        expectedKeywords={["toggle", "classList", "addEventListener"]}
        successMessage="Correcto. toggle alterna la clase sin borrar las demás."
      />
      <PracticeExercise
        prompt="Escucha keydown en document e imprime en consola solo cuando la tecla sea Escape. ¿Qué propiedad del evento usas?"
        hints={['e.key === "Escape"']}
        expectedKeywords={["key", "Escape", "keydown"]}
        successMessage="Correcto. event.key identifica la tecla en eventos de teclado."
      />
      <PracticeExercise
        prompt="¿Por qué ejecutar JS en <head> sin defer que busca #app puede fallar? Indica al menos una solución."
        hints={["El HTML aún no está parseado", "script al final del body, defer o DOMContentLoaded"]}
        expectedKeywords={["DOM", "defer", "body", "DOMContentLoaded"]}
        successMessage="Correcto. El nodo no existe hasta que el navegador construye el árbol; retrasa el script o espera DOMContentLoaded."
      />
    </section>
  );
}
