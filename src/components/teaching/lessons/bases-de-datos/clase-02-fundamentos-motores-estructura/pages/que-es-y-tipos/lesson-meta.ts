import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "que-es-y-tipos";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: "Qué es una BD: SGBD, SQL y NoSQL",
  seoDescription:
    "Qué es una base de datos y un SGBD; modelos relacional y NoSQL; cuándo elegir tablas SQL o documentos con escenarios LATAM.",
};
