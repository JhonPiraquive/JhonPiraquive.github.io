import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL = `ALTER TABLE Programas
  ADD CONSTRAINT uq_nombre_programa UNIQUE (Nombre_Programa);`;

export function UniqueConstraintSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"UNIQUE"}
      </h2>
      <p className="my-4">
        {
          "UNIQUE impone unicidad de negocio (p. ej. un solo Nombre_Programa). Distinto de PK: puede haber varias UNIQUE; la PK es la identidad de la fila."
        }
      </p>
      <CodeFiddle language="sql" title="UNIQUE Nombre_Programa" code={SQL} />
    </section>
  );
}
