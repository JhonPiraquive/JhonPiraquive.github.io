import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_05, buildPageSlug } from "../class-navigation";

/** Hub de clase retirado: no aparece en el índice; la URL redirige a la 1.ª página. */
export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_05.classSlug,
  title: "Normalización, desnormalización y copo de nieve: limpiar el diseño",
  order: CLASE_05.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_05.classSlug, "redundancia-y-dependencia-funcional"),
  seoTitle: "Normalización SQL: 1FN, 2FN, 3FN y DF",
  seoDescription: "Aplica normalización con DF, 1FN–3FN y BCNF; argumenta desnormalización consciente; distingue estrella vs copo de nieve en BI con ejemplos LATAM.",
  showInTrackIndex: false,
  classTitle: CLASE_05.classTitle,
};
