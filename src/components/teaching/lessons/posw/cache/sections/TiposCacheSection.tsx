import { Callout } from "@/components/teaching/Callout";
import { CompareTable } from "@/components/teaching/CompareTable";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";

export function TiposCacheSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Tipos de caché"}
      </h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>
          {
            "Browser Cache: assets estáticos en disco local; controlado por headers HTTP."
          }
        </li>
        <li>
          {
            "Server Cache: resultados de operaciones costosas; Redis, Memcached."
          }
        </li>
        <li>
          {
            "CDN Cache: servidores globales cerca del usuario; Cloudflare, CloudFront."
          }
        </li>
        <li>{"Database Cache: buffer pool interno, vistas materializadas."}</li>
      </ul>
      <MermaidDiagram
        title="Mapa mental — Tipos Cache"
        description="Resumen visual de los conceptos principales."
        chart={`mindmap
  root((Tipos Cache))
    Browser Cache assets estáticos en disco local
    Server Cache resultados de operaciones costosas
    CDN Cache servidores globales cerca del usuario
    Database Cache buffer pool interno vistas materializadas`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Arquitectura de tipos"}
      </h3>
      <MermaidDiagram
        chart={`flowchart TD
  U[Usuario] --> BR[Browser Cache]
  U --> CDN[CDN Cache]
  CDN --> API[Backend API]
  API --> SR[Server Cache Redis]
  API --> DB[(Database Cache / BD)]`}
      />
      <h3 className="mt-6 mb-2 text-xl font-semibold">
        {"Comparativa por tipo"}
      </h3>
      <CompareTable
        headers={["Tipo", "Dónde vive", "Qué guarda", "Tecnología"]}
        rows={[
          [
            "Navegador",
            "Disco del cliente",
            "CSS, JS, imágenes, fuentes",
            "Cache-Control, ETag",
          ],
          [
            "Servidor",
            "Memoria del backend",
            "Resultados SQL, APIs externas",
            "Redis, Memcached",
          ],
          [
            "CDN",
            "Edge global",
            "Assets estáticos, HTML cacheable",
            "Cloudflare, CloudFront",
          ],
          [
            "Base de datos",
            "Motor DB",
            "Páginas en buffer pool",
            "PostgreSQL, MySQL",
          ],
        ]}
      />
      <Callout title="E-commerce: catálogo sin caché tumba PostgreSQL">
        {
          "50 000 productos con SQL complejo en cada GET /productos. Tráfico x20 en Black Friday; latencia de 200 ms a 8 s. Decisión: cache-aside Redis TTL 10 min; invalidación event-based al actualizar; CDN immutable para assets con hash."
        }
      </Callout>
    </section>
  );
}
