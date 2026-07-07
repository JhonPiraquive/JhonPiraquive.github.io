import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Dónde debe ir index.php para que Apache en XAMPP lo sirva por defecto? ¿Qué pasa si lo guardas en tu carpeta home?"
          hints={["Document root", "htdocs"]}
          expectedKeywords={["htdocs", "document root"]}
          successMessage="Correcto. Solo htdocs es el document root; fuera de ahí Apache no sirve el archivo."
        />
      </div>
    </section>
  );
}
