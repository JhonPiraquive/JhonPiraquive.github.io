import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { getNavForSlug } from "../class-navigation";

const nav = getNavForSlug("index");

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: "index",
  title: "Tecnologías emergentes",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Tecnologías emergentes: presentación, objetivos y resultados",
  seoDescription:
    "Qué son las tecnologías emergentes, cómo evaluarlas y cómo practicarlas con JavaScript moderno, React, Material UI, React Router y APIs.",
  showInTrackIndex: true,
};
