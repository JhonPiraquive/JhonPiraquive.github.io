import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"La redundancia produce anomalías; las dependencias funcionales guían las formas normales."}</li>
        <li>{"Se desnormaliza solo con un dueño claro de la verdad y para un propósito (historia, BI)."}</li>
        <li>{"El ER pasa a SQL con tipos, PK y FK, creando los padres antes que las hijas."}</li>
        <li>{"DDL define el esquema, INSERT y SELECT lo llenan y lo consultan."}</li>
      </ol>
      <p className="my-4">{"La clase 3 trabaja sobre ese esquema vivo: filtros, agregados, UPDATE y DELETE seguros, JOINs, permisos, transacciones y objetos del servidor."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/bases-de-datos/clase-03-consultas-y-administracion/dml-filtros-orden" className="clay-button">
          {"Continuar a la clase 3: consultas y administración"}
        </Link>
      </p>
    </section>
  );
}
