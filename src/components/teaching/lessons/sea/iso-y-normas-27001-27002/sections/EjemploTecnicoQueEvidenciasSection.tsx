import { CodeBlock } from "@/components/teaching/CodeBlock";

export function EjemploTecnicoQueEvidenciasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué evidencias pedirías)"}</h2>
      <p className="my-4">{"Si tuvieras que evaluar seguridad con lente ISO, pedirías evidencias: inventario de activos, matriz de riesgos, política de contraseñas, bitácora de accesos, procedimientos de incidentes, y registros de cambios. La evidencia importa porque convierte “yo creo” en “yo demuestro”."}</p>
      <CodeBlock className="language-json">{`{
  &quot;control_id&quot;: &quot;AC-01&quot;,
  &quot;objetivo&quot;: &quot;Asegurar que los accesos sean autorizados y revisados.&quot;,
  &quot;evidencia&quot;: &quot;Reporte mensual de usuarios y roles + registro de aprobaciones.&quot;,
  &quot;frecuencia&quot;: &quot;mensual&quot;,
  &quot;dueno&quot;: &quot;security_lead&quot;,
  &quot;ultimo_resultado&quot;: &quot;ok&quot;
}`}</CodeBlock>
    </section>
  );
}
