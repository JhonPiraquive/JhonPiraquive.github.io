import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "historia-redes-y-seguridad";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Historia de redes y seguridad informática | SEA",
  seoDescription: "De sistemas aislados a redes abiertas: por qué la seguridad es un proceso y no un producto.",
};
