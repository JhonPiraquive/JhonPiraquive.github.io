import { Link } from "@/i18n/navigation";
import { Callout } from "@/components/teaching/Callout";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cierre</h2>
      <p className="my-4">
        UML nombra tres miradas: qué hace el sistema para el usuario, de qué objetos está hecho y cómo se
        comporta. El ciclo de vida ordena el trabajo, y la cascada lo deja por escrito en actas y entrevistas
        antes de diseñar.
      </p>
      <Callout title="Siguiente clase" variant="callout-tip">
        <p className="mb-0">
          <Link
            href="/teaching/analisis-diseno-sistemas/clase-03-diseno-y-scrum"
            className="text-[var(--color-secondary)] hover:underline"
          >
            Clase 3 — Diseño, casos de uso y Scrum
          </Link>
        </p>
      </Callout>
    </section>
  );
}
