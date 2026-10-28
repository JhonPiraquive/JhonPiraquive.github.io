import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";

export function InteligenciaArtificialHoySection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">La inteligencia artificial: la emergente más visible</h2>
      <p className="my-4">
        Entre todas las tecnologías emergentes actuales, la inteligencia artificial generativa es la que más rápido pasó
        de los laboratorios a la vida diaria. En pocos años se volvió común conversar con un asistente, pedirle que
        resuma un documento o que escriba código. Por su velocidad y su alcance, el módulo le dedica la clase 2 completa.
      </p>
      <p className="my-4">
        Al aplicar la ficha de la página anterior, la IA generativa cumple los cinco atributos con claridad. Lo
        interesante es que dentro de ella hay piezas en etapas muy distintas.
      </p>
      <CompareTable
        title="Piezas de la IA actual y su etapa aproximada"
        headers={["Pieza", "Qué es", "Etapa aproximada"]}
        rows={[
          ["Asistentes conversacionales", "Programas con los que se conversa en lenguaje natural.", "Adopción masiva; pasando a ser cotidianos."],
          ["Asistentes de programación", "Herramientas que completan, explican y escriben código.", "En adopción por la mayoría temprana de los equipos de desarrollo."],
          ["Agentes", "Sistemas que reciben un objetivo y ejecutan varios pasos usando herramientas.", "Emergentes: entre el pico de expectativas y la comprensión."],
          ["Protocolos y estándares para agentes", "Formas comunes de conectar modelos con datos y herramientas, como MCP.", "Emergentes, en crecimiento muy rápido; ya tienen fundaciones que los gobiernan."],
          ["Modelos del mundo", "Modelos que aprenden cómo se comporta el mundo físico para predecir lo que pasará.", "Entre investigación y primeros prototipos."],
        ]}
      />
      <Callout title="Por qué es un caso de estudio ideal" variant="callout-tip">
        <p className="mb-0">
          La IA muestra en tiempo real todo lo que explica esta clase: crecimiento acelerado, mucha publicidad, casos reales
          y fracasos sonados, regulaciones nuevas y una incertidumbre enorme sobre su impacto. Quien aprende a evaluarla con
          método puede evaluar cualquier otra tecnología.
        </p>
      </Callout>
    </section>
  );
}
