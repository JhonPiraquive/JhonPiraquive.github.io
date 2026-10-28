import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { APOYO_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "crud-con-react";
const pageDef = APOYO_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(APOYO_03, PAGE);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "CRUD completo con React | Tecnologías emergentes",
  seoDescription: pageDef.description,
};
