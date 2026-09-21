import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, buildPageSlug } from "../class-navigation";

/** Hub de clase retirado: no aparece en el índice; la URL redirige a la 1.ª página. */
export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_01.classSlug,
  title: "Fundamentos de bases de datos",
  order: CLASE_01.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_01.classSlug, "historia-como-motivacion"),
  seoTitle: "Fundamentos de BD: historia, motores y estructura",
  seoDescription: "Historia condensada, BD vs SGBD, motores/GUI/CLI y abecedario tabla-campo-registro.",
  showInTrackIndex: false,
  classTitle: CLASE_01.classTitle,
};
