import { StepReveal } from "@/components/teaching/StepReveal";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const SQL_ACADEMIA = `CREATE DATABASE academia_rutas;
USE academia_rutas;

CREATE TABLE Estudiantes (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Estudiante VARCHAR(120) NOT NULL,
  documento VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (documento)
);

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
  estudiante_id INT NOT NULL,
  programa_id INT NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (estudiante_id, programa_id),
  CONSTRAINT fk_insc_est
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(id),
  CONSTRAINT fk_insc_prog
    FOREIGN KEY (programa_id) REFERENCES Programas(id)
);

INSERT INTO Estudiantes (Nombre_Estudiante, documento) VALUES
  ('Ana Ruiz', '110011'),
  ('Luis Pérez', '110022');

INSERT INTO Programas (Nombre_Programa, sede, cupos) VALUES
  ('Técnica Profesional en Configuración de Servicios Web', 'Cali', 30),
  ('Técnica en Sistemas', 'Cali', 25);

INSERT INTO Inscripciones (estudiante_id, programa_id, fecha) VALUES
  (1, 1, '2026-02-01'),
  (2, 1, '2026-02-01');

-- Debe fallar por integridad referencial (huérfano):
-- INSERT INTO Inscripciones (estudiante_id, programa_id, fecha)
-- VALUES (1, 999, '2026-02-02');`;

const ER_REFUERZO = `erDiagram
  PROGRAMAS ||--o{ INSCRIPCIONES : tiene
  ESTUDIANTES ||--o{ INSCRIPCIONES : realiza`;

export function TransformacionErSqlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Transformación ER → SQL"}
      </h2>
      <p className="my-4">
        {
          "Convierte el dibujo en tablas listas para DDL. Reglas de diseño (no plantilla de fichas):"
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Cada entidad fuerte → una tabla; atributos → columnas."}</li>
        <li>
          {"Elegir PK (subrogada id recomendada; UNIQUE de negocio aparte)."}
        </li>
        <li>{"1:N → FK en el lado N."}</li>
        <li>{"1:1 → FK en el lado dependiente (documentar)."}</li>
        <li>
          {
            "N:M → tabla puente con al menos dos FKs (+ atributos de la relación)."
          }
        </li>
        <li>{"Opcionales → NULL / NOT NULL."}</li>
        <li>{"CREATE padres primero, luego hijos/puentes."}</li>
        <li>{"Probar inserts válidos e inválidos (FK rota)."}</li>
      </ol>
      <StepReveal
        title="Checklist ER → tablas"
        steps={[
          {
            title: "Entidades → tablas",
            content: "Cada entidad fuerte se convierte en una tabla; atributos en columnas.",
          },
          {
            title: "PK",
            content: "Preferir id subrogado; UNIQUE de negocio aparte (Nombre_Programa, documento).",
          },
          {
            title: "1:N → FK en el N",
            content: "El hijo apunta al padre. Ejemplo: Inscripciones.programa_id → Programas.id.",
          },
          {
            title: "N:M → puente",
            content: "Tercera tabla con dos FKs y atributos de la relación (fecha).",
          },
          {
            title: "DDL padres primero",
            content: "Crear Programas y Estudiantes antes que Inscripciones.",
          },
          {
            title: "Probar huérfanos",
            content: "Un INSERT con programa_id inexistente debe fallar.",
          },
        ]}
      />
      <CodeFiddle
        language="sql"
        title="Transformación ER → SQL — academia_rutas"
        filename="academia_rutas_er.sql"
        code={SQL_ACADEMIA}
      />
      <Callout title="Tip: padres primero" variant="callout-info">
        {
          "Crea Programas y Estudiantes antes que Inscripciones. Si inviertes el orden, el script falla porque la FK no encuentra al padre."
        }
      </Callout>
      <MermaidDiagram
        title="ER que respalda el DDL"
        description="Misma cardinalidad 1:N materializada con FKs en Inscripciones"
        chart={ER_REFUERZO}
      />
    </section>
  );
}
