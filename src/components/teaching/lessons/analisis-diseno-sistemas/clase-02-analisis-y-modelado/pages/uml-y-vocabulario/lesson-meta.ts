import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "uml-y-vocabulario";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "UML y vocabulario | ADS Clase 2",
  seoDescription: "Qué es UML y los conceptos de clase, objeto, actor, requerimiento y caso de uso.",
};
