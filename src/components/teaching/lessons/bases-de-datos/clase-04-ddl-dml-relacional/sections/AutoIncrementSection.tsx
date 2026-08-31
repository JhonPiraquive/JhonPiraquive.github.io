import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `INSERT INTO Programas (Nombre_Programa, sede, cupos) VALUES
  ('Técnica Profesional en Configuración de Servicios Web', 'Cali', 30);
-- id lo genera AUTO INCREMENT; no hace falta listarlo`;

export function AutoIncrementSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"AUTO INCREMENT"}
      </h2>
      <p className="my-4">
        {
          "AUTO INCREMENT genera un número único al insertar; suele ir en la PK subrogada id. Omite id en el INSERT."
        }
      </p>
      <CodeFiddle language="sql" title="INSERT omitiendo id" code={SQL} />
    </section>
  );
}
