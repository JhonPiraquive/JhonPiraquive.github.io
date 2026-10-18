import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";

type Props = { locale: string };

const TARGET = "/teaching/configuracion-servicios-web/clase-03-administracion-contenedores-diagnostico/ssh-y-admin-remota";

export default function AliasPageLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
