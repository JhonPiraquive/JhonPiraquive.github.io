import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué TypeScript no elimina la necesidad de validar respuestas JSON del servidor en runtime? ¿Qué capa cubre cada una?"
          hints={["Tipos desaparecen al compilar", "Compilación vs ejecución", "Zod o similar"]}
          expectedKeywords={["runtime", "compilación", "validación", "tipos"]}
          successMessage="Correcto. TS cubre desarrollo; la validación runtime cubre datos externos en ejecución."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un colega propone tipar toda respuesta de `fetch` como `any` para ir más rápido. ¿Qué riesgo hay y qué alternativa propones?"
          hints={["Contrato roto con API", "interface Producto", "ApiResponse<T>"]}
          expectedKeywords={["any", "interface", "contrato", "runtime"]}
          successMessage="Correcto. `any` anula los beneficios; interfaces y genéricos documentan el contrato REST."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Cuándo usarías `type` en lugar de `interface`? Da un ejemplo de unión de tipos."
          hints={["Uniones", "Producto | Error", "No solo objetos"]}
          expectedKeywords={["type", "unión", "interface", "objeto"]}
          successMessage="Correcto. `interface` para forma de objetos; `type` para uniones como `Producto | ErrorApi`."
        />
      </div>
    </section>
  );
}
