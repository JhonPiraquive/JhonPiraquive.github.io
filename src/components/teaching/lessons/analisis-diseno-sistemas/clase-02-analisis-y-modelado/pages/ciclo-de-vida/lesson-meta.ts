import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "ciclo-de-vida";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Ciclo de vida del software | ADS Clase 2",
  seoDescription: "Definición ISO del ciclo de vida y sus fases, de la planificación al mantenimiento.",
};
