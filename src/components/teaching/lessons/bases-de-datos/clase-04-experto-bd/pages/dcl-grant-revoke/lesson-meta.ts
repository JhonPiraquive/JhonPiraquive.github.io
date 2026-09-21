import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_04, getPageMetaBase } from "../../../class-navigation";

const PAGE = "dcl-grant-revoke";
const pageDef = CLASE_04.pages.find((x) => x.slug === PAGE)!;
const base = getPageMetaBase(CLASE_04, PAGE);

export const meta: LessonMeta = {
  track: "bases-de-datos",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "DCL SQL: GRANT y REVOKE",
  seoDescription:
    "Otorga y revoca privilegios en MySQL/MariaDB con mínimo privilegio; evita root compartido y GRANT ALL por costumbre.",
};
