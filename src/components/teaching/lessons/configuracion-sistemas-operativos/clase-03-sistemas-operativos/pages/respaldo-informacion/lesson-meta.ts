import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "respaldo-informacion";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Respaldo de información | CSO",
  seoDescription: "Niveles 1–4: espejo, NAS, nube y geo-redundancia.",
};
