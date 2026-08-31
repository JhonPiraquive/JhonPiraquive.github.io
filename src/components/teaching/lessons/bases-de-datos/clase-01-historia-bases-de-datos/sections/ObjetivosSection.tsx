export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Ordenar cronológicamente las siete etapas del relato (archivos planos → jerárquico/red → Codd → SQL comercial → imperio relacional → NoSQL → hoy) y nombrar el problema que cada etapa resolvió."
          }
        </li>
        <li>
          {
            "Explicar causa→efecto en al menos tres hitos (por qué nacieron las BD; por qué el modelo relacional desplazó la navegación por punteros; por qué surgió NoSQL)."
          }
        </li>
        <li>
          {
            "Contar con palabras propias el aporte de Codd (1970): datos en relaciones/tablas e independencia de datos (preguntar qué se quiere, no cómo navegar)."
          }
        </li>
        <li>
          {
            "Ubicar el nacimiento de SQL en System R / INGRES / Oracle comercial, sin confundirlo con “Codd inventó SQL”."
          }
        </li>
        <li>
          {
            "Reconocer en un escenario cotidiano (p. ej. Excel compartido) el mismo patrón de duplicidad/inconsistencia de la era pre-BD — como comprensión del relato."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Haber recorrido el hub del módulo Bases de datos (index): panorama del curso y por qué importa el criterio al elegir tecnología."
          }
        </li>
        <li>
          {
            "No se exige SQL avanzado: verás consultas simples solo como ilustración del salto declarativo; el dominio profundo llega en clases posteriores."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente clase:"}</strong>{" "}
        {
          "clase-02 — Fundamentos, motores y estructura (qué es BD/SGBD, tipos, motores y el abecedario de tablas)."
        }
      </p>
    </section>
  );
}
