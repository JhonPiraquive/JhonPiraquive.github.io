import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: CLASE_03.classSlug,
  title: "Decidir si adoptar una tecnología y cómo hacerlo",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Decidir si adoptar una tecnología y cómo hacerlo | Tecnologías emergentes",
  seoDescription: "Clase 3: criterios y matriz de decisión, prueba de concepto, piloto, ADR, riesgos, casos de decisión y cómo aprender tecnologías nuevas.",
  classTitle: CLASE_03.classTitle,
  showInTrackIndex: true,
};
