import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DifusionYAbismoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">La difusión de innovaciones: quién adopta y cuándo</h2>
      <p className="my-4">
        El sociólogo Everett Rogers estudió cómo se extienden las innovaciones en una población y encontró que las
        personas y las organizaciones adoptan en grupos, en un orden bastante predecible. Saber en qué grupo está un
        equipo o un cliente ayuda a decidir cuánto riesgo puede asumir.
      </p>
      <MermaidDiagram
        title="Grupos de adopción"
        description="Gráfica de barras con el porcentaje aproximado de cada grupo: innovadores 2.5, adoptantes tempranos 13.5, mayoría temprana 34, mayoría tardía 34 y rezagados 16."
        chart={`---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#6b4eff"
---
xychart-beta
  title "Porcentaje aproximado de la población"
  x-axis [Innovadores, "Adopt. tempranos", "May. temprana", "May. tardia", Rezagados]
  y-axis "Porcentaje" 0 --> 40
  bar [2.5, 13.5, 34, 34, 16]`}
      />
      <CompareTable
        headers={["Grupo", "Perfil", "Qué necesita para adoptar"]}
        rows={[
          ["Innovadores", "Pocos, curiosos y dispuestos a fallar.", "Solo que la tecnología exista; aceptan errores y falta de documentación."],
          ["Adoptantes tempranos", "Líderes de opinión que buscan ventaja.", "Ver una ventaja clara para su caso, aunque haya riesgo."],
          ["Mayoría temprana", "Prácticos y cuidadosos.", "Evidencia de que funciona en organizaciones parecidas, con soporte y documentación."],
          ["Mayoría tardía", "Escépticos.", "Que ya sea el estándar o que la alternativa deje de estar disponible."],
          ["Rezagados", "Apegados a lo conocido.", "Que lo anterior desaparezca."],
        ]}
      />
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">El abismo entre los primeros y la mayoría</h3>
      <p className="my-4">
        Geoffrey Moore observó que entre los adoptantes tempranos y la mayoría temprana hay un salto difícil, al que
        llamó <strong>el abismo</strong>. Los primeros compran una promesa; la mayoría compra una solución completa y
        probada. Muchas tecnologías entusiasman a los primeros y nunca logran convencer a la mayoría.
      </p>
      <Callout title="Cómo se aplica al evaluar" variant="callout-tip">
        <p className="mb-0">
          Si una tecnología solo tiene usuarios innovadores, adoptarla es apostar. Si ya cruzó el abismo (hay casos en
          organizaciones comunes, soporte comercial, cursos y ofertas de empleo), el riesgo baja mucho. Una pregunta útil
          es: ¿quiénes la usan hoy, innovadores o personas prácticas?
        </p>
      </Callout>
    </section>
  );
}
