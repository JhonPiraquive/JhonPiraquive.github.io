import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "dml-filtros-orden";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "WHERE, DISTINCT, ORDER BY y LIMIT",
  seoDescription:
    "Filtra con WHERE, elimina duplicados con DISTINCT, ordena con ORDER BY y acota con LIMIT para consultas top-N confiables.",
};
