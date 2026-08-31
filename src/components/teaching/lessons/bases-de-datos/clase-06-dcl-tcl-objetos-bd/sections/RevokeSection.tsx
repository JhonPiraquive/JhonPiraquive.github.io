import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { Callout } from "@/components/teaching/Callout";

const SQL = `REVOKE DELETE ON academia_rutas.Inscripciones FROM 'app_rutas'@'localhost';
REVOKE ALL PRIVILEGES ON academia_rutas.* FROM 'pasante_temp'@'localhost';
-- Offboarding: REVOKE + DROP USER (o desactivar) + rotar clave`;

export function RevokeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"REVOKE y offboarding"}</h2>
      <p className="my-4">
        {
          "REVOKE retira privilegios. Úsalo al corregir sobreprivilegio y al cerrar acceso cuando cambia el rol de una persona o servicio. Rotar la API key de la app no basta si la cuenta SQL sigue con ALL."
        }
      </p>
      <CodeFiddle
        language="sql"
        title="REVOKE de privilegios"
        filename="revoke-ejemplo.sql"
        code={SQL}
      />
      <Callout title="Caso Rutas Digitales" variant="callout-warning">
        {
          "App y pasante compartían root; un script de limpieza hizo DELETE FROM Inscripciones sin WHERE el día de matrícula. Remedio: usuario app con SELECT/INSERT (sin DELETE); reportería solo-lectura; backups antes de ventanas de lab."
        }
      </Callout>
    </section>
  );
}
