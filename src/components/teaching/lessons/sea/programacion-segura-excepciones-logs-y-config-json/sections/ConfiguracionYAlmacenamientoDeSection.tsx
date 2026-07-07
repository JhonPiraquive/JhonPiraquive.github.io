import { CodeBlock } from "@/components/teaching/CodeBlock";

export function ConfiguracionYAlmacenamientoDeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Configuración y almacenamiento de info sensible con JSON"}</h2>
      <p className="my-4">{"JSON sirve para configuración, no para secretos. Buenas prácticas: separar configuración pública (features, endpoints, flags) de secretos (claves, passwords) que deben venir de un gestor de secretos o variables de entorno. Si debes usar JSON, usa referencias (nombres de variables) y evita valores sensibles reales."}</p>
      <CodeBlock className="language-json">{`{
  &quot;app&quot;: { &quot;env&quot;: &quot;production&quot; },
  &quot;db&quot;: {
    &quot;host&quot;: &quot;db.internal&quot;,
    &quot;name&quot;: &quot;app&quot;,
    &quot;user&quot;: &quot;app_user&quot;,
    &quot;password_env&quot;: &quot;DB_PASSWORD&quot;
  },
  &quot;jwt&quot;: {
    &quot;signing_key_env&quot;: &quot;JWT_SIGNING_KEY&quot;,
    &quot;ttl_seconds&quot;: 3600
  }
}`}</CodeBlock>
    </section>
  );
}
