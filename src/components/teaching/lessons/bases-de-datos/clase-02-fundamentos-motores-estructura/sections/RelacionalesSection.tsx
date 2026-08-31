import { CodeFiddle } from "@/components/teaching/CodeFiddle";

const SQL_SELECT_CUPOS = `SELECT Nombre_Programa
FROM Programas
WHERE cupos >= 25;`;

export function RelacionalesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tipos — bases de datos relacionales"}
      </h2>

      <p className="my-4">
        {
          "Organizan los datos en tablas (filas/registros y columnas/campos). Las relaciones entre tablas se expresan con valores (claves). El lenguaje dominante es SQL (Structured Query Language)."
        }
      </p>
      <p className="my-4">
        {
          "Encaje: inventario, matrículas, facturación, órdenes — datos estructurados de negocio. Es el enfoque principal del módulo."
        }
      </p>

      <table className="my-4 w-full border-collapse text-sm">
        <thead>
          <tr className="border-b border-[var(--color-neutral-mid)]">
            <th className="py-2 pr-4 text-left font-semibold">{"Concepto"}</th>
            <th className="py-2 pr-4 text-left font-semibold">{"Sinónimo informal"}</th>
            <th className="py-2 text-left font-semibold">{"Ejemplo"}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Tabla"}</td>
            <td className="py-2 pr-4">{"Relación"}</td>
            <td className="py-2">{"Programas"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Columna"}</td>
            <td className="py-2 pr-4">{"Campo / atributo"}</td>
            <td className="py-2">{"Nombre_Programa"}</td>
          </tr>
          <tr className="border-b border-[var(--color-neutral-mid)]/40">
            <td className="py-2 pr-4 font-semibold">{"Fila"}</td>
            <td className="py-2 pr-4">{"Registro / tupla"}</td>
            <td className="py-2">{"Una fila = un programa"}</td>
          </tr>
          <tr>
            <td className="py-2 pr-4 font-semibold">{"Valor"}</td>
            <td className="py-2 pr-4">{"Dato en la celda"}</td>
            <td className="py-2">{"'Técnica Profesional en Configuración de Servicios Web'"}</td>
          </tr>
        </tbody>
      </table>

      <p className="my-4">
        {
          "Inventario de una ferretería o cupos de una academia: tablas con tipos claros y SQL para filtrar. En Programas:"
        }
      </p>
      <CodeFiddle language="sql" title="SELECT programas con cupos" code={SQL_SELECT_CUPOS} />
    </section>
  );
}
