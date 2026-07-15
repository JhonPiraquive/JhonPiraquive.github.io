import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoQueVeriasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué verías en una app)"}</h2>
      <p className="my-4">{"Cuando el atacante mezcla ingeniería social con técnica, suele usar accesos legítimos robados: credenciales válidas, sesiones activas o tokens. Por eso los controles de autenticación, monitoreo y límite de acciones son tan importantes como “parchar vulnerabilidades”."}</p>
      <CodeFiddle language="json" code={`{
  "event": "bank_account_change",
  "actor": {
    "user_id": "u_12345",
    "role": "finance_operator"
  },
  "ip": "203.0.113.42",
  "timestamp": "2026-04-21T14:20:11Z",
  "verification": {
    "method": "out_of_band_call",
    "result": "failed"
  },
  "result": "blocked",
  "request_id": "req_7b9a2c"
}`} />
    </section>
  );
}
