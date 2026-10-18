import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjerciciosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ejercicios de la clase 3</h2>
      <p className="my-4">Cada ejercicio ofrece pistas y una validación que indica si la respuesta va por buen camino. Se recomienda intentarlos antes de volver al contenido.</p>
      <PracticeExercise
        title="Ejercicio 1. Caso de uso"
        prompt="En una tienda de bicicletas, el cliente reserva un mantenimiento. Nombrar el actor, el caso de uso y un posible include."
        hints={[
          "El actor es quien inicia la acción",
          "Un include es un paso que siempre ocurre, como verificar la disponibilidad",
        ]}
        expectedKeywords={["cliente", "reservar", "mantenimiento", "include", "disponibilidad"]}
      />
      <PracticeExercise
        title="Ejercicio 2. Historia de usuario"
        prompt="Escribir una historia de usuario con el formato «como… quiero… para…» para el mecánico que necesita ver los mantenimientos asignados del día."
        hints={[
          "Empezar con el rol: como mecánico",
          "Cerrar con el beneficio: para…",
        ]}
        expectedKeywords={["como", "quiero", "para", "mecánico", "mecanico"]}
      />
      <PracticeExercise
        title="Ejercicio 3. Requisito funcional o no funcional"
        prompt="«La página debe cargar en menos de tres segundos». ¿Es un requisito funcional o no funcional? Justificar."
        hints={[
          "Un requisito funcional describe qué hace el sistema",
          "Uno no funcional describe cómo debe comportarse",
        ]}
        expectedKeywords={["no funcional", "rendimiento", "calidad", "cómo", "como"]}
      />
    </section>
  );
}
