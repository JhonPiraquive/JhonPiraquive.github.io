import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

const FLUJO = `flowchart TD
  S[Tabla sucia] --> DF[Listar DFs y clave]
  DF --> F1{Atómicos y sin grupos repetidos?}
  F1 -->|No| A1[Separar multivalor]
  A1 --> F1
  F1 -->|Sí| N1[1FN OK]
  N1 --> F2{DF parcial en PK compuesta?}
  F2 -->|Sí| A2[Extraer + FK]
  A2 --> F2
  F2 -->|No| N2[2FN OK]
  N2 --> F3{DF transitiva?}
  F3 -->|Sí| A3[Extraer + FK]
  A3 --> F3
  F3 -->|No| N3[3FN OK]`;

export function VisionGeneralFormasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Visión general — cómo ejecutar las formas"}
      </h2>
      <p className="my-4">
        {
          "Procedimiento, no eslogan: cada forma ataca un problema concreto. Orden en pizarra: tabla sucia → listar DFs → 1FN → 2FN → 3FN → (mención BCNF)."
        }
      </p>
      <div className="my-6 overflow-x-auto">
        <table className="w-full min-w-[32rem] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-[var(--color-neutral-mid)]/30 bg-[var(--color-secondary)]/10">
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Forma"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">{"Idea"}</th>
              <th className="px-3 py-2 font-semibold text-[var(--color-primary)]">
                {"Cómo ejecutarla"}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">
                <strong>{"1FN"}</strong>
              </td>
              <td className="px-3 py-2">{"Valores atómicos; sin grupos repetidos"}</td>
              <td className="px-3 py-2">
                {"Separar listas / curso1…cursoN en filas o tablas hijas"}
              </td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">
                <strong>{"2FN"}</strong>
              </td>
              <td className="px-3 py-2">{"Sin DF parcial de PK compuesta"}</td>
              <td className="px-3 py-2">
                {"Extraer atributos que dependen solo de parte de la clave + FK"}
              </td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20 bg-[var(--color-neutral-light)]">
              <td className="px-3 py-2">
                <strong>{"3FN"}</strong>
              </td>
              <td className="px-3 py-2">{"Sin DF transitiva"}</td>
              <td className="px-3 py-2">{"Extraer determinantes no-clave + FK"}</td>
            </tr>
            <tr className="border-b border-[var(--color-neutral-mid)]/20">
              <td className="px-3 py-2">
                <strong>{"BCNF"}</strong>
                {" (mención)"}
              </td>
              <td className="px-3 py-2">{"Determinante debe ser superclave"}</td>
              <td className="px-3 py-2">
                {'Detectar DF “rara”; no exigir descomposición formal completa'}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p className="my-4">
        {
          "Si la PK es simple y hay 1FN, 2FN suele cumplirse; igual verifica DFs."
        }
      </p>
      <MermaidDiagram
        title="Procedimiento de normalización"
        description="Flujo checklist de tabla sucia a 3FN pasando por DFs, 1FN y 2FN"
        chart={FLUJO}
      />
      <StepReveal
        title="Antes → después (Rutas Digitales)"
        steps={[
          {
            title: "Sucia",
            content: "Listas en celdas, Nombre_Programa en la PK compuesta, teléfono de sede repetido.",
          },
          {
            title: "1FN",
            content: "Una fila por inscripción; sin CSV en celdas.",
          },
          {
            title: "2FN",
            content: "Nombre_Programa vive en Programas; la inscripción solo guarda FKs.",
          },
          {
            title: "3FN",
            content: "Sedes es dueña del teléfono; Programas referencia sede_id.",
          },
        ]}
      />
      <p className="my-4">
        <strong>{"Mini-chequeo:"}</strong>{" "}
        {"¿En qué orden ejecutas las formas? (1FN → 2FN → 3FN → mención BCNF.)"}
      </p>
    </section>
  );
}
