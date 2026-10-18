import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/configuracion-servicios-web/${LEGACY_CLASS_REDIRECTS["clase-03-administracion-remota"]}`;

export default function AliasHubLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
