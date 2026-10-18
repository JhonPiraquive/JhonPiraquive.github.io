import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getPageMetaBase } from "../../../class-navigation";

const PAGE = "criptografia-hash-sha256-y-buenas-practicas";
const pageDef = CLASE_02.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_02, PAGE);

export const meta: LessonMeta = {
  track: "sea",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "Cifrado, hash y SHA-256 | SEA",
  seoDescription: "Diferencia entre cifrado, hash y firma, y buenas prácticas con claves y contraseñas.",
};
