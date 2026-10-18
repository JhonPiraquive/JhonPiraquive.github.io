import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  slug: CLASE_02.classSlug,
  title: "Clase 2: HTTPS, correo y servicios en la nube",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  classTitle: CLASE_02.classTitle,
  seoTitle: "HTTPS, correo y servicios en la nube | CSW",
  seoDescription: "HTTPS con TLS, correo corporativo, computación en la nube y transferencia de archivos. Índice paginado de la clase 2.",
};
