import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "que-es-un-sistema";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Qué es un sistema de información | ADS Clase 1",
  seoDescription: "Definición de sistema de información, entrada-proceso-salida y elementos que intervienen.",
};
