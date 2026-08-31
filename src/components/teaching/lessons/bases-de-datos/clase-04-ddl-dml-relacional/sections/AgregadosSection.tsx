import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_PLANTILLA = `-- Plantilla de agregados
SELECT
  AVG(columna),
  SUM(columna),
  COUNT(*),
  MAX(columna),
  MIN(columna)
FROM tabla;`;

const SQL_EJEMPLOS = `SELECT AVG(cupos), SUM(cupos), COUNT(*), MAX(cupos), MIN(cupos)
FROM Programas
WHERE sede = 'Cali';`;

export function AgregadosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Funciones de agregado"}
      </h2>
      <p className="my-4">
        {
          "AVG, SUM, COUNT, MAX y MIN resumen un conjunto de filas. Puedes filtrar filas con WHERE antes de agregar."
        }
      </p>
      <CodeFiddle language="sql" title="Plantilla AVG SUM COUNT MAX MIN" code={SQL_PLANTILLA} />
      <CodeFiddle language="sql" title="Agregados sobre cupos" code={SQL_EJEMPLOS} />
    </section>
  );
}
