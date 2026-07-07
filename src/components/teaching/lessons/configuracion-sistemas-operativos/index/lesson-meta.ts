import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { getNavForSlug } from "../class-navigation";

const nav = getNavForSlug("index");

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  slug: "index",
  title: "Configuración de Sistemas Operativos",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Configuración de Sistemas Operativos | Curso",
  seoDescription: "Curso de 3 clases: arquitectura de hardware, almacenamiento, sistemas operativos, consola y respaldo.",
};
