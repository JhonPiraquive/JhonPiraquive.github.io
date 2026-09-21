import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_3FN = `CREATE TABLE Sedes (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_sede VARCHAR(80) NOT NULL,
  telefono VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (nombre_sede)
);

CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede_id INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa),
  CONSTRAINT fk_prog_sede
    FOREIGN KEY (sede_id) REFERENCES Sedes(id)
);`;

const SQL_ESQUELETO = `CREATE DATABASE academia_rutas_norm;
USE academia_rutas_norm;

CREATE TABLE Sedes (
  id INT NOT NULL AUTO_INCREMENT,
  nombre_sede VARCHAR(80) NOT NULL,
  telefono VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (nombre_sede)
);

CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede_id INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa),
  CONSTRAINT fk_prog_sede
    FOREIGN KEY (sede_id) REFERENCES Sedes(id)
);

CREATE TABLE Estudiantes (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Estudiante VARCHAR(120) NOT NULL,
  documento VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (documento)
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

INSERT INTO Sedes (nombre_sede, telefono) VALUES ('Cali', '602-111');
INSERT INTO Programas (Nombre_Programa, sede_id) VALUES
  ('Técnica Profesional en Configuración de Servicios Web', 1),
  ('Técnica en Sistemas', 1);
INSERT INTO Estudiantes (Nombre_Estudiante, documento) VALUES
  ('Ana Ruiz', '110011'),
  ('Luis Pérez', '110022');
INSERT INTO Inscripciones (estudiante_id, programa_id, fecha) VALUES
  (1, 1, '2026-02-01'),
  (2, 1, '2026-02-01');`;

export function TerceraFormaNormalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"3FN — Tercera forma normal"}
      </h2>
      <p className="my-4">
        {
          "2FN + sin DF transitiva: un no-clave no debe determinar otro no-clave. Ejemplo clásico: en Programas, sede → telefono_sede → extraer Sedes."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Confirma 2FN."}</li>
        <li>{"Lista atributos no-clave."}</li>
        <li>{"¿Algún no-clave determina otro? (sede → telefono_sede)."}</li>
        <li>{"Extrae el determinante no-clave a su tabla; referencia con FK."}</li>
        <li>{"Verifica que en la tabla original solo queden DFs desde la clave."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Antes / después"}</h3>
      <p className="my-4">
        <strong>{"Antes (2FN, no 3FN)"}</strong>
        {" en Programas:"}
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"id"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Nombre_Programa"}
              </th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"sede"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"telefono_sede"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"10"}</td>
              <td className="px-3 py-2">{"Técnica… Servicios Web"}</td>
              <td className="px-3 py-2">{"Cali"}</td>
              <td className="px-3 py-2">{"602-111"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">{"11"}</td>
              <td className="px-3 py-2">{"Técnica en Sistemas"}</td>
              <td className="px-3 py-2">{"Cali"}</td>
              <td className="px-3 py-2">{"602-111"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-4">
        {"Después: Sedes(id, nombre_sede, telefono) + Programas(id, Nombre_Programa, sede_id)."}
      </p>
      <CodeFiddle
        language="sql"
        title="Después 3FN — Sedes + Programas"
        filename="rutas_3fn.sql"
        code={SQL_3FN}
      />
      <p className="my-6">
        {"Esqueleto completo de la academia (OLTP en 3FN):"}
      </p>
      <CodeFiddle
        language="sql"
        title="Esqueleto 3FN — academia_rutas_norm"
        filename="academia_rutas_norm.sql"
        code={SQL_ESQUELETO}
      />
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {"sede → telefono_sede dentro de Programas con PK id: ¿qué forma amenaza? (3FN.)"}
      </p>
    </section>
  );
}
