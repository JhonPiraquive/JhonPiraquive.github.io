import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoQueVeriasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué verías en una app)"}</h2>
      <p className="my-4">{"Cuando el atacante mezcla ingeniería social con técnica, suele usar accesos legítimos robados: credenciales válidas, sesiones activas o tokens. Por eso los controles de autenticación, monitoreo y límite de acciones son tan importantes como “parchar vulnerabilidades”."}</p>
      <CodeFiddle language="json" code={`{
  &quot;event&quot;: &quot;bank_account_change&quot;,
  &quot;actor&quot;: {
    &quot;user_id&quot;: &quot;u_12345&quot;,
    &quot;role&quot;: &quot;finance_operator&quot;
  },
  &quot;ip&quot;: &quot;203.0.113.42&quot;,
  &quot;timestamp&quot;: &quot;2026-04-21T14:20:11Z&quot;,
  &quot;verification&quot;: {
    &quot;method&quot;: &quot;out_of_band_call&quot;,
    &quot;result&quot;: &quot;failed&quot;
  },
  &quot;result&quot;: &quot;blocked&quot;,
  &quot;request_id&quot;: &quot;req_7b9a2c&quot;
}`} />
    </section>
  );
}
