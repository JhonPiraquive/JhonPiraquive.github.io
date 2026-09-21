import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, buildPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "poo",
  slug: CLASE_03.classSlug,
  title: "Experto — abstracción, SOLID y diseño",
  order: CLASE_03.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_03.classSlug, "abstraccion-clases-abstractas-interfaces"),
  seoTitle: "Abstracción, polimorfismo, SOLID y modularidad",
  seoDescription: "Abstracción, polimorfismo, SOLID y modularidad.",
  showInTrackIndex: false,
  classTitle: CLASE_03.classTitle,
};
