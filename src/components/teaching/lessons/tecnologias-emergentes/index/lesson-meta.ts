import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { getNavForSlug } from "../class-navigation";

const nav = getNavForSlug("index");

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: "index",
  title: "Tecnologías emergentes",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "Tecnologías emergentes: presentación, objetivos y resultados",
  seoDescription:
    "Módulo de cero a práctica real: JavaScript moderno, React con Vite, Material UI, React Router y consumo de APIs.",
  showInTrackIndex: true,
};
