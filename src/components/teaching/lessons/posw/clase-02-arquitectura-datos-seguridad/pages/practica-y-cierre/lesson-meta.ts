import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica y cierre Clase 2 | POSW",
  seoDescription: "Práctica guiada, retos integradores, miniquiz y autoevaluación de arquitectura de APIs, datos y seguridad.",
};
