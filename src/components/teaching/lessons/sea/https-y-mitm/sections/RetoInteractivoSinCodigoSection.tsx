import { PracticeSection } from "@/components/teaching/lessons/shared/PracticeSection";

export function RetoInteractivoSinCodigoSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Reto interactivo (sin código)"}</h2>
      <PracticeSection slug="https-y-mitm" track="sea" />
    </section>
  );
}
