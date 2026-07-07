import { Callout } from "@/components/teaching/Callout";

export function ObjetivosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos del tema"}</h2>
      <p className="my-4">
        {
          "Esta lección introduce SQL como lenguaje estándar para datos relacionales, las garantías ACID, el diseño con claves y cuándo combinar SQL con NoSQL."
        }
      </p>
      <p className="my-4 font-semibold">{"Al finalizar, podrás:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Clasificar comandos SQL en DDL, DML, DCL y TCL y asignar cada operación a su familia."
          }
        </li>
        <li>
          {
            "Escribir consultas DML con SELECT, filtros, JOIN, agregaciones y transacciones ACID (BEGIN/COMMIT/ROLLBACK)."
          }
        </li>
        <li>
          {
            "Diseñar tablas con claves primarias, foráneas y restricciones que garanticen integridad referencial."
          }
        </li>
        <li>
          {
            "Comparar SQL vs NoSQL y elegir motor según estructura, consistencia y patrón de escala."
          }
        </li>
        <li>
          {
            "Distinguir bases relacionales fila a fila, columnares y de grafos y nombrar un caso de uso para cada una."
          }
        </li>
      </ul>
      <p className="my-4 font-semibold">{"Prerrequisitos:"}</p>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Lección herramientas-desarrollo: XAMPP/MariaDB o Docker con motor relacional local."
          }
        </li>
        <li>
          {
            "Lección modelo-cliente-servidor: la BD vive en la capa de datos, no expuesta al cliente."
          }
        </li>
        <li>{"Familiaridad con JSON y consumo de API desde JavaScript."}</li>
      </ul>
      <Callout title="El frontend no conecta directo a la BD">
        {
          "En producción, React u otras apps cliente consumen una API; el backend es quien ejecuta SQL. Conectar directo a PostgreSQL desde el navegador expone credenciales y rompe la arquitectura 3 capas."
        }
      </Callout>
    </section>
  );
}
