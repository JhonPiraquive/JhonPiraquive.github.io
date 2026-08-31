import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_2FN = `CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede VARCHAR(80) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa)
);

CREATE TABLE Estudiantes (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Estudiante VARCHAR(120) NOT NULL,
  documento VARCHAR(30) NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (documento)
);

CREATE TABLE Inscripciones (
  estudiante_id INT NOT NULL,
  programa_id INT NOT NULL,
  fecha DATE NOT NULL,
  PRIMARY KEY (estudiante_id, programa_id),
  CONSTRAINT fk_insc_est
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(id),
  CONSTRAINT fk_insc_prog
    FOREIGN KEY (programa_id) REFERENCES Programas(id)
);`;

export function SegundaFormaNormalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"2FN — Segunda forma normal"}
      </h2>
      <p className="my-4">
        {
          "1FN + sin DF parcial de PK compuesta. Si la PK es simple, al estar en 1FN ya cumples 2FN — igual verifica DFs. “Ya partí tablas” no basta: hay que mirar si Nombre_Programa depende solo de parte de la clave."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Confirma 1FN."}</li>
        <li>{"¿La PK es compuesta? Si no → 2FN OK (pasa a 3FN)."}</li>
        <li>{"¿Algún no-clave depende solo de un atributo de la PK?"}</li>
        <li>{"Si sí → extrae esos atributos a otra tabla; deja FK."}</li>
        <li>{"Repite hasta no haber DF parcial."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Antes / después"}</h3>
      <p className="my-4">
        <strong>{"Antes (1FN, no 2FN)"}</strong>
        {" — PK (estudiante_id, programa_id) con Nombre_Programa solo de programa_id:"}
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"estudiante_id"}
              </th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"programa_id"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Nombre_Programa"}
              </th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"sede"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"fecha"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"1"}</td>
              <td className="px-3 py-2">{"10"}</td>
              <td className="px-3 py-2">{"Técnica… Servicios Web"}</td>
              <td className="px-3 py-2">{"Cali"}</td>
              <td className="px-3 py-2">{"2026-02-01"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">{"2"}</td>
              <td className="px-3 py-2">{"10"}</td>
              <td className="px-3 py-2">{"Técnica… Servicios Web"}</td>
              <td className="px-3 py-2">{"Cali"}</td>
              <td className="px-3 py-2">{"2026-02-01"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-4">
        {
          "Después: Programas(id, Nombre_Programa, sede) + Inscripciones(estudiante_id, programa_id, fecha) con FKs. La fecha se queda en la puente (hecho de la inscripción)."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="Después 2FN — Programas + Inscripciones"
        filename="rutas_2fn.sql"
        code={SQL_2FN}
      />
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {
          "Si programa_id → Nombre_Programa y la PK es (estudiante_id, programa_id), ¿qué forma viola? (2FN.)"
        }
      </p>
    </section>
  );
}
