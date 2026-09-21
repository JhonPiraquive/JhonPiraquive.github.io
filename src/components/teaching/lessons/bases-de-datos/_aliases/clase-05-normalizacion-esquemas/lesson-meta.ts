import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: "clase-05-normalizacion-esquemas",
  title: "Redirección legacy → currículo 4 clases",
  order: 900,
  prev: null,
  next: LEGACY_CLASS_REDIRECTS["clase-05-normalizacion-esquemas"],
  showInTrackIndex: false,
  seoTitle: "Redirección legacy",
  seoDescription: "Alias de URL antigua hacia el currículo de 4 clases.",
};
