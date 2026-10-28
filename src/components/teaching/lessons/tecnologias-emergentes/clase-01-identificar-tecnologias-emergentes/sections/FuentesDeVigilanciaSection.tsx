import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function FuentesDeVigilanciaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Vigilancia tecnológica: buscar con método</h2>
      <p className="my-4">
        La <strong>vigilancia tecnológica</strong> es el proceso de buscar, filtrar, analizar y comunicar información
        sobre tecnologías para tomar mejores decisiones. No consiste en leer noticias al azar, sino en seguir un ciclo
        ordenado, parecido al de un meteorólogo que revisa cada día los mismos instrumentos.
      </p>
      <MermaidDiagram
        title="Ciclo de vigilancia tecnológica"
        description="Ciclo de cinco pasos que se repite: definir qué se vigila, buscar en fuentes, filtrar y verificar, analizar y comunicar, y decidir; la decisión lleva de nuevo a definir."
        chart={`flowchart LR
  A["1. Definir qué se vigila<br/>y para qué"] --> B["2. Buscar en fuentes<br/>confiables"]
  B --> C["3. Filtrar y verificar"]
  C --> D["4. Analizar y comunicar"]
  D --> E["5. Decidir"]
  E --> A`}
      />
      <CompareTable
        title="Fuentes según su tipo"
        headers={["Tipo de fuente", "Ejemplos", "Para qué sirve", "Precaución"]}
        rows={[
          [
            "Informes de consultoras y foros",
            "Ciclo de sobreexpectación de Gartner, informe de tecnologías emergentes del Foro Económico Mundial, MIT Technology Review.",
            "Visión general y comparada de muchas tecnologías.",
            "Algunos son de pago o tienen intereses comerciales.",
          ],
          [
            "Radares tecnológicos",
            "Technology Radar de Thoughtworks.",
            "Recomendaciones concretas: qué adoptar, qué probar, qué evitar.",
            "Reflejan la experiencia de una empresa, no de todas.",
          ],
          [
            "Encuestas de comunidades",
            "Encuesta anual de Stack Overflow, State of JS, Octoverse de GitHub.",
            "Qué usan y qué quieren aprender los desarrolladores.",
            "Quienes responden no representan a toda la industria.",
          ],
          [
            "Fuentes primarias",
            "Blogs oficiales, documentación, artículos científicos, notas de versión.",
            "Datos exactos de lo que la tecnología hace hoy.",
            "Cada fuente presenta su propio producto de la mejor manera.",
          ],
          [
            "Fuentes públicas y académicas",
            "Políticas públicas de ciencia y tecnología, universidades, centros de investigación.",
            "Contexto nacional, regulación y financiación.",
            "Pueden tardar en actualizarse.",
          ],
        ]}
      />
      <Callout title="Una regla de verificación" variant="callout-tip">
        <p className="mb-0">
          Antes de creer una afirmación sobre una tecnología, se busca en una fuente primaria. Si un artículo dice que una
          librería «ya permite hacer X», se comprueba en su documentación oficial. Esta regla vale aún más para el
          contenido generado por inteligencia artificial, que puede sonar seguro y estar equivocado.
        </p>
      </Callout>
    </section>
  );
}
