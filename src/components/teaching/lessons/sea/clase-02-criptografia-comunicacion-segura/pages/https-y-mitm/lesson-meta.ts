import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "https-y-mitm";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "HTTPS y ataques MITM | SEA",
  seoDescription: "Qué protege HTTPS, cómo funciona un ataque de intermediario y qué no resuelve.",
};
