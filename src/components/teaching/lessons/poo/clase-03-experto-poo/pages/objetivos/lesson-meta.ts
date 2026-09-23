import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "objetivos";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "poo",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: pageDef.title + " | Clase 3 POO",
  seoDescription: pageDef.description,
};
