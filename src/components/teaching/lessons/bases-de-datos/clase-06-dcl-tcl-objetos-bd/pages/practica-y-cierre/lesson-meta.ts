import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_06, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_06.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_06, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica: DCL, TCL, vistas y cierre",
  seoDescription:
    "Práctica guiada, reto matrícula segura, cierre y miniquiz: DCL/TCL, ACID, vistas, UDF, procedimientos y triggers.",
};
