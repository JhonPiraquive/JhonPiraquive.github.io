import { QuizSection } from "@/components/teaching/lessons/shared/QuizSection";

export function MiniquizSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Mini-quiz"}</h2>
      <QuizSection slug="clase-02-hosting-correo-https" track="configuracion-servicios-web" />
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Pregunta bonus (reflexión): ¿Por qué no debes dejar registros MX del proveedor anterior al migrar a Google Workspace? — Porque el correo entrante se reparte impredeciblemente y parte se pierde o va al buzón viejo."
        }
      </p>
    </section>
  );
}
