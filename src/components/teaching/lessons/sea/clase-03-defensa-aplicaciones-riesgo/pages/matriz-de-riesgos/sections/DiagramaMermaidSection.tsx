import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa de calor 3x3 (conceptual)"}</h3>
      <MermaidDiagram chart={`flowchart TB
  subgraph grid["Impacto_vs_Probabilidad_(3x3)"]
    direction LR
    iB["Impacto_Bajo"] --> iM["Impacto_Medio"] --> iA["Impacto_Alto"]
  end

  pB["Prob_Baja"] --> r1["Secretos_en_repo (M)"]
  pM["Prob_Media"] --> r2["SQLi (A)"]
  pM --> r3["MITM (A)"]
  pM --> r4["Phishing (A)"]
  pM --> r5["Sesion_eterna (A)"]`} />
    </section>
  );
}
