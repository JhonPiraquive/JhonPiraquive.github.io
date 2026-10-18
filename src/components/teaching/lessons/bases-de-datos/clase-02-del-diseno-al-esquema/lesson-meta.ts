import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, buildPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_02.classSlug,
  title: "Del diseño al esquema en SQL",
  order: CLASE_02.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_02.classSlug, "redundancia-y-dependencia-funcional"),
  seoTitle: "Del diseño al esquema en SQL",
  seoDescription: "Normalización, desnormalización, transformación de un diagrama ER a SQL, CREATE TABLE con restricciones e INSERT/SELECT.",
  showInTrackIndex: false,
  classTitle: CLASE_02.classTitle,
};
