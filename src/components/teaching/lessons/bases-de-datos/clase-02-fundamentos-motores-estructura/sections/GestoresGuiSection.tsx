export function GestoresGuiSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Gestores visuales (GUI)"}
      </h2>

      <p className="my-4">
        {
          "Una GUI (Graphical User Interface — interfaz gráfica) es un cliente visual que habla con el motor: ventanas, clics, formularios. No sustituye al motor; no es el SGBD."
        }
      </p>

      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Herramienta"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Suele conectar a"}</th>
            <th className="py-2 text-left font-semibold">{"Notas"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"phpMyAdmin"}</td>
            <td className="py-2 pr-4">{"MySQL / MariaDB"}</td>
            <td className="py-2">{"Popular en hosting compartido LATAM"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"MySQL Workbench"}</td>
            <td className="py-2 pr-4">{"MySQL (también MariaDB en muchos casos)"}</td>
            <td className="py-2">{"Modelado, SQL, admin"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"DBeaver"}</td>
            <td className="py-2 pr-4">{"Multi-motor"}</td>
            <td className="py-2">{"Útil si el aula mezcla motores"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"MongoDB Compass"}</td>
            <td className="py-2 pr-4">{"MongoDB"}</td>
            <td className="py-2">{"Exploración de documentos"}</td>
          </tr>
        </tbody>
      </table>

      <p className="my-4">
        {
          "En hosting compartido, el estudiante entra a phpMyAdmin, selecciona la BD academia y crea la tabla Programas. El servidor sigue siendo MySQL/MariaDB del hosting."
        }
      </p>
    </section>
  );
}
