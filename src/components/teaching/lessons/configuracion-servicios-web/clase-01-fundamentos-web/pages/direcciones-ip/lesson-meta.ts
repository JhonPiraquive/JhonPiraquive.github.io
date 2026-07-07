import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_01, getPageMetaBase } from "../../../class-navigation";

const PAGE = "direcciones-ip";
const pageDef = CLASE_01.pages.find((p) => p.slug === PAGE)!;
const base = getPageMetaBase(CLASE_01, PAGE);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  ...base,
  title: pageDef.title,
  showInTrackIndex: false,
  seoTitle: "IPv4 e IPv6 | CSW Clase 1",
  seoDescription: "Octetos, direcciones hexadecimales, IP pública vs privada y comandos ipconfig e ip addr.",
};
