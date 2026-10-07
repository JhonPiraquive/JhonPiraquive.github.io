export function RolesDelEquipoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Roles que interactúan con el sistema</h2>
      <p className="my-4">
        Estas personas no son lo mismo que los actores de un diagrama de casos de uso, aunque a veces coinciden.
        Aquí se trata de quién hace qué durante la construcción y el uso del sistema.
      </p>
      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">Rol</th>
            <th className="py-2 text-left font-semibold">Responsabilidad</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Usuario final</td>
            <td className="py-2">Para quien se construye el sistema. Hay que entrevistarlo, probar con él y ajustar.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Administrador del sistema</td>
            <td className="py-2">Cuida el uso de recursos y herramientas de la organización.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Auditor</td>
            <td className="py-2">Vela por la calidad del desarrollo.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Analista</td>
            <td className="py-2">Lidera el entendimiento del problema, organiza el proceso y lo parte en soluciones.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Diseñador</td>
            <td className="py-2">Convierte los requisitos en una arquitectura y en especificaciones para programar.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Desarrolladores</td>
            <td className="py-2">Codifican el sistema según el diseño.</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">Operaciones</td>
            <td className="py-2">Seguridad del hardware y de la información, copias, redes. Informan restricciones al analista.</td>
          </tr>
        </tbody>
      </table>
      <p className="my-4">
        En un equipo pequeño, una misma persona puede cubrir dos roles. Lo que no puede faltar es alguien que
        hable con el usuario y alguien que transforme eso en diseño. Este módulo te entrena sobre todo como
        analista.
      </p>
    </section>
  );
}
