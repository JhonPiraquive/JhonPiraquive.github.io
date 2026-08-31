import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

export function MotorGuiCliCompareSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Motor, GUI y CLI: tres roles, una sola fuente"}
      </h2>
      <p className="my-4">
        {
          "Frase ancla: el motor guarda y procesa; GUI y CLI solo son mandos distintos para el mismo motor."
        }
      </p>
      <CompareTable
        title="Motor vs gestor visual vs CLI"
        headers={["Rol", "Qué es", "Ejemplos"]}
        rows={[
          [
            "Motor / servidor",
            "Proceso que persiste y ejecuta",
            "MySQL, MariaDB, MongoDB",
          ],
          [
            "GUI",
            "Cliente gráfico; habla con el motor",
            "phpMyAdmin, Workbench, DBeaver, Compass",
          ],
          [
            "CLI",
            "Cliente de texto",
            "mysql / mariadb, mongosh",
          ],
        ]}
      />

      <p className="my-4">
        {
          "La misma BD academia en MariaDB puede administrarse con phpMyAdmin, con mariadb en terminal o desde una app — no son tres bases distintas."
        }
      </p>

      <Callout variant="callout-warning" title="Cuidado operativo: GUI ≠ motor">
        {
          "Confundir la GUI con el motor lleva a diagnósticos erróneos: (1) reinstalar phpMyAdmin porque “se borró la BD” → diagnosticar el servicio del motor y el datadir; (2) documentar el stack solo como “usamos Workbench/phpMyAdmin” → nombrar siempre motor + versión + cliente; (3) creer que sin GUI “no hay base de datos” en un VPS → practicar CLI."
        }
      </Callout>
    </section>
  );
}
