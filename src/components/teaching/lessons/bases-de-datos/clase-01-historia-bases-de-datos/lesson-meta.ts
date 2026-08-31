import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, buildPageSlug } from "../class-navigation";

/** Hub de clase retirado: no aparece en el índice; la URL redirige a la 1.ª página. */
export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_01.classSlug,
  title: "Historia de las bases de datos: de los archivos planos a la convergencia",
  order: CLASE_01.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_01.classSlug, "linea-de-tiempo-y-archivos"),
  seoTitle: "Historia de las bases de datos: Codd, SQL y NoSQL",
  seoDescription: "Historia de las bases de datos en 7 etapas: archivos planos, Codd, SQL, NoSQL y cloud. Aprende a elegir modelo con criterio, no por moda.",
  showInTrackIndex: false,
  classTitle: CLASE_01.classTitle,
};
