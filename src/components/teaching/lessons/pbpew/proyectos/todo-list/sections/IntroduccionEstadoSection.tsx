import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function IntroduccionEstadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Introducción: de nodos sueltos a gestión de estado"}
      </h2>
      <p className="my-4">
        {
          "Este es el primer proyecto integrador de gestión de estado del track Programación básica para entornos web (PBPEW). No usas frameworks: unes un array de objetos (lección 7) con manipulación del DOM y eventos (lección 10) en un flujo completo: add → render → toggle → remove → filter."
        }
      </p>
      <p className="my-4">
        <strong>{"Regla de oro:"}</strong>
        {
          " el array `tareas` es la fuente de verdad; el DOM (`#lista`) es solo la vista que refleja ese array."
        }
      </p>
      <MermaidDiagram
        chart={`flowchart TB
  subgraph datos [Capa de datos]
    A["tareas[]\\n{id, texto, completada}"]
    F["filtroActivo"]
  end

  subgraph logica [Capa de lógica]
    AG[agregarTarea]
    TG[toggleCompletada]
    EL[eliminarPorId]
    RV[tareasVisibles]
    RD[render]
    GV[guardar / cargar]
  end

  subgraph vista [Capa de vista]
    FORM[form submit]
    UL["#lista DOM"]
    NAV[filtros Todas/Pendientes/Completadas]
    LS[(localStorage opcional)]
  end

  FORM -->|preventDefault| AG --> A
  NAV --> F --> RV --> RD
  A --> RD --> UL
  UL -->|delegación click| TG --> A
  UL -->|delegación click| EL --> A
  A --> GV --> LS
  LS -->|DOMContentLoaded| A`}
      />
    </section>
  );
}
