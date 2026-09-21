import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { AgregadosSection } from "../../sections/AgregadosSection";
import { GroupBySection } from "../../sections/GroupBySection";
import { HavingSection } from "../../sections/HavingSection";

type Props = { locale: string };

export default function AgregadosGroupHavingPageLesson({ locale }: Props) {
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
      <AgregadosSection />
      <GroupBySection />
      <HavingSection />
    </ClassPageLayout>
  );
}
