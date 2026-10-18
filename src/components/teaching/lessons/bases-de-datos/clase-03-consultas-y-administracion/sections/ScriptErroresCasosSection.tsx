import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_LAB = `CREATE DATABASE academia_rutas;
USE academia_rutas;

CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede VARCHAR(80) NOT NULL,
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

INSERT INTO Programas (Nombre_Programa, sede, cupos) VALUES
  ('Técnica Profesional en Configuración de Servicios Web', 'Cali', 30),
  ('Técnica en Sistemas', 'Cali', 25),
  ('Técnica en Redes', 'Palmira', 20);

INSERT INTO Inscripciones (Nombre_Estudiante, programa_id) VALUES
  ('Ana Ruiz', 1),
  ('Luis Pérez', 1),
  ('María Gómez', 2);

SELECT p.Nombre_Programa, i.Nombre_Estudiante
FROM Programas p
LEFT JOIN Inscripciones i ON i.programa_id = p.id
ORDER BY p.Nombre_Programa;`;

export function ScriptErroresCasosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Script de laboratorio y casos"}
      </h2>
      <CodeFiddle language="sql" title="Script integral laboratorio" code={SQL_LAB} />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso — Academia “Rutas Digitales”'}
      </h3>
      <p className="my-4">
        {
          "DELETE FROM Inscripciones; sin WHERE en matrículas reales. Restaurar dump; checklist SELECT-count; usuario sin DELETE masivo."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {'Caso — Ferretería “El Tornillo”'}
      </h3>
      <p className="my-4">
        {
          "Reportan “todos los productos se venden” con INNER JOIN. Corrección: LEFT + WHERE v.id IS NULL para productos sin ventas."
        }
      </p>
    </section>
  );
}
