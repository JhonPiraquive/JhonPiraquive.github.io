import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Relación 27001–27002"}</h3>
      <MermaidDiagram chart={`flowchart LR
  subgraph sgsi["27001_SGSI_(ciclo)"]
    P[Planificar] --> H[Hacer]
    H --> V[Verificar]
    V --> A[Actuar]
    A --> P
  end

  lib["27002_Biblioteca_de_controles"] -->|"Seleccionar_controles"| H
  V -->|"Auditoria_y_evidencia"| sgsi`} />
    </section>
  );
}
