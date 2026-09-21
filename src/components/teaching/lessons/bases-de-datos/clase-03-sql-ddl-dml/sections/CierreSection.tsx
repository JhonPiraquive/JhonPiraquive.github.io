import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"DDL define; DML manipula; nunca UPDATE/DELETE sin WHERE."}</li>
        <li>{"JOINs asumen el ER de clase-02-diseno-modelos-er."}</li>
        <li>{"Con un esquema vivo ya puedes juzgar redundancia y permisos."}</li>
      </ol>
      <p className="my-4">
        <strong>{"Siguiente:"}</strong>{" "}
        {"clase-04-experto-bd — normalización 1FN–3FN, DCL/TCL/ACID y objetos del servidor."}
      </p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link
          href="/teaching/bases-de-datos/clase-04-experto-bd/redundancia-y-dependencia-funcional"
          className="clay-button"
        >
          {"Continuar a la Clase 4 — Experto"}
        </Link>
        <Link href="/teaching/bases-de-datos" className="text-[var(--color-secondary)] hover:underline">
          {"Volver al mapa del módulo"}
        </Link>
      </p>
    </section>
  );
}
