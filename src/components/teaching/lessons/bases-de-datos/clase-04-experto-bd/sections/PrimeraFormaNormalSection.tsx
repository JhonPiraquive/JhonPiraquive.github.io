import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_1FN = `-- Después 1FN (detalle atómico; aún puede faltar 2FN/3FN)
CREATE TABLE Estudiantes (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Estudiante VARCHAR(120) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Inscripcion_Detalle (
  id INT NOT NULL AUTO_INCREMENT,
  estudiante_id INT NOT NULL,
  Nombre_Programa VARCHAR(200) NOT NULL,
  PRIMARY KEY (id),
  CONSTRAINT fk_det_est
    FOREIGN KEY (estudiante_id) REFERENCES Estudiantes(id)
);

INSERT INTO Estudiantes (Nombre_Estudiante) VALUES ('Ana Ruiz');
INSERT INTO Inscripcion_Detalle (estudiante_id, Nombre_Programa) VALUES
  (1, 'Técnica Profesional en Configuración de Servicios Web'),
  (1, 'Técnica en Sistemas');`;

export function PrimeraFormaNormalSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"1FN — Primera forma normal"}
      </h2>
      <p className="my-4">
        {
          "Piso mínimo: cada celda guarda un valor atómico; no hay listas ni columnas clonadas (curso1…cursoN). CSV en una celda o JSON “ágil” sin criterio viola 1FN."
        }
      </p>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"¿Alguna columna tiene varios valores en una celda? → filas o tabla hija."}</li>
        <li>{"¿Hay columnas clonadas (curso_1…curso_n)? → una fila por curso."}</li>
        <li>{"¿Cada atributo describe un dato? → sí → 1FN."}</li>
        <li>{"Reescribe CREATE TABLE + INSERT de prueba."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Antes / después"}</h3>
      <p className="my-4">
        <strong>{"Antes (viola 1FN):"}</strong> {"programas = 'A, B' en una celda."}
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="w-full min-w-[20rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"id"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Nombre_Estudiante"}
              </th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"programas"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"1"}</td>
              <td className="px-3 py-2">{"Ana Ruiz"}</td>
              <td className="px-3 py-2">{"Servicios Web, Sistemas"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-4">
        <strong>{"Después:"}</strong> {"una fila por programa (detalle); Nombre_Programa aún se normalizará más."}
      </p>
      <div className="my-4 overflow-x-auto">
        <table className="mb-4 w-full min-w-[16rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"id"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Nombre_Estudiante"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"1"}</td>
              <td className="px-3 py-2">{"Ana Ruiz"}</td>
            </tr>
          </tbody>
        </table>
        <table className="w-full min-w-[16rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"estudiante_id"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Nombre_Programa"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"1"}</td>
              <td className="px-3 py-2">{"Técnica… Servicios Web"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">{"1"}</td>
              <td className="px-3 py-2">{"Técnica en Sistemas"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeFiddle
        language="sql"
        title="Después 1FN — detalle atómico"
        filename="rutas_1fn.sql"
        code={SQL_1FN}
      />
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong> {"¿'a,b,c' en una celda está en 1FN? (No.)"}
      </p>
    </section>
  );
}
