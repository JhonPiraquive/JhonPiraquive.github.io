import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "base64-y-diferencias-con-cifrado";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Base64: codificación y malentendidos | SEA",
  seoDescription: "Qué es una codificación, cuándo se usa Base64 y por qué no protege información.",
};
