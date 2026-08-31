import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `SELECT Nombre_Programa, cupos
FROM Programas
WHERE sede = 'Cali'
ORDER BY cupos DESC
LIMIT 2;`;

export function LimitSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"LIMIT"}</h2>
      <p className="my-4">
        {
          "LIMIT acota cuántas filas devolver. Combínalo con ORDER BY para un top-N confiable."
        }
      </p>
      <CodeFiddle language="sql" title="ORDER BY + LIMIT 2" code={SQL} />
    </section>
  );
}
