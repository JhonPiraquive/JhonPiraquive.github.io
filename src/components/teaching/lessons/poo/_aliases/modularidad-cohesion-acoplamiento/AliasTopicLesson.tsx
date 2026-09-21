import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";

type Props = { locale: string };

const TARGET = "/teaching/poo/clase-03-experto-poo/modularidad-cohesion-acoplamiento";

export default function AliasTopicLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
