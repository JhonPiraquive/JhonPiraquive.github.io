import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_05, getPageMetaBase } from "../../../class-navigation";

const PAGE = "desnormalizacion";
const pageDef = CLASE_05.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_05, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Desnormalización consciente en SQL",
  seoDescription:
    "Argumenta cuándo desnormalizar tras 3FN: snapshot de factura, dueño de la verdad, sync y riesgos aceptados en OLTP vs BI.",
};
