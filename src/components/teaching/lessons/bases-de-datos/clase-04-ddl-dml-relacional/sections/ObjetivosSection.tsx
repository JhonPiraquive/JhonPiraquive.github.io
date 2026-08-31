export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Aplicar DDL (CREATE/DROP/ALTER, AUTO INCREMENT, PK/UNIQUE/NOT NULL) sobre un esquema de baja complejidad ya diseñado."
          }
        </li>
        <li>
          {
            "Manipular datos con DML (INSERT, SELECT + filtros/orden, agregados, UPDATE, DELETE)."
          }
        </li>
        <li>
          {
            "Escribir INNER JOIN, LEFT JOIN y RIGHT JOIN asumiendo el ER y las PK/FK de clase-03-modelos-datos-er."
          }
        </li>
        <li>
          {
            "Aplicar la regla de seguridad: UPDATE/DELETE siempre con WHERE; DROP solo con backup."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "clase-03-modelos-datos-er (ER, PK/FK, padres primero). Los JOINs operan sobre ese diseño; aquí no re-enseñamos el modelado completo."
          }
        </li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente clase:"}</strong> {"clase-05-normalizacion-esquemas."}
      </p>
    </section>
  );
}
