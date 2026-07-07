---
track: posw
slug: http-headers
title: "HTTP Headers"
order: 5
prerequisites:
  - http-metodos-status
  - protocolos-seguridad
related:
  - cache
  - tokens
  - rest-principios
source: kb/education/sources/clases/programacion-orientada-sitios-web/http-headers.md
topic_expert: topic-expert-web-services
---

## Objetivos medibles

Al finalizar la lección el estudiante podrá:

1. Definir **HTTP headers** como pares clave-valor de metadatos que acompañan petición y respuesta, separados del cuerpo por una línea en blanco.
2. Clasificar headers en **Request**, **Response**, **General** y **Entity**, con ejemplos reales (`Host`, `Authorization`, `Content-Type`, `Cache-Control`).
3. Explicar el flujo **CORS preflight** (OPTIONS → headers `Access-Control-*` → petición real) y cuándo el navegador lo dispara.
4. Configurar headers de **seguridad** esenciales (HSTS, CSP, X-Frame-Options, X-Content-Type-Options) y el ataque que cada uno mitiga.
5. Interpretar un **mensaje HTTP completo** identificando línea de inicio, headers de request/response y su relación con métodos y códigos de estado vistos previamente.

## Conceptos clave

- **HTTP headers:** pares **clave-valor** en cada mensaje HTTP. Transportan metadatos: formato del cuerpo, autenticación, caché, seguridad, CORS. El **body** lleva datos; los **headers** llevan instrucciones sobre esos datos.
- **Estructura del mensaje:** línea de inicio (`GET /api/productos/42 HTTP/1.1`) → headers → línea en blanco → body opcional.
- **Request headers:** enviados por el **cliente** (`Host`, `Authorization`, `Accept`, `User-Agent`, `Cookie`, `Origin`).
- **Response headers:** enviados por el **servidor** (`Content-Type`, `ETag`, `Set-Cookie`, `Location`, `Access-Control-Allow-Origin`).
- **General headers:** aplicables a request y response (`Cache-Control`, `Connection`, `Date`).
- **Entity headers:** describen el **cuerpo** (`Content-Type`, `Content-Length`, `Content-Encoding`).
- **`Host`:** dominio destino; **obligatorio** en HTTP/1.1 (`Host: api.github.com`).
- **`Authorization`:** credenciales (`Bearer eyJhbGci...` para JWT).
- **`Accept`:** tipos de media que el cliente acepta (`application/json, text/html`).
- **`Content-Type`:** tipo de media del cuerpo enviado o recibido (`application/json; charset=utf-8`).
- **`Content-Length`:** tamaño del cuerpo en bytes.
- **`User-Agent`:** identificador del cliente/navegador.
- **`Cookie` / `Set-Cookie`:** estado en cliente; `Set-Cookie` con flags `HttpOnly`, `Secure`, `SameSite=Strict`.
- **`Cache-Control`:** instrucciones de caché (`max-age=3600, public`).
- **`ETag` / `If-None-Match`:** versión del recurso para revalidación condicional (304 Not Modified).
- **`Location`:** URI del recurso creado (201) o destino de redirección (3xx).
- **`WWW-Authenticate`:** esquema requerido en respuesta 401 (`Bearer realm="api"`).
- **`Retry-After`:** segundos antes de reintentar (429, 503).
- **`X-RateLimit-Remaining`:** requests restantes (convención común, no estándar IETF).
- **`X-Forwarded-For`:** IP original del cliente detrás de proxy/balanceador.
- **CORS (Cross-Origin Resource Sharing):** mecanismo del **navegador** que bloquea peticiones entre orígenes distintos salvo permiso explícito del servidor vía headers `Access-Control-*`.
- **Petición simple vs compleja:** GET/POST con Content-Type básico → sin preflight; PUT, DELETE, `Authorization`, headers custom → **preflight OPTIONS**.
- **Preflight:** navegador envía OPTIONS con `Origin` y `Access-Control-Request-Method`; servidor responde `Access-Control-Allow-Origin`, `Allow-Methods`, `Allow-Headers`, `Max-Age`.
- **Headers de seguridad:** HSTS (fuerza HTTPS), CSP (mitiga XSS), `X-Frame-Options` (clickjacking), `X-Content-Type-Options: nosniff` (MIME sniffing), `Referrer-Policy`, `Permissions-Policy`.

## Errores comunes

- **Olvidar `Content-Type: application/json` en POST/PUT/PATCH:** el servidor no parsea el cuerpo correctamente → 400 Bad Request.
- **Omitir `Host` en HTTP/1.1:** petición malformada; proxies y servidores virtuales fallan.
- **Poner credenciales en query string en lugar de `Authorization`:** URLs se loguean y cachean; exponen tokens.
- **Configurar `Access-Control-Allow-Origin: *` con cookies:** incompatible con credenciales; usar origen específico + `Allow-Credentials: true`.
- **Ignorar preflight en APIs con PUT/DELETE:** el frontend falla en navegador aunque curl funcione.
- **No enviar `ETag` en recursos cacheables:** pierdes 304 y desperdicias ancho de banda.
- **Cookies sin `HttpOnly` y `Secure`:** vulnerables a XSS y envío por HTTP.
- **Confundir `Origin` con `Referer`:** Origin es solo esquema+host+puerto; Referer es URL completa de la página anterior.
- **Desplegar sin HSTS ni CSP en producción:** dejas abierto downgrade HTTP y XSS/clickjacking.
- **Asumir que headers de rate limit son estándar:** `X-RateLimit-*` son convenciones; documentar en tu API.

## Casos reales

### 1. SPA en producción: CORS bloquea el login

Un equipo despliega el frontend en `https://app.ejemplo.com` y la API en `https://api.ejemplo.com`. Las peticiones `POST /api/login` con `Content-Type: application/json` y `Authorization` fallan en Chrome con error CORS, pero Postman funciona.

**Diagnóstico:** el navegador envía **preflight OPTIONS** que el servidor no maneja (405 o sin headers `Access-Control-Allow-*`). **Solución:** responder OPTIONS con `Access-Control-Allow-Origin: https://app.ejemplo.com`, `Allow-Methods`, `Allow-Headers` incluyendo `Authorization` y `Content-Type`; luego permitir la petición real.

### 2. Brecha por headers de seguridad ausentes

Una fintech sirve su dashboard sin `Content-Security-Policy` ni `X-Frame-Options`. Un atacante embebe la app en un iframe en sitio malicioso (clickjacking) y explota un XSS reflejado en un campo de búsqueda.

**Decisión clave:** habilitar **Helmet** o equivalente en Express/Node: HSTS (`max-age=31536000`), CSP (`default-src 'self'`), `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`. Complementar con sanitización de entrada; los headers son capa de defensa del navegador.

## Ejemplos de código sugeridos

### Mensaje HTTP completo (request)

<!-- code: http -->
```http
GET /api/productos/42 HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept-Encoding: gzip, deflate, br
User-Agent: Mozilla/5.0 (Linux)

```

### Respuesta con caché y ETag

<!-- code: http -->
```http
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 1842
Cache-Control: max-age=3600, public
ETag: "v3-a3f9b2c1"
Last-Modified: Mon, 06 Jan 2025 10:00:00 GMT

{"id": 42, "nombre": "Laptop Pro 15", "precio": 4500000}
```

### Preflight CORS (OPTIONS)

<!-- code: http -->
```http
OPTIONS /api/datos HTTP/1.1
Host: api.backend.com
Origin: https://app.frontend.com
Access-Control-Request-Method: PUT
Access-Control-Request-Headers: Authorization, Content-Type

HTTP/1.1 204 No Content
Access-Control-Allow-Origin: https://app.frontend.com
Access-Control-Allow-Methods: GET, POST, PUT, DELETE
Access-Control-Allow-Headers: Authorization, Content-Type
Access-Control-Max-Age: 86400
```

### Headers de seguridad con Helmet (Express)

<!-- code: javascript -->
```javascript
const helmet = require('helmet');
app.use(helmet());
// Configura HSTS, X-Content-Type-Options, X-Frame-Options,
// Content-Security-Policy básico y Referrer-Policy
```

### Respuesta 401 con WWW-Authenticate

<!-- code: json -->
```json
{
  "error": "UNAUTHORIZED",
  "mensaje": "Token ausente o expirado"
}
```

## Ejercicios de práctica

- **tipo:** reflexion — En un `POST /api/usuarios` con body JSON, lista cinco headers que el cliente debería enviar y explica el propósito de cada uno (`Host`, `Content-Type`, `Authorization`, etc.).
- **tipo:** diagrama — Dibuja el flujo preflight CORS para `PUT /api/perfil` desde `https://app.frontend.com` hacia `https://api.backend.com`, incluyendo headers clave en OPTIONS y en la respuesta.
- **tipo:** reflexion — ¿Qué header de respuesta esperarías en un `DELETE` exitoso sin cuerpo? ¿Y en un `POST` que crea un usuario con id 99?

## Animación o visual sugerida

- **CompareTable — categorías de headers:** Request | Response | General | Entity con ejemplos.
- **AsciiDiagram — flujo CORS preflight:** navegador ↔ servidor (OPTIONS → PUT real).
- **CompareTable — headers de seguridad:** Header | Ataque mitigado | Ejemplo de valor.
- **StepReveal — anatomía mensaje HTTP:** línea inicio → headers → línea vacía → body.

## Diagrama Mermaid (si aplica)

### CORS preflight

```mermaid
sequenceDiagram
  participant B as Navegador
  participant S as api.backend.com
  B->>S: OPTIONS /api/datos (Origin, Request-Method: PUT)
  S-->>B: 204 + Access-Control-Allow-Origin
  B->>S: PUT /api/datos + Authorization
  S-->>B: 200 OK + JSON
```

### Request vs Response headers

```mermaid
flowchart TB
  MSG[Mensaje HTTP]
  MSG --> REQ[Request headers<br/>Host, Accept, Authorization]
  MSG --> RES[Response headers<br/>Content-Type, ETag, Set-Cookie]
  MSG --> GEN[General / Entity<br/>Cache-Control, Content-Length]
```

## Secciones TSX sugeridas

- `ObjetivosSection` — 5 objetivos medibles
- `QueSonHeadersSection` — definición + anatomía mensaje HTTP + categorías
- `RequestHeadersSection` — tabla Host, Authorization, Accept, Cookie, etc.
- `ResponseHeadersSection` — tabla Content-Type, ETag, Location, Set-Cookie, etc.
- `CorsSection` — explicación + diagrama preflight + tabla headers CORS
- `HeadersSeguridadSection` — HSTS, CSP, X-Frame-Options + ejemplo Helmet
- `CompruebaTuComprensionSection` — quiz integrado

## Reto integrador

**"Configura los headers de una API REST para producción"**

Tienes una API en `https://api.tienda.ejemplo.com` consumida por SPA en `https://tienda.ejemplo.com` y una app móvil nativa (sin CORS). Endpoints: catálogo (cacheable), checkout (autenticado), login (Set-Cookie).

1. Lista los **request headers** mínimos para `GET /api/productos/42` desde la SPA autenticada.
2. Diseña la **respuesta** de catálogo con headers de caché (`Cache-Control`, `ETag`) para permitir 304.
3. Escribe la secuencia **OPTIONS + PUT** para actualizar perfil desde la SPA, con todos los headers CORS necesarios.
4. Propón un bloque de **headers de seguridad** para el servidor (HSTS, CSP, X-Frame-Options, nosniff).
5. Explica por qué la app móvil no sufre bloqueo CORS pero sí necesita `Authorization` y `Content-Type` en POST.

**Criterio de éxito:** distingue headers request/response, preflight completo, caché con ETag, seguridad básica, explica CORS solo en navegador.

## Preguntas sugeridas para quiz (5)

1. **¿Qué separa los headers HTTP del cuerpo del mensaje?**
   - A) Un header Content-Separator
   - B) Una línea en blanco
   - C) El código de estado
   - D) El método HTTP
   - **Correcta:** B
   - **Feedback:** Tras los headers hay una línea vacía; luego viene el body opcional.

2. **¿Qué header es obligatorio en HTTP/1.1 para indicar el servidor destino?**
   - A) Origin
   - B) Host
   - C) Referer
   - D) User-Agent
   - **Correcta:** B
   - **Feedback:** Host identifica el dominio; es requerido en HTTP/1.1.

3. **¿Cuándo el navegador envía una petición preflight OPTIONS?**
   - A) Siempre en GET
   - B) En peticiones "complejas" (p. ej. PUT, DELETE, Authorization custom)
   - C) Solo con HTTP/3
   - D) Nunca si usas JSON
   - **Correcta:** B
   - **Feedback:** Peticiones simples (GET, POST básico) no requieren preflight; métodos y headers custom sí.

4. **¿Qué header de respuesta permite que un origen específico consuma la API desde el navegador?**
   - A) Access-Control-Allow-Origin
   - B) Content-Length
   - C) WWW-Authenticate
   - D) Retry-After
   - **Correcta:** A
   - **Feedback:** El servidor declara orígenes permitidos con Access-Control-Allow-Origin.

5. **¿Qué header mitiga ataques de clickjacking embebiendo tu sitio en un iframe?**
   - A) Content-Type
   - B) X-Frame-Options
   - C) Accept-Encoding
   - D) ETag
   - **Correcta:** B
   - **Feedback:** X-Frame-Options DENY o SAMEORIGIN impide que otras páginas enmarquen tu app.

## Referencias

- Fuente docente: `kb/education/sources/clases/programacion-orientada-sitios-web/http-headers.md`
- Prerrequisitos: `http-metodos-status`, `protocolos-seguridad`
- Lección siguiente: `tipos-servicios-web`
- Relacionadas: `cache`, `tokens`, `rest-principios`
- MDN — Headers HTTP: https://developer.mozilla.org/es/docs/Web/HTTP/Headers
- MDN — CORS: https://developer.mozilla.org/es/docs/Web/HTTP/CORS
- OWASP — Secure Headers: https://owasp.org/www-project-secure-headers/
