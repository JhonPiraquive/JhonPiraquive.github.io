import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, buildPageSlug } from "../class-navigation";

/** Hub de clase retirado: no aparece en el índice; la URL redirige a la 1.ª página. */
export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: CLASE_02.classSlug,
  title: "Fundamentos, motores y estructura: el abecedario operativo",
  order: CLASE_02.hubOrder,
  prev: null,
  next: buildPageSlug(CLASE_02.classSlug, "que-es-y-tipos"),
  seoTitle: "Fundamentos de BD: motores, SGBD y estructura",
  seoDescription: "Define BD y SGBD, compara relacional vs NoSQL, distingue motor/GUI/CLI (MySQL, MariaDB, MongoDB) y estructura tabla-campo-valor con ejemplos LATAM.",
  showInTrackIndex: false,
  classTitle: CLASE_02.classTitle,
};
