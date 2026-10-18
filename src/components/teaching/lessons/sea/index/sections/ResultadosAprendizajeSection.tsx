import { ClayCard } from "@/components/clay";
import type { CSSProperties } from "react";

const RESULTADOS = [
  "Identificar amenazas comunes a aplicaciones web (SQLi, MITM) y describir su impacto.",
  "Explicar ISO/IEC 27001 y 27002 con enfoque práctico (qué piden y para qué sirven).",
  "Aplicar CIA + Autenticidad para evaluar decisiones técnicas.",
  "Distinguir codificación (Base64), cifrado y hash (SHA-256) y escoger la técnica correcta.",
  "Implementar criterios de protección de datos: cookies seguras, tokens (JWT) y manejo de secretos.",
  "Construir una matriz de riesgos simple y priorizar mitigaciones por impacto y probabilidad.",
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
