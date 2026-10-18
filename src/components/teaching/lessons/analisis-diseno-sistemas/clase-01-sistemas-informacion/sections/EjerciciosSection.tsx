import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function EjerciciosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Ejercicios de la clase 1</h2>
      <p className="my-4">Cada ejercicio ofrece pistas y una validación que indica si la respuesta va por buen camino. Se recomienda intentarlos antes de volver al contenido.</p>
      <PracticeExercise
        title="Ejercicio 1. Entrada, proceso y salida"
        prompt="Una biblioteca de barrio registra los préstamos en un cuaderno. Describir qué sería la entrada, el proceso y la salida si se organizara como sistema de información."
        hints={[
          "La entrada es lo que se captura: socio y libro",
          "El proceso transforma o registra esos datos",
          "La salida es lo que se consulta o se imprime",
        ]}
        expectedKeywords={["socio", "libro", "préstamo", "prestamo", "reporte", "consulta"]}
      />
      <PracticeExercise
        title="Ejercicio 2. Tipo de sistema por uso"
        prompt="Un gerente de una cadena de tiendas quiere comparar ventas por mes para decidir qué productos dejar de pedir. ¿Qué tipo de sistema por uso necesita y por qué no basta uno transaccional?"
        hints={[
          "Los sistemas transaccionales registran operaciones del día a día",
          "Aquí hace falta resumir información para decidir",
        ]}
        expectedKeywords={["dss", "decisiones", "decidir", "apoyo", "resumen"]}
      />
    </section>
  );
}
