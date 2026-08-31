import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_03.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica: modelo ER, tipos y cierre",
  seoDescription:
    "Práctica guiada, reto Rutas Digitales ER→SQL, cierre y miniquiz: niveles de modelo, cardinalidad, familias y llaves.",
};
