import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `SELECT DISTINCT sede FROM Programas;`;

export function DistinctSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"DISTINCT"}</h2>
      <p className="my-4">
        {"DISTINCT elimina duplicados en el resultado. No sustituye UNIQUE en el esquema."}
      </p>
      <CodeFiddle language="sql" title="SELECT DISTINCT sede" code={SQL} />
    </section>
  );
}
