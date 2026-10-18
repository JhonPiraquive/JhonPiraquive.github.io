import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "naming-conventions";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Convenciones de nomenclatura | POSW",
  seoDescription: "camelCase, PascalCase, snake_case y kebab-case según el contexto.",
};
