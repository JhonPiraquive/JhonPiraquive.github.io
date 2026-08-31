import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "dml-insert-select";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "DML SQL: INSERT y SELECT básicos",
  seoDescription:
    "Manipula filas con INSERT y SELECT; reglas de nombres sin espacios y literales entre comillas simples con tildes LATAM.",
};
