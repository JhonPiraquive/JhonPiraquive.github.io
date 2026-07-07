import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="Dado const nums = [1, 1, 2, 3, 3, 4], escribe en una línea cómo obtener un array sin duplicados usando Set y spread."
        hints={["new Set(nums)", "spread [...] convierte Set a array"]}
        expectedKeywords={["Set", "spread", "..."]}
        successMessage="Correcto. [...new Set(nums)] devuelve [1, 2, 3, 4]."
      />
      <PracticeExercise
        prompt='Ordena el flujo FIFO con push("a"), push("b"), shift(): (a) queda ["b"], (b) se encola "a", (c) se desencola "a", (d) se encola "b". Indica el orden correcto de ejecución.'
        hints={["Primero encolar a, luego b, luego desencolar"]}
        expectedKeywords={["b", "d", "c", "a"]}
        successMessage='Correcto. Orden: (b) encola "a" → (d) encola "b" → (c) desencola "a" → (a) queda ["b"].'
      />
      <PracticeExercise
        prompt="¿Por qué new Set([{ id: 1 }, { id: 1 }]).size es 2 y no 1? Explica el papel de las referencias."
        hints={["Set usa ===", "Cada {} es un objeto distinto en memoria"]}
        expectedKeywords={["referencia", "objeto", "distint"]}
        successMessage="Correcto. Cada literal {} es una referencia distinta; Set no fusiona objetos por contenido."
      />
    </section>
  );
}
