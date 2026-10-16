import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { PromesasSection } from "../../sections/PromesasSection";
import { AsyncAwaitSection } from "../../sections/AsyncAwaitSection";
import { FetchEnLaPracticaSection } from "../../sections/FetchEnLaPracticaSection";

type Props = { locale: string };

export default function AsyncAwaitYFetchPageLesson({ locale: _locale }: Props) {
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
      <PromesasSection />
      <AsyncAwaitSection />
      <FetchEnLaPracticaSection />
    </ClassPageLayout>
  );
}
