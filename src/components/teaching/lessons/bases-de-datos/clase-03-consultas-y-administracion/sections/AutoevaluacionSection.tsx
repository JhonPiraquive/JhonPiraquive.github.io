export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Escribir consultas con WHERE, ORDER BY, LIMIT, agregados, GROUP BY y HAVING."}</li>
        <li>{"Ejecutar UPDATE y DELETE de forma segura."}</li>
        <li>{"Elegir entre INNER JOIN y LEFT JOIN según la pregunta."}</li>
        <li>{"Clasificar una sentencia como DDL, DML, DCL o TCL."}</li>
        <li>{"Asignar y retirar permisos con mínimo privilegio."}</li>
        <li>{"Escribir una transacción y explicar ACID."}</li>
        <li>{"Decidir qué lógica va en la aplicación y cuál en la BD."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer">Documentación de MySQL</a>{": referencia oficial de SELECT, JOIN, GRANT y transacciones."}
        </li>
        <li>
          <a href="https://mariadb.com/kb/es/" target="_blank" rel="noreferrer">Base de conocimiento de MariaDB</a>{": guías en español de consultas, permisos y transacciones."}
        </li>
      </ul>
    </section>
  );
}
