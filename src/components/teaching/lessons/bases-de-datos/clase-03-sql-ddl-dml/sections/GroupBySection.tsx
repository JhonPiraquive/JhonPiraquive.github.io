import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `SELECT sede, COUNT(*) AS programas, AVG(cupos) AS promedio
FROM Programas
GROUP BY sede;`;

export function GroupBySection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"GROUP BY"}</h2>
      <p className="my-4">
        {
          "GROUP BY agrega por grupos. Toda columna no agregada del SELECT debe aparecer en el GROUP BY."
        }
      </p>
      <CodeFiddle language="sql" title="GROUP BY sede" code={SQL} />
    </section>
  );
}
