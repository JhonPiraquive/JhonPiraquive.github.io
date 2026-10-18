import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "sea",
  slug: CLASE_03.classSlug,
  title: "Clase 3: Defensa en aplicaciones y gestión del riesgo",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Defensa en aplicaciones y gestión del riesgo | SEA",
  seoDescription: "La clase cierra el recorrido con las decisiones de diseño y gestión: cómo se protege una sesión, cómo se programa para fallar sin exponer datos, qué piden las normas ISO/IEC 27001 y 27002 y cómo se priorizan los controles con una matriz de riesgos.",
  classTitle: CLASE_03.classTitle,
};
