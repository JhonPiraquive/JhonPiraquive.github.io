export function QueEsDdlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DDL: definir el esquema"}
      </h2>
      <p className="my-4">
        {
          "DDL (Data Definition Language) crea y ajusta el contenedor: bases, tablas, columnas y restricciones. En esta página practicas CREATE/DROP/ALTER y AUTO INCREMENT."
        }
      </p>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>{"CREATE DATABASE / TABLE"}</strong>
          {" — contenedor y columnas tipadas."}
        </li>
        <li>
          <strong>{"DROP"}</strong>
          {" — elimina esquema (y datos); irreversible sin backup."}
        </li>
        <li>
          <strong>{"ALTER TABLE"}</strong>
          {" — agregar/modificar/eliminar columnas."}
        </li>
        <li>
          <strong>{"AUTO INCREMENT"}</strong>
          {" — el motor genera el id al insertar."}
        </li>
      </ul>
    </section>
  );
}
