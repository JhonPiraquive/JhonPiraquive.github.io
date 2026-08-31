import { StepReveal } from "@/components/teaching/StepReveal";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL = `START TRANSACTION;
UPDATE Programas SET cupos = cupos - 1 WHERE id = 1 AND cupos > 0;
INSERT INTO Inscripciones (Nombre_Estudiante, programa_id) VALUES ('Ana Ruiz', 1);
COMMIT;
-- Si el UPDATE no afectó filas (sin cupo): ROLLBACK;`;

export function QueEsTclTransaccionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"TCL: transacción todo-o-nada"}
      </h2>
      <p className="my-4">
        {
          "TCL (Transaction Control Language) inicia, confirma o deshace una unidad de trabajo. Dialecto MySQL/MariaDB (InnoDB): START TRANSACTION / BEGIN, COMMIT, ROLLBACK, SAVEPOINT."
        }
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Sentencia"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Rol"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"START TRANSACTION / BEGIN"}</td>
              <td className="px-3 py-2">{"Inicia"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">{"COMMIT"}</td>
              <td className="px-3 py-2">{"Confirma"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"ROLLBACK"}</td>
              <td className="px-3 py-2">{"Deshace"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">{"SAVEPOINT / ROLLBACK TO"}</td>
              <td className="px-3 py-2">{"Rollback parcial"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <StepReveal
        title="Inscripción atómica"
        steps={[
          { title: "START TRANSACTION", content: "Abre la unidad de trabajo." },
          {
            title: "UPDATE cupos",
            content: "Descuenta solo si cupos > 0 (WHERE de seguridad).",
          },
          {
            title: "INSERT inscripción",
            content: "Registra al estudiante en el programa.",
          },
          {
            title: "COMMIT o ROLLBACK",
            content: "Confirma ambos cambios o ninguno.",
          },
        ]}
      />
      <CodeFiddle
        language="sql"
        title="Inscripción atómica (TCL)"
        filename="inscripcion-transaccion.sql"
        code={SQL}
      />
      <Callout title="Sin TRANSACTION" variant="callout-danger">
        {
          "Ferretería / Andes Tech: descontar stock + registrar venta en dos sentencias sueltas; cae la red a mitad → stock inconsistente. Remedio: START TRANSACTION … COMMIT/ROLLBACK; motor InnoDB; transacciones cortas (no dejes la TX abierta mientras el usuario “piensa” en la UI)."
        }
      </Callout>
    </section>
  );
}
