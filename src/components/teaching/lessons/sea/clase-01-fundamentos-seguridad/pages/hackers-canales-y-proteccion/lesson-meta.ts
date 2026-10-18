import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "hackers-canales-y-proteccion";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Hackers, canales de ataque y protección | SEA",
  seoDescription: "Tipos de hacker, canales que usa el ciberdelincuente y medidas de protección personales y de equipo.",
};
