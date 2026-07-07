import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "navegadores-web";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Navegadores web y DevTools | CSW Clase 1",
  seoDescription: "Motores Blink, Gecko y WebKit; cookies, caché, privacidad y DevTools para diagnosticar la capa de usuario.",
};
