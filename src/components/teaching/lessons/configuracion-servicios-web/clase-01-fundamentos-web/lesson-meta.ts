import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  slug: CLASE_01.classSlug,
  title: "Fundamentos web: navegadores, IP, dominios y DNS",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Fundamentos web: navegadores, IP y DNS | Servicios web",
  seoDescription:
    "Clase 1 del curso CSW: navegadores, IPv4/IPv6, dominios y DNS. Índice de páginas con lectura guiada (~15–20 min por página).",
  classTitle: CLASE_01.classTitle,
};
