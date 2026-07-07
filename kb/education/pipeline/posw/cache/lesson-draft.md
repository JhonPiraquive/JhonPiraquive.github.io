---
track: posw
slug: cache
title: "Caché en Aplicaciones Web"
order: 11
prerequisites:
  - backend
  - http-headers
related:
  - rest-principios
  - backend
  - http-headers
  - bases-de-datos
  - protocolos-seguridad
source_brief: kb/education/pipeline/posw/cache/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - QueEsCacheSection
  - TiposCacheSection
  - TecnologiasCacheSection
  - HeadersCacheSection
  - CuandoUsarCacheSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** caché como almacenamiento temporal de alta velocidad que reutiliza resultados costosos de computar u obtener.
- **Clasificar** los cuatro tipos de caché: navegador, servidor, CDN y base de datos; indicar tecnología y caso de uso de cada uno.
- **Calcular** e interpretar el Cache Hit Rate y relacionar latencia sin caché (100–500 ms) vs con caché Redis (< 1 ms).
- **Configurar** headers HTTP de caché (`Cache-Control`, `ETag`, `Last-Modified`, `Vary`) y elegir directivas según tipo de dato.
- **Implementar** el patrón cache-aside con Redis en Node.js y aplicar estrategias de invalidación (TTL, event-based, versioning).

## Prerrequisitos

- **Lección `backend`:** capas servidor, APIs y acceso a base de datos.
- **Lección `http-headers`:** headers de request/response y semántica HTTP.
- Familiaridad con JSON y peticiones GET.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección explica qué es la caché, sus tipos, tecnologías (Redis, CDN), headers HTTP y cuándo cachear o invalidar datos.

<!-- interactive: Callout -->
{
  "title": "Invalidar caché es difícil",
  "children": "Cache invalidation is one of the two hard problems in Computer Science. Un caché mal invalidado sirve precios, stock o datos de otro usuario a clientes reales."
}

---

### 1) ¿Qué es la caché?

**Sección TSX:** `QueEsCacheSection`

#### Mapa mental

- **Caché:** guarda copias de datos costosos para servir solicitudes idénticas más rápido.
- **Principio:** si ya calculaste o buscaste algo, guarda el resultado y reutilízalo.
- **Cache Hit Rate:** `(Hits / Total Requests) × 100`; objetivo en producción > 90%.
- **Latencia:** sin caché 100–500 ms (BD/red); con Redis < 1 ms.

#### Analogía de apuntes

La primera vez lees del libro (lento); después consultas apuntes (rápido). Si el libro se actualiza, los apuntes quedan inválidos — eso es **invalidación**.

#### Métricas clave

<!-- interactive: CompareTable -->
{
  "headers": ["Métrica", "Fórmula / valor", "Implicación"],
  "rows": [
    ["Cache Hit Rate", "(Hits / Total) × 100", "> 90% reduce carga en BD"],
    ["Latencia sin caché", "100–500 ms", "Consulta SQL, API externa"],
    ["Latencia con Redis", "< 1 ms", "Memoria en servidor"],
    ["Cache MISS", "Dato no en caché", "Consulta fuente original + SET en caché"]
  ]
}

#### Práctica: calcular hit rate

<!-- interactive: PracticeExercise -->
{
  "prompt": "De 10 000 requests, 9 200 fueron HIT y 800 MISS. Calcula el Cache Hit Rate. ¿Cumple el objetivo de > 90%? ¿Qué implica para la base de datos?",
  "hints": ["Hits / Total × 100", "9200/10000", "Menos consultas a BD"],
  "expectedKeywords": ["92%", "90%", "HIT", "base de datos"],
  "successMessage": "Correcto. Hit Rate = 92%; cumple > 90% y reduce drásticamente consultas a la fuente original."
}

---

### 2) Tipos de caché

**Sección TSX:** `TiposCacheSection`

#### Mapa mental

- **Browser Cache:** assets estáticos en disco local; controlado por headers HTTP.
- **Server Cache:** resultados de operaciones costosas; Redis, Memcached.
- **CDN Cache:** servidores globales cerca del usuario; Cloudflare, CloudFront.
- **Database Cache:** buffer pool interno, vistas materializadas.

#### Arquitectura de tipos

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  U[Usuario] --> BR[Browser Cache]\n  U --> CDN[CDN Cache]\n  CDN --> API[Backend API]\n  API --> SR[Server Cache Redis]\n  API --> DB[(Database Cache / BD)]"
}

#### Comparativa por tipo

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo", "Dónde vive", "Qué guarda", "Tecnología"],
  "rows": [
    ["Navegador", "Disco del cliente", "CSS, JS, imágenes, fuentes", "Cache-Control, ETag"],
    ["Servidor", "Memoria del backend", "Resultados SQL, APIs externas", "Redis, Memcached"],
    ["CDN", "Edge global", "Assets estáticos, HTML cacheable", "Cloudflare, CloudFront"],
    ["Base de datos", "Motor DB", "Páginas en buffer pool", "PostgreSQL, MySQL"]
  ]
}

#### Caso real: Black Friday sin caché

<!-- interactive: Callout -->
{
  "title": "E-commerce: catálogo sin caché tumba PostgreSQL",
  "children": "50 000 productos con SQL complejo en cada GET /productos. Tráfico x20 en Black Friday; latencia de 200 ms a 8 s. Decisión: cache-aside Redis TTL 10 min; invalidación event-based al actualizar; CDN immutable para assets con hash."
}

---

### 3) Tecnologías de caché

**Sección TSX:** `TecnologiasCacheSection`

#### Mapa mental

- **Redis:** estándar de facto; strings, hashes, listas; persistencia opcional; < 1 ms.
- **Memcached:** solo strings; más simple; sin persistencia; Redis suele ser mejor hoy.
- **Service Worker:** intercepta peticiones en navegador; Cache API para PWA offline.

#### Flujo cache-aside

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente\n  participant A as API\n  participant R as Redis\n  participant DB as Base de datos\n  C->>A: GET /productos/42\n  A->>R: GET producto:42\n  alt Cache HIT\n    R-->>A: JSON cacheado\n    A-->>C: 200 OK\n  else Cache MISS\n    R-->>A: null\n    A->>DB: SELECT producto\n    DB-->>A: fila\n    A->>R: SETEX producto:42 300\n    A-->>C: 200 OK\n  end"
}

#### Cache-aside con Redis (Node.js)

<!-- code: javascript -->
```javascript
const redis = require("redis");
const client = redis.createClient({ url: "redis://localhost:6379" });

async function obtenerProducto(id) {
  const cacheKey = `producto:${id}`;

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
}
```

#### Invalidación event-based

<!-- code: javascript -->
```javascript
async function actualizarProducto(id, datos) {
  const producto = await db.query(
    "UPDATE productos SET nombre = $1, precio = $2 WHERE id = $3 RETURNING *",
    [datos.nombre, datos.precio, id]
  );
  await client.del(`producto:${id}`);
  await client.del("productos:lista");
  return producto;
}
```

#### Service Worker básico

<!-- code: javascript -->
```javascript
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request);
    })
  );
});
```

#### Ordenar flujo cache-aside

<!-- interactive: StepReveal -->
{
  "title": "Pasos del patrón cache-aside",
  "steps": [
    {
      "title": "1. Buscar clave en Redis",
      "content": "GET producto:42 — si existe, es Cache HIT."
    },
    {
      "title": "2. Cache HIT → devolver",
      "content": "Parsear JSON y responder al cliente sin tocar la BD."
    },
    {
      "title": "3. Cache MISS → consultar BD",
      "content": "SELECT en la fuente original de verdad."
    },
    {
      "title": "4. Guardar en Redis con TTL",
      "content": "SETEX producto:42 300 — TTL 5 minutos."
    },
    {
      "title": "5. Devolver JSON al cliente",
      "content": "Misma respuesta que en HIT; la próxima vez será más rápida."
    }
  ]
}

---

### 4) Headers HTTP de caché

**Sección TSX:** `HeadersCacheSection`

#### Mapa mental

- **Cache-Control:** directiva principal (`max-age`, `no-cache`, `no-store`, `public`, `private`, `immutable`).
- **ETag:** versión del recurso para revalidación condicional.
- **Last-Modified:** fecha de última modificación.
- **Vary:** qué headers afectan la variante cacheada.

#### Asset estático cacheable

<!-- code: http -->
```http
HTTP/1.1 200 OK
Content-Type: image/webp
Cache-Control: max-age=31536000, public, immutable
ETag: "v2-a3f9b2c1"
Content-Length: 45820
```

#### Dato sensible no cacheable

<!-- code: http -->
```http
HTTP/1.1 200 OK
Content-Type: application/json
Cache-Control: no-store, no-cache, private
```

#### Directivas Cache-Control

<!-- interactive: CompareTable -->
{
  "headers": ["Directiva", "Efecto", "Cuándo usar"],
  "rows": [
    ["max-age=N", "Válido N segundos", "Catálogo API 5–60 min"],
    ["no-cache", "Revalidar antes de usar", "HTML dinámico con ETag"],
    ["no-store", "No almacenar nunca", "Tokens, datos de usuario"],
    ["public", "CDN y proxies pueden cachear", "Assets estáticos públicos"],
    ["private", "Solo navegador del usuario", "Datos personalizados"],
    ["immutable", "No revalidar si no cambió nombre", "app.a3f9b2.js con hash"]
  ]
}

#### Completar directivas

<!-- interactive: CodeChallenge -->
{
  "title": "Completa las directivas Cache-Control",
  "template": "Asset con hash en nombre → Cache-Control: max-age=31536000, public, ___\nToken de sesión → Cache-Control: ___\nCatálogo en Redis → TTL ___ segundos (5 min)",
  "blanks": [
    { "id": "blank1", "answer": "immutable", "placeholder": "directiva" },
    { "id": "blank2", "answer": "no-store", "placeholder": "directiva" },
    { "id": "blank3", "answer": "300", "placeholder": "segundos" }
  ]
}

---

### 5) Cuándo usar caché

**Sección TSX:** `CuandoUsarCacheSection`

#### Mapa mental

- **Sí cachear:** assets estáticos (1 año, immutable); API datos estables (5–60 min Redis).
- **Con cuidado:** HTML (0–5 min, ETag); datos de usuario (TTL corto, private).
- **No cachear:** tiempo real; contraseñas/tokens (`no-store`).

#### Qué cachear y qué no

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo de dato", "¿Cachear?", "TTL / estrategia", "Riesgo si falla"],
  "rows": [
    ["CSS/JS con hash", "Sí", "1 año, immutable", "Bajo — hash cambia con contenido"],
    ["Catálogo productos", "Sí", "Redis 5–10 min + invalidación", "Stock/precio desactualizado"],
    ["GET /usuario/me", "No o private corto", "no-store", "Filtración entre usuarios"],
    ["Token JWT", "NUNCA", "no-store", "Robo de sesión"],
    ["Inventario crítico", "TTL corto + event-based", "Invalidar al UPDATE", "Venta de stock inexistente"]
  ]
}

#### Caso real: caché privado mal configurado

<!-- interactive: Callout -->
{
  "title": "SaaS analytics: datos de usuario filtrados",
  "children": "GET /api/reportes con Cache-Control: public, max-age=3600 en proxy compartido. Usuario A ve brevemente el reporte de Usuario B. Decisión: private, no-store para datos autenticados; claves Redis con prefijo reporte:{userId}:; Vary: Authorization si aplica CDN."
}

#### Producto en caché (JSON)

<!-- code: json -->
```json
{
  "id": 42,
  "nombre": "Monitor 27\"",
  "precio": 890000,
  "_cached": true,
  "ttl_remaining_sec": 245
}
```

---

### Resumen

**Sección TSX:** `ResumenSection`

- **Caché** reutiliza resultados costosos; objetivo Hit Rate > 90%.
- **Cuatro tipos:** navegador, servidor (Redis), CDN, base de datos.
- **Cache-aside:** buscar en Redis → HIT o MISS → BD → SET con TTL → invalidar al escribir.
- **Headers:** `Cache-Control` es la directiva principal; `no-store` para datos sensibles; `immutable` para assets con hash.
- **Invalidación:** TTL, event-based (del al actualizar), versioning (hash en nombre de archivo).
- **Siguiente lección:** `rest-principios` — Cacheable como constraint REST.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué header HTTP usarías para un token de sesión en GET /api/v1/usuario/me y por qué?",
  "hints": ["no-store", "Datos sensibles", "No compartir entre usuarios"],
  "expectedKeywords": ["no-store", "private", "sensible", "token"],
  "successMessage": "Correcto. no-store (y private) evita que proxies o navegador persistan datos de sesión."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Actualizas el precio de un producto en BD pero los usuarios siguen viendo el precio viejo. ¿Qué falló en la estrategia de caché y cómo lo corriges?",
  "hints": ["Clave Redis producto:42", "Invalidación event-based", "del al UPDATE"],
  "expectedKeywords": ["invalidar", "Redis", "del", "TTL"],
  "successMessage": "Correcto. Falta invalidar la clave al actualizar; await client.del(`producto:${id}`) tras el UPDATE."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Cuándo elegirías CDN vs Redis server-side para acelerar GET /api/v1/articulos con 50k req/hora?",
  "hints": ["CDN = assets estáticos cerca del usuario", "Redis = respuestas API dinámicas", "80% mismos artículos"],
  "expectedKeywords": ["Redis", "servidor", "API", "CDN", "estático"],
  "successMessage": "Correcto. Redis cache-aside para la API dinámica; CDN para imágenes/assets; navegador con headers para estáticos."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Optimiza el rendimiento de una API de noticias"**

La API `GET /api/v1/articulos` tarda 350 ms (JOIN complejo). Recibe 50 000 requests/hora. El 80% pide los mismos 20 artículos destacados.

1. Identifica qué tipo(s) de caché aplicarías (servidor, CDN, navegador) y por qué.
2. Diseña la clave Redis y el TTL para un artículo individual y para el listado destacado.
3. Escribe pseudocódigo cache-aside para `obtenerArticulo(id)` incluyendo invalidación al publicar o editar.
4. Propón headers HTTP para la imagen de portada (`/assets/img/portada-abc123.webp`) y para `GET /api/v1/usuario/me`.
5. Define cómo medirías el hit rate y qué umbral activaría una revisión de la estrategia.

**Criterio de éxito:** datos públicos cacheables vs usuario (`no-store`), TTL justificado, invalidación event-based, métricas definidas.

<!-- code: javascript -->
```javascript
async function obtenerArticulo(id) {
  const key = `articulo:${id}`;
  const hit = await redis.get(key);
  if (hit) return JSON.parse(hit);
  const articulo = await db.getArticulo(id);
  await redis.setEx(key, 600, JSON.stringify(articulo));
  return articulo;
}

async function publicarArticulo(id, datos) {
  const articulo = await db.updateArticulo(id, datos);
  await redis.del(`articulo:${id}`);
  await redis.del("articulos:destacados");
  return articulo;
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto de noticias: claves Redis, TTL, cache-aside con invalidación y headers para portada vs /usuario/me.",
  "hints": [
    "articulo:{id} TTL 600s",
    "articulos:destacados para listado",
    "Portada: immutable + max-age largo",
    "/usuario/me: no-store"
  ],
  "expectedKeywords": ["Redis", "TTL", "no-store", "immutable", "invalidar"],
  "successMessage": "Excelente. Has diseñado una estrategia de caché con separación pública/privada y métricas."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado caché web: tipos, Redis cache-aside, headers HTTP y cuándo invalidar. La caché acelera pero exige disciplina en invalidación.

**Ideas clave para retener:**

- **Mide el Hit Rate** — sin métricas no sabes si el caché ayuda o solo complica.
- **Nunca cachees tokens ni datos de usuario en CDN pública** sin `private`/`no-store`.
- **Invalida al escribir** — TTL solo no basta para inventario o precios críticos.
- **Assets con hash → immutable** — caché larga sin riesgo de versión vieja.

**Siguiente paso:** lección `rest-principios` — el constraint Cacheable en REST.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué mide el Cache Hit Rate?",
      "options": [
        "Cuánto pesa el caché en disco",
        "El porcentaje de requests servidas desde caché sin ir a la fuente original",
        "La velocidad de Redis en MB/s",
        "Cuántas claves tiene Memcached"
      ],
      "correctIndex": 1,
      "feedback": "Hit Rate = (Hits / Total Requests) × 100. Objetivo típico: > 90%."
    },
    {
      "question": "¿Qué header HTTP indica que un recurso no debe almacenarse en ningún caché?",
      "options": [
        "Cache-Control: max-age=3600",
        "Cache-Control: public",
        "Cache-Control: no-store",
        "ETag: \"abc123\""
      ],
      "correctIndex": 2,
      "feedback": "no-store prohíbe almacenar la respuesta; obligatorio para tokens y datos sensibles."
    },
    {
      "question": "En el patrón cache-aside, ¿qué ocurre en un Cache MISS?",
      "options": [
        "Se devuelve error 404 al cliente",
        "Se consulta la fuente original, se guarda en caché y se devuelve el dato",
        "Se espera a que expire el TTL",
        "Se borra toda la base de datos"
      ],
      "correctIndex": 1,
      "feedback": "En MISS se obtiene el dato de BD (o API externa), se escribe en Redis con TTL y luego se responde."
    },
    {
      "question": "¿Qué tecnología es el estándar de facto para caché en servidor en producción?",
      "options": [
        "SQLite",
        "Redis",
        "FTP",
        "localStorage del navegador"
      ],
      "correctIndex": 1,
      "feedback": "Redis es un almacén en memoria extremadamente rápido (< 1 ms) con estructuras de datos ricas."
    },
    {
      "question": "Assets estáticos con hash en el nombre (app.a3f9b2.js) deberían usar:",
      "options": [
        "Cache-Control: no-store",
        "Cache-Control: max-age=31536000, public, immutable",
        "Sin headers de caché",
        "Cache-Control: private solo para CDN"
      ],
      "correctIndex": 1,
      "feedback": "El hash en el nombre cambia cuando cambia el contenido; immutable permite caché larga sin riesgo de versión vieja."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Caché en Aplicaciones Web: Redis, CDN y Headers | POSW
- **seoDescription:** Aprende tipos de caché, Cache Hit Rate, patrón cache-aside con Redis, headers Cache-Control y estrategias de invalidación. Lección 11 del track POSW.
