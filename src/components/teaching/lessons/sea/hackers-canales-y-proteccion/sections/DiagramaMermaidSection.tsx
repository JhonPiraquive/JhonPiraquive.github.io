import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Cadena de ataque: humano → acceso → acción"}</h3>
      <MermaidDiagram chart={`sequenceDiagram
  participant A as Atacante
  participant V as Victima
  participant S as Sistema

  A->>V: Mensaje_urgente_suplantado
  Note over V: Control: verificar_por_canal_alterno
  V->>S: Login_o_accion_sensible
  Note over S: Control: 2FA_alertas_limites
  S-->>V: Accion_ejecutada_o_bloqueada
  Note over S: Control: auditoria_request_id`} />
    </section>
  );
}
