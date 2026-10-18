import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, buildPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_03.classSlug,
  title: "Consultas y administración",
  order: CLASE_03.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_03.classSlug, "dml-filtros-orden"),
  seoTitle: "Consultas y administración de bases de datos",
  seoDescription: "Filtros, agregados, UPDATE y DELETE seguros, JOINs, permisos, transacciones, vistas, funciones y triggers.",
  showInTrackIndex: false,
  classTitle: CLASE_03.classTitle,
};
