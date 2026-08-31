import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

const SQL = `CREATE VIEW v_programas_cupos AS
SELECT id, Nombre_Programa, cupos FROM Programas;

SELECT * FROM v_programas_cupos;

GRANT SELECT ON academia_rutas.v_programas_cupos TO 'reporte_rutas'@'localhost';`;

export function CreateViewSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"CREATE VIEW y consulta"}
      </h2>
      <p className="my-4">
        {
          "Una vista es un SELECT con nombre. La típica no almacena filas propias: recalcula desde tablas base. Pasos: escribe el SELECT → CREATE VIEW … AS → consulta como tabla → (opcional) GRANT SELECT solo sobre la vista."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="CREATE VIEW y consulta"
        filename="vista-programas.sql"
        code={SQL}
      />
      <CompareTable
        headers={["Aspecto", "Tabla", "Vista (típica)"]}
        rows={[
          ["Almacena filas", "Sí", "No — recalcula desde tablas base"],
          ["DDL", "CREATE TABLE", "CREATE VIEW"],
          ["Uso", "Hechos persistentes", "Consulta reutilizable / capa de lectura"],
          [
            "Permisos",
            "Sobre la tabla",
            "GRANT solo sobre la vista (proyección segura)",
          ],
        ]}
      />
      <p className="my-4 font-semibold">{"Límites honestos"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>{"No todas son actualizables (INSERT/UPDATE vía vista)."}</li>
        <li>{'No hay “magia” de índices: el plan depende de las tablas base.'}</li>
        <li>{"Evita torres de vistas opacas (muchas capas)."}</li>
        <li>
          {
            "En MySQL/MariaDB clásico no asumas vista materializada como en otros motores."
          }
        </li>
      </ul>
      <p className="my-4">
        {"Chequeo: CREATE VIEW = DDL; SELECT sobre la vista = DML."}
      </p>
    </section>
  );
}
