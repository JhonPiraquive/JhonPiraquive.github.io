import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "requerimientos-y-prototipos";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Requerimientos y prototipos | ADS Clase 4",
  seoDescription: "Requisitos funcionales y no funcionales, prototipo de interfaz y metodologías híbridas.",
};
