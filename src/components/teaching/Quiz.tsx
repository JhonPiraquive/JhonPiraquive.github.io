"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ClayCard } from "@/components/clay";

export type QuizQuestion = {
  question: string;
  options: string[];
  correctIndex: number;
  feedback?: string;
};

export function Quiz({ questions = [] }: { questions?: QuizQuestion[] }) {
  if (questions.length === 0) return null;
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const [allSubmitted, setAllSubmitted] = useState(false);

  const score = questions.reduce(
    (acc, q, i) => acc + (answers[i] === q.correctIndex ? 1 : 0),
    0
  );

  const checkQuestion = (qi: number) => {
    setChecked((c) => ({ ...c, [qi]: true }));
    if (Object.keys({ ...checked, [qi]: true }).length === questions.length) {
      setAllSubmitted(true);
    }
  };

  return (
    <ClayCard className="my-8">
      <h3 className="mb-4 text-lg font-semibold">Mini-quiz</h3>
      {questions.map((q, qi) => {
        const isChecked = checked[qi] ?? false;
        const isCorrect = answers[qi] === q.correctIndex;

        return (
          <div key={qi} className="mb-6 border-b border-[var(--color-neutral-mid)]/20 pb-6 last:border-0">
            <p className="mb-2 font-medium">{qi + 1}. {q.question}</p>
            <ul className="space-y-2">
              {q.options.map((opt, oi) => {
                const isSelected = answers[qi] === oi;
                const isAnswer = oi === q.correctIndex;
                let rowClass =
                  "border-[var(--color-neutral-mid)]/30 hover:border-[var(--color-secondary)]/40 hover:bg-[var(--color-neutral-light)]/60";
                if (isChecked) {
                  if (isAnswer) {
                    rowClass = "border-green-500/60 bg-green-50";
                  } else if (isSelected) {
                    rowClass = "border-red-400/60 bg-red-50";
                  } else {
                    rowClass = "border-[var(--color-neutral-mid)]/20 opacity-70";
                  }
                } else if (isSelected) {
                  rowClass = "border-[var(--color-secondary)]/50 bg-[var(--color-secondary)]/5";
                }

                return (
                  <li key={oi}>
                    <label
                      className={`flex w-full cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition-colors sm:px-5 sm:py-3.5 ${rowClass}`}
                    >
                      <input
                        type="radio"
                        name={`q-${qi}`}
                        className="mt-1 shrink-0"
                        checked={isSelected}
                        disabled={isChecked}
                        onChange={() => setAnswers((a) => ({ ...a, [qi]: oi }))}
                      />
                      <span
                        className={
                          isChecked
                            ? isAnswer
                              ? "font-semibold text-green-700"
                              : isSelected
                                ? "text-red-600"
                                : "text-[var(--color-neutral-dark)]/80"
                            : "text-[var(--color-neutral-dark)]"
                        }
                      >
                        {opt}
                      </span>
                    </label>
                  </li>
                );
              })}
            </ul>
            {!isChecked && answers[qi] !== undefined && (
              <button
                type="button"
                className="clay-button mt-3 text-sm"
                onClick={() => checkQuestion(qi)}
              >
                Verificar respuesta
              </button>
            )}
            {isChecked && q.feedback && (
              <motion.p
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-3 text-sm ${isCorrect ? "text-green-700" : "text-amber-700"}`}
              >
                {q.feedback}
              </motion.p>
            )}
          </div>
        );
      })}
      {allSubmitted && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="font-semibold text-[var(--color-primary)]"
        >
          Resultado final: {score} / {questions.length}
        </motion.p>
      )}
    </ClayCard>
  );
}
