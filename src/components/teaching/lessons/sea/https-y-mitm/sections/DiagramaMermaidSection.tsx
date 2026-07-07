import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tráfico sin HTTPS vs con HTTPS"}</h3>
      <MermaidDiagram chart={`flowchart LR
  subgraph sinHttps[&quot;Sin_HTTPS&quot;]
    C1[Cliente] --> A1[Atacante]
    A1 --> S1[Servidor]
    A1 -->|&quot;lee_modifica&quot;| A1
  end

  subgraph conHttps[&quot;Con_HTTPS_(TLS)&quot;]
    C2[Cliente] -->|&quot;cifrado&quot;| S2[Servidor]
    A2[Atacante] -.->|&quot;intercepta_sin_leer&quot;| C2
    A2 -.->|&quot;intercepta_sin_leer&quot;| S2
    C2 -->|&quot;alerta_si_cert_invalido&quot;| C2
  end`} />
    </section>
  );
}
