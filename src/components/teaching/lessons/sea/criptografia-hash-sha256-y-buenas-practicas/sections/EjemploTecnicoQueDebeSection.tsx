import { CodeBlock } from "@/components/teaching/CodeBlock";

export function EjemploTecnicoQueDebeSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (qué debe demostrar)"}</h2>
      <p className="my-4">{"El ejemplo debe mostrar: (1) una huella SHA‑256 de un archivo o texto, (2) cómo un cambio mínimo produce un hash totalmente distinto, y (3) un caso de uso: verificar integridad de descarga o detectar alteración de un payload. No debe presentarse SHA‑256 como forma de “cifrar”."}</p>
      <CodeBlock className="language-bash">{`# Calcular SHA-256 (ejemplo conceptual)
printf &quot;hola\\n&quot; > mensaje.txt
sha256sum mensaje.txt

# Cambio mínimo → hash diferente
printf &quot;hola!\\n&quot; > mensaje.txt
sha256sum mensaje.txt`}</CodeBlock>
      <CodeBlock className="language-json">{`{
  &quot;manifest&quot;: [
    { &quot;file&quot;: &quot;app.tar.gz&quot;, &quot;sha256&quot;: &quot;EXPECTED_SHA256_HEX_HERE&quot; }
  ]
}`}</CodeBlock>
    </section>
  );
}
