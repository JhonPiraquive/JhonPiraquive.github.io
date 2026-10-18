export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Identificar una anomalía de actualización, inserción o borrado en una tabla."}</li>
        <li>{"Escribir dependencias funcionales y llevar una tabla a 3FN."}</li>
        <li>{"Explicar cuándo una desnormalización es consciente y cuándo es un error."}</li>
        <li>{"Transformar un ER 1:N y N:M en tablas con PK y FK."}</li>
        <li>{"Escribir CREATE TABLE con restricciones, con los padres primero."}</li>
        <li>{"Insertar y consultar filas con INSERT y SELECT."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://dev.mysql.com/doc/refman/8.4/en/create-table.html" target="_blank" rel="noreferrer">MySQL: CREATE TABLE</a>{": referencia oficial: CREATE TABLE, tipos de datos e INSERT."}
        </li>
        <li>
          <a href="https://mariadb.com/kb/es/normalizacion-de-bases-de-datos/" target="_blank" rel="noreferrer">MariaDB: normalización</a>{": explicación en español."}
        </li>
      </ul>
    </section>
  );
}
