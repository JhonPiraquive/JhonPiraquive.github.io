import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Práctica y cierre Clase 2 | SEA",
  seoDescription: "Práctica guiada, ejercicios con pista, miniquiz y autoevaluación de Base64, hash, HTTPS y SQL Injection.",
};
