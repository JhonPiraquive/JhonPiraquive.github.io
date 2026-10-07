import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  slug: CLASE_01.classSlug,
  title: "Sistemas de información",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Sistemas de información | Análisis y diseño de sistemas",
  seoDescription: "Clase 1: qué es un sistema de información, tipos, roles y criterios de calidad.",
  classTitle: CLASE_01.classTitle,
  showInTrackIndex: true,
};
