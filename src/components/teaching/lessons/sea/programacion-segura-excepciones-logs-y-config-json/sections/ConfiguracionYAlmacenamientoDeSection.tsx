import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function ConfiguracionYAlmacenamientoDeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Configuración y almacenamiento de info sensible con JSON"}</h2>
      <p className="my-4">{"JSON sirve para configuración, no para secretos. Buenas prácticas: separar configuración pública (features, endpoints, flags) de secretos (claves, passwords) que deben venir de un gestor de secretos o variables de entorno. Si debes usar JSON, usa referencias (nombres de variables) y evita valores sensibles reales."}</p>
      <CodeFiddle language="json" code={`{
  "app": { "env": "production" },
  "db": {
    "host": "db.internal",
    "name": "app",
    "user": "app_user",
    "password_env": "DB_PASSWORD"
  },
  "jwt": {
    "signing_key_env": "JWT_SIGNING_KEY",
    "ttl_seconds": 3600
  }
}`} />
    </section>
  );
}
