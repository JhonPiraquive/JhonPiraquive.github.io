import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué el backend debe validar datos aunque el frontend ya los validó? Da un ejemplo de ataque si omites validación en servidor."
          hints={["Cliente manipulable", "curl/Postman directo", "Precio negativo en POST"]}
          expectedKeywords={["servidor", "validación", "manipulable", "cliente"]}
          successMessage="Correcto. Cualquier usuario puede enviar requests directos al API; el servidor es la fuente de verdad."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Un equipo solo conoce JavaScript y necesita lanzar una API REST en 6 semanas. ¿Qué stack recomendarías y por qué NO elegirías Go desde cero?"
          hints={["Productividad del equipo", "Curva de aprendizaje", "NestJS o Express"]}
          expectedKeywords={["Node.js", "NestJS", "Express", "experiencia", "equipo"]}
          successMessage="Correcto. La experiencia del equipo suele pesar más que benchmarks teóricos de otro lenguaje."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="En la arquitectura en capas, ¿qué hace un controlador y qué NO debería hacer? ¿Dónde va la lógica de negocio?"
          hints={["Orquesta HTTP", "No SQL directo", "Capa de servicio"]}
          expectedKeywords={["controlador", "servicio", "delega", "HTTP"]}
          successMessage="Correcto. El controlador recibe el request y delega; la lógica de negocio vive en la capa de servicio."
        />
      </div>
    </section>
  );
}
