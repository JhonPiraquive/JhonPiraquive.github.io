export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Objetivos de aprendizaje"}
      </h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Ubicar DDL / DML / DCL (Data Control Language) / TCL (Transaction Control Language) en un mapa con ejemplos."
          }
        </li>
        <li>
          {
            "Aplicar GRANT/REVOKE (MySQL/MariaDB) con mínimo privilegio."
          }
        </li>
        <li>
          {
            "Usar START TRANSACTION/BEGIN, COMMIT, ROLLBACK, SAVEPOINT y explicar ACID con un ejemplo atómico."
          }
        </li>
        <li>
          {
            "Crear y consultar vistas; contrastarlas con tablas base."
          }
        </li>
        <li>
          {
            "Ejemplificar UDF, procedimientos y triggers, y decidir cuándo la lógica va en la app vs en la BD."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Clase 5 — Normalización y esquemas (clase-05-normalizacion-esquemas): esquema limpio y SQL de la clase 4."
          }
        </li>
      </ul>
      <p className="my-4">
        {
          "Siguiente: fin del módulo (6 clases + index). Al cerrar, vuelve al hub del track para repasar el mapa completo."
        }
      </p>
    </section>
  );
}
