import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function QueEsUmlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Qué es UML y para qué sirve</h2>
      <p className="my-4">
        UML (Unified Modeling Language, lenguaje unificado de modelado) es una notación gráfica. Sirve para
        visualizar, especificar, construir y documentar un sistema a lo largo del ciclo de vida. No es un
        lenguaje de programación: no se ejecuta. Es el idioma común entre quien pide el sistema y quien lo va a
        construir.
      </p>
      <p className="my-4">
        Los diagramas que más vas a usar al inicio son el de casos de uso, el de clases, el de secuencia, el de
        estados y el de actividades. Esta clase se concentra en el vocabulario. Las clases 3 y 4 los dibujan
        sobre Logística SAS.
      </p>
      <p className="my-4">El desarrollo con UML se apoya en tres modelos:</p>
      <MermaidDiagram
        title="Tres modelos de UML"
        description="Cada modelo responde una pregunta distinta sobre el sistema"
        chart={`flowchart TB
  F[Modelo funcional] --> UC[Diagramas de casos de uso]
  O[Modelo de objetos] --> CL[Diagramas de clases]
  D[Modelo dinamico] --> SE[Secuencia estado y actividad]
  UC --> P1[Que hace el sistema para el usuario]
  CL --> P2[De que objetos esta hecho]
  SE --> P3[Como se comporta por dentro]`}
      />
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <strong>Funcional.</strong> Casos de uso. Describe la funcionalidad desde quien usa el sistema.
        </li>
        <li>
          <strong>De objetos.</strong> Diagrama de clases. Describe estructura: objetos, atributos, asociaciones
          y operaciones.
        </li>
        <li>
          <strong>Dinámico.</strong> Secuencia, estados y actividades. Describe el comportamiento interno.
        </li>
      </ul>
    </section>
  );
}
