import { Link } from "@/i18n/navigation";

const CLASE_01_HREF =
  "/teaching/bases-de-datos/clase-01-fundamentos-bd/historia-como-motivacion";
const CLASE_03_HREF =
  "/teaching/bases-de-datos/clase-02-diseno-modelos-er/modelos-conceptual-logico-fisico";

export function CierreHubSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cierre: checklist antes de continuar"}
      </h2>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Leer objetivos y resultados (tarjetas del programa)."}</li>
        <li>{"Revisar prerrequisitos sugeridos."}</li>
        <li>{"Completar la reflexión breve."}</li>
        <li>{"Continuar a la Clase 1 — Historia de las bases de datos."}</li>
        <li>{"Anotar tres hitos históricos (reto integrador)."}</li>
      </ol>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué sigue"}</h3>
      <p className="my-4">
        {
          "En la Clase 1 se cuenta por qué existen las bases de datos modernas. En la Clase 2 bajas al abecedario operativo: BD vs SGBD, motores, GUI/CLI y estructura tabla-campo-valor. En la Clase 3 diseñas con modelos y ER; en la Clase 4 escribes DDL/DML y JOINs."
        }
      </p>
      <p className="my-6 flex flex-wrap gap-3">
        <Link href={CLASE_01_HREF} className="clay-button">
          {"Continuar a la Clase 1 — Historia de las bases de datos"}
        </Link>
        <Link href={CLASE_03_HREF} className="text-[var(--color-secondary)] hover:underline">
          {"Clase 3 — Modelos de datos y ER"}
        </Link>
      </p>
    </section>
  );
}
