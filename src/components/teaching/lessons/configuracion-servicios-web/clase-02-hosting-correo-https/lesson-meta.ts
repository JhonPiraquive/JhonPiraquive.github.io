import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  slug: CLASE_02.classSlug,
  title: "Clase 2: Hosting, correo corporativo y HTTPS",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  classTitle: CLASE_02.classTitle,
  seoTitle: "Hosting, correo MX y HTTPS/TLS | CSW",
  seoDescription: "Tipos de hosting, HTTP/HTTPS con TLS y correo corporativo. Índice paginado de la Clase 2.",
};
