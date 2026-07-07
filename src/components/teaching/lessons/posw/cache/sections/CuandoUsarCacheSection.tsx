import { Callout } from "@/components/teaching/Callout";
import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { CompareTable } from "@/components/teaching/CompareTable";

export function CuandoUsarCacheSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Cuándo usar caché"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Sí cachear: assets estáticos (1 año, immutable); API datos estables (5–60 min Redis)."}</li>
        <li>{"Con cuidado: HTML (0–5 min, ETag); datos de usuario (TTL corto, private)."}</li>
        <li>{"No cachear: tiempo real; contraseñas/tokens (no-store)."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Qué cachear y qué no"}</h3>
      <CompareTable
        headers={["Tipo de dato", "¿Cachear?", "TTL / estrategia", "Riesgo si falla"]}
        rows={[
          ["CSS/JS con hash", "Sí", "1 año, immutable", "Bajo — hash cambia con contenido"],
          ["Catálogo productos", "Sí", "Redis 5–10 min + invalidación", "Stock/precio desactualizado"],
          ["GET /usuario/me", "No o private corto", "no-store", "Filtración entre usuarios"],
          ["Token JWT", "NUNCA", "no-store", "Robo de sesión"],
          ["Inventario crítico", "TTL corto + event-based", "Invalidar al UPDATE", "Venta de stock inexistente"],
        ]}
      />
      <Callout title="SaaS analytics: datos de usuario filtrados">
        {
          "GET /api/reportes con Cache-Control: public, max-age=3600 en proxy compartido. Usuario A ve brevemente el reporte de Usuario B. Decisión: private, no-store para datos autenticados; claves Redis con prefijo reporte:{userId}:; Vary: Authorization si aplica CDN."
        }
      </Callout>
      <CodeFiddle
        language="json"
        title="Producto en caché (JSON)"
        code={`{
  "id": 42,
  "nombre": "Monitor 27\\"",
  "precio": 890000,
  "_cached": true,
  "ttl_remaining_sec": 245
}`}
      />
    </section>
  );
}
