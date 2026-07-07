export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre de la lección"}</h2>
      <p className="my-4">
        {
          "Has recorrido SQL desde la definición de tablas hasta transacciones ACID y la decisión SQL vs NoSQL."
        }
      </p>
      <p className="my-4 font-semibold">{"Ideas clave para retener:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"DDL define; DML manipula; DCL permisos; TCL transacciones."}</li>
        <li>{"PK y FK garantizan identidad e integridad referencial."}</li>
        <li>{"ACID protege operaciones críticas como transferencias y compras."}</li>
        <li>{"SQL para relaciones y transacciones; NoSQL para flexibilidad y escala horizontal."}</li>
        <li>{"Columnares para OLAP; grafos para relaciones complejas entre entidades."}</li>
        <li>{"El frontend consume API; nunca expone la BD directamente."}</li>
      </ul>
      <p className="my-4">
        <strong>{"Siguiente paso:"}</strong>
        {" lección "}
        <code>{"principios-solid"}</code>
        {" — diseño de software mantenible en el backend."}
      </p>
    </section>
  );
}
