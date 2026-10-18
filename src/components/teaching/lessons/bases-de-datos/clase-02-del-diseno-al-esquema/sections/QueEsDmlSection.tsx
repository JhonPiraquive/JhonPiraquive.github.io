export function QueEsDmlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DML: insertar y consultar"}
      </h2>
      <p className="my-4">
        {
          "DML (Data Manipulation Language) trabaja sobre filas. Reglas de escritura: campos sin espacios; textos entre comillas simples; valores pueden llevar tildes y espacios."
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Sentencia"}</th>
            <th className="py-2 text-left font-semibold">{"Uso"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"INSERT"}</td>
            <td className="py-2">{"Cargar filas; lista columnas explícitamente"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"SELECT"}</td>
            <td className="py-2">{"Proyectar columnas; base de filtros, agregados y JOINs"}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
