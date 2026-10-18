import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "posw",
  slug: CLASE_03.classSlug,
  title: "Clase 3: Frontend, calidad de código y herramientas",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Frontend, calidad de código y herramientas | POSW",
  seoDescription: "La clase construye del lado del cliente y cierra con calidad: frameworks de frontend con TypeScript, React y Angular, el entorno de desarrollo, los principios SOLID, las convenciones de nombres y el uso de la IA con verificación.",
  classTitle: CLASE_03.classTitle,
};
