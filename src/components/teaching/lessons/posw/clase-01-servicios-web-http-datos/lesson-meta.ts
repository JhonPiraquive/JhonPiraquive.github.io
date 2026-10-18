import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_01.classSlug);

export const meta: LessonMeta = {
  track: "posw",
  slug: CLASE_01.classSlug,
  title: "Clase 1: Servicios web, HTTP y formatos de datos",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Servicios web, HTTP y formatos de datos | POSW",
  seoDescription: "La clase explica cómo se comunican las aplicaciones web: el modelo cliente-servidor, qué es un servicio web y una API, cómo HTTP expresa la intención mediante métodos, códigos de estado y cabeceras, y cómo viajan los datos en XML y JSON.",
  classTitle: CLASE_01.classTitle,
};
