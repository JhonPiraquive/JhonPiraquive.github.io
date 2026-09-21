import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "desnormalizacion-y-bi";
const pageDef = CLASE_04.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: "Desnormalización consciente y esquemas BI",
  seoDescription: "Cuándo desnormalizar; estrella vs copo de nieve como juicio de diseño.",
};
