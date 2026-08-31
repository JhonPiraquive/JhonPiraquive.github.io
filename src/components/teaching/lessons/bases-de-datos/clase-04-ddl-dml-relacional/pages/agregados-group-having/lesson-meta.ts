import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "agregados-group-having";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Agregados SQL: GROUP BY y HAVING",
  seoDescription:
    "AVG, SUM, COUNT, MAX y MIN; agrupa con GROUP BY y filtra grupos con HAVING frente a WHERE sobre filas.",
};
