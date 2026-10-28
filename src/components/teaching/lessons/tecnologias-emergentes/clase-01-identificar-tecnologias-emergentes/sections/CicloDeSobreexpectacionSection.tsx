import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CicloDeSobreexpectacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">El ciclo de sobreexpectación: cómo cambian las expectativas</h2>
      <p className="my-4">
        La curva S mide lo que la tecnología <em>hace</em>. El ciclo de sobreexpectación (en inglés, <em>hype cycle</em>),
        propuesto por la consultora Gartner, mide lo que la gente <em>espera</em> de ella. Ambas cosas casi nunca van al
        mismo ritmo: las expectativas suben mucho antes que los resultados.
      </p>
      <MermaidDiagram
        title="Ciclo de sobreexpectación"
        description="Gráfica de línea: las expectativas suben hasta un pico, caen a un valle de desilusión y luego suben lentamente hasta estabilizarse en una meseta de productividad."
        chart={`---
config:
  themeVariables:
    xyChart:
      plotColorPalette: "#6b4eff"
---
xychart-beta
  title "Expectativas a lo largo del tiempo"
  x-axis [Inicio, Subida, Pico, Caida, Valle, Ascenso, Comprension, Mejora, Meseta]
  y-axis "Expectativas" 0 --> 100
  line [10, 55, 95, 50, 18, 30, 45, 55, 60]`}
      />
      <CompareTable
        headers={["Etapa", "Qué ocurre", "Decisión prudente"]}
        rows={[
          ["1. Disparador de la innovación", "Un avance o una demostración llama la atención. Casi no hay productos.", "Observar y leer. No comprometer recursos."],
          ["2. Pico de expectativas infladas", "Todos hablan de ella; aparecen promesas exageradas y algunos casos de éxito muy publicitados.", "Probar en pequeño y con dinero que se pueda perder."],
          ["3. Valle de la desilusión", "Los resultados no alcanzan lo prometido. Fracasan proyectos y el interés cae.", "No descartar por completo: revisar qué sí funcionó."],
          ["4. Pendiente de la comprensión", "Se entiende dónde sirve y dónde no. Mejoran las herramientas y la documentación.", "Buen momento para aprenderla y hacer pilotos serios."],
          ["5. Meseta de la productividad", "Se usa de forma normal, con beneficios claros y medibles.", "Adoptar si resuelve una necesidad. Ya no da ventaja ser el primero."],
        ]}
      />
      <Callout title="Cómo usar el modelo sin abusar de él" variant="callout-warning">
        <p className="mb-0">
          El ciclo es una herramienta para pensar, no una ley. No todas las tecnologías recorren las cinco etapas: algunas
          desaparecen en el valle y otras pasan rápido a la productividad. Su valor está en recordar que el entusiasmo del
          pico no prueba que algo funcione y que la caída del valle no prueba que algo haya fracasado.
        </p>
      </Callout>
    </section>
  );
}
