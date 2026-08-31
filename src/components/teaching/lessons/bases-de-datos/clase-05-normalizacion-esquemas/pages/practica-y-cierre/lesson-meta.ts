import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_05, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_05.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_05, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica: normalización, BI y cierre",
  seoDescription:
    "Práctica guiada, reto Rutas Digitales de sábana a esquema limpio, cierre y miniquiz: DF, 1FN–3FN, desnormalización y estrella/copo.",
};
