"use client";

import { useState } from "react";
import { ClayCard } from "@/components/clay";

export type PracticeExerciseProps = {
  prompt: string;
  hints?: string[];
  expectedKeywords?: string[];
  successMessage?: string;
  rows?: number;
};

export function PracticeExercise({
  prompt,
  hints = [],
  expectedKeywords = [],
  successMessage = "¡Correcto! Has identificado el concepto clave.",
  rows = 3,
}: PracticeExerciseProps) {
  const [answer, setAnswer] = useState("");
  const [hintIndex, setHintIndex] = useState(-1);
  const [checked, setChecked] = useState(false);

  const normalized = answer.trim().toLowerCase();
  const isCorrect =
    expectedKeywords.length === 0 ||
    expectedKeywords.some((kw) => normalized.includes(kw.toLowerCase()));

  return (
    <ClayCard className="my-8 border-l-4 border-[var(--color-accent)]">
      <h3 className="mb-3 text-lg font-semibold text-[var(--color-primary)]">Ejercicio de práctica</h3>
      <p className="mb-4">{prompt}</p>
      <textarea
        className="w-full rounded-xl border border-[var(--color-neutral-mid)] bg-white p-3 text-sm"
        rows={rows}
        value={answer}
        disabled={checked && isCorrect}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Escribe tu respuesta..."
      />
      <div className="mt-4 flex flex-wrap gap-3">
        {hints.length > 0 && hintIndex < hints.length - 1 && (
          <button
            type="button"
            className="clay-button clay-button--secondary"
            onClick={() => setHintIndex((i) => i + 1)}
          >
            Pista ({hintIndex + 1}/{hints.length})
          </button>
        )}
        <button
          type="button"
          className="clay-button"
          onClick={() => setChecked(true)}
          disabled={!answer.trim()}
        >
          Comprobar
        </button>
      </div>
      {hintIndex >= 0 && (
        <p className="mt-3 text-sm text-[var(--color-neutral-mid)]">
          <strong>Pista:</strong> {hints[hintIndex]}
        </p>
      )}
      {checked && (
        <p className={`mt-3 font-medium ${isCorrect ? "text-green-600" : "text-red-500"}`}>
          {isCorrect
            ? successMessage
            : "Revisa tu respuesta. Usa las pistas o vuelve a leer el contenido."}
        </p>
      )}
    </ClayCard>
  );
}
