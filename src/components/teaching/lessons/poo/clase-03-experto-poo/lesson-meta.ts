import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getClassFirstPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "poo",
  slug: CLASE_03.classSlug,
  title: "Experto — abstracción, SOLID y diseño",
  order: CLASE_03.hubOrder,
  prev: null,
  next: getClassFirstPageSlug(CLASE_03),
  seoTitle: "Abstracción, polimorfismo, SOLID y modularidad",
  seoDescription: "Abstracción, polimorfismo, SOLID y modularidad.",
  showInTrackIndex: false,
  classTitle: CLASE_03.classTitle,
};
