import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const ER_RUTAS = `erDiagram
  PROGRAMAS ||--o{ INSCRIPCIONES : tiene
  ESTUDIANTES ||--o{ INSCRIPCIONES : realiza
  PROGRAMAS {
    int id PK
    varchar Nombre_Programa UK
    varchar sede
    int cupos
  }
  ESTUDIANTES {
    int id PK
    varchar Nombre_Estudiante
    varchar documento UK
  }
  INSCRIPCIONES {
    int id PK
    int estudiante_id FK
    int programa_id FK
    date fecha
  }`;

export function DiagramaErSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Diagrama entidad-relación (ER)"}
      </h2>
      <p className="my-4">
        {
          "Dibujo (o descripción formal) de entidades, atributos y relaciones con cardinalidad. Es la forma habitual de comunicar el diseño conceptual/lógico antes del SQL."
        }
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Pieza"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Idea"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">
                <strong>{"Entidad"}</strong>
              </td>
              <td className="px-3 py-2">{"Cosa del negocio"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">
                <strong>{"Atributo"}</strong>
              </td>
              <td className="px-3 py-2">{"Dato que la describe"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">
                <strong>{"Relación"}</strong>
              </td>
              <td className="px-3 py-2">{"Vínculo semántico"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">
                <strong>{"1:1 / 1:N / N:M"}</strong>
              </td>
              <td className="px-3 py-2">{"Cuántas instancias de cada lado"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-4 font-semibold">{"Cómo se crea"}</p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Listar entidades."}</li>
        <li>{"Atributos por entidad."}</li>
        <li>{"Verbos de relación."}</li>
        <li>{"Cardinalidad en cada extremo."}</li>
        <li>{"Revisar N:M (casi siempre tabla puente en relacional)."}</li>
        <li>{"Dibujar (Mermaid / pizarra) y contrastar con requisitos."}</li>
      </ol>
      <MermaidDiagram
        title="ER — Programas, Estudiantes, Inscripciones"
        description="Diagrama entidad-relación con cardinalidades y PK/FK"
        chart={ER_RUTAS}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso — Rutas Digitales y la tabla Todo'}
      </h3>
      <p className="my-4">
        {
          "Una tabla Todo con estudiante1, estudiante2… modela la hoja Excel, no el negocio. Redibuja el ER (Programas, Estudiantes, Inscripciones) y migra con PK/FK."
        }
      </p>
    </section>
  );
}
