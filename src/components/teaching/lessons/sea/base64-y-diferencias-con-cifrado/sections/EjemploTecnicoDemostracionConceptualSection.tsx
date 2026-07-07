import { CodeFiddle } from "@/components/teaching/CodeFiddle";

export function EjemploTecnicoDemostracionConceptualSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (demostración conceptual)"}</h2>
      <p className="my-4">{"La demostración debe mostrar un texto original, su representación en Base64 y la decodificación de vuelta al original, para que quede claro que no hay seguridad. Luego debe contrastar con un ejemplo de hash (irreversible) y cifrado (reversible con clave), sin implementar algoritmos, solo con la idea."}</p>
      <CodeFiddle language="bash" code={`# Base64 codifica/decodifica (ejemplo conceptual)
echo -n &quot;hola&quot; | base64
echo -n &quot;aG9sYQ==&quot; | base64 -d`} />
      <CodeFiddle language="json" code={`{
  &quot;config_insegura&quot;: {
    &quot;db_password_base64&quot;: &quot;c2VjcmV0MTIz&quot;
  },
  &quot;config_mejor&quot;: {
    &quot;db_password_env&quot;: &quot;DB_PASSWORD&quot;
  }
}`} />
    </section>
  );
}
