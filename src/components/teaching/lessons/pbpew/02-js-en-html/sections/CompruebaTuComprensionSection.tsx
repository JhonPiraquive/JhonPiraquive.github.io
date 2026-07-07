import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt='Extrae el JS de un Hola mundo inline a saludo.js y enlázalo con <script src="saludo.js" defer></script> en el <head>. ¿Qué ventaja obtienes respecto al inline?'
        hints={["El HTML queda más limpio", "¿Puede el navegador cachear el .js?"]}
        expectedKeywords={["externo", "caché", "separación", "reutiliz"]}
        successMessage="Correcto. JS externo separa responsabilidades, permite caché y reutilización entre páginas."
      />
      <PracticeExercise
        prompt="Confunde defer con async: ¿cuál usarías para un script que llama a document.getElementById al cargar la página? ¿Por qué?"
        hints={["¿Cuál espera al DOM?", "async no garantiza orden"]}
        expectedKeywords={["defer", "dom", "async"]}
        successMessage="Correcto. defer espera al parseo completo del HTML; async ejecuta en cuanto descarga y no garantiza que el DOM esté listo."
      />
      <PracticeExercise
        prompt="Abre DevTools → Network, recarga una página con un src incorrecto a propósito y describe qué ves (estado HTTP y efecto en el comportamiento)."
        hints={["Filtra por JS en Network", "¿Qué código HTTP indica archivo no encontrado?"]}
        expectedKeywords={["404", "network", "no ejecuta"]}
        successMessage="Correcto. Un 404 indica que el script no cargó; la página puede verse bien pero el comportamiento JS no aparece."
      />
    </section>
  );
}
