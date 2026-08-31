import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_06, getPageMetaBase } from "../../../class-navigation";

const PAGE = "vistas";
const pageDef = CLASE_06.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_06, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Vistas SQL: CREATE VIEW y proyección",
  seoDescription:
    "Crea y consulta vistas para simplificar SELECT y ocultar columnas sensibles; limita expectativas frente a tablas base.",
};
