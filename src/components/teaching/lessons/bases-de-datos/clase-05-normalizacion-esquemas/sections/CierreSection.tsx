import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Redundancia → anomalías; DF → formas normales."}</li>
        <li>{"1FN→2FN→3FN es un procedimiento, no un eslogan."}</li>
        <li>{"Desnormalizar con dueño de la verdad; estrella/copo son BI."}</li>
      </ol>
      <p className="my-4">
        {
          "Pregunta operativa: ¿listé DFs? ¿qué extraje en cada forma? ¿accidente o política? ¿OLTP o hecho+dims?"
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente:"}</strong>{" "}
        {"clase-06-dcl-tcl-objetos-bd — permisos, transacciones y objetos del servidor."}
      </p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link
          href="/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias"
          className="clay-button"
        >
          {"Continuar a la Clase 06 — DCL, TCL y objetos"}
        </Link>
        <Link href="/teaching/bases-de-datos" className="text-[var(--color-secondary)] hover:underline">
          {"Repasa el mapa del módulo Bases de Datos"}
        </Link>
      </p>
    </section>
  );
}
