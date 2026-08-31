import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_05, getPageMetaBase } from "../../../class-navigation";

const PAGE = "formas-normales-1-2-3";
const pageDef = CLASE_05.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_05, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Formas normales 1FN, 2FN y 3FN",
  seoDescription:
    "Ejecuta el procedimiento 1FN → 2FN → 3FN con checklist, SQL de Rutas Digitales y mención de BCNF (Boyce–Codd).",
};
