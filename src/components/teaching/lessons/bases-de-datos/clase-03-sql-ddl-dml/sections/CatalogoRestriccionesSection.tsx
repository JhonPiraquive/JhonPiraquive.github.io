export function CatalogoRestriccionesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Catálogo de restricciones"}
      </h2>
      <p className="my-4">
        {
          "Las restricciones viven en el motor, no solo en el formulario. Padres primero al crear FK (diseño de clase 03)."
        }
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Restricción"}</th>
            <th className="py-2 text-left font-semibold">{"Rol"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"PRIMARY KEY"}</td>
            <td className="py-2">{"Identifica de forma única cada fila"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"UNIQUE"}</td>
            <td className="py-2">{"Valores distintos en la columna (negocio)"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"NOT NULL"}</td>
            <td className="py-2">{"No admite ausencia; NULL ≠ 0 ≠ ''"}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
