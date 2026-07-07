import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function CompruebaTuComprensionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Comprueba tu comprensión"}</h2>
      <div className="my-8">
        <PracticeExercise
          prompt="Una API usa GET /api/getLibros y POST /api/reservarLibro. ¿Qué constraints de Uniform Interface viola y cómo los corregirías?"
          hints={["URIs con sustantivos", "Identificación de recursos", "Verbos HTTP"]}
          expectedKeywords={["recurso", "GET", "POST", "libros", "reservas"]}
          successMessage="Correcto. Usar GET /api/v1/libros y POST /api/v1/reservas identifica recursos, no acciones en la URI."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="¿Por qué hardcodear 15 URLs en una app móvil contradice HATEOAS? ¿Qué incluirías en la respuesta JSON para evitarlo?"
          hints={["_links", "href", "Cambios de ruta sin actualizar app"]}
          expectedKeywords={["HATEOAS", "_links", "href", "hypermedia"]}
          successMessage="Correcto. _links guían al cliente a acciones disponibles; cambios de ruta no rompen clientes que navegan hypermedia."
        />
      </div>
      <div className="my-8">
        <PracticeExercise
          prompt="Clasifica esta API en Richardson: usa GET/POST/PUT con códigos 200/404/422 correctos pero sin _links en ninguna respuesta. ¿Qué falta para nivel 3?"
          hints={["Verbos + status = nivel 2", "HATEOAS = nivel 3"]}
          expectedKeywords={["nivel 2", "HATEOAS", "_links", "nivel 3"]}
          successMessage="Correcto. Es nivel 2; falta HATEOAS con _links en respuestas para alcanzar nivel 3."
        />
      </div>
    </section>
  );
}
