import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "computacion-en-nube";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: `${pageDef.title} | CSW`,
  seoDescription: pageDef.description,
};
