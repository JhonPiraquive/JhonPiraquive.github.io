import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "sea",
  slug: CLASE_01.classSlug,
  title: "Clase 1: Fundamentos de seguridad y amenazas humanas",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Fundamentos de seguridad y amenazas humanas | SEA",
  seoDescription: "La clase parte de por qué la seguridad existe: cómo las redes abiertas multiplicaron las amenazas, quién ataca y por qué canales, qué se protege (CIA y autenticidad) y cómo la manipulación de personas se convierte en el vector más frecuente.",
  classTitle: CLASE_01.classTitle,
};
