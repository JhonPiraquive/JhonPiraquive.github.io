import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "nosql-convergencia-y-sintesis";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: "NoSQL, convergencia y comparación de modelos",
  showInTrackIndex: false,
  seoTitle: "NoSQL, convergencia y comparación | Bases de datos",
  seoDescription:
    "NoSQL web-scale, NewSQL/cloud, comparación de 9 modelos, errores comunes y casos LATAM El Tornillo y RutaAndina.",
};
