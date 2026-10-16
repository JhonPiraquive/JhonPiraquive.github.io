import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: CLASE_03.classSlug,
  title: "Datos reales, CRUD y calidad",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Datos reales, CRUD y calidad | Tecnologías emergentes",
  seoDescription: "Clase 3: HTTP, async/await, fetch, CRUD, validación, rendimiento y hacia dónde sigue el ecosistema.",
  classTitle: CLASE_03.classTitle,
  showInTrackIndex: true,
};
