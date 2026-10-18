import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";
import { LEGACY_CLASS_REDIRECTS } from "../../class-navigation";

type Props = { locale: string };

const TARGET = `/teaching/configuracion-servicios-web/${LEGACY_CLASS_REDIRECTS["clase-02-hosting-correo-https"]}`;

export default function AliasHubLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
