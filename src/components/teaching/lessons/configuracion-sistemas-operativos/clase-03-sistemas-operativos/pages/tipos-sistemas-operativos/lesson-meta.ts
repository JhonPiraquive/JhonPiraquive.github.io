import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "tipos-sistemas-operativos";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Tipos de sistemas operativos | CSO Clase 3",
  seoDescription: "SO, clasificación y tabla comparativa Windows, Linux, macOS, Android e iOS.",
};
