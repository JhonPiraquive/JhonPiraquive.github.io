import { Callout } from "@/components/teaching/Callout";

export function RequerimientosFuncionalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Funcional y no funcional</h2>
      <p className="my-4">
        Un requisito funcional dice qué debe hacer el sistema. Uno no funcional dice con qué cualidad o bajo qué
        restricción. Los dos se verifican contra lo que pidió el cliente.
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Tipo</th>
            <th className="py-2 text-left font-semibold">Ejemplo en Logística SAS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Funcional</td>
            <td className="py-2">El sistema debe registrar una orden y devolver su número.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">No funcional</td>
            <td className="py-2">Debe construirse con herramientas libres, funcionar en Unix y ser usable por quien casi no maneja computador.</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        Del caso de uso se baja el requisito a pasos de interfaz. Para «Administrar tipos de usuario» el patrón
        es siempre el mismo, y se repite en permisos, usuarios, estados e insumos:
      </p>
      <ol className="my-4 list-decimal space-y-2 pl-6">
        <li>Hay una entrada distinta para administrador, empleado y cliente.</li>
        <li>El administrador inicia sesión y ve sus funciones, más cerrar sesión.</li>
        <li>Cada función ofrece ingresar, consultar, modificar, eliminar y volver.</li>
        <li>Ingresar pide los datos y tiene guardar y cancelar.</li>
        <li>Consultar busca por identificación o por nombre y muestra el resultado.</li>
        <li>Modificar y eliminar piden confirmación antes de aplicar el cambio.</li>
      </ol>
      <Callout title="Cómo verificar" variant="callout-tip">
        <p className="mb-0">
          Lee el paso en voz alta frente a la petición del cliente. Si el cliente pidió consultar por cédula y
          el requisito solo busca por nombre, no cumple. Si el requisito añade nómina, se salió del ámbito del
          acta 1.
        </p>
      </Callout>
    </section>
  );
}
