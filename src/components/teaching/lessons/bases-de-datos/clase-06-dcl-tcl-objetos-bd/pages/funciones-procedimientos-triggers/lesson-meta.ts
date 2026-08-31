import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_06, getPageMetaBase } from "../../../class-navigation";

const PAGE = "funciones-procedimientos-triggers";
const pageDef = CLASE_06.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_06, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "UDF, PROCEDURE y TRIGGER en SQL",
  seoDescription:
    "Funciones, procedimientos y triggers en MySQL/MariaDB; criterio claro de cuándo la lógica va en la app vs en la BD.",
};
