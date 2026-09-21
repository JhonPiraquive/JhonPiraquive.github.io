import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: "clase-01-historia-bases-de-datos",
  title: "Redirección legacy → currículo 4 clases",
  order: 900,
  prev: null,
  next: LEGACY_CLASS_REDIRECTS["clase-01-historia-bases-de-datos"],
  showInTrackIndex: false,
  seoTitle: "Redirección legacy",
  seoDescription: "Alias de URL antigua hacia el currículo de 4 clases.",
};
