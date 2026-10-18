import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_FK = `-- Padre existe: id = 1
INSERT INTO Programas (Nombre_Programa, sede, cupos)
VALUES ('Técnica en Sistemas', 'Cali', 25);

-- Válido: programa_id apunta a un padre real
INSERT INTO Inscripciones (estudiante_id, programa_id, fecha)
VALUES (1, 1, '2026-02-01');

-- Inválido (huérfano): el motor debe rechazar si hay FK
-- INSERT INTO Inscripciones (estudiante_id, programa_id, fecha)
-- VALUES (1, 999, '2026-02-02');`;

export function ForeignKeyFkSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Llave foránea (FK) e integridad referencial"}
      </h2>
      <p className="my-4">
        {
          "Valor que debe existir en la PK/UNIQUE del padre. Mismo tipo en ambos lados. La integridad referencial vive en el motor, no solo en la aplicación."
        }
      </p>
      <CodeFiddle language="sql" title="INSERT huérfano (FK)" code={SQL_FK} />
    </section>
  );
}
