import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_TIPOS = `CREATE TABLE Programas (
  id INT NOT NULL AUTO_INCREMENT,
  Nombre_Programa VARCHAR(200) NOT NULL,
  sede VARCHAR(80) NOT NULL,
  cupos INT NOT NULL,
  precio DECIMAL(12, 2) NOT NULL,
  fecha_inicio DATE NOT NULL,
  PRIMARY KEY (id),
  UNIQUE (Nombre_Programa)
);`;

export function TiposDatosSqlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tipos de datos SQL: criterio de elección"}
      </h2>
      <p className="my-4">
        {
          "En el físico eliges tipos según el dominio — no “todo VARCHAR”."
        }
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Familia"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Tipos"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Uso"}</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"Enteros"}</td>
              <td className="px-3 py-2">{"INT, BIGINT…"}</td>
              <td className="px-3 py-2">{"IDs, cupos"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">{"Decimales"}</td>
              <td className="px-3 py-2">{"DECIMAL"}</td>
              <td className="px-3 py-2">{"Dinero"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"Texto"}</td>
              <td className="px-3 py-2">{"VARCHAR, TEXT"}</td>
              <td className="px-3 py-2">{"Nombres"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">{"Fecha/hora"}</td>
              <td className="px-3 py-2">{"DATE, DATETIME…"}</td>
              <td className="px-3 py-2">{"Inscripciones"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">{"Booleano"}</td>
              <td className="px-3 py-2">{"según motor"}</td>
              <td className="px-3 py-2">{"Flags"}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <CodeFiddle
        language="sql"
        title="Tipos justificados (no todo VARCHAR)"
        code={SQL_TIPOS}
      />
    </section>
  );
}
