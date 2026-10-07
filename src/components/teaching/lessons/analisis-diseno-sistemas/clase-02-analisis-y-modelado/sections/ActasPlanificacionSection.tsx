import { StepReveal } from "@/components/teaching/StepReveal";

const ACTAS = [
  {
    title: "Acta 1 — Ámbito del proyecto",
    content:
      "Qué comprende el proyecto y qué queda fuera: funciones, características y objetivos, en lenguaje que el cliente entienda. Entregable: 1 o 2 páginas con el problema que el sistema va a resolver. Forma parte del contrato.",
  },
  {
    title: "Acta 2 — Viabilidad",
    content:
      "¿Se puede hacer desde lo técnico, lo económico y lo legal? Identifica qué podría hacer fracasar el proyecto. Entregable: 1 o 2 páginas de ese análisis. Conviene sumar la viabilidad operativa: si las personas podrán usarlo.",
  },
  {
    title: "Acta 3 — Riesgos",
    content:
      "Qué puede salir mal, qué tan probable es y qué impacto tiene. Entregable: el análisis y las estrategias para enfrentarlo.",
  },
  {
    title: "Acta 4 — Costo",
    content:
      "Estimación lo más cercana posible a la realidad. Depende del análisis de riesgos y de experiencia en proyectos parecidos. Entregable: 1 o 2 páginas.",
  },
  {
    title: "Acta 5 — Agenda y recursos",
    content:
      "Actividades por semana, con responsable, presupuesto y tiempo. Planificar por semanas deja margen para imprevistos. Entregable: tiempos, actividades y recursos. Las cinco actas pueden unirse en un solo documento de planificación.",
  },
];

export function ActasPlanificacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Fase 1 — Planificación</h2>
      <p className="my-4">
        Aquí se decide qué se quiere lograr y con qué. Vale la pena mirar si ya existe un sistema que, con
        mejoras, salga más barato que construir uno nuevo. También se revisan recursos, equipo, cronograma,
        presupuesto y seguridad.
      </p>
      <StepReveal title="Cinco actas y su entregable" steps={ACTAS} />
      <p className="my-4">
        En Logística SAS, el acta de ámbito diría: el sistema cubre órdenes de servicio, clientes, proveedores,
        insumos y reportes del área de servicios. Queda fuera, por ahora, la contabilidad y la nómina. El acta
        de viabilidad anotaría: hay equipos nuevos, no hay servidor, se piden herramientas libres y el personal
        tiene niveles de conocimiento muy distintos.
      </p>
    </section>
  );
}
