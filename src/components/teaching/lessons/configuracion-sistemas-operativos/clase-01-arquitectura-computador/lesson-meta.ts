import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  slug: CLASE_01.classSlug,
  title: "Arquitectura del computador",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Arquitectura del computador | CSO",
  seoDescription: "Clase 1: chasis, CPU, caché, RAM y ROM.",
  classTitle: CLASE_01.classTitle,
};
