import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "update-delete";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "UPDATE y DELETE SQL seguros con WHERE",
  seoDescription:
    "Modifica y elimina filas con WHERE obligatorio, SELECT previo y backup: el peligro de UPDATE/DELETE sin filtro.",
};
