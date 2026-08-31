import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, buildPageSlug } from "../class-navigation";

/** Hub de clase retirado: no aparece en el índice; la URL redirige a la 1.ª página. */
export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_04.classSlug,
  title: "DDL, DML, agregados y modelo relacional: de la estructura a la consulta",
  order: CLASE_04.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_04.classSlug, "ddl-estructura"),
  seoTitle: "DDL y DML SQL: agregados, FK y JOINs",
  seoDescription: "Aplica DDL y DML en SQL: CREATE/ALTER, PK/UNIQUE, INSERT/SELECT, WHERE, agregados, UPDATE/DELETE seguros, FK y JOINs INNER/LEFT/RIGHT con ejemplos LATAM.",
  showInTrackIndex: false,
  classTitle: CLASE_04.classTitle,
};
