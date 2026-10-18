import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Tráfico sin HTTPS vs con HTTPS"}</h3>
      <MermaidDiagram chart={`flowchart LR
  subgraph sinHttps["Sin_HTTPS"]
    C1[Cliente] --> A1[Atacante]
    A1 --> S1[Servidor]
    A1 -->|"lee_modifica"| A1
  end

  subgraph conHttps["Con_HTTPS_(TLS)"]
    C2[Cliente] -->|"cifrado"| S2[Servidor]
    A2[Atacante] -.->|"intercepta_sin_leer"| C2
    A2 -.->|"intercepta_sin_leer"| S2
    C2 -->|"alerta_si_cert_invalido"| C2
  end`} />
    </section>
  );
}
