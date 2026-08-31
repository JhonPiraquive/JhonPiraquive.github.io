import { Link } from "@/i18n/navigation";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cierre"}</h2>
      <ul className="my-4 list-disc pl-6">
        <li>{"DDL = estructura; DML = filas."}</li>
        <li>{"WHERE es filtro y cinturón de seguridad en UPDATE/DELETE."}</li>
        <li>{"JOINs asumen el ER de clase-03-modelos-datos-er."}</li>
        <li>{"DROP DATABASE/TABLE solo con backup y host/BD verificados."}</li>
      </ul>
      <p className="my-4">
        {
          "Pregunta operativa: ¿estoy tocando estructura o datos? ¿mi WHERE está probado? ¿tengo backup?"
        }
      </p>
      <p className="my-4">
        <strong>{"Siguiente:"}</strong>{" "}
        {"clase-05-normalizacion-esquemas — limpiar el esquema (1FN→3FN)."}
      </p>
      <p className="my-6">
        <Link
          href="/teaching/bases-de-datos/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional"
          className="clay-button"
        >
          {"Continuar a normalización de esquemas"}
        </Link>
      </p>
    </section>
  );
}
