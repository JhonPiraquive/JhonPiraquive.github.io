import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: Diseño de matrículas — Rutas Digitales"}
      </h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Conceptual (6–8 líneas) del dominio matrículas."}</li>
        <li>{"erDiagram con ≥3 entidades y cardinalidades correctas."}</li>
        <li>
          {
            "Justificar núcleo relacional + un complemento (grafo/documentos) si aplica."
          }
        </li>
        <li>{"DDL padres primero con tipos, PK, UNIQUE, FK."}</li>
        <li>{"2–3 INSERT válidos + 1 inválido (FK) documentado."}</li>
        <li>
          {
            "Argumentar en lenguaje técnico comprensible para un coordinador."
          }
        </li>
      </ol>
      <ChallengeCard
        title="Diseño de matrículas — Rutas Digitales"
        difficulty="integrador"
        prompt="Entrega conceptual, ER, justificación de familia, DDL y pruebas de FK para el dominio de matrículas."
        acceptanceCriteria={[
          "Niveles conceptual/lógico/físico distinguibles",
          "ER con cardinalidades correctas",
          "DDL padres primero con PK/FK",
          "Al menos un INSERT inválido documentado",
        ]}
        hints={["Inscripciones como puente", "documento UNIQUE de negocio"]}
      />
    </section>
  );
}
