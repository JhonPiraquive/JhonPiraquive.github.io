import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { CrearProyectoViteSection } from "../../sections/CrearProyectoViteSection";
import { JsxYComponentesSection } from "../../sections/JsxYComponentesSection";
import { ListasYCondicionalesSection } from "../../sections/ListasYCondicionalesSection";
import { CssResponsiveSection } from "../../sections/CssResponsiveSection";

type Props = { locale: string };

export default function PrimerComponenteReactPageLesson({ locale: _locale }: Props) {
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
      <CrearProyectoViteSection />
      <JsxYComponentesSection />
      <ListasYCondicionalesSection />
      <CssResponsiveSection />
    </ClassPageLayout>
  );
}
