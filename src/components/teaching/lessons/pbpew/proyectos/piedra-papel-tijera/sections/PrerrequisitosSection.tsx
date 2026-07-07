import { Link } from "@/i18n/navigation";

export function PrerrequisitosSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Prerrequisitos</h2>
      <ul className="my-4 list-disc pl-6">
        <li>
          <strong>Lecciones 01–05:</strong> DOM, script en HTML, variables, operadores, bucles y errores
          básicos.
        </li>
        <li>
          <strong>
            Lección 06 (
            <Link href="/teaching/pbpew/06-funciones-y-callbacks" className="text-[var(--color-secondary)]">
              funciones y callbacks
            </Link>
            ):
          </strong>{" "}
          funciones con responsabilidad única y callbacks — base de listeners y de <code>jugarRonda</code>.
        </li>
        <li>
          <strong>
            Lección 07 (
            <Link href="/teaching/pbpew/07-arrays-json-objetos" className="text-[var(--color-secondary)]">
              arrays y objetos
            </Link>
            ):
          </strong>{" "}
          arrays y objetos para <code>OPCIONES</code>, <code>marcador</code> y mapas de reglas.
        </li>
        <li>
          <strong>
            Lección 10 (
            <Link href="/teaching/pbpew/10-dom-y-eventos" className="text-[var(--color-secondary)]">
              DOM y eventos
            </Link>
            ):
          </strong>{" "}
          <code>querySelector</code>, <code>textContent</code>, <code>classList</code>,{" "}
          <code>addEventListener</code>, delegación con <code>closest</code>.
        </li>
        <li>
          <strong>
            Lección 11 (
            <Link href="/teaching/pbpew/11-asincronia" className="text-[var(--color-secondary)]">
              asincronía
            </Link>
            ):
          </strong>{" "}
          opcional para retraso «CPU pensando…» con <code>setTimeout</code>.
        </li>
        <li>
          Haber completado o repasado las 12 lecciones núcleo de Programación básica para entornos web (PBPEW); este proyecto las integra en un solo
          flujo jugable.
        </li>
      </ul>
    </section>
  );
}
