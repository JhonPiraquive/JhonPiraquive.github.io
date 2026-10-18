import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "principios-cia-y-autenticidad";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Principios CIA y autenticidad | SEA",
  seoDescription: "Confidencialidad, integridad, disponibilidad y autenticidad aplicados a decisiones técnicas.",
};
