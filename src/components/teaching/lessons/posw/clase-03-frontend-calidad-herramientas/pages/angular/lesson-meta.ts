import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "angular";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "posw",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Angular: fundamentos | POSW",
  seoDescription: "Componentes, ciclo de vida, directivas, pipes, módulos y servicios.",
};
