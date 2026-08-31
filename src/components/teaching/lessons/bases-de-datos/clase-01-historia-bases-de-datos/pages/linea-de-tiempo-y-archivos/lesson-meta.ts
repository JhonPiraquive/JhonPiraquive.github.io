import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "linea-de-tiempo-y-archivos";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: "Línea de tiempo y archivos planos | Bases de datos",
  seoDescription:
    "Timeline de 7 etapas de la historia de las BD y el problema raíz de los archivos planos: duplicidad e inconsistencia.",
};
