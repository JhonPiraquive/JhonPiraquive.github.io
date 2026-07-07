"use client";

import { Quiz } from "@/components/teaching/Quiz";
import { CONFIGURACION_SERVICIOS_WEB_QUIZZES } from "@/lib/teaching-quizzes/configuracion-servicios-web";
import { PBPEW_QUIZZES } from "@/lib/teaching-quizzes/pbpew";
import { POO_QUIZZES } from "@/lib/teaching-quizzes/poo";
import { POSW_QUIZZES } from "@/lib/teaching-quizzes/posw";
import { SEA_QUIZZES } from "@/lib/teaching-quizzes/sea";

const QUIZ_MAP: Record<string, Record<string, typeof SEA_QUIZZES[string]>> = {
  sea: SEA_QUIZZES,
  pbpew: PBPEW_QUIZZES,
  poo: POO_QUIZZES,
  posw: POSW_QUIZZES,
  "configuracion-servicios-web": CONFIGURACION_SERVICIOS_WEB_QUIZZES,
};

export function QuizSection({ slug, track = "sea" }: { slug: string; track?: string }) {
  const questions = QUIZ_MAP[track]?.[slug];
  if (!questions?.length) return null;
  return <Quiz questions={questions} />;
}
