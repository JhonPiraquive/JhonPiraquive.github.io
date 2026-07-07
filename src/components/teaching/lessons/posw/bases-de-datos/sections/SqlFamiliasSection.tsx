import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function SqlFamiliasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Familias SQL: DDL, DML, DCL y TCL"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
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
      <StepReveal
        title="Las cuatro familias SQL"
        steps={[
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
        ]}
      />
      <CodeChallenge
        title="¿A qué familia pertenece cada comando?"
        template={`CREATE TABLE → {{blank1}}
SELECT → {{blank2}}
GRANT → {{blank3}}
COMMIT → {{blank4}}`}
        blanks={[
          { id: "blank1", answer: "DDL", placeholder: "CREATE" },
          { id: "blank2", answer: "DML", placeholder: "SELECT" },
          { id: "blank3", answer: "DCL", placeholder: "GRANT" },
          { id: "blank4", answer: "TCL", placeholder: "COMMIT" },
        ]}
      />
    </section>
  );
}
