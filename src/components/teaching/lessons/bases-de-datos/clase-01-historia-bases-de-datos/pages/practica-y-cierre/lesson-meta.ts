import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "practica-y-cierre";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: "Práctica, reto AndinaMarket y cierre",
  showInTrackIndex: false,
  seoTitle: "Práctica, reto AndinaMarket y cierre | Bases de datos",
  seoDescription:
    "Cinco ejercicios guiados, reto integrador AndinaMarket, cierre de 7 etapas y miniquiz de historia de las BD.",
};
