import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjerciciosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ejercicios de la clase 2</h2>
      <p className="my-4">Cada ejercicio ofrece pistas y una validación que indica si la respuesta va por buen camino. Se recomienda intentarlos antes de volver al contenido.</p>
      <PracticeExercise
        title="Ejercicio 1. Clases y objetos"
        prompt="Una clínica veterinaria atiende mascotas, dueños y veterinarios. Nombrar dos clases y un objeto de ejemplo de cada una."
        hints={[
          "Una clase es la plantilla",
          "Un objeto es un caso concreto de esa plantilla",
        ]}
        expectedKeywords={["mascota", "dueño", "veterinario", "clase", "objeto"]}
      />
      <PracticeExercise
        title="Ejercicio 2. Cascada o ágil"
        prompt="Una tienda quiere un catálogo web, pero todavía no sabe qué funciones necesitará y quiere ver avances cada dos semanas. ¿Qué enfoque conviene y por qué?"
        hints={[
          "Pensar en qué tan estables son los requerimientos",
          "Los avances frecuentes son propios de un enfoque iterativo",
        ]}
        expectedKeywords={["ágil", "agil", "scrum", "iterativ", "cambio", "incremental"]}
      />
      <PracticeExercise
        title="Ejercicio 3. Preguntas de entrevista"
        prompt="Redactar dos preguntas abiertas para entrevistar a la administradora de un gimnasio sobre cómo controla hoy las inscripciones."
        hints={[
          "Las preguntas abiertas empiezan por cómo, qué o cuándo",
          "Evitar preguntas que se respondan con sí o no",
        ]}
        expectedKeywords={["cómo", "como", "qué", "que", "cuándo", "cuando"]}
      />
    </section>
  );
}
