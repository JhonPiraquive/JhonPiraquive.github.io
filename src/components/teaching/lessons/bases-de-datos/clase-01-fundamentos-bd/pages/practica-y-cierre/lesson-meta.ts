import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica: fundamentos BD, motores y cierre",
  seoDescription:
    "Práctica guiada, reto Andes Tech, cierre y miniquiz: BD vs SGBD, motores/GUI/CLI y estructura tabla-campo-valor.",
};
