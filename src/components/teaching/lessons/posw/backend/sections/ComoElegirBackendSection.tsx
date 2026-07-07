import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function ComoElegirBackendSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cómo elegir el backend"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Experiencia del equipo pesa más que benchmarks teóricos."}</li>
        <li>{"Tipo de proyecto: IA/ML, banca, startup API, CMS."}</li>
        <li>{"Criterios: rendimiento, ecosistema, mercado laboral, escalabilidad con diseño correcto."}</li>
      </ul>
      <MermaidDiagram
        chart={`flowchart TD
  START[¿Elegir backend?] --> EXP{¿Equipo con experiencia?}
  EXP -->|Sí| USE[Usar ese lenguaje]
  EXP -->|No| TYPE{¿Tipo de proyecto?}
  TYPE -->|IA/ML| FAST[Python + FastAPI]
  TYPE -->|Banca/Enterprise| ENT[Spring Boot / ASP.NET]
  TYPE -->|Startup API| STARTUP[NestJS / Go]
  TYPE -->|CMS/E-commerce| CMS[PHP Laravel]`}
      />
      <CodeChallenge
        title="Completa el árbol de decisión de stack"
        template={`Equipo solo conoce Python + proyecto ML → {{blank1}}
Banca regulada + Java en el equipo → {{blank2}}
CMS con e-commerce → {{blank3}}`}
        blanks={[
          { id: "blank1", answer: "Python + FastAPI", placeholder: "stack" },
          { id: "blank2", answer: "Spring Boot", placeholder: "stack" },
          { id: "blank3", answer: "PHP Laravel", placeholder: "stack" },
        ]}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores a evitar"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Elegir tecnología solo por benchmarks sin considerar el equipo."}</li>
        <li>{"No validar en servidor (el cliente es manipulable)."}</li>
        <li>{"Poner toda la lógica en el controlador."}</li>
        <li>{"Devolver siempre 200 o exponer stack traces en producción."}</li>
      </ul>
    </section>
  );
}
