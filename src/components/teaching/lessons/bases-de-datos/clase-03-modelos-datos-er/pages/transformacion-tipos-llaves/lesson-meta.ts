import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getPageMetaBase } from "../../../class-navigation";

const PAGE = "transformacion-tipos-llaves";
const pageDef = CLASE_03.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_03, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "ER a SQL: tipos, PK y FK",
  seoDescription:
    "Transforma el ER a tablas SQL: FK en el lado N, tabla puente N:M, tipos justificados (no todo VARCHAR), PK/FK y padres primero.",
};
