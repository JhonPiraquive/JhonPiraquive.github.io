import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoDemostracionConceptualSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Ejemplo técnico: Base64 no es cifrado"}
      </h2>
      <p className="my-4">
        {
          "Base64 solo cambia la representación: cualquiera puede decodificarla. Un hash (SHA-256) es irreversible. El cifrado es reversible solo con la clave. Guarda secretos en variables de entorno, nunca en Base64 dentro del repo."
        }
      </p>
      <CodeFiddle
        language="bash"
        title="Codificar y decodificar Base64"
        code={`# Base64 codifica/decodifica (ejemplo conceptual)
echo -n "hola" | base64
echo -n "aG9sYQ==" | base64 -d`}
      />
      <CodeFiddle
        language="json"
        title="Config insegura vs segura"
        code={`{
  "config_insegura": {
    "db_password_base64": "c2VjcmV0MTIz"
  },
  "config_mejor": {
    "db_password_env": "DB_PASSWORD"
  }
}`}
      />
    </section>
  );
}
