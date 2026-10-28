import { Callout } from "@/components/teaching/Callout";
import { Link } from "@/i18n/navigation";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Objetivos de aprendizaje</h2>
      <p className="my-4">
        Nivel del módulo en esta clase: <strong>de 70 a 100</strong>. Identificar una tecnología emergente y entenderla no
        basta: hay que decidir qué hacer con ella y, si se adopta, hacerlo bien. La clase entrega un método completo, desde
        los criterios hasta el registro de la decisión, y lo aplica a casos reales.
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Evaluar una tecnología con criterios técnicos, de negocio y de personas, usando una matriz de decisión ponderada.</li>
        <li>Explicar por qué lo más nuevo no siempre es lo mejor y reconocer cuándo sí conviene adoptarlo.</li>
        <li>Planear una adopción por etapas: prueba de concepto, piloto y adopción, con métricas de éxito definidas antes.</li>
        <li>Registrar una decisión en un ADR e identificar sus riesgos, su reversibilidad y su plan de salida.</li>
        <li>Aplicar el método completo a casos de decisión con IA y con tecnologías web.</li>
        <li>Seguir un método para aprender cualquier tecnología nueva y mantenerse al día sin agobiarse.</li>
      </ul>
      <Callout title="Apoyo técnico para la actividad 3" variant="callout-info">
        <p className="mb-0">
          La actividad de peticiones HTTP (CRUD contra una API) se apoya en la{" "}
          <Link href="/teaching/tecnologias-emergentes/apoyo-react-03-datos-y-crud">guía de apoyo React, parte 3</Link>.
          Uno de los casos de esta clase analiza justamente las decisiones tecnológicas detrás de ese tipo de proyecto.
        </p>
      </Callout>
    </section>
  );
}
