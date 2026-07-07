import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  slug: CLASE_02.classSlug,
  title: "Clase 2: Dispositivos de almacenamiento y periféricos",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  classTitle: CLASE_02.classTitle,
  seoTitle: "Discos, periféricos y licencias | CSO",
  seoDescription:
    "HDD, SSD, SAS, periféricos, monitor, hoja de vida del PC y tipos de licencia de software. Índice paginado de la Clase 2.",
};
