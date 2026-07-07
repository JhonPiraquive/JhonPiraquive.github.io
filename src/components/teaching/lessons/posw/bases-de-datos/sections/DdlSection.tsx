import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function DdlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DDL: crear y modificar tablas"}
      </h2>
      <CodeFiddle
        language="sql"
        title="DDL — crear y modificar tablas"
        code={`CREATE TABLE categorias (
  id    SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE productos (
  id           SERIAL PRIMARY KEY,
  nombre       VARCHAR(200) NOT NULL,
  precio       DECIMAL(12, 2) NOT NULL CHECK (precio > 0),
  stock        INTEGER DEFAULT 0,
  categoria_id INTEGER REFERENCES categorias(id),
  creado_en    TIMESTAMP DEFAULT NOW()
);

ALTER TABLE productos ADD COLUMN descripcion TEXT;
DROP TABLE IF EXISTS productos CASCADE;`}
      />
      <MermaidDiagram
        chart={`erDiagram
  CATEGORIAS ||--o{ PRODUCTOS : contiene
  PRODUCTOS {
    int id PK
    string nombre
    decimal precio
    int categoria_id FK
  }
  CATEGORIAS {
    int id PK
    string nombre
  }`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Errores comunes"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"DROP sin backup en tablas con datos productivos."}</li>
        <li>
          {
            "TRUNCATE confundido con DELETE: TRUNCATE vacía rápido y puede reiniciar identidad."
          }
        </li>
      </ul>
    </section>
  );
}
