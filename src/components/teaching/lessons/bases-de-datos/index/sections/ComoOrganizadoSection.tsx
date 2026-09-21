import { Link } from "@/i18n/navigation";
import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const CLASE_01_HREF = "/teaching/bases-de-datos/clase-01-fundamentos-bd/historia-como-motivacion";
const CLASE_02_HREF = "/teaching/bases-de-datos/clase-02-diseno-modelos-er/modelos-conceptual-logico-fisico";
const CLASE_03_HREF = "/teaching/bases-de-datos/clase-03-sql-ddl-dml/ddl-estructura";
const CLASE_04_HREF = "/teaching/bases-de-datos/clase-04-experto-bd/redundancia-y-dependencia-funcional";

const RECORRIDO_STEPS = [
  {
    title: "Hub (estás aquí)",
    content:
      "Orientación, objetivos y resultados oficiales, prerrequisitos y primera práctica de reflexión.",
  },
  {
    title: "Clase 1 — Fundamentos",
    content:
      "Historia condensada como motivación, BD vs SGBD, motores/GUI/CLI y abecedario tabla-campo-registro.",
  },
  {
    title: "Clase 2 — Diseño ER",
    content:
      "Modelos C/L/F, diagramas ER, familias, transformación ER→SQL con PK/FK — diseño listo para implementar.",
  },
  {
    title: "Clase 3 — SQL operativo",
    content:
      "DDL, restricciones, DML, filtros, agregados, UPDATE/DELETE seguros y JOINs sobre el ER de la Clase 2.",
  },
  {
    title: "Clase 4 — Experto",
    content:
      "Normalización 1FN–3FN, desnormalización/BI, DCL, TCL/ACID, vistas, procedimientos y triggers.",
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
          "Cuatro sesiones de ~2–3 h: fundamentos → diseño → SQL → experto. Cada clase abre recordando el entregable anterior y cierra con práctica, reto y miniquiz."
        }
      </p>
      <MermaidDiagram
        title="Mapa de recorrido del módulo"
        description="Flujo de alto nivel desde el hub hasta la Clase 4"
        chart={`flowchart LR
  Hub[Hub Bases de Datos] --> C01[Clase 1 Fundamentos]
  C01 --> C02[Clase 2 Diseño ER]
  C02 --> C03[Clase 3 SQL]
  C03 --> C04[Clase 4 Experto]`}
      />
      <StepReveal title="Preview del recorrido" steps={RECORRIDO_STEPS} />
      <Callout title="Siguiente paso: Clase 1" variant="callout-tip">
        <p>
          {
            "Cuando termines este hub, abre la Clase 1 — Fundamentos. Luego diseño, SQL y experto."
          }
        </p>
        <p className="mt-3 mb-0">
          <Link href={CLASE_01_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Continuar a la Clase 1 — Fundamentos"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_02_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 2 — Diseño ER"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_03_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 3 — SQL"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_04_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 4 — Experto"}
          </Link>
        </p>
      </Callout>
    </section>
  );
}
