import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_04.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  slug: CLASE_04.classSlug,
  title: "Virtualización, contenedores y diagnóstico integrador",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  classTitle: CLASE_04.classTitle,
  seoTitle: "Docker, VMs y diagnóstico web por capas | CSW",
  seoDescription: "Contenedores, virtualización y troubleshooting integrador. Índice paginado de la Clase 4.",
};
