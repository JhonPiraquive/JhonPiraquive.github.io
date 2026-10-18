import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "programacion-segura-excepciones-logs-y-config-json";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Programación segura: excepciones, logs y configuración | SEA",
  seoDescription: "Manejo de errores por capas, registros útiles y configuración sin secretos embebidos.",
};
