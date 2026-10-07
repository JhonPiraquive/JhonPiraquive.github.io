import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "levantamiento-de-requerimientos";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Levantamiento de requerimientos | ADS Clase 2",
  seoDescription:
    "Modelo en cascada, actas de planificación y entrevistas abiertas y cerradas para descubrir requerimientos.",
};
