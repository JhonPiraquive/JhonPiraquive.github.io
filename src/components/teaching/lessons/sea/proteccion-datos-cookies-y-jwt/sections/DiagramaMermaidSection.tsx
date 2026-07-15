import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Ciclo de sesión: login → uso → expiración → renovación"}</h3>
      <MermaidDiagram chart={`flowchart LR
  login[Login] --> emit[Emitir_cookie_o_token]
  emit --> uso[Uso_normal_(requests)]
  uso --> exp[Expiracion]
  exp --> refresh[Renovacion_(si_aplica)]
  refresh --> uso
  uso --> logout[Logout]
  logout --> inval[Invalidar_sesion]

  robo[Robo_de_sesion] -.-> uso
  exp -.->|"Limita_tiempo_util"| robo`} />
    </section>
  );
}
