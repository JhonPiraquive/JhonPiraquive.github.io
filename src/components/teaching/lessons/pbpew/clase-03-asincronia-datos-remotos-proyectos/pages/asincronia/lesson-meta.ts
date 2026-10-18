import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "asincronia";
const pageDef = CLASE_03.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "pbpew",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Asincronía: temporizadores, promesas y async/await | PBPEW",
  seoDescription: "Sincronía frente a asincronía, temporizadores, promesas y async/await.",
};
