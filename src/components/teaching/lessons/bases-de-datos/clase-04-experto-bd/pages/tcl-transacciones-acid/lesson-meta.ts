import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "tcl-transacciones-acid";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "TCL y ACID: COMMIT y ROLLBACK",
  seoDescription:
    "Transacciones START TRANSACTION, COMMIT, ROLLBACK y SAVEPOINT; explica ACID con inscripción atómica cupo + matrícula.",
};
