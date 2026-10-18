import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "estructuras-de-datos";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "pbpew",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Estructuras de datos | PBPEW",
  seoDescription: "Map, Set, pila LIFO y cola FIFO y cuándo usar cada una.",
};
