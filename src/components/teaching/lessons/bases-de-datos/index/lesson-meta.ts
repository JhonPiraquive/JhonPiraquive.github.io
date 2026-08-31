import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { getNavForSlug } from "../class-navigation";

const nav = getNavForSlug("index");

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: "index",
  title: "Bases de Datos",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Bases de Datos: objetivos y resultados de aprendizaje",
  seoDescription:
    "Objetivos de Aprendizaje y Resultados de aprendizaje oficiales del módulo Bases de Datos.",
  showInTrackIndex: true,
};
