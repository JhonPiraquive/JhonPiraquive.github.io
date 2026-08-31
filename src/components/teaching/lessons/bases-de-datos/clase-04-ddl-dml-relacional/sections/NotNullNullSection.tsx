import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `CREATE TABLE Inscripciones (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Estudiante VARCHAR(120) NOT NULL,
  programa_id INT NOT NULL,
  observacion VARCHAR(200) NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_insc_programa
    FOREIGN KEY (programa_id) REFERENCES Programas(id)
);

-- Comparar ausencia: IS NULL / IS NOT NULL (nunca = NULL)
-- SELECT * FROM Inscripciones WHERE observacion IS NULL;`;

export function NotNullNullSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"NOT NULL frente a NULL"}
      </h2>
      <p className="my-4">
        {
          "NOT NULL obliga valor; NULL admite ausencia. NULL ≠ 0 ≠ ''. Comparar con IS NULL / IS NOT NULL. La FK a Programas reutiliza el ER de clase 03 (mismo tipo PK/FK)."
        }
      </p>
      <CodeFiddle language="sql" title="CREATE Inscripciones NULL / NOT NULL" code={SQL} />
    </section>
  );
}
