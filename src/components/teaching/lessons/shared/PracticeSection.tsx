"use client";

import { PracticeExercise } from "@/components/teaching/PracticeExercise";
import { DEFAULT_PRACTICE, SEA_PRACTICE } from "@/lib/teaching-quizzes/sea";

const PRACTICE_MAP: Record<string, Record<string, typeof SEA_PRACTICE[string]>> = {
  sea: SEA_PRACTICE,
};

export function PracticeSection({ slug, track = "sea" }: { slug: string; track?: string }) {
  const data = PRACTICE_MAP[track]?.[slug] ?? DEFAULT_PRACTICE;
  return (
    <PracticeExercise
      prompt={data.prompt}
      hints={data.hints}
      expectedKeywords={data.expectedKeywords}
    />
  );
}
