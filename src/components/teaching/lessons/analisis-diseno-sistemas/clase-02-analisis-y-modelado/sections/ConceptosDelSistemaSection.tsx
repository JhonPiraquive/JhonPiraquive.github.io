export function ConceptosDelSistemaSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Quién pide y qué se pide</h2>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Término</th>
            <th className="py-2 text-left font-semibold">Definición operativa</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Stakeholder</td>
            <td className="py-2">Persona o grupo que influye en la operación: clientes, trabajadores, socios. También se dice parte interesada.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Actor</td>
            <td className="py-2">Algo externo al sistema que le pide una función: una persona, otro sistema o incluso el tiempo. Ejemplos: Cliente, Técnico, Proveedor.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Requerimiento</td>
            <td className="py-2">Necesidad de un stakeholder. Ejemplo: consultar clientes por número de identificación.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Evento</td>
            <td className="py-2">Hecho relevante, casi siempre disparado por un actor: oprimir un botón, ingresar datos. El sistema responde de una forma conocida.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Caso de uso</td>
            <td className="py-2">Comportamiento del sistema visto por el usuario. Ejemplos: asignar turno, crear usuario, generar reporte.</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        El gerente de Logística SAS es stakeholder aunque nunca entre al sistema. El cliente que pide una orden
        es actor. «El sistema debe generar el número de la orden» es un requerimiento. Pulsar Guardar es el
        evento. «Registrar orden de servicio» es el caso de uso que agrupa ese diálogo.
      </p>
    </section>
  );
}
