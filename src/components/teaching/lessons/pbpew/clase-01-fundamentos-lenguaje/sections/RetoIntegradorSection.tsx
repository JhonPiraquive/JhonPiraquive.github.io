import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto integrador"}</h2>
      <PracticeExercise
        title="Reto integrador de la clase"
        prompt="Describir el plan de un programa que reciba una edad, compruebe que sea un número válido y diga si la persona es mayor de edad. Nombrar las estructuras de JavaScript que intervienen."
        hints={["Piensa en una variable, una condición y un posible error al convertir el valor.", "Una estructura decide y otra atrapa fallos."]}
        expectedKeywords={["if", "condicional", "try", "catch", "number", "const"]}
        rows={5}
      />
    </section>
  );
}
