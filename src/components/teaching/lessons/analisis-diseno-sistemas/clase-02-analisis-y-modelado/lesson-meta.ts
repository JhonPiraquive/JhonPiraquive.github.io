import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  slug: CLASE_02.classSlug,
  title: "Análisis y modelado",
  order: 3,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Análisis y modelado | Análisis y diseño de sistemas",
  seoDescription: "Clase 2: UML, ciclo de vida, orientación a objetos y levantamiento de requerimientos.",
  classTitle: CLASE_02.classTitle,
  showInTrackIndex: true,
};
