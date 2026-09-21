import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "motores-y-gestores";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Motores MySQL, MariaDB, MongoDB y GUI/CLI",
  seoDescription:
    "Distingue motor/servidor (MySQL, MariaDB, MongoDB) de gestores GUI (phpMyAdmin, Workbench, DBeaver, Compass) y CLI (mysql, mongosh).",
};
