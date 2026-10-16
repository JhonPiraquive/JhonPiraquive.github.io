import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: CLASE_02.classSlug,
  title: "Interfaces administrativas con React y MUI",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Interfaces administrativas con React y MUI | Tecnologías emergentes",
  seoDescription: "Clase 2: estado, efectos, Material UI, UX/UI y navegación con React Router.",
  classTitle: CLASE_02.classTitle,
  showInTrackIndex: true,
};
