import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Codificación vs cifrado vs hash"}</h3>
      <MermaidDiagram chart={`flowchart LR
  subgraph cod["Codificacion_(Base64)"]
    A[bytes] --> B[text]
    B --> A
    note1["Reversible_sin_clave"]
  end

  subgraph cif["Cifrado"]
    C[texto] -->|clave| D[cifrado]
    D -->|clave| C
    note2["Reversible_con_clave"]
  end

  subgraph hsh["Hash_(SHA-256)"]
    E[mensaje] --> F[huella]
    note3["No_reversible"]
  end`} />
    </section>
  );
}
