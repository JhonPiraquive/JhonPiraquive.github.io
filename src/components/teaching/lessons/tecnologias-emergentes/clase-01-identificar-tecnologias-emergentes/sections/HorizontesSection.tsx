import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HorizontesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Pensar el futuro en horizontes</h2>
      <p className="my-4">
        Hablar de «las tecnologías del futuro» sin más es demasiado vago. Una forma útil de ordenar la conversación es el
        <strong> modelo de los tres horizontes</strong>, muy usado en estrategia de innovación. Divide el futuro según qué
        tan lejos está el impacto y qué tan segura es la apuesta.
      </p>
      <MermaidDiagram
        title="Tres horizontes de innovación"
        description="Línea de tiempo con tres horizontes: el horizonte 1 es el presente con tecnologías maduras, el horizonte 2 son las emergentes que crecen en los próximos años, y el horizonte 3 son las apuestas de largo plazo."
        chart={`timeline
  title Tres horizontes
  Horizonte 1 - hoy : Tecnologías maduras que sostienen el trabajo actual : La web, la nube, las bases de datos
  Horizonte 2 - próximos años : Emergentes que ya crecen : Agentes de IA, robótica colaborativa, redes eléctricas bidireccionales
  Horizonte 3 - largo plazo : Apuestas con mucha incertidumbre : Computación cuántica práctica, interfaces cerebro-computadora`}
      />
      <CompareTable
        headers={["Horizonte", "Pregunta que responde", "Cuánto invertir"]}
        rows={[
          ["1. El presente", "¿Cómo se mejora lo que ya funciona?", "La mayor parte del tiempo y del presupuesto."],
          ["2. Lo emergente", "¿Qué está creciendo y puede volverse importante pronto?", "Una parte moderada: aprender, hacer pilotos."],
          ["3. Lo lejano", "¿Qué podría cambiar todo, aunque no sea seguro?", "Una parte pequeña: leer, seguir la investigación."],
        ]}
      />
      <p className="my-4">
        Para una persona que estudia tecnología el modelo también funciona: la mayor parte del esfuerzo va a dominar las
        bases (horizonte 1), una parte a aprender las emergentes (horizonte 2) y un poco de curiosidad a lo lejano
        (horizonte 3).
      </p>
    </section>
  );
}
