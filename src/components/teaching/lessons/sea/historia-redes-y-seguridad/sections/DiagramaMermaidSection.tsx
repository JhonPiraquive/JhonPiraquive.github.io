import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DiagramaMermaidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Diagrama (Mermaid)"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"De conectividad a riesgo"}</h3>
      <MermaidDiagram chart={`flowchart TD
  conectar[Conectar] --> masUsuarios[Más_usuarios]
  masUsuarios --> masSuperficie[Más_superficie]
  masSuperficie --> masControles[Necesidad_de_controles]

  conectar --> obj1["Objetivo: disponibilidad"]
  masUsuarios --> obj2["Objetivo: permisos"]
  masSuperficie --> obj3["Objetivo: reducir_monetización_del_ataque"]
  masControles --> obj4["Objetivo: gobernanza_y_evidencia"]`} />
    </section>
  );
}
