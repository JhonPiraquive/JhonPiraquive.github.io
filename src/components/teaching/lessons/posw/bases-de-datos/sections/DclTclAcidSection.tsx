import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function DclTclAcidSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DCL y TCL: permisos y transacciones"}
      </h2>
      <CodeFiddle
        language="sql"
        title="Permisos y transacción"
        code={`GRANT SELECT, INSERT, UPDATE ON productos TO usuario_app;
REVOKE DELETE ON productos FROM usuario_app;

BEGIN;
UPDATE cuentas SET saldo = saldo - 500000 WHERE id = 1;
UPDATE cuentas SET saldo = saldo + 500000 WHERE id = 2;
COMMIT;
-- ROLLBACK; si algo falla`}
      />
      <CompareTable
        headers={["Propiedad", "Significado", "Ejemplo"]}
        rows={[
          [
            "Atomicidad (A)",
            "Todas las operaciones ocurren o ninguna",
            "Transferencia: débito y crédito juntos o ROLLBACK",
          ],
          [
            "Consistencia (C)",
            "La BD pasa de un estado válido a otro",
            "CHECK (saldo >= 0) se respeta tras COMMIT",
          ],
          [
            "Aislamiento (I)",
            "Transacciones concurrentes no se pisan",
            "Dos compras del último ítem: una gana, otra falla",
          ],
          [
            "Durabilidad (D)",
            "Tras COMMIT, los datos persisten",
            "Apagón tras COMMIT no pierde la transferencia",
          ],
        ]}
      />
      <Callout title="Caso real: transferencia bancaria sin transacción">
        {
          "Dos UPDATE de saldo sin BEGIN/COMMIT: el primero corre, hay timeout de red y el segundo nunca ejecuta. Decisión: envolver en TCL, ROLLBACK ante fallo, CHECK (saldo >= 0) y permisos DCL mínimos."
        }
      </Callout>
      <PracticeExercise
        prompt="¿Por qué una transferencia bancaria necesita TCL y las propiedades ACID? Da un escenario de fallo sin transacción."
        hints={["Dos UPDATE", "Timeout entre ellos", "ROLLBACK"]}
        expectedKeywords={["transacción", "ROLLBACK", "atomicidad", "COMMIT"]}
        successMessage="Correcto. Sin transacción, un débito sin crédito deja datos inconsistentes; ACID garantiza todo-o-nada."
      />
    </section>
  );
}
