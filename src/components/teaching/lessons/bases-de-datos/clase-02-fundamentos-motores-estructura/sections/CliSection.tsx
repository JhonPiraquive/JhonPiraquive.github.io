import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const BASH_MARIADB_CONNECT = `mariadb -u estudiante -p academia`;

const SQL_CLI_SELECT = `SELECT Nombre_Programa FROM Programas;`;

const BASH_MONGOSH = `mongosh`;

export function CliSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"CLI — línea de comandos"}
      </h2>

      <p className="my-4">
        {
          "La CLI (Command Line Interface) es el cliente de texto que se conecta al motor. Es el estándar en servidores Linux, scripts y recuperación. Complementa la GUI; no la reemplaza del todo en la formación."
        }
      </p>

      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Cliente"}</th>
            <th className="py-2 text-left font-semibold">{"Motor típico"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"mysql / mariadb"}</td>
            <td className="py-2">{"MySQL / MariaDB"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"mongosh"}</td>
            <td className="py-2">{"MongoDB"}</td>
          </tr>
        </tbody>
      </table>

      <p className="my-4">{"Conectar a MariaDB y consultar programas:"}</p>
      <CodeFiddle language="bash" title="Conectar con mariadb CLI" code={BASH_MARIADB_CONNECT} />
      <p className="my-4">{"Una vez dentro de la sesión, el motor recibe SQL:"}</p>
      <CodeFiddle language="sql" title="SELECT tras conectar" code={SQL_CLI_SELECT} />
      <p className="my-4">{"Para MongoDB el cliente de texto es mongosh:"}</p>
      <CodeFiddle language="bash" title="Abrir mongosh" code={BASH_MONGOSH} />
    </section>
  );
}
