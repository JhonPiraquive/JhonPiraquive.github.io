import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `INSERT INTO Programas (Nombre_Programa, sede, cupos) VALUES
  ('Técnica Profesional en Configuración de Servicios Web', 'Cali', 30),
  ('Técnica en Sistemas', 'Cali', 25);

INSERT INTO Inscripciones (Nombre_Estudiante, programa_id) VALUES
  ('Ana Ruiz', 1),
  ('Luis Pérez', 1);`;

export function InsertSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"INSERT"}</h2>
      <p className="my-4">
        {
          "Lista columnas explícitamente. Omite id si es AUTO INCREMENT. Literales de texto entre comillas simples."
        }
      </p>
      <CodeFiddle language="sql" title="INSERT simple y múltiple" code={SQL} />
    </section>
  );
}
