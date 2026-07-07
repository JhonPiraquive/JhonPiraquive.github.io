import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <p className="my-4">{"Antes del cierre, verifica que puedes aplicar los conceptos de la lección."}</p>
      <PracticeExercise
        prompt="¿Por qué el índice del primer elemento de un array es 0 y no 1?"
        hints={["Convención de offsets en memoria", "Coherencia con bucles i < arr.length"]}
        expectedKeywords={["0", "offset", "longitud", "bucle"]}
        successMessage="Correcto. El índice 0 es convención (offset desde el inicio); encaja con arr.length y bucles for desde 0 hasta length - 1."
      />
      <PracticeExercise
        prompt="Tras const a = { x: 1 }; const b = a; b.x = 5;, ¿qué vale a.x? Explica por qué."
        hints={["Objetos por referencia", "a y b apuntan al mismo objeto"]}
        expectedKeywords={["5", "referencia", "mismo"]}
        successMessage="Correcto. a.x es 5 porque a y b comparten la misma referencia; mutar por b afecta a a."
      />
      <PracticeExercise
        prompt="¿Cuál es la diferencia principal entre push y unshift?"
        hints={["Ambos mutan", "Uno al final, otro al inicio"]}
        expectedKeywords={["final", "inicio", "push", "unshift"]}
        successMessage="Correcto. push añade al final; unshift añade al inicio del array."
      />
    </section>
  );
}
