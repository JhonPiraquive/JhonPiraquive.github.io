import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, buildPageSlug } from "../class-navigation";

/** Hub de clase retirado: no aparece en el índice; la URL redirige a la 1.ª página. */
export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_01.classSlug,
  title: "Fundamentos y modelado de datos",
  order: CLASE_01.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_01.classSlug, "historia-como-motivacion"),
  seoTitle: "Fundamentos y modelado de datos",
  seoDescription: "Historia breve, BD y SGBD, motores, estructura de tablas, familias de bases de datos y modelos conceptual, lógico y físico con diagramas ER.",
  showInTrackIndex: false,
  classTitle: CLASE_01.classTitle,
};
