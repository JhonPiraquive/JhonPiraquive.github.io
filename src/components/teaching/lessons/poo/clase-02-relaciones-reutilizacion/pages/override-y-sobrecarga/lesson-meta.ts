import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "override-y-sobrecarga";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "poo",
  ...base,
  title: pageDef.title,
  showInTrackIndex: true,
  seoTitle: pageDef.title + " | POO",
  seoDescription: pageDef.description,
};
