import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "typescript";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "TypeScript | POSW",
  seoDescription: "Sistema de tipos, interfaces, genéricos y configuración.",
};
