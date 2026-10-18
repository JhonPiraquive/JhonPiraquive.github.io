import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Nunca se ejecuta UPDATE o DELETE sin WHERE; los JOINs operan sobre el diseño de la clase 2."}</li>
        <li>{"DCL controla quién puede hacer qué; TCL y ACID evitan estados a medias."}</li>
        <li>{"Vistas, funciones, procedimientos y triggers se usan con criterio, y no todo debe ir en la BD."}</li>
      </ol>
      <p className="my-4">{"El recorrido completo del módulo es fundamentos, diseño, esquema SQL y consultas con administración."}</p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href="/teaching/bases-de-datos" className="clay-button">
          {"Volver al inicio del módulo de bases de datos"}
        </Link>
      </p>
    </section>
  );
}
