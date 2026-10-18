import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { StepReveal } from "@/components/teaching/StepReveal";
import { INCIDENT_STEPS } from "@/lib/teaching-quizzes/sea";

export function PracticaGuiadaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Práctica guiada"}</h2>
      <p className="my-4">{"Cada ejercicio corresponde a una página de la clase. Se responde con palabras propias y las pistas se piden solo si hacen falta."}</p>
      <PracticeExercise
        title="Cookies: bandera clave"
        prompt="¿Qué bandera de una cookie impide que JavaScript la lea y reduce el robo de sesión mediante XSS?"
        hints={["El nombre empieza por Http.", "Protege la cookie del código que se ejecuta en la página."]}
        expectedKeywords={["httponly"]}
      />
      <PracticeExercise
        title="Programación segura: errores y logs"
        prompt="Ante una excepción, ¿qué debe ver el usuario y qué debe quedar solo en el registro interno?"
        hints={["El usuario no necesita detalles técnicos.", "El stack trace y la ruta de archivos sirven al equipo, no al atacante."]}
        expectedKeywords={["genérico", "generico", "log", "registro", "stack"]}
      />
      <PracticeExercise
        title="ISO: 27001 frente a 27002"
        prompt="¿Qué diferencia hay entre ISO/IEC 27001 y 27002?"
        hints={["Una describe el sistema; la otra, los controles.", "Una es certificable."]}
        expectedKeywords={["gestión", "gestion", "sgsi", "controles"]}
      />
      <PracticeExercise
        title="Matriz de riesgos: respuestas posibles"
        prompt="Un riesgo tiene probabilidad alta e impacto alto. ¿Cuáles son las cuatro respuestas posibles ante un riesgo?"
        hints={["Una de ellas es reducir la probabilidad o el impacto.", "Otra es pasar el riesgo a un tercero, por ejemplo con un seguro."]}
        expectedKeywords={["mitigar", "aceptar", "transferir", "evitar"]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Respuesta a un incidente paso a paso"}</h3>
      <StepReveal title="Caso paso a paso" steps={INCIDENT_STEPS} />
    </section>
  );
}
