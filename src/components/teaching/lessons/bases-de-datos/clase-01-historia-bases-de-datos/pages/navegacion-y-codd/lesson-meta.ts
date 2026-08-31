import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "navegacion-y-codd";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Navegación por punteros y Codd 1970 | Bases de datos",
  seoDescription:
    "IMS/CODASYL frente al modelo relacional de Codd: independencia de datos y joins declarativos.",
};
