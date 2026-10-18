import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "sea",
  slug: CLASE_02.classSlug,
  title: "Clase 2: Criptografía y comunicación segura",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Criptografía y comunicación segura | SEA",
  seoDescription: "La clase explica cómo se protege la información en reposo y en tránsito: qué es codificar, cifrar y calcular un hash, qué aporta HTTPS y dónde se rompe una aplicación aunque el canal sea seguro, como en la inyección SQL.",
  classTitle: CLASE_02.classTitle,
};
