import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Codificación vs cifrado vs hash"}</h3>
      <MermaidDiagram chart={`flowchart LR
  subgraph cod[&quot;Codificacion_(Base64)&quot;]
    A[bytes] --> B[text]
    B --> A
    note1[&quot;Reversible_sin_clave&quot;]
  end

  subgraph cif[&quot;Cifrado&quot;]
    C[texto] -->|clave| D[cifrado]
    D -->|clave| C
    note2[&quot;Reversible_con_clave&quot;]
  end

  subgraph hsh[&quot;Hash_(SHA-256)&quot;]
    E[mensaje] --> F[huella]
    note3[&quot;No_reversible&quot;]
  end`} />
    </section>
  );
}
