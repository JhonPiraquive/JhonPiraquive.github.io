import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

export function MapaDdlDmlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Mapa DDL ↔ DML"}
      </h2>
      <p className="my-4">
        {
          "Hilo: academia “Rutas Digitales” (Cali). Crearás academia_rutas, cargarás programas e inscripciones y consultarás con filtros, agregados y JOINs — sin borrar la BD “para limpiar filas”."
        }
      </p>
      <p className="my-4">
        {
          "Progresión: crear esquema → restricciones → cargar/consultar → relacionar con JOIN → UPDATE/DELETE seguros."
        }
      </p>
      <CompareTable
        headers={["Familia", "Qué toca", "Ejemplos"]}
        rows={[
          ["DDL", "Estructura (esquema)", "CREATE / ALTER / DROP TABLE"],
          ["DML", "Datos (filas)", "INSERT / SELECT / UPDATE / DELETE"],
        ]}
      />
      <Callout title="Operaciones que rompen datos" variant="callout-warning">
        {
          "Incluye siempre WHERE en UPDATE y DELETE. Sin WHERE se afectan todas las filas. Haz backup (dump/snapshot) antes de DROP DATABASE/DROP TABLE o cambios masivos. Verifica host/BD (SELECT DATABASE();) antes de cualquier DDL destructivo."
        }
      </Callout>
    </section>
  );
}
