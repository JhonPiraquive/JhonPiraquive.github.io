import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { CLASE_02, getNavForSlug } from "../class-navigation";

const nav = getNavForSlug(CLASE_02.classSlug);

export const meta: LessonMeta = {
  track: "tecnologias-emergentes",
  slug: CLASE_02.classSlug,
  title: "La inteligencia artificial moderna, de modelos a agentes",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "La inteligencia artificial moderna, de modelos a agentes | Tecnologías emergentes",
  seoDescription: "Clase 2: modelos de lenguaje, tokens, contexto, sesiones, agentes, harness, comandos, skills, MCP, hooks, plugins y uso responsable.",
  classTitle: CLASE_02.classTitle,
  showInTrackIndex: true,
};
