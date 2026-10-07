import { Callout } from "@/components/teaching/Callout";

export function MarcoYRolesScrumSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Scrum: para qué y quién</h2>
      <p className="my-4">
        Las metodologías ágiles entregan, en poco tiempo, pedazos de software que funcionan. Equipos pequeños se
        reúnen con frecuencia, documentan lo necesario y aceptan el cambio en lugar de resistirlo.
      </p>
      <p className="my-4">
        Scrum es un marco de prácticas para trabajar en equipo cuando el proyecto no se puede definir por
        completo al inicio. Sirve para software y también para otros trabajos con revisión continua.
      </p>
      <Callout title="No mezcles los vocabularios" variant="callout-warning">
        <p className="mb-0">
          Los cuatro valores del Manifiesto Ágil son: personas e interacción por encima de procesos y
          herramientas; software que funciona por encima de documentación exhaustiva; colaboración con el cliente
          por encima del contrato; respuesta al cambio por encima de seguir un plan. Scrum, además, tiene cinco
          valores propios: compromiso, coraje, foco, apertura y respeto. En cascada no se dice «sprint». En Scrum
          no se cierra el producto en un acta única al inicio.
        </p>
      </Callout>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Rol</th>
            <th className="py-2 text-left font-semibold">Función</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Product Owner</td>
            <td className="py-2">Dueño del producto. Habla con el cliente y los interesados, ordena prioridades y trae los cambios al equipo.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Scrum Master</td>
            <td className="py-2">Facilita. Quita obstáculos para que el equipo cumpla el sprint. No es el jefe que asigna tareas.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Developers</td>
            <td className="py-2">Construyen el incremento. Se organizan entre ellos.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Stakeholders</td>
            <td className="py-2">Interesados: gerencia, finanzas, cartera. No construyen el sprint.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Usuarios</td>
            <td className="py-2">Destinatarios. Pueden mirar la revisión de cada entrega.</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
