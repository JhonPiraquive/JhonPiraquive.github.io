import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";

type Props = { locale: string };

const TARGET = "/teaching/configuracion-servicios-web/clase-01-fundamentos-web/hosting-y-publicacion";

export default function AliasPageLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
