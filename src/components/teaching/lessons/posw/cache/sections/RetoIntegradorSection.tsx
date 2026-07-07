import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { PracticeExercise } from "@/components/teaching/PracticeExercise";

export function RetoIntegradorSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">
        {"Reto integrador: API de noticias"}
      </h2>
      <p className="my-4 font-semibold">{"Optimiza el rendimiento de una API de noticias"}</p>
      <p className="my-4">
        {
          "La API GET /api/v1/articulos tarda 350 ms (JOIN complejo). Recibe 50 000 requests/hora. El 80% pide los mismos 20 artículos destacados."
        }
      </p>
      <ol className="my-4 list-decimal pl-6">
        <li>{"Identifica qué tipo(s) de caché aplicarías (servidor, CDN, navegador) y por qué."}</li>
        <li>{"Diseña la clave Redis y el TTL para un artículo individual y para el listado destacado."}</li>
        <li>
          {
            "Escribe pseudocódigo cache-aside para obtenerArticulo(id) incluyendo invalidación al publicar o editar."
          }
        </li>
        <li>
          {
            "Propón headers HTTP para la imagen de portada (/assets/img/portada-abc123.webp) y para GET /api/v1/usuario/me."
          }
        </li>
        <li>{"Define cómo medirías el hit rate y qué umbral activaría una revisión de la estrategia."}</li>
      </ol>
      <p className="my-4 text-sm text-[var(--color-neutral-mid)]">
        {
          "Criterio de éxito: datos públicos cacheables vs usuario (no-store), TTL justificado, invalidación event-based, métricas definidas."
        }
      </p>
      <CodeFiddle
        language="javascript"
        title="Cache-aside e invalidación para artículos"
        code={`async function obtenerArticulo(id) {
  const key = \`articulo:\${id}\`;
  const hit = await redis.get(key);
  if (hit) return JSON.parse(hit);
  const articulo = await db.getArticulo(id);
  await redis.setEx(key, 600, JSON.stringify(articulo));
  return articulo;
}

async function publicarArticulo(id, datos) {
  const articulo = await db.updateArticulo(id, datos);
  await redis.del(\`articulo:\${id}\`);
  await redis.del("articulos:destacados");
  return articulo;
}`}
      />
      <PracticeExercise
        prompt="Implementa el reto de noticias: claves Redis, TTL, cache-aside con invalidación y headers para portada vs /usuario/me."
        hints={[
          "articulo:{id} TTL 600s",
          "articulos:destacados para listado",
          "Portada: immutable + max-age largo",
          "/usuario/me: no-store",
        ]}
        expectedKeywords={["Redis", "TTL", "no-store", "immutable", "invalidar"]}
        successMessage="Excelente. Has diseñado una estrategia de caché con separación pública/privada y métricas."
        rows={6}
      />
    </section>
  );
}
