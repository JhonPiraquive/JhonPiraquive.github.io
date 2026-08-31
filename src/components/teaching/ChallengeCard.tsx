import type { ReactNode } from "react";
import { ClayCard } from "@/components/clay";

export type ChallengeCardDifficulty = "basico" | "intermedio" | "integrador";

export type ChallengeCardProps = {
  title: string;
  difficulty?: ChallengeCardDifficulty;
  prompt: ReactNode;
  acceptanceCriteria?: string[];
  hints?: string[];
};

const DIFFICULTY_LABEL: Record<ChallengeCardDifficulty, string> = {
  basico: "Básico",
  intermedio: "Intermedio",
  integrador: "Integrador",
};

export function ChallengeCard({
  title,
  difficulty = "integrador",
  prompt,
  acceptanceCriteria = [],
  hints = [],
}: ChallengeCardProps) {
  return (
    <ClayCard className="my-8 border-l-4 border-[var(--color-accent)]">
      <div className="mb-3 flex flex-wrap items-center gap-3">
        <h3 className="mb-0 text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
        <span className="clay-badge">{DIFFICULTY_LABEL[difficulty]}</span>
      </div>
      {typeof prompt === "string" ? <p className="mb-4">{prompt}</p> : <div className="mb-4">{prompt}</div>}
      {acceptanceCriteria.length > 0 ? (
        <>
          <p className="mb-2 font-semibold text-[var(--color-primary)]">{"Criterios de aceptación"}</p>
          <ul className="my-0 list-disc pl-6">
            {acceptanceCriteria.map((criterion) => (
              <li key={criterion}>{criterion}</li>
            ))}
          </ul>
        </>
      ) : null}
      {hints.length > 0 ? (
        <details className="mt-4 text-sm text-[var(--color-neutral-mid)]">
          <summary className="cursor-pointer font-semibold text-[var(--color-primary)]">{"Pistas"}</summary>
          <ul className="mt-2 list-disc pl-6">
            {hints.map((hint) => (
              <li key={hint}>{hint}</li>
            ))}
          </ul>
        </details>
      ) : null}
    </ClayCard>
  );
}
