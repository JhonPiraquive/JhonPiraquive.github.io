import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "pbpew",
  slug: CLASE_01.classSlug,
  title: "Clase 1: Fundamentos del lenguaje JavaScript",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Fundamentos del lenguaje JavaScript | PBPEW",
  seoDescription: "La clase parte de cero: qué es JavaScript, cómo se conecta a una página HTML y con qué piezas básicas se escribe un programa (variables, tipos, operadores, decisiones, bucles y funciones). Cada concepto se prueba en la consola del navegador.",
  classTitle: CLASE_01.classTitle,
};
