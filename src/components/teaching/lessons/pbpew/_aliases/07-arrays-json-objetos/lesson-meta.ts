import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

export const meta: LessonMeta = {
  track: "pbpew",
  slug: "07-arrays-json-objetos",
  title: "Redirección legacy → currículo 3 clases",
  order: 900,
  prev: null,
  next: LEGACY_CLASS_REDIRECTS["07-arrays-json-objetos"],
  showInTrackIndex: false,
  seoTitle: "Redirección legacy",
  seoDescription: "Alias de URL antigua hacia el currículo de 3 clases.",
};
