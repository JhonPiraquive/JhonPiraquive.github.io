import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre del módulo"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Redundancia → anomalías; DF → formas normales; desnormalizar con dueño de la verdad."}</li>
        <li>{"DCL controla quién; TCL/ACID evita estados a medias; vistas/procs/triggers con criterio."}</li>
        <li>{"Recorrido: fundamentos → diseño → SQL → experto."}</li>
      </ol>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/bases-de-datos" className="clay-button">
          {"Volver al hub Bases de Datos"}
        </Link>
      </p>
    </section>
  );
}
