import { ClayCard } from "@/components/clay";
import type { CSSProperties } from "react";

const RESULTADOS = [
  "Evalúa la problemática con base en instrumentos y técnicas de análisis",
  "Elabora un documento de conciliación con criterios técnicos y marcos de referencia",
  "Verifica que la especificación del requisito cumpla criterios técnicos y marcos de referencia",
  "Verifica que la caracterización de requisitos funcionales y no funcionales concuerde con el cliente",
  "Aplica la notación UML para elaborar diagramas que modelan un sistema de información",
  "Reconoce un modelo de análisis (diagrama de clases) que represente el sistema a desarrollar",
  "Realiza un prototipo de interfaz de usuario del sistema a desarrollar",
  "Implementa artefactos de Scrum para el levantamiento de requerimientos e historias de usuario",
  "Reconoce el lenguaje técnico adecuado para cada metodología",
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
