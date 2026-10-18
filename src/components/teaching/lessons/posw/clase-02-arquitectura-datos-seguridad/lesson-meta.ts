import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "posw",
  slug: CLASE_02.classSlug,
  title: "Clase 2: Arquitectura de APIs, datos y seguridad",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Arquitectura de APIs, datos y seguridad | POSW",
  seoDescription: "La clase sube un nivel: cómo se diseña una API (REST y sus alternativas), qué hay detrás de ella (backend, bases de datos y caché) y cómo se protege (HTTPS, tokens y OAuth).",
  classTitle: CLASE_02.classTitle,
};
