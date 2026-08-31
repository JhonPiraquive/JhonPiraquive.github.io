import { ChallengeCard } from "@/components/teaching/ChallengeCard";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: Criterio de Andes Tech"}
      </h2>
      <p className="my-4">
        {
          "Andes Tech (Medellín) necesita oferta académica estable, cupos con integridad y fichas con atributos variables por tipología. Debes:"
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Definir BD vs SGBD en el proyecto."}</li>
        <li>{"Elegir motor(es) por workload (cupos vs ficha flexible)."}</li>
        <li>{"Indicar una GUI y una CLI coherentes."}</li>
        <li>{"Proponer Programas + INSERT válido del nombre largo con tildes."}</li>
        <li>{"Explicar en 3 líneas el riesgo de confundir GUI con motor."}</li>
      </ol>
      <ChallengeCard
        title="Criterio de Andes Tech"
        difficulty="intermedio"
        prompt="Define BD/SGBD, elige motores por workload, indica GUI+CLI, propone Programas + INSERT con tildes, y explica el riesgo GUI≠motor."
        acceptanceCriteria={[
          "BD vs SGBD claros",
          "Motor justificado por escenario",
          "GUI y CLI nombrados",
          "INSERT con literales correctos",
          "Riesgo de confundir GUI con motor explicado",
        ]}
        hints={[
          "Cupos/inventario → SQL",
          "Atributos variables → documentos o diseño por tipo",
        ]}
      />
    </section>
  );
}
