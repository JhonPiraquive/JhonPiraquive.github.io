import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "estructura-tablas-campos";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Tablas, campos, registros y valores SQL",
  seoDescription:
    "Estructura relacional: tabla, campo, registro y valor; nombres sin espacios (Nombre_Programa) y literales entre comillas simples.",
};
