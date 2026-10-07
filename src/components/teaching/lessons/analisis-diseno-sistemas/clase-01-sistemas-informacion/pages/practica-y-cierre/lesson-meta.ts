import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Cierre clase 1 | ADS",
  seoDescription: "Cierre y miniquiz de sistemas de información.",
};
