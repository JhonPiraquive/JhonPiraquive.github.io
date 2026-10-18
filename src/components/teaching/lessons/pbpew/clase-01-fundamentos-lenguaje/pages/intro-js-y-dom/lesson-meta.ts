import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "intro-js-y-dom";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "pbpew",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Introducción a JavaScript y al DOM | PBPEW",
  seoDescription: "Qué es JavaScript, su historia y ámbitos de uso, y el DOM como puente entre HTML y la lógica.",
};
