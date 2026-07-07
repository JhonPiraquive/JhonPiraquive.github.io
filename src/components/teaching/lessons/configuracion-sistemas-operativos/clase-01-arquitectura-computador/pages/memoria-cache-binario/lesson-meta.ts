import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "memoria-cache-binario";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Caché, binario y buses | CSO Clase 1",
  seoDescription:
    "Memoria caché L1/L2/L3, bits y ASCII, buses paralelo y serial, SATA, PCIe y USB.",
};
