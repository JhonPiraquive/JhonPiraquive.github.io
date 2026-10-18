import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "pbpew",
  slug: CLASE_03.classSlug,
  title: "Clase 3: Asincronía, datos remotos y proyectos",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Asincronía, datos remotos y proyectos | PBPEW",
  seoDescription: "La clase incorpora el tiempo y la red: temporizadores, promesas, async/await y fetch para consumir una API. Después aplica todo en tres proyectos: calculadora, lista de tareas y ajedrez.",
  classTitle: CLASE_03.classTitle,
};
