"use client";

import { useState } from "react";
import { ClayCard } from "@/components/clay";

export type CodeBlank = {
  id: string;
  answer: string;
  placeholder?: string;
};

export type CodeChallengeProps = {
  title?: string;
  template: string;
  blanks: CodeBlank[];
};

export function CodeChallenge({ title = "Completa el código", template, blanks }: CodeChallengeProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [checked, setChecked] = useState(false);

  const parts = template.split(/(\{\{[^}]+\}\})/g);

  const isCorrect = blanks.every(
    (b) => values[b.id]?.trim().toLowerCase() === b.answer.trim().toLowerCase()
  );

  return (
    <ClayCard className="my-8">
      <h3 className="mb-4 text-lg font-semibold">{title}</h3>
      <pre className="overflow-x-auto rounded-xl bg-[var(--color-neutral-dark)] p-4 text-sm text-white">
        <code>
          {parts.map((part, i) => {
            const match = part.match(/^\{\{([^}]+)\}\}$/);
            if (!match) return <span key={i}>{part}</span>;
            const blank = blanks.find((b) => b.id === match[1]);
            if (!blank) return <span key={i}>{part}</span>;
            const val = values[blank.id] ?? "";
            const correct = val.trim().toLowerCase() === blank.answer.trim().toLowerCase();
            return (
              <input
                key={i}
                type="text"
                className={`mx-1 rounded px-2 py-0.5 text-[var(--color-neutral-dark)] ${
                  checked ? (correct ? "bg-green-200" : "bg-red-200") : "bg-white"
                }`}
                style={{ width: `${Math.max(blank.answer.length + 2, 8)}ch` }}
                placeholder={blank.placeholder ?? "..."}
                value={val}
                disabled={checked && isCorrect}
                onChange={(e) => setValues((v) => ({ ...v, [blank.id]: e.target.value }))}
              />
            );
          })}
        </code>
      </pre>
      <button
        type="button"
        className="clay-button mt-4"
        onClick={() => setChecked(true)}
      >
        Verificar
      </button>
      {checked && (
        <p className={`mt-3 font-medium ${isCorrect ? "text-green-600" : "text-red-500"}`}>
          {isCorrect ? "¡Código correcto!" : "Algunas respuestas no coinciden. Revisa los espacios en rojo."}
        </p>
      )}
    </ClayCard>
  );
}
