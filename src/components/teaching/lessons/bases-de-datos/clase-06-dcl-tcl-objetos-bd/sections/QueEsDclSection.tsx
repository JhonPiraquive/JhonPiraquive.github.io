import { Callout } from "@/components/teaching/Callout";

export function QueEsDclSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"DCL: quién puede qué"}
      </h2>
      <Callout title="Root compartido" variant="callout-danger">
        {
          "Si app y pasante comparten root en el VPS, un script de “limpieza” puede borrar matrículas y no habrá auditoría útil por identidad. Evita root compartido y GRANT ALL ON *.* “para que funcione el lab”."
        }
      </Callout>
      <p className="my-4">
        {
          "DCL (Data Control Language) otorga y revoca privilegios. No cambia el esquema ni las filas: cambia quién puede ejecutar qué. Principio: mínimo privilegio — solo lo necesario para la tarea."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Crea (o usa) usuarios por propósito: app, reporte, admin."}</li>
        <li>{"Concede con GRANT privilegios explícitos y acotados (BD/tabla/vista)."}</li>
        <li>{"Retira con REVOKE al offboarding o al corregir sobreprivilegio."}</li>
        <li>{"Verifica con SHOW GRANTS cuando el entorno lo permita."}</li>
      </ol>
    </section>
  );
}
