import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "mapa-sql-familias";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: "Familias SQL: DDL, DML, DCL y TCL",
  seoDescription:
    "Ubica DDL, DML, DCL y TCL con acrónimos expandidos: qué toca cada familia y ejemplos de sentencias en laboratorio.",
};
