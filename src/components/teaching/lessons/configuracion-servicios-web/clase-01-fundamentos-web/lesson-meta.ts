import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  slug: CLASE_01.classSlug,
  title: "Clase 1: Fundamentos web, DNS y publicación",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Fundamentos web, DNS y publicación | Servicios web",
  seoDescription:
    "Clase 1 del curso CSW: navegadores, IPv4 e IPv6, dominios, DNS y publicación de un sitio. Índice de páginas con lectura guiada.",
  classTitle: CLASE_01.classTitle,
};
