# Instrucciones para frontend-developer: http-headers.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/http-headers.html`

---

1. Crear `clases/programacion-orientada-sitios-web/http-headers.html`. `<html lang="es">`. Título: "HTTP Headers | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "¿Qué son?", "Request", "Response", "General/Entity", "CORS", "Seguridad".
4. Hero: badge "Tema 11", `<h1>` "HTTP Headers", subtítulo "Metadatos que acompañan cada petición y respuesta HTTP." Botón scroll a `#que-son`.
5. Crear `<section id="que-son">` padding 80px 0. Contiene:
   - `<h2>` "¿Qué son los HTTP Headers?".
   - Párrafo: "Los headers HTTP son pares clave-valor que acompañan cada petición y respuesta HTTP. Transportan metadatos: qué formato tienen los datos, quién hace la petición, qué tipo de respuesta se acepta, información de autenticación, instrucciones de caché, políticas de seguridad y mucho más. El cuerpo (body) lleva los datos; los headers llevan las instrucciones sobre esos datos."
   - Estructura de un mensaje HTTP completo en bloque código:
     ```
     GET /api/productos/42 HTTP/1.1        ← Línea de inicio (método + URI + versión)
     Host: api.ejemplo.com                 ← Headers
     Accept: application/json              ←
     Authorization: Bearer eyJhb...        ←
     Accept-Encoding: gzip, deflate, br    ←
     User-Agent: Mozilla/5.0 (Linux)       ←
                                           ← Línea en blanco (separa headers de body)
     (sin body en GET)
     ```
   - Cuatro categorías en tarjetas de colores:
     - Request Headers (azul `--accent`): enviados por el cliente para describir la petición y el cliente.
     - Response Headers (verde `#2ed573`): enviados por el servidor para describir la respuesta y el servidor.
     - General Headers (amarillo `#ffa502`): aplicables tanto a request como a response.
     - Entity Headers (lila `--accent2`): describen el cuerpo del mensaje (Content-Type, Content-Length).
6. Crear `<section id="request">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Request Headers — Cabeceras de Petición".
   - Tabla con columnas: Header | Propósito | Ejemplo real. Datos:
     - `Host` | Dominio del servidor destino (obligatorio en HTTP/1.1) | `Host: api.github.com`
     - `Authorization` | Credenciales de autenticación | `Authorization: Bearer eyJhbGci...`
     - `Accept` | Tipos de media que el cliente acepta | `Accept: application/json, text/html`
     - `Accept-Language` | Idiomas preferidos del cliente | `Accept-Language: es-CO, es;q=0.9, en;q=0.8`
     - `Accept-Encoding` | Algoritmos de compresión soportados | `Accept-Encoding: gzip, deflate, br`
     - `Content-Type` | Tipo de media del cuerpo enviado | `Content-Type: application/json`
     - `Content-Length` | Tamaño del cuerpo en bytes | `Content-Length: 234`
     - `User-Agent` | Identificador del cliente/navegador | `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)`
     - `Cookie` | Cookies almacenadas por el navegador | `Cookie: session=abc123; theme=dark`
     - `Origin` | Origen de la petición (CORS) | `Origin: https://app.ejemplo.com`
     - `Referer` | URL de la página que originó la petición | `Referer: https://ejemplo.com/productos`
     - `If-None-Match` | ETag previo para revalidación condicional | `If-None-Match: "abc123xyz"`
     - `X-Forwarded-For` | IP del cliente original (proxies/balanceadores) | `X-Forwarded-For: 190.25.15.42`
7. Crear `<section id="response">` padding 80px 0. Contiene:
   - `<h2>` "Response Headers — Cabeceras de Respuesta".
   - Tabla similar: Header | Propósito | Ejemplo real. Datos:
     - `Content-Type` | Tipo de media del cuerpo de la respuesta | `Content-Type: application/json; charset=utf-8`
     - `Content-Length` | Tamaño del cuerpo en bytes | `Content-Length: 1842`
     - `Content-Encoding` | Compresión aplicada | `Content-Encoding: gzip`
     - `Cache-Control` | Instrucciones de caché | `Cache-Control: max-age=3600, public`
     - `ETag` | Versión del recurso (para caché condicional) | `ETag: "v3-a3f9b2c1"`
     - `Last-Modified` | Última modificación del recurso | `Last-Modified: Mon, 06 Jan 2025 10:00:00 GMT`
     - `Location` | URI del recurso creado (en 201) o redirección | `Location: /api/productos/99`
     - `Set-Cookie` | Establece cookies en el cliente | `Set-Cookie: session=abc; HttpOnly; Secure; SameSite=Strict`
     - `Access-Control-Allow-Origin` | Orígenes permitidos (CORS) | `Access-Control-Allow-Origin: https://app.ejemplo.com`
     - `WWW-Authenticate` | Esquema de autenticación requerido (en 401) | `WWW-Authenticate: Bearer realm="api"`
     - `Retry-After` | Cuánto esperar antes de reintentar (en 429/503) | `Retry-After: 60`
     - `X-RateLimit-Remaining` | Requests restantes en la ventana actual | `X-RateLimit-Remaining: 42`
8. Crear `<section id="cors">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "CORS — Cross-Origin Resource Sharing".
   - Párrafo: "CORS es un mecanismo de seguridad del navegador que bloquea peticiones HTTP de un origen (dominio) a otro diferente, a menos que el servidor de destino lo permita explícitamente mediante headers específicos. Las peticiones 'simple' (GET/POST con Content-Type básico) no requieren preflight. Las peticiones 'complejas' (con headers custom, PUT, DELETE, Authorization) disparan una petición OPTIONS preflight."
   - Flujo preflight en diagrama ASCII:
     ```
     NAVEGADOR (app.frontend.com)       SERVIDOR (api.backend.com)
           │                                    │
           │── OPTIONS /api/datos ─────────────►│
           │   Origin: https://app.frontend.com │
           │   Access-Control-Request-Method: PUT│
           │                                    │
           │◄── 204 No Content ─────────────────│
           │    Access-Control-Allow-Origin: *  │
           │    Access-Control-Allow-Methods:   │
           │      GET, POST, PUT, DELETE        │
           │    Access-Control-Max-Age: 86400   │
           │                                    │
           │── PUT /api/datos ─────────────────►│  (request real)
           │◄── 200 OK {datos} ─────────────────│
     ```
   - Headers CORS en tabla: Header | Dirección | Propósito. Datos:
     - `Origin` | Request | Indica el origen del cliente
     - `Access-Control-Allow-Origin` | Response | Orígenes permitidos (`*` o específico)
     - `Access-Control-Allow-Methods` | Response | Métodos HTTP permitidos
     - `Access-Control-Allow-Headers` | Response | Headers personalizados permitidos
     - `Access-Control-Allow-Credentials` | Response | Si se permiten cookies/credenciales
     - `Access-Control-Max-Age` | Response | Segundos que el preflight es cacheado
9. Crear `<section id="seguridad">` padding 80px 0. Contiene:
   - `<h2>` "Headers de Seguridad".
   - Párrafo: "Estos headers no son obligatorios por HTTP, pero son esenciales para proteger aplicaciones web en producción. Definen políticas que el navegador aplica para mitigar ataques comunes."
   - Tabla: Header | Ataque que mitiga | Ejemplo. Datos:
     - `Strict-Transport-Security (HSTS)` | Downgrade a HTTP | `max-age=31536000; includeSubDomains`
     - `Content-Security-Policy (CSP)` | XSS, clickjacking | `default-src 'self'; script-src 'self' cdn.ejemplo.com`
     - `X-Frame-Options` | Clickjacking | `DENY` o `SAMEORIGIN`
     - `X-Content-Type-Options` | MIME sniffing | `nosniff`
     - `Referrer-Policy` | Fuga de URL en Referer | `strict-origin-when-cross-origin`
     - `Permissions-Policy` | Acceso a APIs del navegador | `camera=(), microphone=(), geolocation=()`
   - Bloque de código con configuración de headers de seguridad en Express.js usando Helmet:
     ```javascript
     const helmet = require('helmet');
     app.use(helmet());

     // Equivale a configurar automáticamente:
     // - HSTS
     // - X-Content-Type-Options: nosniff
     // - X-Frame-Options: SAMEORIGIN
     // - Content-Security-Policy (básico)
     // - Referrer-Policy
     ```
10. Sección recursos: `protocolos-seguridad.html`, `cache.html`, `tokens.html`, `rest-principios.html`.
11. Footer estándar. Highlight.js. Animaciones. Responsivo con scroll horizontal en tablas.
