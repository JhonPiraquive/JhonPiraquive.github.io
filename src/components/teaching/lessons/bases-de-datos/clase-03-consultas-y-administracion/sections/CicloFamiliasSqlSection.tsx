import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const FAMILIAS = `flowchart TB
  SQL[SQL]
  SQL --> DDL[DDL — esquema]
  SQL --> DML[DML — filas]
  SQL --> DCL[DCL — permisos]
  SQL --> TCL[TCL — transacciones]`;

export function CicloFamiliasSqlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ciclo DDL → DML → DCL → TCL"}
      </h2>
      <p className="my-4">
        {
          "Después de DDL y DML, el mapa se completa con DCL y TCL. Antes de ejecutar conviene preguntarse: ¿toco estructura, filas, permisos o la confirmación de un lote?"
        }
      </p>
      <CompareTable title="Ciclo típico en Rutas Digitales" headers={["Paso", "Qué ocurre"]} rows={[
          { title: "DDL", content: "CREATE TABLE Programas e Inscripciones (esquema)." },
          {
            title: "DML",
            content: "INSERT programas, SELECT cupos, UPDATE e INSERT de matrícula.",
          },
          {
            title: "DCL",
            content: "GRANT SELECT/INSERT al usuario de la app; reporte solo-lectura.",
          },
          {
            title: "TCL",
            content: "START TRANSACTION … COMMIT o ROLLBACK para inscripción + cupo.",
          },
          {
            title: "Objetos",
            content: "Vista de cupos; opcionalmente UDF/SP/trigger según el hosting.",
          },
        ].map((s) => [s.title, s.content])} />
      <figure className="my-6 rounded-lg bg-white p-4">
        <MermaidDiagram
          title="Familias SQL"
          description="Cuatro subconjuntos de SQL por propósito"
          chart={FAMILIAS}
        />
      </figure>
      <p className="my-4">
        {
          "Chequeo rápido: si alguien “limpia permisos” con DELETE, confundió DML con DCL — debió usar REVOKE."
        }
      </p>
    </section>
  );
}
