import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "diagramas-er";
const pageDef = CLASE_03.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Diagrama ER: entidades y cardinalidad",
  seoDescription:
    "Crea e interpreta diagramas entidad-relación (ER): entidades, atributos, relaciones 1:1, 1:N, N:M y Mermaid erDiagram.",
};
