export function MotoresSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Motores / servidores"}
      </h2>

      <p className="my-4">
        {
          "El motor (servidor de BD) es el proceso que almacena y ejecuta operaciones sobre los datos. Guarda y procesa. Elegir motor es elegir modelo + ecosistema + operación. No es la ventana gráfica."
        }
      </p>

      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Motor"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Familia"}</th>
            <th className="py-2 text-left font-semibold">{"Perfil"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"MySQL"}</td>
            <td className="py-2 pr-4">{"Relacional SQL"}</td>
            <td className="py-2">{"Web LAMP; hosting LATAM"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"MariaDB"}</td>
            <td className="py-2 pr-4">{"Relacional SQL"}</td>
            <td className="py-2">{"Distros Linux / aulas"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"MongoDB"}</td>
            <td className="py-2 pr-4">{"Documentos"}</td>
            <td className="py-2">{"JSON flexible"}</td>
          </tr>
        </tbody>
      </table>

      <p className="my-4">
        {
          "Laboratorio típico: MariaDB local para Programas (SQL). Demostración contrastiva: la misma ficha de programa como documento en MongoDB para ver flexibilidad vs integridad."
        }
      </p>
    </section>
  );
}
