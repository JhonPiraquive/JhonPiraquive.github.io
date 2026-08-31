import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `ALTER TABLE Programas
  ADD PRIMARY KEY (id);
-- O bien en CREATE TABLE: PRIMARY KEY (id)`;

export function PrimaryKeySection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"PRIMARY KEY"}
      </h2>
      <p className="my-4">
        {
          "La llave primaria identifica cada fila. Suele ir con AUTO INCREMENT en id. Puedes declararla en CREATE o con ALTER … ADD PRIMARY KEY."
        }
      </p>
      <CodeFiddle language="sql" title="ALTER TABLE ADD PRIMARY KEY" code={SQL} />
    </section>
  );
}
