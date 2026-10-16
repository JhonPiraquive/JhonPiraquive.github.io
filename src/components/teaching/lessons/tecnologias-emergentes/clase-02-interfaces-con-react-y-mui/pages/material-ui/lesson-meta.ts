import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "material-ui";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Material UI (MUI) | Tecnologías emergentes",
  seoDescription: pageDef.description,
};
