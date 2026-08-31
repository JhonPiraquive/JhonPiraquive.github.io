import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "relacional-fk-joins";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Modelo relacional, FK e INNER/LEFT JOIN",
  seoDescription:
    "ER vs relacional, cardinalidad, CONSTRAINT FK (padres primero) e INNER/LEFT/RIGHT JOIN con NULLs y pregunta de negocio.",
};
