import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function SqlFamiliasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Familias SQL: DDL, DML, DCL y TCL"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"En síntesis"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "DDL (Data Definition Language): define estructura — CREATE, ALTER, DROP, TRUNCATE."
          }
        </li>
        <li>
          {
            "DML (Data Manipulation Language): manipula datos — SELECT, INSERT, UPDATE, DELETE."
          }
        </li>
        <li>{"DCL (Data Control Language): permisos — GRANT, REVOKE."}</li>
        <li>
          {
            "TCL (Transaction Control Language): transacciones — BEGIN, COMMIT, ROLLBACK, SAVEPOINT."
          }
        </li>
      </ul>
      <MermaidDiagram
        chart={`flowchart TD
  SQL[SQL]
  SQL --> DDL[DDL: CREATE ALTER DROP]
  SQL --> DML[DML: SELECT INSERT UPDATE DELETE]
  SQL --> DCL[DCL: GRANT REVOKE]
  SQL --> TCL[TCL: BEGIN COMMIT ROLLBACK]`}
      />
      <CompareTable title="Las cuatro familias SQL" headers={["Paso", "Qué ocurre"]} rows={[
          {
            title: "DDL — CREATE TABLE",
            content: "Define categorias con id SERIAL PRIMARY KEY.",
          },
          {
            title: "DML — INSERT / SELECT",
            content: "Inserta productos y consulta con JOIN.",
          },
          {
            title: "DCL — GRANT",
            content: "usuario_app puede SELECT e INSERT, no DELETE.",
          },
          {
            title: "TCL — BEGIN / COMMIT",
            content: "Transferencia de saldos: todo o nada con ROLLBACK si falla.",
          },
        ].map((s) => [s.title, s.content])} />
    </section>
  );
}
