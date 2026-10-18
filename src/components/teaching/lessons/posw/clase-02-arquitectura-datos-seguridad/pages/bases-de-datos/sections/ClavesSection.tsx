
export function ClavesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Claves primarias, foráneas y restricciones"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"En síntesis"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {"Primary Key (PK): identifica fila única; no NULL ni duplicada."}
        </li>
        <li>
          {
            "Foreign Key (FK): referencia PK de otra tabla; integridad referencial."
          }
        </li>
        <li>{"Unique Key: valores no repetidos."}</li>
        <li>
          {
            "Composite Key: PK de varias columnas (ej. usuario_id + producto_id)."
          }
        </li>
        <li>
          {
            "Surrogate vs Natural Key: artificial (SERIAL, UUID) vs significado de negocio (ISBN, NIT)."
          }
        </li>
      </ul>

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Malas prácticas en el mundo real"}
      </h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "PK natural inestable: email como PK y romper referencias al cambiar email."
          }
        </li>
        <li>
          {
            "FK sin índice en columna referenciada: JOINs lentos en tablas grandes."
          }
        </li>
        <li>
          {
            "Elegir NoSQL solo por moda cuando el dominio es altamente relacional."
          }
        </li>
      </ul>
    </section>
  );
}
