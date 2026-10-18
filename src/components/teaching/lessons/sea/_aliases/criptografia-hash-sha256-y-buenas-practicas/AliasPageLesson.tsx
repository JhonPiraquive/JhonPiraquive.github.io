import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/sea/${LEGACY_CLASS_REDIRECTS["criptografia-hash-sha256-y-buenas-practicas"]}`;

export default function AliasPageLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
