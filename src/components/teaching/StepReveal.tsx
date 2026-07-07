"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ClayCard } from "@/components/clay";

export type StepRevealStep = {
  title: string;
  content: string;
};

export type StepRevealProps = {
  steps: StepRevealStep[];
  title?: string;
};

export function StepReveal({ steps = [], title = "Caso paso a paso" }: StepRevealProps) {
  if (steps.length === 0) return null;
  const [current, setCurrent] = useState(0);

  return (
    <ClayCard className="my-8">
      <h3 className="mb-4 text-lg font-semibold text-[var(--color-primary)]">{title}</h3>
      <div className="mb-4 flex gap-2">
        {steps.map((_, i) => (
          <div
            key={i}
            className={`h-2 flex-1 rounded-full transition-colors ${
              i <= current ? "bg-[var(--color-secondary)]" : "bg-[var(--color-neutral-mid)]/30"
            }`}
          />
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.25 }}
        >
          <h4 className="mb-2 font-semibold">
            Paso {current + 1}: {steps[current].title}
          </h4>
          <p className="text-[var(--color-neutral-mid)]">{steps[current].content}</p>
        </motion.div>
      </AnimatePresence>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          className="clay-button clay-button--secondary"
          disabled={current === 0}
          onClick={() => setCurrent((c) => c - 1)}
        >
          Anterior
        </button>
        {current < steps.length - 1 ? (
          <button type="button" className="clay-button" onClick={() => setCurrent((c) => c + 1)}>
            Siguiente
          </button>
        ) : (
          <span className="self-center text-sm font-medium text-green-600">Caso completado</span>
        )}
      </div>
    </ClayCard>
  );
}
