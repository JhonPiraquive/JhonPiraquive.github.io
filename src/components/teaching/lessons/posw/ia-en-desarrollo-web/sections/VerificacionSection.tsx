import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function VerificacionSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Flujo de verificación antes del merge"}
      </h2>
      <MermaidDiagram
        chart={`flowchart TD
  P[Prompt con contexto] --> G[Código generado]
  G --> E{¿Lo entiendes?}
  E -->|No| X[Pedir explicación / docs oficiales]
  X --> G
  E -->|Sí| T[Tests locales]
  T -->|Fallan| F[Corregir con error exacto]
  F --> G
  T -->|Pasan| L[Lint + typecheck]
  L --> R[Code review humano]
  R --> M[Merge / Deploy]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Checklist antes del merge"}</h3>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Entender cada línea del código generado."}</li>
        <li>{"Ejecutar tests locales (npm test)."}</li>
        <li>{"Correr lint y typecheck."}</li>
        <li>{"Verificar dependencias en registro oficial."}</li>
        <li>{"Code review humano obligatorio."}</li>
      </ol>
      <CodeFiddle
        language="bash"
        title="Verificación con curl"
        code={`# Tras generar un endpoint, probar localmente
curl -s -o /dev/null -w "%{http_code}" \\
  -H "Authorization: Bearer $TOKEN" \\
  http://localhost:3000/api/v1/productos/42
# Esperado: 200 o 404 según caso — no asumir sin ejecutar`}
      />
      <CodeFiddle
        language="plaintext"
        title="Respuesta HTTP de ejemplo"
        code={`HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "statusCode": 404,
  "message": "Producto 42 no encontrado",
  "error": "Not Found"
}`}
      />
      <StepReveal
        title="De prompt a merge seguro"
        steps={[
          {
            title: "1. Prompt con contexto",
            content: "Stack, convenciones, restricciones (DIP, sin any).",
          },
          { title: "2. Código generado", content: "Recibes el output; no lo integres aún." },
          {
            title: "3. Entender",
            content: "Lee línea por línea; pide explicación si algo no queda claro.",
          },
          {
            title: "4. Tests",
            content: "Escribe o ejecuta tests; incluye caso de error.",
          },
          {
            title: "5. Lint + typecheck",
            content: "npm run lint y tsc sin errores.",
          },
          {
            title: "6. Verificar deps",
            content: "Paquetes en npm/PyPI; no confiar en nombres inventados.",
          },
          {
            title: "7. Review humano",
            content: "Otro dev revisa seguridad y convenciones.",
          },
          { title: "8. Merge", content: "Solo cuando todo lo anterior pasa." },
        ]}
      />
    </section>
  );
}
