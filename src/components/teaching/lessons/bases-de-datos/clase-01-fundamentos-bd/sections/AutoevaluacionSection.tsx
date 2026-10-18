export function AutoevaluacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Autoevaluación y recursos"}</h2>
      <p className="my-4">{"El estudiante puede pasar a la siguiente clase cuando cumple cada punto:"}</p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>{"Explicar por qué existen las bases de datos y qué problema resolvieron."}</li>
        <li>{"Diferenciar BD, SGBD, motor, GUI y CLI."}</li>
        <li>{"Identificar tabla, campo, registro y valor en un ejemplo."}</li>
        <li>{"Elegir entre relacional y NoSQL para un escenario simple."}</li>
        <li>{"Distinguir los modelos conceptual, lógico y físico."}</li>
        <li>{"Dibujar un ER con entidades, atributos y cardinalidades."}</li>
      </ul>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">{"Recursos oficiales"}</h3>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>
          <a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer">Documentación de MySQL</a>{": referencia oficial del motor."}
        </li>
        <li>
          <a href="https://mariadb.com/kb/es/" target="_blank" rel="noreferrer">Base de conocimiento de MariaDB</a>{": guías en español."}
        </li>
        <li>
          <a href="https://www.mongodb.com/docs/" target="_blank" rel="noreferrer">Documentación de MongoDB</a>{": modelo de documentos y herramientas."}
        </li>
        <li>
          <a href="https://mermaid.js.org/syntax/entityRelationshipDiagram.html" target="_blank" rel="noreferrer">Mermaid: diagramas ER</a>{": sintaxis para dibujar entidades y relaciones."}
        </li>
      </ul>
    </section>
  );
}
