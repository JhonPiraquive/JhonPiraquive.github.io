import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { JavascriptInlineYExternoSection } from "./sections/JavascriptInlineYExternoSection";
import { DondePonerElScriptSection } from "./sections/DondePonerElScriptSection";
import { HolaMundoConsolaSection } from "./sections/HolaMundoConsolaSection";

type Props = { locale: string };

export default function JsEnHtmlPageLesson({ locale: _locale }: Props) {
  return (
    <ClassPageLayout
      title={meta.title}
      classTitle={meta.classTitle!}
      pageNumber={meta.pageNumber}
      totalPages={meta.totalPages}
      track={meta.track}
      prev={meta.prev}
      next={meta.next}
    >
      <JavascriptInlineYExternoSection />
      <DondePonerElScriptSection />
      <HolaMundoConsolaSection />
    </ClassPageLayout>
  );
}
