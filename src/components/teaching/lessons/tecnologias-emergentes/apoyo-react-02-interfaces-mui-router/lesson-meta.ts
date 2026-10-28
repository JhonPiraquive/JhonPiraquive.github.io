import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { APOYO_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(APOYO_02.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: APOYO_02.classSlug,
  title: "Guía de apoyo React: Interfaces con MUI y React Router",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Guía de apoyo React: Interfaces con MUI y React Router | Tecnologías emergentes",
  seoDescription: "Guía de apoyo React, parte 2: estado, efectos, Material UI, UX/UI y navegación con React Router.",
  classTitle: APOYO_02.classTitle,
  showInTrackIndex: true,
};
