import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "variables-y-funciones";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Variables, tipos y funciones flecha | Tecnologías emergentes",
  seoDescription: pageDef.description,
};
