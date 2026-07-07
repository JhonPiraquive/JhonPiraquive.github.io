import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_03, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_03.classSlug);

export const meta: LessonMeta = {
  track: "configuracion-servicios-web",
  slug: CLASE_03.classSlug,
  title: "Administración remota: nube, SSH y SFTP",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  classTitle: CLASE_03.classTitle,
  seoTitle: "Administración remota: SSH, SFTP y nube | CSW",
  seoDescription: "Nube, FTP/SFTP, SSH y paneles remotos. Índice paginado de la Clase 3.",
};
