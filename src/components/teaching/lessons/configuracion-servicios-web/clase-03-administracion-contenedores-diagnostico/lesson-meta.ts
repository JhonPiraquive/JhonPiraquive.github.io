import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  slug: CLASE_03.classSlug,
  title: "Clase 3: Administración remota, contenedores y diagnóstico",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  classTitle: CLASE_03.classTitle,
  seoTitle: "SSH, Docker y diagnóstico web por capas | CSW",
  seoDescription: "Administración remota con SSH, contenedores, virtualización y diagnóstico integrador. Índice paginado de la clase 3.",
};
