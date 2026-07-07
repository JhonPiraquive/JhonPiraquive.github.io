import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "flujo-integrado";
const pageDef = CLASE_04.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: `${pageDef.title} | CSW`,
  seoDescription: pageDef.description,
};
