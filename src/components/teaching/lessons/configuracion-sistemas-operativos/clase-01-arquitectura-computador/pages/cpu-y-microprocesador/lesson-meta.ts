import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "cpu-y-microprocesador";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-sistemas-operativos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "CPU y microprocesador | CSO Clase 1",
  seoDescription:
    "Ciclo fetch-decode-execute, CU, ALU, GHz, núcleos, hilos y comparativa Intel, AMD y Apple Silicon.",
};
