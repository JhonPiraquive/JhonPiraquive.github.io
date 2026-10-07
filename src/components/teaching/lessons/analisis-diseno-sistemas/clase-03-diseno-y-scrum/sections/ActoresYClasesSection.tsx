export function ActoresYClasesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Actores y primeras clases</h2>
      <p className="my-4">
        Un actor es quien está fuera del sistema e intercambia algo con él: persona, otro sistema, un dispositivo
        o un servicio. De la problemática de Logística SAS salen, como mínimo:
      </p>
      <ul className="my-4 list-disc space-y-2 pl-6">
        <li>Cliente</li>
        <li>Empleado que asigna servicios</li>
        <li>Técnico</li>
        <li>Proveedor</li>
        <li>Persona que administra el sistema</li>
      </ul>
      <p className="my-4">
        Una clase es la plantilla de objetos que comparten estructura y comportamiento. Del mismo relato salen
        estas tres. Fíjate en que Cliente y Empleado repiten datos de Persona: eso es una pista de herencia, no
        un error de lectura.
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Clase</th>
            <th className="py-2 text-left font-semibold">Atributos iniciales</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Persona</td>
            <td className="py-2">nombreCompleto, documento, fechaNacimiento, teléfono</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Cliente</td>
            <td className="py-2">los de Persona, más codigoCliente y fechaRegistro</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Empleado</td>
            <td className="py-2">los de Persona, más codigoEmpleado, fechaIngreso y cargo</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        El entregable de esta actividad es la lista completa de clases con atributos. Todavía no hace falta el
        método de cada una. Con más información del proyecto se añaden OrdenServicio, Insumo, Proveedor y Estado.
      </p>
    </section>
  );
}
