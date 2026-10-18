import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "variables-y-tipos";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "pbpew",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Variables, hoisting y tipos de datos | PBPEW",
  seoDescription: "var, let y const, hoisting, zona muerta temporal y tipos primitivos.",
};
