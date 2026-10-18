import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PorQueImportaSection } from "./sections/PorQueImportaSection";
import { CamelCaseSection } from "./sections/CamelCaseSection";
import { PascalCaseSection } from "./sections/PascalCaseSection";
import { SnakeCaseSection } from "./sections/SnakeCaseSection";
import { KebabCaseSection } from "./sections/KebabCaseSection";
import { UpperSnakeCaseSection } from "./sections/UpperSnakeCaseSection";
import { ResumenContextoSection } from "./sections/ResumenContextoSection";

type Props = { locale: string };

export default function NamingConventionsPageLesson({ locale: _locale }: Props) {
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
      <PorQueImportaSection />
      <CamelCaseSection />
      <PascalCaseSection />
      <SnakeCaseSection />
      <KebabCaseSection />
      <UpperSnakeCaseSection />
      <ResumenContextoSection />
    </ClassPageLayout>
  );
}
