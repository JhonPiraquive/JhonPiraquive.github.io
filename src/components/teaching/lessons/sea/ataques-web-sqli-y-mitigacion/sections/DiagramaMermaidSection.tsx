import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { CodeBlock } from "@/components/teaching/CodeBlock";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Separar datos de instrucciones"}</h3>
      <MermaidDiagram chart={`flowchart LR
  in[Entrada_usuario] --> val[Validacion_formato]
  val --> param[Consulta_parametrizada]
  param --> bd[(BD)]

  in -.-> vuln[SQL_concatenado_(vulnerable)]
  vuln -.-> bd`} />
    </section>
  );
}
