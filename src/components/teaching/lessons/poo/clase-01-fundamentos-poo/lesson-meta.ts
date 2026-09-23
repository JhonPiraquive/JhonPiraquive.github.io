import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getClassFirstPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "poo",
  slug: CLASE_01.classSlug,
  title: "Fundamentos de POO",
  order: CLASE_01.hubOrder,
  prev: null,
  next: getClassFirstPageSlug(CLASE_01),
  seoTitle: "Fundamentos de POO: objetos, encapsulamiento y diagrama simple",
  seoDescription: "Fundamentos de POO: objetos, encapsulamiento y diagrama simple.",
  showInTrackIndex: false,
  classTitle: CLASE_01.classTitle,
};
