import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "rest-principios";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Principios REST | POSW",
  seoDescription: "Las restricciones de REST y cómo se aplican en una API.",
};
