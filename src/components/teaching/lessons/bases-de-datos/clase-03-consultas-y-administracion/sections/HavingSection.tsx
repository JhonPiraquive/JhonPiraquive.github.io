import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

const SQL = `SELECT sede, COUNT(*) AS programas, AVG(cupos) AS promedio
FROM Programas
GROUP BY sede
HAVING COUNT(*) >= 1;`;

export function HavingSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"HAVING"}</h2>
      <p className="my-4">
        {
          "HAVING filtra después de agrupar. WHERE filtra filas antes del GROUP BY."
        }
      </p>
      <CodeFiddle language="sql" title="HAVING COUNT(*) >= 1" code={SQL} />
      <CompareTable
        headers={["Cláusula", "Cuándo", "Ejemplo"]}
        rows={[
          ["WHERE", "Filtra filas antes de agrupar", "WHERE sede = 'Cali'"],
          ["HAVING", "Filtra grupos tras GROUP BY", "HAVING COUNT(*) >= 2"],
        ]}
      />
    </section>
  );
}
