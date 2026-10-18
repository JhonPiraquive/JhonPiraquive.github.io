import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL_SAFE = `-- 1) Dry-run
SELECT * FROM Programas WHERE id = 3;

-- 2) DELETE seguro
DELETE FROM Programas WHERE id = 3;

-- PELIGROSO (no ejecutar): sin WHERE → elimina TODOS los registros
-- DELETE FROM Programas;`;

const SQL_CASO = `-- Caso Rutas Digitales (solo comentario didáctico):
-- DELETE FROM Inscripciones;  -- sin WHERE en matrículas reales → incidente
-- Restaurar dump; checklist SELECT-count; usuario sin DELETE masivo`;

export function DeleteSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"DELETE"}</h2>
      <p className="my-4">
        {
          "DELETE elimina filas. Distinto de DROP TABLE (elimina la tabla). Con FK desde Inscripciones, borrar un padre puede fallar o cascada según definición."
        }
      </p>
      <Callout title="DELETE sin WHERE vacía la tabla" variant="callout-danger">
        {
          "En Rutas Digitales, DELETE FROM Inscripciones; sin WHERE sobre matrículas reales es pérdida operativa. Backup + WHERE + privilegios acotados."
        }
      </Callout>
      <CodeFiddle language="sql" title="DELETE con WHERE (+ comentario peligroso)" code={SQL_SAFE} />
      <CodeFiddle language="sql" title="Caso comentado (nunca ejecutar)" code={SQL_CASO} />
    </section>
  );
}
