import { PracticeSection } from "@/components/teaching/lessons/shared/PracticeSection";

export function RetoInteractivoSinCodigoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto interactivo (sin código)"}</h2>
      <PracticeSection slug="iso-y-normas-27001-27002" track="sea" />
    </section>
  );
}
