export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Distinguir modelos conceptual, lógico y físico."}</li>
        <li>{"Dibujar un ER con entidades, atributos, relaciones y cardinalidad."}</li>
        <li>{"Elegir familia (relacional / NoSQL / grafos) según la forma de la pregunta."}</li>
        <li>{"Transformar ER→SQL con tipos, PK/FK y orden padres primero."}</li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisito (entregable Clase 1)"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Haber completado Clase 1 — Fundamentos (clase-01-fundamentos-bd): BD/SGBD, motores y abecedario tabla-campo-registro."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Entregable de esta clase"}</p>
      <p className="my-4">
        {"Un diseño ER con PK/FK listo para materializar en DDL en la Clase 3 (mismo caso de negocio)."}
      </p>
      <p className="my-4">
        <strong>{"Siguiente clase:"}</strong> {"Clase 3 — SQL DDL/DML/JOINs (clase-03-sql-ddl-dml)."}
      </p>
    </section>
  );
}
