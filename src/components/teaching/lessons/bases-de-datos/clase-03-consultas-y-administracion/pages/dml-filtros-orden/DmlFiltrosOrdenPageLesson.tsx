import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { WhereSection } from "../../sections/WhereSection";
import { DistinctSection } from "../../sections/DistinctSection";
import { OrderBySection } from "../../sections/OrderBySection";
import { LimitSection } from "../../sections/LimitSection";

type Props = { locale: string };

export default function DmlFiltrosOrdenPageLesson({ locale }: Props) {
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
      <WhereSection />
      <DistinctSection />
      <OrderBySection />
      <LimitSection />
    </ClassPageLayout>
  );
}
