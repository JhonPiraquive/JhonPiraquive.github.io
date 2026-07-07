import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Explica con tus palabras qué gana una página web al poder modificar el DOM."
        hints={["Piensa en interactividad sin recargar", "¿Qué ve el usuario cuando hace clic?"]}
        expectedKeywords={["interactividad", "recargar", "actualizar"]}
        successMessage="Correcto. Modificar el DOM permite interactividad, actualizar la UI sin recargar y dar feedback inmediato al usuario."
      />
      <PracticeExercise
        prompt="¿Por qué TypeScript suele convertirse a JavaScript antes de ejecutarse en muchos proyectos?"
        hints={["¿Qué entiende el motor del navegador?", "¿Qué aporta TS en tiempo de desarrollo?"]}
        expectedKeywords={["navegador", "transpil", "tipos"]}
        successMessage="Correcto. Los navegadores y muchos runtimes solo ejecutan JavaScript; TypeScript añade tipos en tiempo de desarrollo y debe transpilarse."
      />
      <PracticeExercise
        prompt="Abre DevTools en cualquier sitio web, ejecuta console.log(document.title) en la Consola y describe qué imprime."
        hints={["F12 → pestaña Consola", "document.title devuelve el título de la pestaña del navegador"]}
        expectedKeywords={["título", "title"]}
        successMessage="Correcto. document.title devuelve el texto del elemento <title> de la página, visible en la pestaña del navegador."
      />
    </section>
  );
}
