export function EspecificacionCasoDeUsoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cómo se especifica un caso de uso</h2>
      <p className="my-4">
        El dibujo no basta. Cada caso se documenta con la misma plantilla para que otro analista pueda
        continuarlo. Este es «Registrar orden de servicio», adaptado al caso.
      </p>
      <div className="not-prose my-4 overflow-x-auto">
        <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <th className="w-40 py-2 pr-4 text-left align-top">Nombre</th>
              <td className="py-2">Registrar orden de servicio</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <th className="py-2 pr-4 text-left align-top">Descripción</th>
              <td className="py-2">El cliente solicita el servicio por teléfono, en persona o por internet, y queda una orden numerada.</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <th className="py-2 pr-4 text-left align-top">Actores</th>
              <td className="py-2">Cliente y empleado que asigna el servicio.</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <th className="py-2 pr-4 text-left align-top">Precondiciones</th>
              <td className="py-2">El empleado inició sesión. El cliente ya está registrado.</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <th className="py-2 pr-4 text-left align-top">Flujo normal</th>
              <td className="py-2">
                1. El cliente solicita el servicio. 2. El empleado pide registrar. 3. El sistema pide la
                identificación. 4. Muestra los datos del cliente. 5. Pide dirección y observaciones. 6. El
                empleado guarda. 7. El sistema informa el número de orden.
              </td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <th className="py-2 pr-4 text-left align-top">Flujo alterno</th>
              <td className="py-2">Si los datos del cliente están mal, el empleado los corrige y sigue con la recepción.</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/40">
              <th className="py-2 pr-4 text-left align-top">Postcondiciones</th>
              <td className="py-2">Existe una orden con número, lista para asignar a un técnico. El sistema vuelve a la pantalla de solicitud.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-4">
        El mismo esqueleto sirve para «Seguimiento por internet» (actor: cliente; precondición: la orden existe
        y el cliente tiene usuario) o para «Generar reportes» (el empleado elige un criterio y el sistema muestra
        el listado, con opción de volver). No copies el flujo de un caso en otro: si la descripción dice
        «seguimiento» y el flujo habla de guardar un cliente, la especificación no verifica.
      </p>
    </section>
  );
}
