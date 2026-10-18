import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "pbpew",
  slug: CLASE_02.classSlug,
  title: "Clase 2: Datos, objetos y la página viva",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Datos, objetos y la página viva | PBPEW",
  seoDescription: "La clase modela información con arrays, objetos, JSON, clases y estructuras de datos, y la conecta con la página: seleccionar nodos del DOM, modificarlos y responder a eventos. Cierra con un juego completo que integra todo.",
  classTitle: CLASE_02.classTitle,
};
