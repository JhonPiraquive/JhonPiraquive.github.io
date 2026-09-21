import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { StepReveal } from "@/components/teaching/StepReveal";
import { Callout } from "@/components/teaching/Callout";

const SQL = `CREATE TABLE Programas (
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
);`;

export function CreateTableConstraintSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"CREATE TABLE con CONSTRAINT"}
      </h2>
      <p className="my-4">
        {
          "Materializa en SQL el ER de clase 03: padre Programas, hija Inscripciones con FK tipada."
        }
      </p>
      <CodeFiddle language="sql" title="CREATE padre / hija + CONSTRAINT FK" code={SQL} />
      <StepReveal
        title="Orden: padres → hijos → datos → JOIN"
        steps={[
          {
            title: "1. CREATE DATABASE",
            content: "Contenedor (academia_rutas). Verificar host antes de continuar.",
          },
          {
            title: "2. CREATE TABLE padre",
            content: "Programas con PK AUTO INCREMENT y UNIQUE Nombre_Programa.",
          },
          {
            title: "3. CREATE TABLE hija + FK",
            content: "Inscripciones.programa_id INT = mismo tipo que Programas.id.",
          },
          {
            title: "4. INSERT",
            content: "Primero programas, luego inscripciones con programa_id válido.",
          },
          {
            title: "5. SELECT JOIN",
            content: "INNER o LEFT según la pregunta de negocio.",
          },
        ]}
      />
      <Callout title="Padres primero, tipos iguales" variant="callout-info">
        {
          "Crea primero Programas. La FK de Inscripciones debe usar el mismo tipo que Programas.id."
        }
      </Callout>
    </section>
  );
}
