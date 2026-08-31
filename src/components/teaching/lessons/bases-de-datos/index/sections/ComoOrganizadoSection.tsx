import { Link } from "@/i18n/navigation";
import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const CLASE_01_HREF = "/teaching/bases-de-datos/clase-01-historia-bases-de-datos/linea-de-tiempo-y-archivos";
const CLASE_02_HREF = "/teaching/bases-de-datos/clase-02-fundamentos-motores-estructura/que-es-y-tipos";
const CLASE_03_HREF = "/teaching/bases-de-datos/clase-03-modelos-datos-er/modelos-conceptual-logico-fisico";
const CLASE_04_HREF = "/teaching/bases-de-datos/clase-04-ddl-dml-relacional/ddl-estructura";
const CLASE_05_HREF = "/teaching/bases-de-datos/clase-05-normalizacion-esquemas/redundancia-y-dependencia-funcional";
const CLASE_06_HREF = "/teaching/bases-de-datos/clase-06-dcl-tcl-objetos-bd/mapa-sql-familias";

const RECORRIDO_STEPS = [
  {
    title: "Hub (estás aquí)",
    content:
      "Orientación, objetivos y resultados oficiales, prerrequisitos y primera práctica de reflexión.",
  },
  {
    title: "Clase 01 — Historia",
    content:
      "Por qué existen las bases de datos modernas: hitos desde archivos planos hasta el modelo relacional y SQL.",
  },
  {
    title: "Clase 02 — Fundamentos, motores y estructura",
    content:
      "BD vs SGBD, relacional vs NoSQL, motor/GUI/CLI y el abecedario tabla-campo-registro-valor.",
  },
  {
    title: "Clase 03 — Modelos de datos y diagramas ER",
    content:
      "Niveles conceptual/lógico/físico, diagramas ER, familias como contexto de diseño, transformación ER→SQL con tipos, PK y FK.",
  },
  {
    title: "Clase 04 — DDL, DML, agregados y JOINs",
    content:
      "CREATE/ALTER, restricciones, INSERT/SELECT, WHERE, agregados, UPDATE/DELETE seguros y JOINs sobre el ER ya modelado.",
  },
  {
    title: "Clase 05 — Normalización y esquemas",
    content:
      "Redundancia, DF, 1FN–3FN + BCNF, desnormalización consciente, estrella vs copo de nieve en BI.",
  },
  {
    title: "Clase 06 — DCL, TCL y objetos",
    content:
      "GRANT/REVOKE, transacciones ACID, vistas, UDF, procedimientos, triggers y criterio app vs BD.",
  },
];

export function ComoOrganizadoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cómo está organizado el módulo"}
      </h2>
      <p className="my-4">
        {
          "El recorrido del módulo sigue un hilo claro: orientación (este hub) → historia (Clase 01) → fundamentos, motores y estructura (Clase 02) → modelos de datos y ER (Clase 03) → DDL, DML, agregados y JOINs (Clase 04) → normalización, desnormalización y copo de nieve (Clase 05) → DCL, TCL, vistas y objetos de servidor (Clase 06)."
        }
      </p>
      <MermaidDiagram
        title="Mapa de recorrido del módulo"
        description="Flujo de alto nivel desde el hub hasta la Clase 06"
        chart={`flowchart LR
  Hub[Hub Bases de Datos] --> C01[Clase 01 Historia]
  C01 --> C02[Clase 02 Fundamentos]
  C02 --> C03[Clase 03 Modelos ER]
  C03 --> C04[Clase 04 DDL DML JOINs]
  C04 --> C05[Clase 05 Normalización]
  C05 --> C06[Clase 06 DCL TCL objetos]`}
      />
      <StepReveal title="Preview del recorrido" steps={RECORRIDO_STEPS} />
      <Callout title="Siguiente paso: Clase 01" variant="callout-tip">
        <p>
          {
            "Cuando termines este hub —objetivos, resultados, reflexión y reto— abre la Clase 01 — Historia de las bases de datos. Luego continúa hasta la Clase 06 — DCL, TCL y objetos."
          }
        </p>
        <p className="mt-3 mb-0">
          <Link href={CLASE_01_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Continuar a la Clase 01 — Historia de las bases de datos"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_02_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 02 — Fundamentos, motores y estructura"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_03_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 03 — Modelos de datos y diagramas ER"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_04_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 04 — DDL, DML, agregados y JOINs"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_05_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 05 — Normalización, desnormalización y copo de nieve"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_06_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 06 — DCL, TCL, vistas, funciones, procedimientos y triggers"}
          </Link>
        </p>
      </Callout>
    </section>
  );
}
