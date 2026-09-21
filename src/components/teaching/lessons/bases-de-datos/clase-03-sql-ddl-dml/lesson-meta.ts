import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, buildPageSlug } from "../class-navigation";

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_03.classSlug,
  title: "SQL — DDL, DML y JOINs",
  order: CLASE_03.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_03.classSlug, "ddl-estructura"),
  seoTitle: "SQL operativo: DDL, DML, agregados y JOINs",
  seoDescription: "CREATE/ALTER, restricciones, INSERT/SELECT, filtros, agregados, UPDATE/DELETE seguros y JOINs.",
  showInTrackIndex: false,
  classTitle: CLASE_03.classTitle,
};
