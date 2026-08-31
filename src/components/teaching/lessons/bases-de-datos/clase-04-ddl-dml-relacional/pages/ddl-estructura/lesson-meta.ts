import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "ddl-estructura";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: "DDL SQL: CREATE, DROP y ALTER TABLE",
  seoDescription:
    "DDL frente a DML; CREATE/DROP DATABASE y TABLE, ALTER COLUMN y AUTO INCREMENT para construir el esquema con criterios de laboratorio.",
};
