import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <PracticeExercise
        title="Reto integrador de la clase"
        prompt="Describir cómo se carga una lista desde una API con fetch y async/await: qué se comprueba en la respuesta y cómo se manejan los errores."
        hints={["La respuesta indica si fue exitosa.", "Un bloque try/catch rodea el await."]}
        expectedKeywords={["response.ok", ".ok", "try", "catch", "await", "json"]}
        rows={5}
      />
    </section>
  );
}
