import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const FLUJO = `flowchart TD
  R[Requisitos del negocio] --> C[Modelo conceptual]
  C --> L[Modelo lógico]
  L --> F[Modelo físico / DDL]
  F --> P[Prueba con INSERT y FK]`;

export function MapaRequisitoDdlSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Del requisito al DDL"}
      </h2>
      <p className="my-4">
        {
          "El mismo dominio (matrículas) atraviesa tres niveles. No se mezclan tipos SQL en el conceptual ni se salta del mensaje de WhatsApp al CREATE TABLE."
        }
      </p>
      <CompareTable title="Niveles del mismo dominio" headers={["Paso", "Qué ocurre"]} rows={[
          {
            title: "Conceptual",
            content:
              "Estudiante se inscribe en Programa — lenguaje de negocio, sin tipos SQL.",
          },
          {
            title: "Lógico",
            content:
              "Entidades con atributos, PK/FK y cardinalidad; aún sin motor concreto.",
          },
          {
            title: "Físico",
            content:
              "VARCHAR, INT AUTO_INCREMENT, índices y DDL del motor elegido.",
          },
        ].map((s) => [s.title, s.content])} />
      <MermaidDiagram
        title="Flujo requisito → modelo → DDL"
        description="Secuencia desde los requisitos hasta la prueba de integridad"
        chart={FLUJO}
      />
    </section>
  );
}
