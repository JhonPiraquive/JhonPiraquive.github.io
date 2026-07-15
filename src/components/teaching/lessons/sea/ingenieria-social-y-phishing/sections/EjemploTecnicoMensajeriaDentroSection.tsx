import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoMensajeriaDentroSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (mensajería dentro de una app)"}</h2>
      <p className="my-4">{"Las aplicaciones también deben ayudar: avisos claros cuando una acción es sensible (cambiar correo, contraseña, 2FA, método de pago). La microcopia debe ser específica, sin pánico y sin culpar: “Si no fuiste tú, actúa ahora”."}</p>
      <CodeFiddle language="json" code={`{
  "template": "password_changed",
  "title": "Cambio de contraseña",
  "body": "Tu contraseña fue cambiada. Si no fuiste tú, protege tu cuenta ahora.",
  "primary_action": "Revisar actividad",
  "secondary_action": "Restablecer acceso",
  "channel": "email",
  "severity": "high"
}`} />
    </section>
  );
}
