import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { getNavForSlug } from "../class-navigation";

const nav = getNavForSlug("index");

export const meta: LessonMeta = {
  track: "poo",
  slug: "index",
  title: "Programación Orientada a Objetos",
  order: nav.order,
  prev: nav.prev,
  next: nav.next,
  seoTitle: "POO en C#: 3 clases de fundamentos a experto",
  seoDescription:
    "Módulo universitario de Programación Orientada a Objetos (POO) en C#: fundamentos, relaciones y diseño experto con caso Tienda Andes.",
  showInTrackIndex: true,
};
