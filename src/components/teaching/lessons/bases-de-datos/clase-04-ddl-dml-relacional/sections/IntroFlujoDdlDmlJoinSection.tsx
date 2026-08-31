import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

const FLOW = `flowchart TD
  A[CREATE DATABASE] --> B[CREATE TABLE padres]
  B --> C[CREATE TABLE hijas + FK]
  C --> D[INSERT]
  D --> E[SELECT WHERE ORDER LIMIT]
  E --> F[Agregados GROUP HAVING]
  F --> G[JOIN]
  G --> H[UPDATE DELETE con WHERE]`;

export function IntroFlujoDdlDmlJoinSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ruta de la clase SQL"}
      </h2>
      <p className="my-4">
        {
          "Modo procedimiento: cada página añade sentencias. Usa este mapa como brújula."
        }
      </p>
      <MermaidDiagram
        title="Ruta de la clase SQL"
        description="Flujo desde CREATE DATABASE hasta UPDATE/DELETE seguros pasando por JOIN"
        chart={FLOW}
      />
    </section>
  );
}
