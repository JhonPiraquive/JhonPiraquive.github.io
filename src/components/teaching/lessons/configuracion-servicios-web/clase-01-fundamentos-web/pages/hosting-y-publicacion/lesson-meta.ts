import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "hosting-y-publicacion";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: `${pageDef.title} | CSW`,
  seoDescription: pageDef.description,
};
