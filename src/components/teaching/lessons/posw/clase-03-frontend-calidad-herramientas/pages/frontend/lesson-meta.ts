import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "frontend";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Frontend: tecnologías y frameworks | POSW",
  seoDescription: "Tecnologías base, frameworks y cómo elegir.",
};
