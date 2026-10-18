import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "cache";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Caché en aplicaciones web | POSW",
  seoDescription: "Tipos de caché, cabeceras y cuándo usarla.",
};
