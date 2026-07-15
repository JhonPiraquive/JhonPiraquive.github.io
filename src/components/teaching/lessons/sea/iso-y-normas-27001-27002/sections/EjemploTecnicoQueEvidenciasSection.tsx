import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoQueEvidenciasSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué evidencias pedirías)"}</h2>
      <p className="my-4">{"Si tuvieras que evaluar seguridad con lente ISO, pedirías evidencias: inventario de activos, matriz de riesgos, política de contraseñas, bitácora de accesos, procedimientos de incidentes, y registros de cambios. La evidencia importa porque convierte “yo creo” en “yo demuestro”."}</p>
      <CodeFiddle language="json" code={`{
  "control_id": "AC-01",
  "objetivo": "Asegurar que los accesos sean autorizados y revisados.",
  "evidencia": "Reporte mensual de usuarios y roles + registro de aprobaciones.",
  "frecuencia": "mensual",
  "dueno": "security_lead",
  "ultimo_resultado": "ok"
}`} />
    </section>
  );
}
