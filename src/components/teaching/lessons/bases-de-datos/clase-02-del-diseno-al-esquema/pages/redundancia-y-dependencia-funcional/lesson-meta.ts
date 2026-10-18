import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "redundancia-y-dependencia-funcional";
const pageDef = CLASE_02.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: "Redundancia y dependencia funcional",
  seoDescription:
    "Detecta anomalías de inserción, actualización y borrado; define dependencia funcional (A → B) como base para normalizar esquemas SQL.",
};
