import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "analisis-diseno-sistemas",
  slug: CLASE_03.classSlug,
  title: "Diseño, casos de uso y Scrum",
  order: 4,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Diseño, casos de uso y Scrum | Análisis y diseño de sistemas",
  seoDescription: "Clase 3: caso Logística SAS, casos de uso, prototipos e historias de usuario en Scrum.",
  classTitle: CLASE_03.classTitle,
  showInTrackIndex: true,
};
