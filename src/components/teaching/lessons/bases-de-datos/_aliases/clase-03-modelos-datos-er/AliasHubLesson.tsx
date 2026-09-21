import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/bases-de-datos/${LEGACY_CLASS_REDIRECTS["clase-03-modelos-datos-er"]}`;

export default function AliasHubLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
