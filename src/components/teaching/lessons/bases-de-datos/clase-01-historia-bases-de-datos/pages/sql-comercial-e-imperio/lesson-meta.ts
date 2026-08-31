import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "sql-comercial-e-imperio";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "SQL comercial e imperio relacional | Bases de datos",
  seoDescription:
    "System R, INGRES, Oracle y el imperio SQL: ER de Chen, motores y comparación con el modelo navegacional.",
};
