import { ClayCard } from "@/components/clay";
import type { CSSProperties } from "react";

const OBJETIVOS = [
  "Instalar y configurar sistemas operativos en equipos de cómputo documentando el hardware",
  "Seleccionar componentes y periféricos con criterios técnicos de rendimiento y mantenimiento",
  "Administrar el sistema desde consola: usuarios, permisos, rutas y respaldos",
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
