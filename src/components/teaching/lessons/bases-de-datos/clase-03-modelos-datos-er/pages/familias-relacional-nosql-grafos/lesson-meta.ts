import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "familias-relacional-nosql-grafos";
const pageDef = CLASE_03.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Relacional, NoSQL y grafos como contexto",
  seoDescription:
    "Ubica familias relacional, NoSQL y grafos según la forma de la pregunta de diseño; estrella/copo diferidos a la clase 5.",
};
