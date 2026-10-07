import { Link } from "@/i18n/navigation";
import { Callout } from "@/components/teaching/Callout";

export function CierreSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">Cierre</h2>
      <p className="my-4">
        Un sistema de información recolecta, procesa, almacena y distribuye información. Se entiende por sus
        fases (entrada, proceso, salida), por sus elementos (equipo, personas, datos, programas, redes) y por el
        uso que la empresa le da (operar, decidir, competir).
      </p>
      <Callout title="Siguiente clase" variant="callout-tip">
        <p className="mb-0">
          <Link
            href="/teaching/analisis-diseno-sistemas/clase-02-analisis-y-modelado"
            className="text-[var(--color-secondary)] hover:underline"
          >
            Clase 2 — Análisis y modelado
          </Link>
        </p>
      </Callout>
    </section>
  );
}
