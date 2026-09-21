import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { Callout } from "@/components/teaching/Callout";

const MAPA = `flowchart TD
  R[Requisitos] --> C[Conceptual]
  C --> L[Lógico]
  L --> F[Físico / DDL]
  F --> T[Datos de prueba + chequeo FK]`;

export function IntroDisenarAntesSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Diseñar antes de crear"}
      </h2>
      <p className="my-4">
        {
          "Imagina que “Rutas Digitales” (Cali) pide “crear ya las tablas”. Primero se diseña: qué existe, cómo se relaciona, qué identifica cada hecho. El SQL de la siguiente clase implementará ese diseño; aquí dibujas y traduces."
        }
      </p>
      <MermaidDiagram
        title="Flujo de diseño"
        description="De requisitos a datos de prueba pasando por conceptual, lógico y físico"
        chart={MAPA}
      />
      <Callout title="Diseñar antes de crear" variant="callout-warning">
        {
          "Si no puedes dibujar entidades y cardinalidad, aún no estás listo para el CREATE TABLE. El plano evita rehacer el esquema."
        }
      </Callout>
    </section>
  );
}
