import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Diseñar antes de crear: C → L → F."}</li>
        <li>{"Cardinalidad decide dónde vive la FK."}</li>
        <li>{"ER→SQL con padres primero deja el esquema listo para la Clase 3."}</li>
      </ol>
      <p className="my-4">
        <strong>{"Siguiente:"}</strong>{" "}
        {"Clase 3 — materializar el mismo caso con DDL, DML y JOINs."}
      </p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link
          href="/teaching/bases-de-datos/clase-03-sql-ddl-dml/ddl-estructura"
          className="clay-button"
        >
          {"Continuar a la Clase 3 — SQL"}
        </Link>
        <Link href="/teaching/bases-de-datos" className="text-[var(--color-secondary)] hover:underline">
          {"Volver al mapa del módulo"}
        </Link>
      </p>
    </section>
  );
}
