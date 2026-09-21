import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, buildPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "poo",
  slug: CLASE_02.classSlug,
  title: "Relaciones y reutilización",
  order: CLASE_02.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_02.classSlug, "herencia"),
  seoTitle: "Herencia, override, asociaciones y diagramas UML",
  seoDescription: "Herencia, override, asociaciones y diagramas UML.",
  showInTrackIndex: false,
  classTitle: CLASE_02.classTitle,
};
