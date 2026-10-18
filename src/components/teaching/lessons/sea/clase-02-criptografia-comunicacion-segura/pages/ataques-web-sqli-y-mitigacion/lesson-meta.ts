import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "ataques-web-sqli-y-mitigacion";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Ataques web: SQL Injection | SEA",
  seoDescription: "Cómo ocurre la inyección SQL, su impacto y las mitigaciones del lado del servidor.",
};
