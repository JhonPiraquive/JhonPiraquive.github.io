import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

export function MapaPaginasClase03Section() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Mapa de páginas de la lección"}
      </h2>
      <p className="my-4">
        {
          "Clase 3 — modo diseño: conceptual → lógico → físico → ER → transformación. Las familias solo dan contexto de elección; el SQL operativo llega en la clase 4."
        }
      </p>
      <CompareTable
        headers={["Página", "Qué aprendes", "Entregable mental"]}
        rows={[
          [
            "Modelos: conceptual, lógico y físico",
            "Plano del negocio vs tipos SQL",
            "Decir en una frase qué toca cada nivel",
          ],
          [
            "Diagramas ER",
            "Entidades, atributos, relaciones, cardinalidad",
            "Leer y dibujar un erDiagram",
          ],
          [
            "Familias: relacional, NoSQL y grafos",
            "Elegir por forma de pregunta (contexto breve)",
            "Justificar familia sin recontar la historia",
          ],
          [
            "Transformación, tipos y llaves",
            "ER → tablas + tipos + PK/FK",
            "Script padres primero sin huérfanos",
          ],
          [
            "Práctica y cierre",
            "Ejercicios, reto, errores frecuentes, quiz",
            "Argumentar el diseño ante un coordinador",
          ],
        ]}
      />
      <Callout title="Checklist mental de la clase" variant="callout-warning">
        {
          "¿Validé el negocio (conceptual)? ¿Fijé cardinalidad (lógico)? ¿Elegí tipos (físico)? ¿La FK está en el lado N? ¿N:M tiene tabla puente? ¿La familia sigue a la pregunta, no a la moda?"
        }
      </Callout>
    </section>
  );
}
