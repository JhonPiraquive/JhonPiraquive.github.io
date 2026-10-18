import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `SELECT id, Nombre_Programa, cupos FROM Programas;

-- SELECT * proyecta todas las columnas (útil en lab; en reportes, lista lo necesario)
SELECT * FROM Programas;`;

export function SelectBaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"SELECT"}</h2>
      <p className="my-4">
        {
          "SELECT proyecta columnas. Es la base de WHERE, agregados y JOINs en las siguientes páginas."
        }
      </p>
      <CodeFiddle language="sql" title="SELECT columnas y SELECT *" code={SQL} />
    </section>
  );
}
