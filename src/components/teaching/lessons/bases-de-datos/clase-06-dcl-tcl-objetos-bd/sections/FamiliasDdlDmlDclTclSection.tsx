import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

export function FamiliasDdlDmlDclTclSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DDL / DML / DCL / TCL"}
      </h2>
      <p className="my-4">
        {
          "CREATE VIEW es DDL (define un objeto); SELECT sobre la vista es DML. CREATE FUNCTION / PROCEDURE / TRIGGER también son DDL de objetos."
        }
      </p>
      <CompareTable
        headers={["Familia", "Controla", "Ejemplo"]}
        rows={[
          ["DDL", "Estructura", "CREATE TABLE / CREATE VIEW"],
          ["DML", "Filas", "INSERT / SELECT"],
          ["DCL", "Permisos", "GRANT / REVOKE"],
          ["TCL", "Unidad de trabajo", "COMMIT / ROLLBACK"],
        ]}
      />
      <p className="my-4">
        {
          "En Rutas Digitales: el admin crea tablas (DDL), carga matrículas (DML), da a la app solo SELECT/INSERT (DCL) y exige que inscripción + cupo se confirmen juntos (TCL)."
        }
      </p>
      <Callout title="DELETE no es REVOKE" variant="callout-warning">
        {
          "DELETE borra filas (DML). REVOKE quita privilegios (DCL). GRANT ALL “para que funcione el lab” es un hábito que llega a producción: privilegia por tarea."
        }
      </Callout>
    </section>
  );
}
