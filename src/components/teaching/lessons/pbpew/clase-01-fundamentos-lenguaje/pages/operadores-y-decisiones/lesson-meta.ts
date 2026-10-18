import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "operadores-y-decisiones";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "pbpew",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Operadores y decisiones | PBPEW",
  seoDescription: "Operadores aritméticos, comparación estricta, valores truthy, if/else y switch.",
};
