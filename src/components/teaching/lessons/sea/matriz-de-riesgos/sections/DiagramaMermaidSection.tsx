import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { CodeBlock } from "@/components/teaching/CodeBlock";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa de calor 3x3 (conceptual)"}</h3>
      <MermaidDiagram chart={`flowchart TB
  subgraph grid[&quot;Impacto_vs_Probabilidad_(3x3)&quot;]
    direction LR
    iB[&quot;Impacto_Bajo&quot;] --> iM[&quot;Impacto_Medio&quot;] --> iA[&quot;Impacto_Alto&quot;]
  end

  pB[&quot;Prob_Baja&quot;] --> r1[&quot;Secretos_en_repo (M)&quot;]
  pM[&quot;Prob_Media&quot;] --> r2[&quot;SQLi (A)&quot;]
  pM --> r3[&quot;MITM (A)&quot;]
  pM --> r4[&quot;Phishing (A)&quot;]
  pM --> r5[&quot;Sesion_eterna (A)&quot;]`} />
    </section>
  );
}
