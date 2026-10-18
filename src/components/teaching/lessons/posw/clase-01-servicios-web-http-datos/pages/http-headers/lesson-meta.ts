import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "http-headers";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "HTTP headers | POSW",
  seoDescription: "Cabeceras de petición y respuesta, CORS y cabeceras de seguridad.",
};
