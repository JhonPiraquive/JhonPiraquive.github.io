import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: CLASE_01.classSlug,
  title: "Identificar una tecnología emergente",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Identificar una tecnología emergente | Tecnologías emergentes",
  seoDescription: "Clase 1: qué es una tecnología emergente, cómo evoluciona, cómo identificarla, panorama actual y tecnologías del futuro.",
  classTitle: CLASE_01.classTitle,
  showInTrackIndex: true,
};
