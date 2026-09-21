import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL = `CREATE VIEW v_estudiantes_publicos AS
SELECT id, Nombre_Estudiante, programa_id
FROM Estudiantes;
-- GRANT SELECT ON academia_rutas.v_estudiantes_publicos TO 'web_rutas'@'localhost';
-- (sin GRANT sobre Estudiantes completa → no exponer documento)`;

export function VistaProyeccionSeguraSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Proyección segura"}
      </h2>
      <p className="my-4">
        {
          "Si Estudiantes tiene documento, crea una vista sin esa columna y otorga SELECT solo sobre la vista al portal. Seguridad solo en el frontend no basta: un cliente SQL salta la UI."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="Vista sin columna sensible"
        filename="vista-proyeccion.sql"
        code={SQL}
      />
      <Callout title="La vista no es una copia física" variant="callout-warning">
        {
          "La vista típica depende de las tablas base: si haces DROP de la tabla, la vista deja de servir. No encadenes cinco niveles de vistas “por limpieza”."
        }
      </Callout>
    </section>
  );
}
