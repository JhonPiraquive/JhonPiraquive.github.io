import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { APOYO_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "primer-componente-react";
const pageDef = APOYO_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(APOYO_01, PAGE);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "El primer proyecto con Vite y React | Tecnologías emergentes",
  seoDescription: pageDef.description,
};
