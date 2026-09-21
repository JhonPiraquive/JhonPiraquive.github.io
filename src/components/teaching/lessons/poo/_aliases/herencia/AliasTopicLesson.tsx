import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";

type Props = { locale: string };

const TARGET = "/teaching/poo/clase-02-relaciones-reutilizacion/herencia";

export default function AliasTopicLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
