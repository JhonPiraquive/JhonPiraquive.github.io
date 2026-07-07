# Instrucciones para frontend-developer: cache.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/cache.html`

---

1. Crear `clases/programacion-orientada-sitios-web/cache.html`. `<html lang="es">`. Título: "Caché en Aplicaciones Web | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "¿Qué es?", "Tipos", "Tecnologías", "Headers", "Cuándo usar".
4. Hero: badge "Tema 10", `<h1>` "Caché", subtítulo "Acelera tu aplicación almacenando resultados costosos para reutilizarlos." Botón scroll a `#que-es`.
5. Crear `<section id="que-es">` padding 80px 0. Contiene:
   - `<h2>` "¿Qué es el Caché?".
   - Párrafo: "El caché es una capa de almacenamiento temporal de alta velocidad que guarda copias de datos costosos de computar u obtener, para que futuras solicitudes idénticas se sirvan más rápido. El principio es: si ya calculaste o buscaste algo, guarda el resultado y reutilízalo."
   - Analogía: "Un caché es como tus apuntes de clase. La primera vez que estudias un tema, lo lees del libro (lento). Después, consultas tus apuntes (rápido). Si el libro se actualiza, tus apuntes se vuelven inválidos y debes actualizarlos (invalidación de caché)."
   - Métricas clave en tres tarjetas:
     - `bi-speedometer2` "Latencia sin caché": 100–500ms (consulta DB, red).
     - `bi-lightning-charge` "Latencia con caché": < 1ms (Redis en memoria).
     - `bi-bar-chart-line` "Cache Hit Rate": % de veces que el dato se encuentra en caché. Objetivo: > 90%.
   - Fórmula en bloque monospace: `Cache Hit Rate = (Cache Hits / Total Requests) × 100`
6. Crear `<section id="tipos">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Tipos de Caché".
   - Cuatro tarjetas grandes en grid 2×2 (desktop) / 1×4 (móvil):
     - Browser Cache (Caché del navegador): "El navegador almacena assets estáticos (imágenes, CSS, JS, fuentes) en el disco local. Controlado por headers HTTP: `Cache-Control`, `ETag`, `Last-Modified`. El usuario no vuelve a descargar el mismo archivo mientras sea válido." Ícono `bi-browser-chrome`.
     - Server Cache (Caché del servidor): "El servidor guarda en memoria los resultados de operaciones costosas: consultas SQL lentas, resultados de cálculos, respuestas de APIs externas. Tecnologías: Redis, Memcached. La invalidación es la parte difícil." Ícono `bi-server`.
     - CDN Cache (Content Delivery Network): "Servidores distribuidos globalmente (Cloudflare, AWS CloudFront, Fastly) que cachean contenido estático y dinámico en el nodo más cercano al usuario. Reduce la latencia geográfica drásticamente." Ícono `bi-globe`.
     - Database Cache: "Las bases de datos tienen su propio caché interno (buffer pool en PostgreSQL/MySQL). Además, se puede usar query caching o materializar vistas frecuentemente consultadas." Ícono `bi-database`.
7. Crear `<section id="tecnologias">` padding 80px 0. Contiene:
   - `<h2>` "Tecnologías de Caché".
   - Subsección Redis:
     - Párrafo: "Redis (Remote Dictionary Server) es un almacén de estructuras de datos en memoria, open-source, extremadamente rápido (< 1ms). Soporta: strings, hashes, listas, sets, sorted sets, streams. Puede persistir datos a disco. Es el estándar de facto para caché en producción."
     - Ejemplo de código Node.js con Redis:
       ```javascript
       const redis = require('redis');
       const client = redis.createClient({ url: 'redis://localhost:6379' });

       async function obtenerProducto(id) {
         const cacheKey = `producto:${id}`;

         // Intentar desde caché
         const cached = await client.get(cacheKey);
         if (cached) {
           console.log('Cache HIT');
           return JSON.parse(cached);
         }

         // Si no está en caché, consultar BD
         console.log('Cache MISS');
         const producto = await db.query('SELECT * FROM productos WHERE id = $1', [id]);

         // Guardar en caché por 5 minutos (300 segundos)
         await client.setEx(cacheKey, 300, JSON.stringify(producto));

         return producto;
       }
       ```
   - Subsección Memcached:
     - Párrafo: "Memcached es más simple que Redis: solo soporta strings. Es extremadamente rápido para casos de uso simples. No tiene persistencia ni replicación nativa. Elegir Redis casi siempre es mejor hoy en día."
   - Subsección Service Worker (Browser):
     - Párrafo: "Los Service Workers permiten interceptar peticiones de red en el navegador y servir respuestas desde un caché local (Cache API). Habilitan aplicaciones offline-first (PWA)."
     - Ejemplo básico de Service Worker:
       ```javascript
       self.addEventListener('fetch', (event) => {
         event.respondWith(
           caches.match(event.request).then((cached) => {
             return cached || fetch(event.request);
           })
         );
       });
       ```
8. Crear `<section id="headers">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Headers HTTP de Caché".
   - Tabla: Header | Propósito | Ejemplo. Datos:
     - `Cache-Control` | Directiva principal de control de caché | `Cache-Control: max-age=3600, public`
     - `ETag` | Identificador de versión del recurso | `ETag: "abc123xyz"`
     - `Last-Modified` | Fecha de última modificación | `Last-Modified: Wed, 01 Jan 2025 00:00:00 GMT`
     - `Expires` | Fecha de expiración absoluta (obsoleto) | `Expires: Thu, 02 Jan 2025 00:00:00 GMT`
     - `Vary` | Indica qué headers afectan la caché | `Vary: Accept-Encoding, Accept-Language`
   - Directivas `Cache-Control` en tabla: Directiva | Efecto. Datos:
     - `max-age=N` | El recurso es válido por N segundos desde la petición
     - `no-cache` | Siempre revalidar con el servidor antes de usar la copia
     - `no-store` | No cachear en absoluto (datos sensibles)
     - `public` | Puede ser cacheado por proxies y CDN
     - `private` | Solo para el navegador del usuario (no CDN)
     - `must-revalidate` | Una vez expirado, no usar la copia sin revalidar
   - Bloque de código HTTP de ejemplo de respuesta con caché:
     ```
     HTTP/1.1 200 OK
     Content-Type: image/webp
     Cache-Control: max-age=31536000, public, immutable
     ETag: "v2-a3f9b2c1"
     Content-Length: 45820
     ```
9. Crear `<section id="cuando">` padding 80px 0. Contiene:
   - `<h2>` "¿Cuándo y Qué Cachear?".
   - Tabla: Tipo de dato | ¿Cachear? | TTL recomendado | Estrategia. Datos:
     - Assets estáticos (JS, CSS, imágenes) | Sí | 1 año (con hash en nombre) | Cache-Control: immutable
     - Páginas HTML | Depende | 0–5 min | Revalidar con ETag
     - Respuesta de API (datos estables) | Sí | 5–60 min | Redis con TTL
     - Respuesta de API (datos de usuario) | No (o corta duración) | 0–30 seg | Cache privado
     - Datos en tiempo real | No | 0 | No cachear
     - Contraseñas, tokens, datos privados | NUNCA | — | no-store
   - Estrategias de invalidación en lista:
     - Time-based (TTL): el dato expira después de N segundos. Simple pero puede servir datos desactualizados.
     - Event-based: cuando se modifica el dato, se invalida el caché explícitamente (borra la clave en Redis).
     - Versioning: cambiar el nombre del asset con el hash del contenido (`app.a3f9b2.js`). El caché "nunca expira" porque el nombre cambia.
   - Advertencia en tarjeta: "Cache invalidation es uno de los dos problemas difíciles en Ciencias de la Computación (junto con nombrar cosas). Un caché mal invalidado sirve datos incorrectos a usuarios reales."
10. Sección recursos: `backend.html`, `http-headers.html`, `bases-de-datos.html`, `protocolos-seguridad.html`.
11. Footer estándar. Highlight.js. Animaciones. Responsivo.
