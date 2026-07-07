import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoMensajeriaDentroSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (mensajería dentro de una app)"}</h2>
      <p className="my-4">{"Las aplicaciones también deben ayudar: avisos claros cuando una acción es sensible (cambiar correo, contraseña, 2FA, método de pago). La microcopia debe ser específica, sin pánico y sin culpar: “Si no fuiste tú, actúa ahora”."}</p>
      <CodeFiddle language="json" code={`{
  &quot;template&quot;: &quot;password_changed&quot;,
  &quot;title&quot;: &quot;Cambio de contraseña&quot;,
  &quot;body&quot;: &quot;Tu contraseña fue cambiada. Si no fuiste tú, protege tu cuenta ahora.&quot;,
  &quot;primary_action&quot;: &quot;Revisar actividad&quot;,
  &quot;secondary_action&quot;: &quot;Restablecer acceso&quot;,
  &quot;channel&quot;: &quot;email&quot;,
  &quot;severity&quot;: &quot;high&quot;
}`} />
    </section>
  );
}
