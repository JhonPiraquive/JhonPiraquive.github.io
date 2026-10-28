import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { APOYO_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(APOYO_03.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: APOYO_03.classSlug,
  title: "Guía de apoyo React: Datos reales, CRUD y calidad",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Guía de apoyo React: Datos reales, CRUD y calidad | Tecnologías emergentes",
  seoDescription: "Guía de apoyo React, parte 3: HTTP, async/await, fetch, CRUD, validación, rendimiento y despliegue.",
  classTitle: APOYO_03.classTitle,
  showInTrackIndex: true,
};
