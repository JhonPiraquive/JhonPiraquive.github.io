import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto: Matrícula segura"}
      </h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Mapa DDL/DML/DCL/TCL del flujo."}</li>
        <li>{"VIEW de programas/cupos + SELECT."}</li>
        <li>
          {
            "Inscripción atómica (UPDATE+INSERT) argumentando Atomicity; WHERE en cupos."
          }
        </li>
        <li>{"GRANT/REVOKE app vs reporte; mínimo privilegio."}</li>
        <li>
          {
            "Esbozo UDF + PROCEDURE (o equivalente en app si no hay routines)."
          }
        </li>
        <li>{"Diseño trigger AFTER INSERT de auditoría."}</li>
        <li>{"Cuatro decisiones app vs BD."}</li>
      </ol>
      <ChallengeCard
        title="Matrícula segura"
        difficulty="integrador"
        prompt="Arma el flujo completo: vista, transacción, privilegios mínimos, rutinas/triggers y decisiones app vs BD."
        acceptanceCriteria={[
          "Mapa de familias correcto",
          "Transacción con WHERE en cupos",
          "GRANT mínimo app vs reporte",
          "Vista + al menos un objeto rutina/trigger esbozado",
          "Cuatro decisiones app vs BD",
        ]}
        hints={["No uses root compartido", "Triggers delgados"]}
      />
    </section>
  );
}
