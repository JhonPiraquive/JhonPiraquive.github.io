import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica: DDL, DML, JOINs y cierre",
  seoDescription:
    "Práctica guiada, reto Rutas Digitales, cierre y miniquiz: DDL/DML, agregados, UPDATE/DELETE seguros y JOINs.",
};
