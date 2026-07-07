import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  slug: CLASE_03.classSlug,
  title: "Sistemas operativos, consola y respaldo",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Sistemas operativos, consola y respaldo | CSO",
  seoDescription:
    "Clase 3: tipos de SO, instalación, consola Linux/Windows, usuarios, permisos rwx y niveles de respaldo 1–4.",
  classTitle: CLASE_03.classTitle,
};
