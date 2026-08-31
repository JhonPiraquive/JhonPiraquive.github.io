import { ClayCard } from "@/components/clay";
import type { CSSProperties } from "react";

const RESULTADOS = [
  "Instala un sistema gestor de bases de datos, teniendo en cuenta los requerimientos de hardware y software",
  "Reconoce los componentes de un sistema de información con base en un modelo definido",
  "Identifica modelos relacionales de baja complejidad",
  "Utiliza adecuadamente las estructuras DDL y DML para el manejo de bases de datos",
  "Usa adecuadamente las sentencias SQL",
  "Argumenta las soluciones propuestas utilizando el lenguaje técnico adecuado",
  "Alienta y fomenta el trabajo en equipo para buscar soluciones a los problemas planteados",
] as const;

const CARD_STYLES: CSSProperties[] = [
  {
    background: "linear-gradient(145deg, rgba(0, 194, 255, 0.32), rgba(0, 194, 255, 0.14))",
    borderLeft: "4px solid #00c2ff",
  },
  {
    background: "linear-gradient(145deg, rgba(107, 78, 255, 0.32), rgba(107, 78, 255, 0.14))",
    borderLeft: "4px solid #6b4eff",
  },
  {
    background: "linear-gradient(145deg, rgba(10, 37, 64, 0.22), rgba(10, 37, 64, 0.1))",
    borderLeft: "4px solid #0a2540",
  },
];

export function ResultadosAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Resultados de aprendizaje"}</h2>
      <div className="not-prose my-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {RESULTADOS.map((text, index) => (
          <ClayCard
            key={text}
            className="flex h-full flex-col"
            style={CARD_STYLES[index % CARD_STYLES.length]}
          >
            <p className="text-base text-[var(--color-neutral-dark)]">{text}</p>
          </ClayCard>
        ))}
      </div>
    </section>
  );
}
