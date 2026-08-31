import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `SELECT Nombre_Programa, cupos
FROM Programas
WHERE sede = 'Cali';

-- WHERE también es el cinturón de seguridad de UPDATE/DELETE
-- SELECT COUNT(*) FROM Programas WHERE id = 1;  -- dry-run antes de borrar`;

export function WhereSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"WHERE"}</h2>
      <p className="my-4">
        {
          "WHERE filtra filas que cumplen una condición. Misma idea que usarás en UPDATE/DELETE: prueba primero con SELECT + COUNT."
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Cláusula"}</th>
            <th className="py-2 text-left font-semibold">{"Pregunta"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"WHERE"}</td>
            <td className="py-2">{"¿Qué filas cumplen la condición?"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"DISTINCT"}</td>
            <td className="py-2">{"¿Valores únicos en el resultado?"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"ORDER BY"}</td>
            <td className="py-2">{"¿En qué orden entregar?"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"LIMIT"}</td>
            <td className="py-2">{"¿Cuántas filas devolver?"}</td>
          </tr>
        </tbody>
      </table>
      <CodeFiddle language="sql" title="SELECT … WHERE" code={SQL} />
    </section>
  );
}
