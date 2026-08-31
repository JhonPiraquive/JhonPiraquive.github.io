import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, buildPageSlug } from "../class-navigation";

/** Hub de clase retirado: no aparece en el índice; la URL redirige a la 1.ª página. */
export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_03.classSlug,
  title: "Modelos de datos y diagramas ER",
  order: CLASE_03.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_03.classSlug, "modelos-conceptual-logico-fisico"),
  seoTitle: "Modelo de datos y ER: diseño conceptual a físico",
  seoDescription:
    "Diseña modelos conceptual, lógico y físico; diagramas ER con cardinalidad; ubica familias como contexto; transforma ER→SQL con tipos, PK y FK.",
  showInTrackIndex: false,
  classTitle: CLASE_03.classTitle,
};
