import { ClayCard } from "@/components/clay";
import type { CSSProperties } from "react";

const RESULTADOS = [
  "Diferencia JavaScript, HTML y el DOM como estructura viva de la página",
  "Inserta y ejecuta scripts en HTML (inline y externos) con la carga correcta",
  "Declara variables con let/const y reconoce tipos de datos principales",
  "Aplica operadores y estructuras de decisión (if/else, switch)",
  "Usa bucles y maneja errores con try/catch de forma controlada",
  "Define funciones, callbacks y expresiones arrow cuando conviene",
  "Trabaja con arrays, objetos y JSON para modelar datos en el cliente",
  "Explica this, ámbito (scope) y clases básicas en JavaScript",
  "Utiliza estructuras como Map, Set, pila y cola según el problema",
  "Selecciona nodos del DOM y responde a eventos del usuario",
  "Explica asincronía con promesas y async/await",
  "Consume APIs con fetch e interpreta respuestas JSON",
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
