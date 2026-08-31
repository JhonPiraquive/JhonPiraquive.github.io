import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { SqlComercialSection } from "../../sections/SqlComercialSection";
import { ImperioRelacionalSection } from "../../sections/ImperioRelacionalSection";

type Props = { locale: string };

export default function SqlComercialEImperioPageLesson({ locale }: Props) {
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
      <SqlComercialSection />
      <ImperioRelacionalSection />
    </ClassPageLayout>
  );
}
