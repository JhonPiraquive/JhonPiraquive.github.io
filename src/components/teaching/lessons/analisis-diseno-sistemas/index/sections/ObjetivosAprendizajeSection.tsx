import { ClayCard } from "@/components/clay";
import type { CSSProperties } from "react";

const OBJETIVOS = [
  "Recolectar y verificar los requerimientos del cliente para una solución informática básica, con criterios técnicos y marcos de referencia",
  "Comunicar con lenguaje técnico adecuado las decisiones de análisis y diseño frente al cliente y al equipo de desarrollo",
  "Trabajar en equipo para delimitar alcance, modelar con UML y priorizar historias de usuario en un proyecto de tecnología",
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

export function ObjetivosAprendizajeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Objetivos de Aprendizaje"}</h2>
      <div className="not-prose my-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {OBJETIVOS.map((text, index) => (
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
