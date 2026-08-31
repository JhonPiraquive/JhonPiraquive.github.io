import { Callout } from "@/components/teaching/Callout";
import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: tres hitos de la Clase 01"}
      </h2>
      <ChallengeCard
        title="Leer clase-01 y anotar 3 hitos"
        difficulty="integrador"
        prompt="Tras explorar este hub, abre la Clase 01 — Historia de las bases de datos y anota tres hitos históricos clave. Trae las anotaciones a la siguiente sesión o déjalas en tu cuaderno digital."
        acceptanceCriteria={[
          "Tres viñetas con nombre del hito",
          "Cada viñeta incluye por qué te parece clave",
          "Basado en la lectura de la Clase 01 — Historia de las bases de datos",
        ]}
        hints={[
          "Ejemplos de arco: archivos planos → modelo relacional → SQL",
          "No hace falta un ensayo: viñetas bastan",
        ]}
      />
      <Callout title="Cómo entregar el reto" variant="callout-tip">
        {
          "No hace falta un ensayo: tres viñetas con el nombre del hito y por qué te parece clave bastan. El detalle histórico se estudia en la Clase 01; aquí solo te comprometes a leerla con un objetivo concreto."
        }
      </Callout>
    </section>
  );
}
