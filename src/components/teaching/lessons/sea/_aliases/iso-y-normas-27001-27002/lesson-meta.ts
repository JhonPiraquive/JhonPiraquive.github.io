import type { LessonMeta } from "@/lib/teaching-lessons-registry";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

export const meta: LessonMeta = {
  track: "sea",
  slug: "iso-y-normas-27001-27002",
  title: "Redirección legacy → currículo 3 clases",
  order: 900,
  prev: null,
  next: LEGACY_CLASS_REDIRECTS["iso-y-normas-27001-27002"],
  showInTrackIndex: false,
  seoTitle: "Redirección legacy",
  seoDescription: "Alias de URL antigua hacia el currículo de 3 clases.",
};
