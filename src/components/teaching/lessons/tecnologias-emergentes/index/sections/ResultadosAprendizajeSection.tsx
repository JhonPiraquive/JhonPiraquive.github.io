import { ClayCard } from "@/components/clay";
import type { CSSProperties } from "react";

const RESULTADOS = [
  "Aplica las características del lenguaje JavaScript, como funciones de flecha (Arrow Functions), variables, objetos, arreglos, desestructuración de objetos y peticiones asíncronas (Async Await) utilizando la programación para la solución de un problema de la vida real.",
  "Desarrolla una experiencia de usuario efectiva en aplicaciones web.",
  "Implementa un proyecto de React JS utilizando Framework Vite y librerías externas.",
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
