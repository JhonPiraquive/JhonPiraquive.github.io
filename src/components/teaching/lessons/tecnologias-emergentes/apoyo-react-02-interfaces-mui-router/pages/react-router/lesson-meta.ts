import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { APOYO_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "react-router";
const pageDef = APOYO_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(APOYO_02, PAGE);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Navegación con React Router | Tecnologías emergentes",
  seoDescription: pageDef.description,
};
