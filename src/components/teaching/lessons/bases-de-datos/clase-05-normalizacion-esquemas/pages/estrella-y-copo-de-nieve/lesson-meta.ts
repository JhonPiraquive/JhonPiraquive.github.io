import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_05, getPageMetaBase } from "../../../class-navigation";

const PAGE = "estrella-y-copo-de-nieve";
const pageDef = CLASE_05.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_05, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Esquema en estrella y copo de nieve",
  seoDescription:
    "Distingue esquema en estrella (dims planas) vs copo de nieve (dims normalizadas) en BI; no confundas con el OLTP 3FN.",
};
