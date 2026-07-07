import { CodeBlock } from "@/components/teaching/CodeBlock";

export function EjemploTecnicoDemostracionConceptualSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Ejemplo técnico (demostración conceptual)"}</h2>
      <p className="my-4">{"La demostración debe mostrar dos versiones: una consulta vulnerable construida por concatenación (para evidenciar el riesgo) y una versión segura con parámetros (para evidenciar la mitigación). También debe mostrar la diferencia de manejo de errores: el usuario recibe mensaje genérico, mientras el log interno guarda el detalle."}</p>
      <CodeBlock className="language-sql">{`-- Consulta vulnerable (ejemplo conceptual: NO copiar a producción)
SELECT * FROM users WHERE name = &#x27;>&#x27;;

-- Si input_usuario = &#x27;a&#x27; OR &#x27;1&#x27;=&#x27;1
-- La condición cambia y puede devolver demasiados resultados.`}</CodeBlock>
      <CodeBlock className="language-php">{``}</CodeBlock>
      <CodeBlock className="language-json">{`{
  &quot;event&quot;: &quot;sqli_attempt&quot;,
  &quot;user_id&quot;: null,
  &quot;ip&quot;: &quot;198.51.100.10&quot;,
  &quot;endpoint&quot;: &quot;/buscar&quot;,
  &quot;payload_truncado&quot;: &quot;&#x27; OR &#x27;1&#x27;=&#x27;1&quot;,
  &quot;resultado&quot;: &quot;blocked&quot;,
  &quot;request_id&quot;: &quot;req_13f5c1&quot;
}`}</CodeBlock>
    </section>
  );
}
