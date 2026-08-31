import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_06, buildPageSlug } from "../class-navigation";

/** Hub de clase retirado: no aparece en el índice; la URL redirige a la 1.ª página. */
export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_06.classSlug,
  title: "DCL, TCL, vistas, funciones, procedimientos y triggers: más allá de SELECT",
  order: CLASE_06.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_06.classSlug, "mapa-sql-familias"),
  seoTitle: "DCL y TCL SQL: GRANT, ACID, vistas y triggers",
  seoDescription: "Completa el mapa SQL con DCL (GRANT/REVOKE), TCL y ACID, vistas, UDF, procedimientos y triggers; decide app vs BD con ejemplos MySQL/MariaDB LATAM.",
  showInTrackIndex: false,
  classTitle: CLASE_06.classTitle,
};
