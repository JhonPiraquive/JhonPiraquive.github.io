import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, buildPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_02.classSlug,
  title: "Diseño de datos y diagramas ER",
  order: CLASE_02.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_02.classSlug, "modelos-conceptual-logico-fisico"),
  seoTitle: "Diseño ER: conceptual, lógico, físico y llaves",
  seoDescription: "Modelos C/L/F, diagramas ER, PK/FK y transformación ER→SQL lista para implementar.",
  showInTrackIndex: false,
  classTitle: CLASE_02.classTitle,
};
