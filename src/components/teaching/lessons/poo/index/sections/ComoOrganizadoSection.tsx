import { Link } from "@/i18n/navigation";
import { Callout } from "@/components/teaching/Callout";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const CLASE_01_HREF = "/teaching/poo/clase-01-fundamentos-poo/objetivos";
const CLASE_02_HREF = "/teaching/poo/clase-02-relaciones-reutilizacion/objetivos";
const CLASE_03_HREF = "/teaching/poo/clase-03-experto-poo/objetivos";

const RECORRIDO_STEPS = [
  {
    title: "Hub (estás aquí)",
    content: "Orientación del track, resultados del módulo y mapa de las 3 clases (Tienda Andes).",
  },
  {
    title: "Clase 1 — Fundamentos",
    content: "Empieza en objetivos; luego POO, encapsulamiento e intro a diagrama de clases.",
  },
  {
    title: "Clase 2 — Relaciones",
    content: "Objetivos de clase; luego herencia, override, relaciones y UML con vínculos.",
  },
  {
    title: "Clase 3 — Experto",
    content: "Objetivos de clase; luego abstracción, polimorfismo, SOLID y modularidad.",
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
          "Tres sesiones de ~2–3 h: fundamentos → relaciones → experto. Mismo caso (Tienda Andes) en las tres. Cero conocimiento previo de POO."
        }
      </p>
      <MermaidDiagram
        title="Mapa de recorrido del módulo"
        description="Flujo desde el hub hasta la Clase 3"
        chart={`flowchart LR
  Hub[Hub POO] --> C01[Clase 1 Fundamentos]
  C01 --> C02[Clase 2 Relaciones]
  C02 --> C03[Clase 3 Experto]`}
      />
      <StepReveal title="Preview del recorrido" steps={RECORRIDO_STEPS} />
      <Callout title="Siguiente paso: Clase 1" variant="callout-tip">
        <p>
          {
            "Empieza por los objetivos de Clase 1. Las URLs antiguas (poo/fundamentos, etc.) redirigen a las páginas de contenido."
          }
        </p>
        <p className="mt-3 mb-0">
          <Link href={CLASE_01_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Continuar a la Clase 1 — Fundamentos"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_02_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 2 — Relaciones"}
          </Link>
        </p>
        <p className="mt-2 mb-0">
          <Link href={CLASE_03_HREF} className="text-[var(--color-secondary)] hover:underline">
            {"Clase 3 — Experto"}
          </Link>
        </p>
      </Callout>
    </section>
  );
}
