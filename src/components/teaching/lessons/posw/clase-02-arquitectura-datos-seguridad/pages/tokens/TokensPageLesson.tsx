import { ClassPageLayout } from "@/components/teaching/ClassPageLayout";
import { meta } from "./lesson-meta";
import { JwtSection } from "./sections/JwtSection";
import { OAuthSection } from "./sections/OAuthSection";
import { ApiKeySesionesSection } from "./sections/ApiKeySesionesSection";
import { ComparativaTokensSection } from "./sections/ComparativaTokensSection";
import { ResumenSection } from "./sections/ResumenSection";

type Props = { locale: string };

export default function TokensPageLesson({ locale: _locale }: Props) {
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
      <JwtSection />
      <OAuthSection />
      <ApiKeySesionesSection />
      <ComparativaTokensSection />
      <ResumenSection />
    </ClassPageLayout>
  );
}
