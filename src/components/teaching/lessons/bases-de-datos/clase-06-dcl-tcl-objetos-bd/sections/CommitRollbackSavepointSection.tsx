import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `START TRANSACTION;
UPDATE Cuentas SET saldo = saldo - 100 WHERE id = 1;
SAVEPOINT despues_debito;
UPDATE Cuentas SET saldo = saldo + 100 WHERE id = 2;
-- Si falla el crédito:
ROLLBACK TO SAVEPOINT despues_debito;
ROLLBACK; -- o COMMIT según política`;

export function CommitRollbackSavepointSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"COMMIT, ROLLBACK y SAVEPOINT"}
      </h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"COMMIT:"}</strong> {"hace permanentes los cambios de la TX abierta."}
        </li>
        <li>
          <strong>{"ROLLBACK:"}</strong> {"deshace desde START TRANSACTION (o hasta un savepoint)."}
        </li>
        <li>
          <strong>{"SAVEPOINT:"}</strong> {"marca un punto para rollback parcial de un paso opcional."}
        </li>
      </ul>
      <CodeFiddle
        language="sql"
        title="SAVEPOINT y rollback parcial"
        filename="savepoint-ejemplo.sql"
        code={SQL}
      />
      <p className="my-4">
        {
          "BEGIN y START TRANSACTION son equivalentes para abrir la unidad de trabajo: elige uno y sé consistente. Algunos DDL hacen commit implícito según el dialecto — no asumas que aún puedes ROLLBACK del INSERT previo. Sé explícito con COMMIT/ROLLBACK; no abuses de SAVEPOINT como “goto”."
        }
      </p>
    </section>
  );
}
