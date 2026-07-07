import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Un proyecto necesita SEO fuerte y el equipo tiene experiencia en React. ¿Qué framework base y meta-framework elegirías según el árbol de decisión?"
          hints={["SSR para crawlers", "Meta-framework de React"]}
          expectedKeywords={["React", "Next.js", "SSR", "SEO"]}
          successMessage="Correcto. React como base + Next.js para server-side rendering e indexación en buscadores."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué no debes calcular el precio final con descuento solo en el frontend antes de enviar el pago?"
          hints={["Cliente manipulable", "Fuente de verdad", "Validación en servidor"]}
          expectedKeywords={["backend", "validación", "manipular", "servidor"]}
          successMessage="Correcto. El frontend es manipulable; el backend debe recalcular y validar precios y stock antes de procesar el pago."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Compara React y Angular: ¿cuál es librería vs framework completo y qué implica para un proyecto nuevo?"
          hints={["React = decisiones adicionales", "Angular = todo integrado", "Curva de aprendizaje"]}
          expectedKeywords={["librería", "framework", "routing", "TypeScript"]}
          successMessage="Correcto. React es librería (eliges routing/estado/build); Angular es framework opinionado con TS, módulos y DI integrados."
        />
      </div>
    </section>
  );
}
