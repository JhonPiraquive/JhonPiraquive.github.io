import { CodeFiddle } from "@/components/teaching/CodeFiddle";
import { MermaidDiagram } from "@/components/teaching/MermaidDiagram";
import { StepReveal } from "@/components/teaching/StepReveal";

export function TecnologiasCacheSection() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-[var(--color-primary)]">{"Tecnologías de caché"}</h2>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Mapa mental"}</h3>
      <ul className="my-4 list-disc pl-6">
        <li>{"Redis: estándar de facto; strings, hashes, listas; persistencia opcional; < 1 ms."}</li>
        <li>{"Memcached: solo strings; más simple; sin persistencia; Redis suele ser mejor hoy."}</li>
        <li>{"Service Worker: intercepta peticiones en navegador; Cache API para PWA offline."}</li>
      </ul>
      <h3 className="mt-6 mb-2 text-xl font-semibold">{"Flujo cache-aside"}</h3>
      <MermaidDiagram
        chart={`sequenceDiagram
  participant C as Cliente
  participant A as API
  participant R as Redis
  participant DB as Base de datos
  C->>A: GET /productos/42
  A->>R: GET producto:42
  alt Cache HIT
    R-->>A: JSON cacheado
    A-->>C: 200 OK
  else Cache MISS
    R-->>A: null
    A->>DB: SELECT producto
    DB-->>A: fila
    A->>R: SETEX producto:42 300
    A-->>C: 200 OK
  end`}
      />
      <CodeFiddle
        language="javascript"
        title="Cache-aside con Redis (Node.js)"
        code={`const redis = require("redis");
const client = redis.createClient({ url: "redis://localhost:6379" });

async function obtenerProducto(id) {
  const cacheKey = \`producto:\${id}\`;

  const cached = await client.get(cacheKey);
  if (cached) {
    console.log("Cache HIT");
    return JSON.parse(cached);
  }

  console.log("Cache MISS");
  const producto = await db.query(
    "SELECT * FROM productos WHERE id = $1",
    [id]
  );

  await client.setEx(cacheKey, 300, JSON.stringify(producto));
  return producto;
}`}
      />
      <CodeFiddle
        language="javascript"
        title="Invalidación event-based"
        code={`async function actualizarProducto(id, datos) {
  const producto = await db.query(
    "UPDATE productos SET nombre = $1, precio = $2 WHERE id = $3 RETURNING *",
    [datos.nombre, datos.precio, id]
  );
  await client.del(\`producto:\${id}\`);
  await client.del("productos:lista");
  return producto;
}`}
      />
      <CodeFiddle
        language="javascript"
        title="Service Worker básico"
        code={`self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});`}
      />
      <StepReveal
        title="Pasos del patrón cache-aside"
        steps={[
          {
            title: "1. Buscar clave en Redis",
            content: "GET producto:42 — si existe, es Cache HIT.",
          },
          {
            title: "2. Cache HIT → devolver",
            content: "Parsear JSON y responder al cliente sin tocar la BD.",
          },
          {
            title: "3. Cache MISS → consultar BD",
            content: "SELECT en la fuente original de verdad.",
          },
          {
            title: "4. Guardar en Redis con TTL",
            content: "SETEX producto:42 300 — TTL 5 minutos.",
          },
          {
            title: "5. Devolver JSON al cliente",
            content: "Misma respuesta que en HIT; la próxima vez será más rápida.",
          },
        ]}
      />
    </section>
  );
}
