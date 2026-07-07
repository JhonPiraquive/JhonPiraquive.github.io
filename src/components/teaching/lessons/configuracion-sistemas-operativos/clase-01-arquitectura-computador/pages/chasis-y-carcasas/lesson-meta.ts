import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "chasis-y-carcasas";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Chasis, carcasas y refrigeración | CSO Clase 1",
  seoDescription:
    "Arquitectura del computador, tipos de gabinete (tower, SFF, rackmount) y sistemas de enfriamiento pasivo, aire y líquido.",
};
