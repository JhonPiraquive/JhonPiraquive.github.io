import { ClassHubRedirect } from "@/components/teaching/ClassHubRedirect";

type Props = { locale: string };

const TARGET = "/teaching/bases-de-datos/clase-01-fundamentos-bd/modelos-conceptual-logico-fisico";

export default function AliasPageLesson({ locale: _locale }: Props) {
  return <ClassHubRedirect href={TARGET} />;
}
