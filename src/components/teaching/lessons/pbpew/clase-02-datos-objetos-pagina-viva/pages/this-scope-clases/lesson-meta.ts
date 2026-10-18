import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "this-scope-clases";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "pbpew",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Ámbito, this y clases | PBPEW",
  seoDescription: "Scope, el valor de this, clases ES6 y herencia.",
};
