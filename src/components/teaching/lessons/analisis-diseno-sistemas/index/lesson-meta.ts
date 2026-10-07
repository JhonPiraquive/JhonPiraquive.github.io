import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { getNavForSlug } from "../class-navigation";

const nav = getNavForSlug("index");

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  slug: "index",
  title: "Análisis y diseño de sistemas de información",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Análisis y diseño de sistemas de información: objetivos y resultados",
  seoDescription:
    "Módulo universitario desde cero: sistemas de información, UML, requerimientos, casos de uso y Scrum.",
  showInTrackIndex: true,
};
