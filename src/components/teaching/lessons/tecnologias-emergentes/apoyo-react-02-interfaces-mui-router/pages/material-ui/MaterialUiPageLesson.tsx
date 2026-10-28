import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { MuiInstalacionSection } from "../../sections/MuiInstalacionSection";
import { MuiComponentesSection } from "../../sections/MuiComponentesSection";
import { MuiTemaYSxSection } from "../../sections/MuiTemaYSxSection";
import { LeerPlantillaAdminSection } from "../../sections/LeerPlantillaAdminSection";

type Props = { locale: string };

export default function MaterialUiPageLesson({ locale: _locale }: Props) {
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
      <MuiInstalacionSection />
      <MuiComponentesSection />
      <MuiTemaYSxSection />
      <LeerPlantillaAdminSection />
    </ClassPageLayout>
  );
}
