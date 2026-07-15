import { CodeChallenge } from "@/components/teaching/CodeChallenge";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function HeadersCacheSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Headers HTTP de caché"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Cache-Control: directiva principal (max-age, no-cache, no-store, public, private, immutable)."
          }
        </li>
        <li>{"ETag: versión del recurso para revalidación condicional."}</li>
        <li>{"Last-Modified: fecha de última modificación."}</li>
        <li>{"Vary: qué headers afectan la variante cacheada."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — HeadersCache"
        chart={`mindmap
  root((HeadersCache))
    Cache-Control
    ETag
    Last-Modified
    Vary`}
      />

      <CodeFiddle
        language="http"
        title="Asset estático cacheable"
        code={`HTTP/1.1 200 OK
Content-Type: image/webp
Cache-Control: max-age=31536000, public, immutable
ETag: "v2-a3f9b2c1"
Content-Length: 45820`}
      />
      <CodeFiddle
        language="http"
        title="Dato sensible no cacheable"
        code={`HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store, no-cache, private`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Directivas Cache-Control"}
      </h3>
      <CompareTable
        headers={["Directiva", "Efecto", "Cuándo usar"]}
        rows={[
          ["max-age=N", "Válido N segundos", "Catálogo API 5–60 min"],
          ["no-cache", "Revalidar antes de usar", "HTML dinámico con ETag"],
          ["no-store", "No almacenar nunca", "Tokens, datos de usuario"],
          [
            "public",
            "CDN y proxies pueden cachear",
            "Assets estáticos públicos",
          ],
          ["private", "Solo navegador del usuario", "Datos personalizados"],
          [
            "immutable",
            "No revalidar si no cambió nombre",
            "app.a3f9b2.js con hash",
          ],
        ]}
      />
      <CodeChallenge
        title="Completa las directivas Cache-Control"
        template={`Asset con hash en nombre → Cache-Control: max-age=31536000, public, {{blank1}}
Token de sesión → Cache-Control: {{blank2}}
Catálogo en Redis → TTL {{blank3}} segundos (5 min)`}
        blanks={[
          { id: "blank1", answer: "immutable", placeholder: "directiva" },
          { id: "blank2", answer: "no-store", placeholder: "directiva" },
          { id: "blank3", answer: "300", placeholder: "segundos" },
        ]}
      />
    </section>
  );
}
