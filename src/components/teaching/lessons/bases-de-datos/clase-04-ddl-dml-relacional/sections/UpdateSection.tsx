import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL = `-- 1) Dry-run
SELECT * FROM Programas WHERE id = 1;

-- 2) UPDATE seguro
UPDATE Programas SET cupos = 35 WHERE id = 1;

-- PELIGROSO (no ejecutar): sin WHERE → todas las filas
-- UPDATE Programas SET cupos = 35;`;

export function UpdateSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"UPDATE"}</h2>
      <p className="my-4">
        {"UPDATE modifica columnas en filas existentes. El WHERE define el alcance."}
      </p>
      <Callout title="Sin WHERE = todas las filas" variant="callout-danger">
        {
          "Un UPDATE sin WHERE reescribe toda la tabla. Usa PK (id) o una condición ya validada con SELECT."
        }
      </Callout>
      <CodeFiddle language="sql" title="UPDATE con WHERE (+ comentario peligroso)" code={SQL} />
    </section>
  );
}
