import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores: usuario vs observabilidad interna"}</h3>
      <MermaidDiagram chart={`flowchart LR
  ex[Excepcion] --> h[Handler_de_errores]
  h --> u[Respuesta_segura_al_usuario]
  h --> l[Log_detallado_interno]
  l --> corr["request_id_(correlacion)"]
  u --> corr`} />
    </section>
  );
}
