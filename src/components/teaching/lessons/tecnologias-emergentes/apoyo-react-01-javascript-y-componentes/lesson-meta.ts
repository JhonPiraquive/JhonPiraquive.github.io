import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { APOYO_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(APOYO_01.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: APOYO_01.classSlug,
  title: "Guía de apoyo React: JavaScript moderno y primer componente",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Guía de apoyo React: JavaScript moderno y primer componente | Tecnologías emergentes",
  seoDescription: "Guía de apoyo React, parte 1: terminal, npm, JavaScript moderno, Vite, JSX, props, listas y diseño responsive.",
  classTitle: APOYO_01.classTitle,
  showInTrackIndex: true,
};
