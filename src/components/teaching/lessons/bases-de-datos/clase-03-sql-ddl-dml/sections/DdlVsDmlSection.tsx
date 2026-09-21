export function DdlVsDmlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DDL frente a DML"}
      </h2>
      <p className="my-4">
        {
          "Antes de ejecutar, decide: ¿cambias la estructura (DDL) o las filas (DML)? DROP TABLE no es DELETE; ALTER no inserta datos."
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Familia"}</th>
            <th className="py-2 text-left font-semibold">{"Sentencias de esta clase"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"DDL"}</td>
            <td className="py-2">{"CREATE / DROP / ALTER (DATABASE, TABLE), restricciones"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"DML"}</td>
            <td className="py-2">{"INSERT, SELECT, UPDATE, DELETE (+ JOINs)"}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
