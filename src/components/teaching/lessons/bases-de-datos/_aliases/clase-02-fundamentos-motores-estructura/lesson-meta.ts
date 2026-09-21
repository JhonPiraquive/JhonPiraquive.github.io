import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

export const meta: LessonMeta = {
  track: "bases-de-datos",
  slug: "clase-02-fundamentos-motores-estructura",
  title: "Redirección legacy → currículo 4 clases",
  order: 900,
  prev: null,
  next: LEGACY_CLASS_REDIRECTS["clase-02-fundamentos-motores-estructura"],
  showInTrackIndex: false,
  seoTitle: "Redirección legacy",
  seoDescription: "Alias de URL antigua hacia el currículo de 4 clases.",
};
