import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "async-await-y-fetch";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Asincronía, async/await y fetch | Tecnologías emergentes",
  seoDescription: pageDef.description,
};
