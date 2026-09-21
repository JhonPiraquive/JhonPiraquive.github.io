import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function LabBaseSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Lab base"}</h2>
      <p className="my-4">
        {
          "Usa este esqueleto (o el de tu entorno) para las prácticas y el reto. Dialecto MySQL/MariaDB (InnoDB)."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="Lab integral — vista + TCL"
        filename="lab-rutas-dcl-tcl.sql"
        code={`CREATE DATABASE academia_rutas;
USE academia_rutas;

CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  cupos INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa)
);

CREATE TABLE Inscripciones (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Estudiante VARCHAR(120) NOT NULL,
  programa_id INT NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_insc_programa
    FOREIGN KEY (programa_id) REFERENCES Programas(id)
);

INSERT INTO Programas (Nombre_Programa, cupos) VALUES
  ('Técnica Profesional en Configuración de Servicios Web', 30),
  ('Técnica en Sistemas', 2);

CREATE VIEW v_programas_cupos AS
SELECT id, Nombre_Programa, cupos
FROM Programas;

START TRANSACTION;
UPDATE Programas SET cupos = cupos - 1 WHERE id = 2 AND cupos > 0;
INSERT INTO Inscripciones (Nombre_Estudiante, programa_id)
VALUES ('María Gómez', 2);
COMMIT;

SELECT * FROM v_programas_cupos;`}
      />
    </section>
  );
}
