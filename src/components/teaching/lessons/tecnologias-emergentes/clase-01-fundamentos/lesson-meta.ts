import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: CLASE_01.classSlug,
  title: "Del cero al primer componente",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Del cero al primer componente | Tecnologías emergentes",
  seoDescription: "Clase 1: entorno, librerías, JavaScript moderno y tu primer componente con Vite y React.",
  classTitle: CLASE_01.classTitle,
  showInTrackIndex: true,
};
