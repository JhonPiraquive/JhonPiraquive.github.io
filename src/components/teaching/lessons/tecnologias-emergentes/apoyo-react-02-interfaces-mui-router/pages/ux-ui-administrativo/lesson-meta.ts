import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { APOYO_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "ux-ui-administrativo";
const pageDef = APOYO_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(APOYO_02, PAGE);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "UX y UI para sitios administrativos | Tecnologías emergentes",
  seoDescription: pageDef.description,
};
