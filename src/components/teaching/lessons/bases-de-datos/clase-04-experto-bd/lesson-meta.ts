import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, buildPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_04.classSlug,
  title: "Experto — normalización, permisos y objetos",
  order: CLASE_04.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_04.classSlug, "redundancia-y-dependencia-funcional"),
  seoTitle: "Experto BD: normalización, DCL, TCL y objetos",
  seoDescription: "1FN–3FN, desnormalización/BI, GRANT/REVOKE, ACID, vistas, procedimientos y triggers.",
  showInTrackIndex: false,
  classTitle: CLASE_04.classTitle,
};
