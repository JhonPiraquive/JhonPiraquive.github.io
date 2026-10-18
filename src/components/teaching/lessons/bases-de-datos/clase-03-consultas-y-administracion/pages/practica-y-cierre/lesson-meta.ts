import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_03.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica y cierre: consultas y administración",
  seoDescription:
    "Práctica guiada, reto de matrícula segura, miniquiz y autoevaluación: consultas, JOINs, permisos y transacciones.",
};
