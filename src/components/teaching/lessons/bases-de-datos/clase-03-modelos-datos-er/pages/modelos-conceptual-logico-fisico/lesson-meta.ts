import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "modelos-conceptual-logico-fisico";
const pageDef = CLASE_03.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: "Modelo conceptual, lógico y físico",
  seoDescription:
    "Qué es un modelo de datos y cómo bajar de requisitos a DDL: niveles conceptual, lógico y físico con ejemplos de academia LATAM.",
};
