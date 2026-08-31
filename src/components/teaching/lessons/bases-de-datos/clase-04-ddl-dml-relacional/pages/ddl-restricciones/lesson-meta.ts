import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "ddl-restricciones";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Restricciones SQL: PK, UNIQUE y NOT NULL",
  seoDescription:
    "Llave primaria, UNIQUE y NOT NULL/NULL: integridad de filas y atributos de negocio (Nombre_Programa) en el motor, no solo en la app.",
};
