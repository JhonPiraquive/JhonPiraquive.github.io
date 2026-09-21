export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de aprendizaje"}</h2>
      <p className="my-4 font-semibold">{"Al finalizar esta lección podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"Escribir DDL (CREATE/ALTER) y restricciones PK/UNIQUE/NOT NULL."}</li>
        <li>{"Usar DML: INSERT, SELECT con filtros, agregados, UPDATE/DELETE seguros."}</li>
        <li>{"Escribir INNER/LEFT/RIGHT JOIN asumiendo el ER y las PK/FK de la Clase 2."}</li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisito (entregable Clase 2)"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "clase-02-diseno-modelos-er (ER, PK/FK, padres primero). Los JOINs operan sobre ese diseño; aquí no re-enseñamos el modelado completo."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Entregable de esta clase"}</p>
      <p className="my-4">
        {"Esquema creado + consultas/JOINs sobre el caso de la Clase 2. En la Clase 4 limpias el diseño (normalización) y operas permisos/transacciones/objetos."}
      </p>
      <p className="my-4">
        <strong>{"Siguiente clase:"}</strong> {"Clase 4 — Experto (clase-04-experto-bd)."}
      </p>
    </section>
  );
}
