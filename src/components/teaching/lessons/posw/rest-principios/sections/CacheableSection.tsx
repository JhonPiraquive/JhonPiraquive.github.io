import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function CacheableSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Cacheable"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Las respuestas indican explícitamente si pueden cachearse."}</li>
        <li>{"Headers: Cache-Control, ETag, Last-Modified."}</li>
        <li>{"Enlaza con la lección cache."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Cacheable"
        chart={`mindmap
  root((Cacheable))
    Las respuestas indican explícitamente si pueden cachearse
    Headers
    Enlaza con la lección cache`}
      />

      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Respuesta cacheable (catálogo público)"}
      </h3>
      <CodeFiddle
        language="http"
        title="Respuesta cacheable (catálogo público)"
        code={`HTTP/1.1 200 OK
Cache-Control: max-age=3600, public
ETag: "productos-v42"
Content-Type: application/json`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Respuesta no cacheable (dato de usuario)"}
      </h3>
      <CodeFiddle
        language="http"
        title="Respuesta no cacheable (dato de usuario)"
        code={`HTTP/1.1 200 OK
Cache-Control: no-store, no-cache
Content-Type: application/json`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Sin headers = problema REST"}
      </h3>
      <p className="my-4">
        {
          "Omitir Cache-Control impide que clientes e intermediarios sepan si pueden reutilizar la respuesta — viola el constraint Cacheable."
        }
      </p>
    </section>
  );
}
