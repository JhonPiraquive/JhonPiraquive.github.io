import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { CodeBlock } from "@/components/teaching/CodeBlock";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Relación 27001–27002"}</h3>
      <MermaidDiagram chart={`flowchart LR
  subgraph sgsi[&quot;27001_SGSI_(ciclo)&quot;]
    P[Planificar] --> H[Hacer]
    H --> V[Verificar]
    V --> A[Actuar]
    A --> P
  end

  lib[&quot;27002_Biblioteca_de_controles&quot;] -->|&quot;Seleccionar_controles&quot;| H
  V -->|&quot;Auditoria_y_evidencia&quot;| sgsi`} />
    </section>
  );
}
