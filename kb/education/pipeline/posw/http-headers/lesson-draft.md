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
source_brief: kb/education/pipeline/posw/http-headers/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - QueSonHeadersSection
  - RequestHeadersSection
  - ResponseHeadersSection
  - CorsSection
  - SeguridadHeadersSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** HTTP headers como pares clave-valor de metadatos que acompañan petición y respuesta, separados del cuerpo por una línea en blanco.
- **Clasificar** headers en Request, Response, General y Entity, con ejemplos reales (`Host`, `Authorization`, `Content-Type`, `Cache-Control`).
- **Explicar** el flujo CORS preflight (OPTIONS → headers `Access-Control-*` → petición real) y cuándo el navegador lo dispara.
- **Configurar** headers de seguridad esenciales (HSTS, CSP, X-Frame-Options, X-Content-Type-Options) y el ataque que cada uno mitiga.
- **Interpretar** un mensaje HTTP completo identificando línea de inicio, headers y su relación con métodos y códigos de estado.

## Prerrequisitos

- **Lección `http-metodos-status`:** métodos HTTP, códigos de estado y estructura básica de respuesta.
- **Lección `protocolos-seguridad`:** HTTPS, TLS y amenazas en tránsito.
- Familiaridad con peticiones desde navegador (SPA) y desde herramientas como curl o Postman.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección profundiza en los **metadatos** del mensaje HTTP: qué llevan los headers, cómo se clasifican, por qué CORS afecta solo al navegador y qué headers de seguridad son imprescindibles en producción.

<!-- interactive: Callout -->
{
  "title": "Body vs headers",
  "children": "El cuerpo transporta datos (JSON del producto); los headers transportan instrucciones sobre esos datos (formato, autenticación, caché, permisos CORS). Olvidar Content-Type en POST es una causa frecuente de 400 Bad Request."
}

---

### 1) ¿Qué son los HTTP headers?

**Sección TSX:** `QueSonHeadersSection`

#### Mapa mental

- Pares **clave-valor** en cada mensaje HTTP.
- **Línea de inicio** → headers → **línea en blanco** → body opcional.
- Categorías: Request, Response, General, Entity.
- Transportan metadatos; el body transporta el payload.

#### Anatomía de un mensaje HTTP

<!-- interactive: StepReveal -->
{
  "title": "Anatomía del mensaje HTTP",
  "steps": [
    {
      "title": "1. Línea de inicio",
      "content": "Request: GET /api/productos/42 HTTP/1.1 — Response: HTTP/1.1 200 OK"
    },
    {
      "title": "2. Headers",
      "content": "Pares Clave: Valor, uno por línea. Ej.: Host, Content-Type, Authorization."
    },
    {
      "title": "3. Línea en blanco",
      "content": "Separa headers del cuerpo. Sin ella el parser no sabe dónde termina el header block."
    },
    {
      "title": "4. Body (opcional)",
      "content": "JSON, XML, HTML, binario. Puede estar vacío (GET, DELETE 204)."
    }
  ]
}

#### Categorías de headers

<!-- interactive: CompareTable -->
{
  "headers": ["Categoría", "Quién los envía", "Ejemplos"],
  "rows": [
    ["Request", "Cliente", "Host, Authorization, Accept, User-Agent, Cookie, Origin"],
    ["Response", "Servidor", "Content-Type, ETag, Set-Cookie, Location, Access-Control-Allow-Origin"],
    ["General", "Ambos", "Cache-Control, Connection, Date"],
    ["Entity", "Ambos (describen el body)", "Content-Type, Content-Length, Content-Encoding"]
  ]
}

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  MSG[Mensaje HTTP]\n  MSG --> REQ[Request headers<br/>Host, Accept, Authorization]\n  MSG --> RES[Response headers<br/>Content-Type, ETag, Set-Cookie]\n  MSG --> GEN[General / Entity<br/>Cache-Control, Content-Length]"
}

---

### 2) Request headers

**Sección TSX:** `RequestHeadersSection`

#### Mapa mental

- Enviados por el **cliente** con cada petición.
- Indican destino, formato aceptado, credenciales y estado.
- `Host` es **obligatorio** en HTTP/1.1.

#### Headers de petición frecuentes

| Header | Propósito | Ejemplo |
|--------|-----------|---------|
| `Host` | Dominio destino (virtual hosting) | `Host: api.github.com` |
| `Authorization` | Credenciales | `Bearer eyJhbGci...` |
| `Accept` | Tipos de media aceptados | `application/json, text/html` |
| `Content-Type` | Tipo del body enviado | `application/json; charset=utf-8` |
| `User-Agent` | Identificador del cliente | `Mozilla/5.0 (Linux)` |
| `Cookie` | Estado en cliente | `sessionId=abc123` |
| `Origin` | Origen del navegador (CORS) | `https://app.ejemplo.com` |

#### Mensaje HTTP completo (request)

<!-- code: http -->
```http
GET /api/productos/42 HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept-Encoding: gzip, deflate, br
User-Agent: Mozilla/5.0 (Linux)

```

#### Errores frecuentes en request

- **Omitir `Host`** en HTTP/1.1 → petición malformada en proxies y servidores virtuales.
- **Omitir `Content-Type: application/json`** en POST/PUT/PATCH → el servidor no parsea el cuerpo → 400.
- **Credenciales en query string** en lugar de `Authorization` → URLs se loguean y cachean; exponen tokens.

<!-- interactive: Callout -->
{
  "title": "Origin vs Referer",
  "children": "Origin es solo esquema+host+puerto (https://app.ejemplo.com). Referer es la URL completa de la página anterior. CORS usa Origin; no los confundas."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "En un POST /api/usuarios con body JSON, lista cinco headers que el cliente debería enviar y explica el propósito de cada uno.",
  "hints": ["Host es obligatorio", "Content-Type para JSON", "Authorization si requiere auth"],
  "expectedKeywords": ["Host", "Content-Type", "Authorization", "Accept"],
  "successMessage": "Correcto. Mínimo: Host, Content-Type, Accept; más Authorization si la ruta es protegida."
}

---

### 3) Response headers

**Sección TSX:** `ResponseHeadersSection`

#### Mapa mental

- Enviados por el **servidor** con cada respuesta.
- Describen el cuerpo, caché, cookies y redirecciones.
- Relacionados con códigos de estado vistos en la lección anterior.

#### Headers de respuesta frecuentes

| Header | Propósito | Cuándo aparece |
|--------|-----------|----------------|
| `Content-Type` | Tipo del body recibido | Casi siempre con cuerpo |
| `Content-Length` | Tamaño en bytes | Respuestas con body |
| `ETag` | Versión del recurso | Recursos cacheables |
| `Cache-Control` | Instrucciones de caché | `max-age=3600, public` |
| `Location` | URI del recurso creado o redirect | 201, 3xx |
| `Set-Cookie` | Establece cookie en cliente | Login, sesión |
| `WWW-Authenticate` | Esquema auth requerido | 401 |
| `Retry-After` | Segundos antes de reintentar | 429, 503 |

#### Respuesta con caché y ETag

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

#### Respuesta 401 con cuerpo JSON

<!-- code: http -->
```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json
WWW-Authenticate: Bearer realm="api"

```

<!-- code: json -->
```json
{
  "error": "UNAUTHORIZED",
  "mensaje": "Token ausente o expirado"
}
```

#### ¿Qué header esperar en DELETE y POST?

- **DELETE exitoso sin cuerpo:** típicamente **204 No Content** (sin `Content-Type` de JSON).
- **POST que crea usuario id 99:** **201 Created** + header **`Location: /api/usuarios/99`**.

<!-- interactive: CodeChallenge -->
{
  "title": "Headers según operación",
  "template": "POST exitoso que crea recurso → código ___ y header ___\nDELETE exitoso sin cuerpo → código ___",
  "blanks": [
    { "id": "blank1", "answer": "201", "placeholder": "código" },
    { "id": "blank2", "answer": "Location", "placeholder": "header" },
    { "id": "blank3", "answer": "204", "placeholder": "código" }
  ]
}

---

### 4) CORS y preflight

**Sección TSX:** `CorsSection`

#### Mapa mental

- **CORS** = mecanismo del **navegador**, no de curl ni apps nativas.
- Bloquea peticiones entre **orígenes distintos** salvo permiso explícito del servidor.
- Peticiones **complejas** (PUT, DELETE, Authorization) disparan **preflight OPTIONS**.

#### Petición simple vs compleja

- **Simple:** GET, HEAD, POST con Content-Type básico (`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`) → sin preflight.
- **Compleja:** PUT, DELETE, `Authorization`, headers custom, `Content-Type: application/json` en algunos casos → **preflight OPTIONS**.

#### Flujo preflight CORS

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant B as Navegador\n  participant S as api.backend.com\n  B->>S: OPTIONS /api/datos (Origin, Request-Method: PUT)\n  S-->>B: 204 + Access-Control-Allow-Origin\n  B->>S: PUT /api/datos + Authorization\n  S-->>B: 200 OK + JSON"
}

#### Ejemplo preflight completo

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

<!-- interactive: Callout -->
{
  "title": "Caso real: SPA bloqueada en producción",
  "children": "Frontend en https://app.ejemplo.com, API en https://api.ejemplo.com. Postman funciona; Chrome falla con CORS. El servidor no responde OPTIONS con Access-Control-Allow-*. Solución: manejar OPTIONS y declarar origen, métodos y headers permitidos."
}

#### Errores CORS frecuentes

- **`Access-Control-Allow-Origin: *`** con cookies/credenciales → incompatible; usar origen específico + `Allow-Credentials: true`.
- **Ignorar preflight** en APIs con PUT/DELETE → curl funciona, el frontend no.

---

### 5) Headers de seguridad

**Sección TSX:** `SeguridadHeadersSection`

#### Mapa mental

- Capa de defensa en el **navegador** del usuario.
- Complementan (no reemplazan) sanitización de entrada y HTTPS.
- HSTS, CSP, X-Frame-Options, nosniff son esenciales en producción.

#### Tabla de headers de seguridad

<!-- interactive: CompareTable -->
{
  "headers": ["Header", "Ataque mitigado", "Ejemplo de valor"],
  "rows": [
    ["Strict-Transport-Security (HSTS)", "Downgrade HTTP / SSL stripping", "max-age=31536000; includeSubDomains"],
    ["Content-Security-Policy (CSP)", "XSS (scripts inyectados)", "default-src 'self'; script-src 'self'"],
    ["X-Frame-Options", "Clickjacking (iframe malicioso)", "DENY o SAMEORIGIN"],
    ["X-Content-Type-Options", "MIME sniffing", "nosniff"],
    ["Referrer-Policy", "Filtración de URL en Referer", "strict-origin-when-cross-origin"],
    ["Permissions-Policy", "APIs del navegador (cámara, geo)", "geolocation=()"]
  ]
}

#### Configuración con Helmet (Express)

<!-- code: javascript -->
```javascript
const helmet = require('helmet');
app.use(helmet());
// Configura HSTS, X-Content-Type-Options, X-Frame-Options,
// Content-Security-Policy básico y Referrer-Policy
```

<!-- interactive: Callout -->
{
  "title": "Caso real: fintech sin CSP",
  "children": "Dashboard sin Content-Security-Policy ni X-Frame-Options. Un atacante embebe la app en iframe (clickjacking) y explota XSS reflejado. Helmet + sanitización de entrada cierran la brecha del lado navegador."
}

#### Cookies seguras

`Set-Cookie` debe incluir flags **`HttpOnly`** (no accesible desde JS), **`Secure`** (solo HTTPS) y **`SameSite=Strict`** o `Lax` según el flujo.

---

### Resumen

**Sección TSX:** `ResumenSection`

- Los **headers** son metadatos clave-valor; una **línea en blanco** los separa del body.
- **Request:** Host (obligatorio), Authorization, Accept, Content-Type, Origin.
- **Response:** Content-Type, ETag, Cache-Control, Location (201), Set-Cookie, WWW-Authenticate (401).
- **CORS** aplica solo en navegador; peticiones complejas requieren **preflight OPTIONS** con `Access-Control-*`.
- **Seguridad:** HSTS, CSP, X-Frame-Options, nosniff — habilitar en producción.
- **Siguiente lección:** `tipos-servicios-web` — SOAP, REST, GraphQL, gRPC y WebSockets.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja o describe el flujo preflight CORS para PUT /api/perfil desde https://app.frontend.com hacia https://api.backend.com. Incluye headers clave en OPTIONS y en la respuesta.",
  "hints": ["OPTIONS primero", "Origin y Access-Control-Request-Method", "Allow-Origin, Allow-Methods, Allow-Headers"],
  "expectedKeywords": ["OPTIONS", "Origin", "Access-Control", "PUT"],
  "successMessage": "Correcto. OPTIONS con Origin y Request-Method; servidor responde Allow-Origin, Allow-Methods y Allow-Headers; luego PUT real."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué una app móvil nativa no sufre bloqueo CORS pero sí necesita Authorization y Content-Type en POST?",
  "hints": ["CORS es política del navegador", "El servidor sigue necesitando saber formato y credenciales"],
  "expectedKeywords": ["CORS", "navegador", "Content-Type", "Authorization"],
  "successMessage": "Correcto. CORS no aplica fuera del navegador; pero el servidor requiere Content-Type para parsear JSON y Authorization para autenticar."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué header de respuesta mitiga clickjacking y qué valor recomendarías para una app que no debe embeberse en iframes externos?",
  "hints": ["Empieza con X-Frame", "Valores: DENY o SAMEORIGIN"],
  "expectedKeywords": ["X-Frame-Options", "DENY"],
  "successMessage": "Correcto. X-Frame-Options: DENY impide que otras páginas enmarquen tu aplicación."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Configura los headers de una API REST para producción"**

API en `https://api.tienda.ejemplo.com` consumida por SPA en `https://tienda.ejemplo.com` y app móvil nativa. Endpoints: catálogo (cacheable), checkout (autenticado), login (Set-Cookie).

1. Lista los **request headers** mínimos para `GET /api/productos/42` desde la SPA autenticada.
2. Diseña la **respuesta** de catálogo con headers de caché (`Cache-Control`, `ETag`) para permitir 304.
3. Escribe la secuencia **OPTIONS + PUT** para actualizar perfil desde la SPA, con todos los headers CORS necesarios.
4. Propón un bloque de **headers de seguridad** (HSTS, CSP, X-Frame-Options, nosniff).
5. Explica por qué la app móvil no sufre CORS pero sí necesita `Authorization` y `Content-Type` en POST.

**Criterio de éxito:** distingue headers request/response, preflight completo, caché con ETag, seguridad básica, explica CORS solo en navegador.

<!-- code: http -->
```http
GET /api/productos/42 HTTP/1.1
Host: api.tienda.ejemplo.com
Accept: application/json
Authorization: Bearer eyJhbGci...
If-None-Match: "v3-a3f9b2c1"
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto de la tienda: request headers para GET autenticado, respuesta con ETag/Cache-Control y secuencia OPTIONS+PUT con CORS.",
  "hints": [
    "GET: Host, Accept, Authorization, If-None-Match",
    "Response: Cache-Control max-age, ETag",
    "OPTIONS con Allow-Origin específico (no *)",
    "HSTS max-age=31536000"
  ],
  "expectedKeywords": ["ETag", "Cache-Control", "OPTIONS", "HSTS"],
  "successMessage": "Excelente. Has configurado headers de producción: caché, CORS y seguridad."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado HTTP headers. Junto con métodos y códigos de estado, puedes leer un mensaje HTTP completo de punta a punta.

**Ideas clave para retener:**

- **Host** y **Content-Type** son imprescindibles en HTTP/1.1 y POST con JSON.
- **CORS** es del navegador — prueba con curl no garantiza que funcione en producción web.
- **Headers de seguridad** (HSTS, CSP, X-Frame-Options) son obligatorios en APIs y SPAs expuestas a internet.
- **ETag + Cache-Control** ahorran ancho de banda con respuestas 304.

**Siguiente paso:** lección `tipos-servicios-web` — comparar SOAP, REST, GraphQL, gRPC y WebSockets.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué separa los headers HTTP del cuerpo del mensaje?",
      "options": [
        "Un header Content-Separator",
        "Una línea en blanco",
        "El código de estado",
        "El método HTTP"
      ],
      "correctIndex": 1,
      "feedback": "Tras los headers hay una línea vacía; luego viene el body opcional."
    },
    {
      "question": "¿Qué header es obligatorio en HTTP/1.1 para indicar el servidor destino?",
      "options": [
        "Origin",
        "Host",
        "Referer",
        "User-Agent"
      ],
      "correctIndex": 1,
      "feedback": "Host identifica el dominio; es requerido en HTTP/1.1."
    },
    {
      "question": "¿Cuándo el navegador envía una petición preflight OPTIONS?",
      "options": [
        "Siempre en GET",
        "En peticiones complejas (p. ej. PUT, DELETE, Authorization custom)",
        "Solo con HTTP/3",
        "Nunca si usas JSON"
      ],
      "correctIndex": 1,
      "feedback": "Peticiones simples (GET, POST básico) no requieren preflight; métodos y headers custom sí."
    },
    {
      "question": "¿Qué header de respuesta permite que un origen específico consuma la API desde el navegador?",
      "options": [
        "Access-Control-Allow-Origin",
        "Content-Length",
        "WWW-Authenticate",
        "Retry-After"
      ],
      "correctIndex": 0,
      "feedback": "El servidor declara orígenes permitidos con Access-Control-Allow-Origin."
    },
    {
      "question": "¿Qué header mitiga ataques de clickjacking embebiendo tu sitio en un iframe?",
      "options": [
        "Content-Type",
        "X-Frame-Options",
        "Accept-Encoding",
        "ETag"
      ],
      "correctIndex": 1,
      "feedback": "X-Frame-Options DENY o SAMEORIGIN impide que otras páginas enmarquen tu app."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** HTTP Headers: CORS, caché y seguridad | POSW
- **seoDescription:** Aprende anatomía de mensajes HTTP, request/response headers, preflight CORS, ETag, Cache-Control y headers de seguridad (HSTS, CSP). Lección 5 del track POSW.
