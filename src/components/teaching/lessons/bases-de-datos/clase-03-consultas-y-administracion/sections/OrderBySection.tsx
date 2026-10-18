import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `SELECT Nombre_Programa, cupos
FROM Programas
ORDER BY cupos DESC;

SELECT Nombre_Programa, sede
FROM Programas
ORDER BY sede ASC, Nombre_Programa ASC;`;

export function OrderBySection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"ORDER BY"}</h2>
      <p className="my-4">
        {
          "Sin ORDER BY el orden de filas no está garantizado. ASC por defecto; DESC para top-N con LIMIT."
        }
      </p>
      <CodeFiddle language="sql" title="ORDER BY ASC / DESC" code={SQL} />
    </section>
  );
}
