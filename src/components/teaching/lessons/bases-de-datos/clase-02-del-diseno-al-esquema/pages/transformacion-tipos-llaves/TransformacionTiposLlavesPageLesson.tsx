import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { TransformacionErSqlSection } from "../../sections/TransformacionErSqlSection";
import { TiposDatosSqlSection } from "../../sections/TiposDatosSqlSection";
import { PrimaryKeyPkSection } from "../../sections/PrimaryKeyPkSection";
import { ForeignKeyFkSection } from "../../sections/ForeignKeyFkSection";

type Props = { locale: string };

export default function TransformacionTiposLlavesPageLesson({ locale }: Props) {
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
      <TransformacionErSqlSection />
      <TiposDatosSqlSection />
      <PrimaryKeyPkSection />
      <ForeignKeyFkSection />
    </ClassPageLayout>
  );
}
