import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica y cierre Clase 3 | POSW",
  seoDescription: "Práctica guiada, retos integradores, miniquiz y autoevaluación de frontend, calidad de código y herramientas.",
};
