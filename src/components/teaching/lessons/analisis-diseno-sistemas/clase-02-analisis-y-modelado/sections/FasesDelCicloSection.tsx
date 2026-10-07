import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const FASES = [
  {
    title: "Planificación",
    content:
      "Se estudia si el proyecto es viable: costos, rentabilidad y factibilidad. El resultado es un pliego de condiciones aceptado por el cliente y por quien ejecuta, más una estimación y una propuesta.",
  },
  {
    title: "Análisis de requerimientos",
    content:
      "Se describe el problema y, con detalle, qué debe hacer el producto. Aquí se escribe lo que el cliente espera, todavía sin decidir cada pantalla.",
  },
  {
    title: "Diseño",
    content:
      "Se formula la solución: arquitectura, interfaces, entornos y librerías. Sale un plan de diseño y planes de prueba por componente.",
  },
  {
    title: "Desarrollo",
    content:
      "Se programa lo especificado, con las estructuras de datos definidas en el diseño.",
  },
  {
    title: "Prueba",
    content:
      "Se comprueba que los componentes cumplen los requisitos y se corrigen los errores encontrados.",
  },
  {
    title: "Integración y ejecución",
    content:
      "Se unen módulos para que el sistema entre en funcionamiento.",
  },
  {
    title: "Operación y mantenimiento",
    content:
      "Puede durar años. Se actualiza, se corrige y se mejora. El analista la inicia cuando el sistema ya está probado, para que no pierda valor.",
  },
];

export function FasesDelCicloSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Fases del ciclo de vida</h2>
      <p className="my-4">
        El orden de abajo es el de referencia de este módulo. En Scrum no se recorre una sola vez de punta a
        punta: cada sprint vuelve a tocar varias fases sobre un pedazo pequeño. La lista sigue siendo útil
        porque nombra el trabajo.
      </p>
      <MermaidDiagram
        title="Fases del ciclo de vida"
        description="Secuencia de referencia para un sistema de información"
        chart={`flowchart TD
  A[Planificacion] --> B[Analisis de requerimientos]
  B --> C[Diseno]
  C --> D[Desarrollo]
  D --> E[Prueba]
  E --> F[Integracion y ejecucion]
  F --> G[Operacion y mantenimiento]`}
      />
      <StepReveal title="Qué se hace en cada fase" steps={FASES} />
    </section>
  );
}
