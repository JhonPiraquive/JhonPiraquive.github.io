import { Callout } from "@/components/teaching/Callout";

export function AdvertenciaUpdateDeleteSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"UPDATE y DELETE: poder con WHERE y backup"}
      </h2>
      <Callout title="Peligro: UPDATE y DELETE sin WHERE" variant="callout-danger">
        {
          "Incluye siempre WHERE. Sin WHERE se afectan TODAS las filas. Prueba primero con SELECT usando el mismo WHERE y cuenta filas. Haz backup (dump/snapshot) antes de operaciones masivas o en datos reales."
        }
      </Callout>
      <p className="my-4">
        {
          "Procedimiento seguro: SELECT con el mismo WHERE → COUNT(*) → luego UPDATE/DELETE."
        }
      </p>
    </section>
  );
}
