import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "tecnologias-emergentes-y-javascript";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Qué son las tecnologías emergentes | Tecnologías emergentes",
  seoDescription: pageDef.description,
};
