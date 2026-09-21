export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Detectar redundancia y dependencias funcionales; aplicar 1FN→2FN→3FN (+ BCNF breve)."}</li>
        <li>{"Decidir desnormalización consciente y leer estrella/copo como juicio BI."}</li>
        <li>{"Usar DCL (GRANT/REVOKE), TCL/ACID, vistas, UDF/PROCEDURE/TRIGGER y criterio app vs BD."}</li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisito (entregable Clase 3)"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Clase 3 — SQL (clase-03-sql-ddl-dml): ya sabes crear tablas y consultarlas con JOINs; ahora limpias el diseño y operas el servidor."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Cierre del módulo:"}</strong>{" "}
        {"de cero (vocabulario) a experto (juicio de esquema + control del SGBD)."}
      </p>
    </section>
  );
}
