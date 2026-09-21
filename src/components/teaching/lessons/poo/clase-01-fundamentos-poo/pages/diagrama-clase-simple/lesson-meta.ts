import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "diagrama-clase-simple";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "poo",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: pageDef.title + " | POO",
  seoDescription: pageDef.description,
};
