import { Callout } from "@/components/teaching/Callout";

export function ClasificacionSistemasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Dos formas de clasificar</h2>
      <p className="my-4">
        Hay dos preguntas distintas. No las mezcles. La primera mira cómo se relaciona el sistema con lo que
        está fuera. La segunda, que verás en la siguiente sección, mira para qué lo usa la empresa.
      </p>
      <h3 className="mb-2 mt-6 text-xl font-semibold text-[var(--color-primary)]">Según el entorno</h3>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Tipo</th>
            <th className="py-2 text-left font-semibold">Idea clave</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Abierto</td>
            <td className="py-2">Intercambia información con su medio: clientes, proveedores, otros sistemas.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Cerrado</td>
            <td className="py-2">No interactúa con el entorno y se alimenta de sus propios contenidos.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Probabilístico</td>
            <td className="py-2">No se puede predecir con antelación cómo se va a comportar.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Determinístico</td>
            <td className="py-2">Dado un estado, se puede anticipar el siguiente con bastante certeza.</td>
          </tr>
        </tbody>
      </table>
      <Callout title="Los sistemas actuales son abiertos" variant="callout-info">
        <p className="mb-0">
          Al inicio, muchos programas corrían en una máquina de un solo proveedor. Hoy lo habitual es un sistema
          abierto: varios proveedores, arquitectura cliente/servidor y estándares compartidos, para no reescribir
          todo cuando cambia un componente. El sistema de órdenes de Logística SAS será abierto: el cliente entra
          desde internet y el empleado consulta desde la oficina.
        </p>
      </Callout>
    </section>
  );
}
