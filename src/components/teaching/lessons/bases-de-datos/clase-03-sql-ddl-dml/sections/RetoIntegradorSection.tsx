import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: Matrículas de Rutas Digitales"}
      </h2>
      <ol className="my-4 list-decimal pl-6">
        <li>
          {
            "DDL: BD + Programas/Inscripciones (PK, AUTO INCREMENT, UNIQUE, FK; padres primero)."
          }
        </li>
        <li>
          {
            "DML: ≥3 programas (uno con el nombre largo exacto) + ≥5 inscripciones."
          }
        </li>
        <li>{"Consultas: WHERE, DISTINCT sedes, top 2 por cupos."}</li>
        <li>{"Agregados + GROUP BY + HAVING."}</li>
        <li>{"INNER y LEFT (detectar programas sin inscritos)."}</li>
        <li>
          {
            "Un UPDATE y un DELETE seguros + 3–4 líneas sobre qué pasaría sin WHERE y por qué backup."
          }
        </li>
      </ol>
      <ChallengeCard
        title="Matrículas de Rutas Digitales"
        difficulty="intermedio"
        prompt="Script integral DDL+DML+JOIN+UPDATE/DELETE seguros sobre el esquema de matrículas."
        acceptanceCriteria={[
          "Padres antes que hijas con FK",
          "Consultas con WHERE/ORDER/LIMIT y agregados",
          "INNER y LEFT documentados",
          "UPDATE/DELETE con WHERE + reflexión sobre backup",
        ]}
        hints={["Reusa el ER de clase 03", "SELECT-count antes de borrar"]}
      />
    </section>
  );
}
