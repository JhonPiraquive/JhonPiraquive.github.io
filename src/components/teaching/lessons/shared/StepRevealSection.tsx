"use client";

import { StepReveal } from "@/components/teaching/StepReveal";
import { INCIDENT_STEPS } from "@/lib/teaching-quizzes/sea";

export function StepRevealSection() {
  return <StepReveal title="Caso paso a paso" steps={INCIDENT_STEPS} />;
}
