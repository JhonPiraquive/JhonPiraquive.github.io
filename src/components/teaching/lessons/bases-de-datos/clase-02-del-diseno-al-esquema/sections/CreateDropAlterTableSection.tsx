import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL_CREATE = `CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede VARCHAR(80) NOT NULL,
  cupos INT NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa)
);`;

const SQL_DROP = `DROP TABLE Programas_old;`;

const SQL_ALTER = `ALTER TABLE Programas ADD COLUMN modalidad VARCHAR(40) NULL;
ALTER TABLE Programas MODIFY COLUMN cupos INT NOT NULL;
-- Backfill antes de NOT NULL sobre filas existentes
ALTER TABLE Programas DROP COLUMN modalidad;`;

export function CreateDropAlterTableSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"CREATE TABLE, DROP TABLE y ALTER TABLE"}
      </h2>
      <p className="my-4">
        {
          "CREATE TABLE define columnas tipadas. Nombres sin espacios (Nombre_Programa). DROP TABLE elimina estructura y datos de esa tabla (≠ DELETE de filas)."
        }
      </p>
      <CodeFiddle language="sql" title="CREATE TABLE Programas" code={SQL_CREATE} />
      <Callout title="DROP TABLE también exige backup" variant="callout-danger">
        {
          "DROP TABLE no “limpia unas filas”: borra la tabla entera. Si hay FK hacia ella, el motor puede rechazar el DROP hasta resolver dependencias."
        }
      </Callout>
      <CodeFiddle language="sql" title="DROP TABLE Programas_old" code={SQL_DROP} />
      <p className="my-4">
        {
          "ALTER TABLE agrega, modifica o elimina columnas. Antes de NOT NULL sobre datos existentes: backfill."
        }
      </p>
      <CodeFiddle language="sql" title="ALTER TABLE ADD / MODIFY / DROP" code={SQL_ALTER} />
    </section>
  );
}
