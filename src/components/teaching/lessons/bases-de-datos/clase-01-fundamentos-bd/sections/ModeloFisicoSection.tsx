import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

const SQL_PROGRAMAS = `CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede VARCHAR(80) NOT NULL,
  cupos INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa)
);`;

export function ModeloFisicoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Modelo físico"}</h2>
      <p className="my-4">
        {
          "Tipos SQL, índices, motor y DDL ejecutable. Quién lo usa: DBA / desarrollador. Ejemplo: VARCHAR(200), INT AUTO_INCREMENT. Es lo que el SGBD realmente crea."
        }
      </p>
      <CodeFiddle language="sql" title="CREATE TABLE Programas (físico)" code={SQL_PROGRAMAS} />
      <CompareTable
        headers={["Nivel", "Qué representa", "Quién lo usa", "Ejemplo"]}
        rows={[
          [
            "Conceptual",
            "Qué existe (entidades y relaciones), lenguaje de negocio",
            "Analista + cliente",
            "Estudiante se inscribe en Programa",
          ],
          [
            "Lógico",
            "Atributos, claves, cardinalidad, sin motor concreto",
            "Diseñador",
            "Tablas lógicas + PK/FK",
          ],
          [
            "Físico",
            "Tipos SQL, índices, motor, DDL",
            "DBA / desarrollador",
            "VARCHAR(200), INT AUTO_INCREMENT",
          ],
        ]}
      />
    </section>
  );
}