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
  seoTitle: "Tecnologías emergentes: identificar, comprender la IA y decidir",
  seoDescription:
    "Cómo identificar tecnologías emergentes, cómo funciona la inteligencia artificial moderna (modelos, agentes, MCP, skills, hooks) y cómo decidir si adoptarlas, con una guía de apoyo en React.",
  showInTrackIndex: true,
};
