import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { CompareTable } from "@/components/teaching/CompareTable";
import { Callout } from "@/components/teaching/Callout";

const ESTRELLA_VS_COPO = `flowchart LR
  subgraph estrella
    F1[Hecho Inscripcion] --> D1[Dim Programa]
    F1 --> D2[Dim Estudiante]
    F1 --> D3[Dim Tiempo]
  end
  subgraph copo
    F2[Hecho Inscripcion] --> P[Dim Programa]
    P --> S[Dim Sede]
    F2 --> E[Dim Estudiante]
  end`;

export function EsquemaCopoNieveSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Esquema en copo de nieve (snowflake)"}
      </h2>
      <p className="my-4">
        {
          "Variante donde las dimensiones se normalizan en subdims (jerarquías): Programa → Sede. Menos duplicación; más JOINs. Relaciona con 3FN aplicado a dims — no es el OLTP de matrículas. Evita copo de 8 niveles “por pureza” en un tablero PYME."
        }
      </p>
      <MermaidDiagram
        title="Estrella vs copo (inscripciones)"
        description="Hecho Inscripcion con dimensiones planas (estrella) frente a dimensión normalizada (copo)"
        chart={ESTRELLA_VS_COPO}
      />
      <CompareTable
        headers={["Forma", "Dimensiones", "Uso típico"]}
        rows={[
          ["Estrella", "Planas", "Tableros BI con pocos JOINs"],
          ["Copo", "Normalizadas", "Jerarquías sin duplicar tanto"],
          ["OLTP 3FN", "N/A", "Operación diaria / integridad"],
        ]}
      />
      <p className="my-4">
        {
          "En estrella, ciudad y departamento viven como columnas en Dim_Sede. En copo, Dim_Sede apunta a Ciudad → Departamento."
        }
      </p>
      <Callout title="Estrella ≠ ER operacional" variant="callout-info">
        {
          "Hechos + dimensiones son una forma analítica. Tener FK en el OLTP no te convierte automáticamente en estrella ni en copo."
        }
      </Callout>
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {"¿El copo normaliza dimensiones o hechos? (Dimensiones / jerarquías dimensionales.)"}
      </p>
    </section>
  );
}
