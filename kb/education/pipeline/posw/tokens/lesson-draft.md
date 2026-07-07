---
track: posw
slug: tokens
title: "Tokens y Autenticación"
order: 8
prerequisites:
  - apis
  - protocolos-seguridad
  - http-headers
related:
  - apis
  - rest-principios
source_brief: kb/education/pipeline/posw/tokens/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - JwtSection
  - OAuthSection
  - ApiKeySesionesSection
  - ComparativaTokensSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Explicar** la estructura de un JWT (header.payload.signature), sus claims principales (`sub`, `iat`, `exp`) y por qué el payload no está cifrado.
- **Describir** el flujo OAuth 2.0 Authorization Code con sus cuatro roles y el concepto de scopes.
- **Diferenciar** API Key, JWT, OAuth 2.0 y sesión por cookie según qué identifican, si son stateless y facilidad de revocación.
- **Implementar** el envío de credenciales en requests HTTP (`Authorization: Bearer`, `X-API-Key`, `Set-Cookie`) y reconocer cuándo usar cada mecanismo.
- **Aplicar** la regla de decisión para elegir el mecanismo adecuado según tipo de app (SPA/mobile, login social, server-to-server, web clásica SSR).

## Prerrequisitos

- **Lección `apis`:** contratos HTTP, endpoints y consumo desde cliente.
- **Lección `protocolos-seguridad`:** HTTPS y TLS.
- **Lección `http-headers`:** headers `Authorization`, `Set-Cookie`, CORS.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección cubre los mecanismos para autenticar y autorizar el acceso a APIs: JWT, OAuth 2.0, API Keys y sesiones por cookie. Saber cuándo usar cada uno evita vulnerabilidades y diseños difíciles de revocar.

<!-- interactive: Callout -->
{
  "title": "Autenticación vs autorización",
  "children": "Autenticación = ¿quién eres? (login, token válido). Autorización = ¿qué puedes hacer? (roles, scopes, permisos). OAuth 2.0 es principalmente un framework de autorización delegada."
}

---

### 1) JWT (JSON Web Token)

**Sección TSX:** `JwtSection`

#### Mapa mental

- **JWT (RFC 7519):** estándar para transmitir claims entre partes de forma compacta.
- Tres partes separadas por puntos: **header.payload.signature** (Base64URL).
- **Stateless:** el servidor no almacena el token; verifica la firma.
- **Advertencia:** el payload **no está cifrado** — solo codificado; nunca guardar contraseñas ni PII sensible.

#### Estructura JWT

<!-- code: json -->
```json
{
  "header": { "alg": "HS256", "typ": "JWT" },
  "payload": {
    "sub": "99",
    "nombre": "Ana García",
    "rol": "admin",
    "iat": 1725177600,
    "exp": 1725264000
  }
}
```

- **Header:** algoritmo (`alg`: HS256, RS256) y tipo (`typ`: JWT).
- **Payload:** claims — `sub` (subject), `iat` (issued at), `exp` (expiration), `iss`, `aud`.
- **Signature:** `HMACSHA256(base64Url(header) + "." + base64Url(payload), SECRET_KEY)` — verifica integridad.

<!-- interactive: StepReveal -->
{
  "title": "Partes de un JWT",
  "steps": [
    {
      "title": "1. Header (rojo)",
      "content": "JSON con algoritmo y tipo, codificado en Base64URL. Ejemplo: {\"alg\":\"HS256\",\"typ\":\"JWT\"}."
    },
    {
      "title": "2. Payload (fucsia)",
      "content": "Claims del usuario: sub, rol, iat, exp. Codificado, NO cifrado — cualquiera puede decodificarlo en jwt.io."
    },
    {
      "title": "3. Signature (azul)",
      "content": "Firma criptográfica que prueba que el emisor es legítimo y que el token no fue alterado."
    },
    {
      "title": "4. Refresh token",
      "content": "access_token expira rápido (15 min–1 h); refresh_token dura más (7–30 días) para obtener nuevo access sin re-login."
    }
  ]
}

#### Flujo JWT

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente\n  participant S as Servidor\n  C->>S: POST /login {email, password}\n  S-->>C: 200 OK {token: eyJ...}\n  C->>S: GET /api/perfil Authorization Bearer\n  S-->>C: 200 OK {datos usuario}"
}

#### Login y request autenticado

<!-- code: http -->
```http
POST /api/login HTTP/1.1
Host: api.ejemplo.com
Content-Type: application/json

{"email": "ana@ejemplo.com", "password": "***"}

HTTP/1.1 200 OK
Content-Type: application/json

{"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}

GET /api/perfil HTTP/1.1
Host: api.ejemplo.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept: application/json
```

<!-- interactive: Callout -->
{
  "title": "Caso real: PII en el payload JWT",
  "children": "Un equipo guarda últimos 4 dígitos de tarjeta y email en el JWT 'para no consultar la DB'. Un atacante decodifica el token en WiFi pública. Decisión: payload solo con sub, rol y metadatos mínimos; datos sensibles siempre en servidor tras validar firma."
}

#### Almacenar y enviar token en JavaScript

<!-- code: javascript -->
```javascript
async function login(email, password) {
  const res = await fetch("/api/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const { token } = await res.json();
  sessionStorage.setItem("access_token", token);
}

async function fetchPerfil() {
  const token = sessionStorage.getItem("access_token");
  const res = await fetch("/api/perfil", {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (res.status === 401) throw new Error("Sesión expirada");
  return res.json();
}
```

---

### 2) OAuth 2.0

**Sección TSX:** `OAuthSection`

#### Mapa mental

- **OAuth 2.0 (RFC 6749):** framework de **autorización** delegada — acceso sin compartir credenciales con el tercero.
- **Analogía:** llave de valet del coche — acceso limitado, revocable, sin acceso a la guantera.
- **Roles:** Resource Owner (usuario), Client (app tercera), Authorization Server (emite tokens), Resource Server (protege recursos).
- **OpenID Connect (OIDC):** capa de identidad sobre OAuth; agrega `id_token` y `/userinfo`.

#### Authorization Code flow

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant U as Usuario\n  participant App as App Cliente\n  participant Auth as Auth Server\n  participant API as Resource Server\n  U->>App: Login con Google\n  App->>Auth: Redirect client_id\n  U->>Auth: Autentica\n  Auth-->>App: Redirect ?code=XYZ\n  App->>Auth: POST /token code=XYZ\n  Auth-->>App: access_token\n  App->>API: GET /userinfo Bearer token\n  API-->>App: {datos user}"
}

#### Scopes

Los **scopes** limitan permisos del token: `read:email`, `write:repos`, `openid`. El usuario aprueba qué acceso concede; la app no recibe la contraseña de Google.

<!-- interactive: StepReveal -->
{
  "title": "OAuth Authorization Code paso a paso",
  "steps": [
    {
      "title": "1. Redirect al proveedor",
      "content": "La app redirige al usuario a Google/GitHub con client_id y scopes solicitados."
    },
    {
      "title": "2. Usuario autentica y aprueba",
      "content": "El Authorization Server valida credenciales y muestra pantalla de consentimiento de scopes."
    },
    {
      "title": "3. Redirect con authorization code",
      "content": "El proveedor redirige a la app con ?code=XYZ (código de un solo uso, corta duración)."
    },
    {
      "title": "4. Intercambio en backend",
      "content": "El backend de la app intercambia el code por access_token (nunca en el navegador con client_secret)."
    },
    {
      "title": "5. Acceso a API protegida",
      "content": "La app llama al Resource Server con Authorization: Bearer access_token."
    }
  ]
}

---

### 3) API Key y sesiones por cookie

**Sección TSX:** `ApiKeySesionesSection`

#### API Key

- Cadena única que identifica una **aplicación** (no un usuario).
- Se envía como header (`X-API-Key`) — **nunca en query string** (queda en logs).
- Prefijos de entorno: `sk_live_` producción, `sk_test_` desarrollo (como Stripe).
- Limitaciones: sin expiración nativa, revocación manual si se filtra, no identifica usuario.

<!-- code: bash -->
```bash
# Como header (recomendado)
curl -H "X-API-Key: sk_live_abc123XYZ" \
     https://api.ejemplo.com/datos

# Como query parameter (menos seguro, queda en logs)
curl "https://api.ejemplo.com/datos?api_key=sk_live_abc123XYZ"
```

#### Sesión por cookie

- Servidor crea registro de sesión (**stateful**), envía `session_id` en cookie.
- Navegador reenvía la cookie automáticamente en cada request.
- Revocación inmediata al borrar la sesión en el servidor.

<!-- code: http -->
```http
POST /login HTTP/1.1
Content-Type: application/json

{"email": "ana@ejemplo.com", "password": "***"}

HTTP/1.1 200 OK
Set-Cookie: sid=abc123; HttpOnly; Secure; SameSite=Strict

GET /perfil HTTP/1.1
Cookie: sid=abc123
```

<!-- interactive: Callout -->
{
  "title": "Caso real: API Key filtrada en GitHub",
  "children": "Un desarrollador commitea .env con sk_live_xyz a un repo público. Un bot la detecta en minutos y consume toda la cuota mensual ($12,000 USD). Decisión: secret scanning en CI, rotación inmediata, rate limiting por key, nunca commitear keys."
}

#### Completar headers de autenticación

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el mecanismo de envío",
  "template": "JWT en SPA → Authorization: ___ eyJ...\nAPI Key → ___: sk_live_abc\nSesión web → header ___: sid=abc123",
  "blanks": [
    { "id": "blank1", "answer": "Bearer", "placeholder": "esquema" },
    { "id": "blank2", "answer": "X-API-Key", "placeholder": "header" },
    { "id": "blank3", "answer": "Cookie", "placeholder": "header" }
  ]
}

---

### 4) Comparativa y regla de decisión

**Sección TSX:** `ComparativaTokensSection`

#### Tabla comparativa

<!-- interactive: CompareTable -->
{
  "headers": ["Mecanismo", "Identifica", "Stateless", "Revocación", "Mejor para"],
  "rows": [
    ["JWT", "Usuario (claims sub, rol)", "Sí", "Difícil antes de exp", "SPA, mobile, APIs stateless"],
    ["OAuth 2.0", "Acceso delegado a recursos de terceros", "Tokens stateless", "Revocable en Auth Server", "Login con Google/GitHub, APIs de terceros"],
    ["API Key", "Aplicación (no usuario)", "Sí", "Manual (rotar key)", "Server-to-server, APIs públicas con cuota"],
    ["Sesión (cookie)", "Usuario (session_id)", "No (stateful)", "Inmediata (borrar sesión)", "Web clásica SSR, apps con revocación urgente"]
  ]
}

#### Regla de decisión

- **SPA / mobile propia** → JWT (+ refresh token en almacenamiento seguro).
- **Login con Google / GitHub** → OAuth 2.0 + OIDC.
- **Server-to-server con cuota** → API Key en header.
- **Web clásica SSR** → Sesión + cookie HttpOnly.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Una app necesita 'Login con Google' y acceso al calendario del usuario. ¿Qué mecanismo usarías? ¿Qué roles intervienen y qué scopes pedirías?",
  "hints": ["No es JWT solo", "OAuth Authorization Code", "Scopes limitan permisos"],
  "expectedKeywords": ["OAuth", "Authorization Server", "scope", "calendar"],
  "successMessage": "Correcto. OAuth 2.0 con scopes como calendar.readonly; roles: usuario (Resource Owner), tu app (Client), Google (Auth Server), Calendar API (Resource Server)."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **JWT:** `header.payload.signature`; payload codificado, no cifrado; stateless; validar `exp` en servidor.
- **OAuth 2.0:** autorización delegada; Authorization Code flow; scopes limitan permisos; OIDC añade identidad.
- **API Key:** identifica la app; header `X-API-Key`; rotar si se filtra; no sustituye auth de usuario.
- **Sesión por cookie:** stateful; revocación inmediata; ideal para SSR con `HttpOnly; Secure; SameSite`.
- **Regla:** SPA/mobile → JWT; login social → OAuth; server-to-server → API Key; web clásica → sesión.
- **Siguiente lección:** `frontend` — tecnologías y frameworks del lado cliente.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Decodifica mentalmente un JWT sin la secret key: ¿qué verías en header y payload? ¿Por qué no debes guardar la contraseña del usuario ahí?",
  "hints": ["Base64URL no es cifrado", "jwt.io decodifica sin secret", "Solo claims no sensibles"],
  "expectedKeywords": ["Base64", "decodificar", "no cifrado", "contraseña"],
  "successMessage": "Correcto. Header y payload son legibles sin la secret; la firma solo prueba integridad. Nunca PII ni contraseñas en claims."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué el refresh token no debe guardarse en localStorage accesible desde JavaScript?",
  "hints": ["XSS roba tokens del DOM/storage", "HttpOnly cookie", "Duración larga del refresh"],
  "expectedKeywords": ["XSS", "localStorage", "HttpOnly", "refresh"],
  "successMessage": "Correcto. localStorage es accesible por scripts maliciosos (XSS). Refresh token debe ir en cookie HttpOnly o almacenamiento seguro del SO."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un partner server-to-server consume tu API con cuota mensual. ¿JWT, OAuth, API Key o sesión? ¿Dónde envías la credencial?",
  "hints": ["Identifica la app, no el usuario", "Header, no query string"],
  "expectedKeywords": ["API Key", "X-API-Key", "header"],
  "successMessage": "Correcto. API Key en header X-API-Key identifica la aplicación partner; combinar con rate limiting por key."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Elige y diseña la autenticación de una plataforma de cursos online"**

La plataforma tiene: web SPA (React), app móvil (iOS/Android), integración server-to-server con un partner de certificados, y opción "Continuar con GitHub".

1. Para cada cliente (SPA, móvil, partner, login social) indica el mecanismo (JWT, OAuth, API Key, sesión) y justifica.
2. Diseña el flujo de login JWT: endpoints, headers y respuesta JSON con `access_token` y `refresh_token`.
3. Para "Login con GitHub" describe el flujo OAuth Authorization Code y al menos dos scopes necesarios.
4. Explica cómo revocarías el acceso de un usuario en JWT vs sesión por cookie.
5. Lista tres errores de seguridad que evitarías (payload sensible, API Key en URL, refresh token en localStorage).

**Criterio de éxito:** mecanismo correcto por contexto, flujos HTTP bien formados, distingue auth vs autorización, menciona revocación y buenas prácticas de almacenamiento.

<!-- code: http -->
```http
POST /api/v1/auth/login HTTP/1.1
Content-Type: application/json

{"email": "estudiante@ejemplo.com", "password": "***"}

HTTP/1.1 200 OK
Content-Type: application/json

{
  "access_token": "eyJ...",
  "refresh_token": "dGhpcyBpcyBhIHJlZnJlc2g...",
  "expires_in": 3600
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto de la plataforma de cursos: asigna mecanismo por cliente, describe OAuth con GitHub (2 scopes) y explica revocación JWT vs sesión.",
  "hints": [
    "SPA/móvil → JWT",
    "Partner certificados → API Key",
    "GitHub → OAuth scopes read:user, user:email",
    "Revocar JWT = blacklist o esperar exp; sesión = borrar registro"
  ],
  "expectedKeywords": ["JWT", "OAuth", "API Key", "revocación", "scope"],
  "successMessage": "Excelente. Has diseñado autenticación multi-cliente con mecanismos apropiados y conciencia de seguridad."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado tokens y autenticación. Elegir el mecanismo correcto no es moda: depende del tipo de cliente, necesidad de revocación y si delegas acceso a terceros.

**Ideas clave para retener:**

- **JWT payload ≠ secreto** — codificado, no cifrado; solo claims mínimos.
- **OAuth delega autorización** — no compartas contraseñas con apps de terceros.
- **API Key en header**, nunca en URL; rota al filtrar.
- **Sesión = revocación inmediata**; JWT = escala fácil pero revocación difícil antes de `exp`.

**Siguiente paso:** lección `frontend` — capa cliente, frameworks y consumo de APIs autenticadas.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué partes componen un JWT separadas por puntos?",
      "options": [
        "username.password.token",
        "header.payload.signature",
        "request.response.cookie",
        "alg.key.exp"
      ],
      "correctIndex": 1,
      "feedback": "Un JWT es header.payload.signature, cada parte codificada en Base64URL."
    },
    {
      "question": "¿Por qué no debes guardar contraseñas en el payload de un JWT?",
      "options": [
        "Porque el JWT no soporta JSON",
        "Porque el payload solo está codificado, no cifrado, y es legible por cualquiera",
        "Porque expira en 5 segundos",
        "Porque requiere OAuth obligatoriamente"
      ],
      "correctIndex": 1,
      "feedback": "Base64URL no es cifrado; decodificar el payload es trivial sin la secret key."
    },
    {
      "question": "¿Qué mecanismo identifica una aplicación (no un usuario) en cada request?",
      "options": [
        "JWT con claim sub",
        "Sesión por cookie",
        "API Key",
        "OAuth Authorization Code"
      ],
      "correctIndex": 2,
      "feedback": "La API Key identifica la app cliente; para usuarios se combina con otros mecanismos."
    },
    {
      "question": "En OAuth 2.0, ¿qué rol emite el access_token?",
      "options": [
        "Resource Owner",
        "Client",
        "Authorization Server",
        "Resource Server"
      ],
      "correctIndex": 2,
      "feedback": "El Authorization Server (ej. Google) autentica al usuario y emite tokens tras validar el authorization code."
    },
    {
      "question": "¿Cuál permite revocación inmediata de acceso al borrar el registro en servidor?",
      "options": [
        "JWT stateless",
        "API Key sin rotación",
        "Sesión por cookie con session store",
        "JWT con exp de 30 días"
      ],
      "correctIndex": 2,
      "feedback": "Las sesiones son stateful; borrar la sesión en el servidor invalida el acceso de inmediato."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Tokens y Autenticación: JWT, OAuth y API Keys | POSW
- **seoDescription:** Aprende JWT, OAuth 2.0, API Keys y sesiones por cookie. Compara mecanismos, envía credenciales en HTTP y elige el método según tu tipo de app. Lección 8 del track POSW.
