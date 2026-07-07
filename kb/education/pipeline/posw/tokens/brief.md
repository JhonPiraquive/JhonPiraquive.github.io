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
  - protocolos-seguridad
  - http-headers
source: kb/education/sources/clases/programacion-orientada-sitios-web/tokens.md
topic_expert: topic-expert-web-services
---

## Objetivos medibles

Al finalizar la lección el estudiante podrá:

1. Explicar la estructura de un **JWT** (header.payload.signature), sus claims principales (`sub`, `iat`, `exp`) y por qué el payload no está cifrado.
2. Describir el flujo **OAuth 2.0 Authorization Code** con sus cuatro roles (Resource Owner, Client, Authorization Server, Resource Server) y el concepto de **scopes**.
3. Diferenciar **API Key**, **JWT**, **OAuth 2.0** y **sesión por cookie** según qué identifican, si son stateless y facilidad de revocación.
4. Implementar el envío de credenciales en requests HTTP (`Authorization: Bearer`, `X-API-Key`, `Set-Cookie`) y reconocer cuándo usar cada mecanismo.
5. Aplicar la **regla de decisión** para elegir el mecanismo adecuado según tipo de app (SPA/mobile, login social, server-to-server, web clásica SSR).

## Conceptos clave

- **JWT (JSON Web Token, RFC 7519):** estándar para transmitir **claims** entre partes de forma compacta. Cadena Base64URL en tres partes: `header.payload.signature`. **Stateless:** el servidor no almacena el token.
- **Header JWT:** JSON con algoritmo y tipo (`alg`: HS256, `typ`: JWT).
- **Payload JWT:** claims del usuario (`sub` subject, `nombre`, `rol`, `iat` issued at, `exp` expiration, `iss` issuer, `aud` audience).
- **Signature JWT:** `HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), SECRET_KEY)` — verifica integridad y autenticidad.
- **Advertencia JWT:** el payload **no está cifrado**, solo codificado Base64URL; cualquiera puede decodificarlo. Nunca almacenar contraseñas ni datos de tarjeta en el payload.
- **Flujo JWT:** `POST /login` con credenciales → servidor valida y firma JWT → cliente almacena token → `GET /api/perfil` con `Authorization: Bearer eyJ...` → servidor verifica firma sin consultar DB.
- **Refresh token:** `access_token` expira rápido (15 min–1 h); `refresh_token` dura más (7–30 días) y permite obtener nuevo access token sin re-login.
- **OAuth 2.0 (RFC 6749):** framework de **autorización** (no autenticación pura) que permite acceso delegado sin compartir credenciales con el tercero.
- **Analogía OAuth:** llave de valet del coche — acceso limitado, revocable, sin acceso a la guantera.
- **Roles OAuth:** Resource Owner (usuario), Client (app tercera), Authorization Server (emite tokens, ej. Google), Resource Server (protege recursos, ej. Drive API).
- **Authorization Code flow:** redirect con `client_id` → usuario autentica en proveedor → redirect con `code` → client intercambia `code` por `access_token` en backend → client accede a API con Bearer token.
- **Scopes:** limitan permisos del token (`read:email`, `write:repos`, `openid`).
- **OpenID Connect (OIDC):** capa de identidad sobre OAuth 2.0; agrega `id_token` y endpoint `/userinfo`.
- **API Key:** cadena única que identifica una **aplicación** (no un usuario). Se envía como header (`X-API-Key`) o query param (menos seguro, queda en logs).
- **Prefijos de entorno:** `sk_live_` producción, `sk_test_` desarrollo (como Stripe).
- **Limitaciones API Key:** no identifica usuario, sin expiración nativa, revocación manual si se filtra.
- **Sesión por cookie:** servidor crea registro de sesión, envía `session_id` en cookie (`Set-Cookie: sid=abc123`); navegador la reenvía automáticamente. **Stateful.**
- **Comparativa sesión vs JWT:** sesión = revocación inmediata, requiere store compartido; JWT = escala fácil, revocación difícil antes de `exp`.
- **Regla de decisión:** SPA/mobile → JWT; Login con Google/GitHub → OAuth 2.0 + OIDC; server-to-server con cuota → API Key; web clásica SSR → Sesión + cookie.

## Errores comunes

- **Guardar JWT en localStorage con datos sensibles en payload:** el token es legible; usar solo claims no sensibles y preferir httpOnly cookie para refresh tokens.
- **Confundir OAuth con login propio:** OAuth delega autorización; para autenticación de tu app combinar con OIDC o validar `id_token`.
- **Enviar API Key en query string:** queda en logs de servidor, historial del navegador y referrers; usar header.
- **No validar `exp` en el servidor:** tokens expirados siguen siendo aceptados si no se verifica la claim.
- **Usar algoritmo `none` o secret débil en JWT:** vulnerabilidades de firma; usar RS256/HS256 con secret robusto.
- **Poner refresh token en JavaScript accesible:** debe ir en cookie httpOnly o almacenamiento seguro del SO (mobile).
- **Asumir que API Key identifica al usuario:** solo identifica la app; para acciones por usuario combinar con JWT u OAuth.
- **No rotar API Keys filtradas:** si una key aparece en un repo público, revocar y regenerar de inmediato.

## Casos reales

### 1. Fintech: JWT con datos de tarjeta en el payload

Un equipo guarda los últimos 4 dígitos de tarjeta y el email en el payload JWT "para no consultar la DB". Un atacante intercepta el token en una red WiFi pública, lo decodifica en jwt.io y obtiene datos personales de miles de usuarios.

**Decisión clave:** payload solo con `sub`, `rol` y metadatos mínimos; datos sensibles siempre en servidor tras validar firma; HTTPS obligatorio; access token de corta duración; nunca PII innecesaria en claims.

### 2. SaaS B2B: API Key filtrada en repositorio GitHub

Un desarrollador commitea `.env` con `X-API-Key: sk_live_xyz` a un repo público. Un bot de scraping la detecta en minutos y consume toda la cuota mensual de la API, generando factura de $12,000 USD.

**Decisión clave:** prefijos por entorno (`sk_test_` vs `sk_live_`); secret scanning en CI; rotación inmediata al filtrar; rate limiting por key; nunca commitear keys; usar variables de entorno en producción.

## Ejemplos de código sugeridos

### Estructura JWT (partes decodificables)

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

### Login y request autenticado

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

### API Key como header

<!-- code: bash -->
```bash
# Como header (recomendado)
curl -H "X-API-Key: sk_live_abc123XYZ" \
     https://api.ejemplo.com/datos

# Como query parameter (menos seguro, queda en logs)
curl "https://api.ejemplo.com/datos?api_key=sk_live_abc123XYZ"
```

### Sesión con cookie

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

### Almacenar y enviar token en JavaScript

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

## Ejercicios de práctica

- **tipo:** reflexion — Decodifica mentalmente un JWT: ¿qué información verías en header y payload sin la secret key? ¿Por qué no debes guardar la contraseña ahí?
- **tipo:** completar-codigo — Completa el header de autenticación: "JWT en SPA → `Authorization: ___ eyJ...`"; "API Key → `___: sk_live_abc`"; "Sesión web → header `___: sid=abc123`".
- **tipo:** reflexion — Una app necesita "Login con Google" y acceso a Gmail del usuario. ¿Qué mecanismo usarías (JWT solo, OAuth, API Key, sesión)? ¿Qué roles intervienen y qué scopes pedirías?

## Animación o visual sugerida

- **StepReveal — partes JWT:** revelar header (rojo) → payload (fucsia) → signature (azul).
- **CompareTable — JWT vs Sesión vs API Key vs OAuth:** Identifica | Stateless | Revocación | Mejor para.
- **StepReveal — OAuth Authorization Code:** Usuario → Redirect → Auth Server → Code → Token → API.
- **TabbedCodeExample — envío de credenciales:** tabs Bearer JWT, X-API-Key, Cookie.

## Diagrama Mermaid (si aplica)

### Flujo JWT

```mermaid
sequenceDiagram
  participant C as Cliente
  participant S as Servidor
  C->>S: POST /login {email, password}
  S-->>C: 200 OK {token: eyJ...}
  C->>S: GET /api/perfil Authorization Bearer
  S-->>C: 200 OK {datos usuario}
```

### OAuth 2.0 Authorization Code

```mermaid
sequenceDiagram
  participant U as Usuario
  participant App as App Cliente
  participant Auth as Auth Server
  participant API as Resource Server
  U->>App: Login con Google
  App->>Auth: Redirect client_id
  U->>Auth: Autentica
  Auth-->>App: Redirect ?code=XYZ
  App->>Auth: POST /token code=XYZ
  Auth-->>App: access_token
  App->>API: GET /userinfo Bearer token
  API-->>App: {datos user}
```

## Secciones TSX sugeridas

- `ObjetivosSection` — 5 objetivos medibles
- `JwtSection` — estructura header/payload/signature, flujo login, advertencia de no cifrado, refresh token
- `OAuthSection` — roles, Authorization Code flow, scopes, OIDC
- `ApiKeySection` — envío header vs query, prefijos, limitaciones
- `SesionesSection` — flujo cookie, comparativa con JWT
- `ComparativaTokensSection` — tabla cuándo usar cada mecanismo + regla de decisión
- `CompruebaTuComprensionSection` — quiz integrado

## Reto integrador

**"Elige y diseña la autenticación de una plataforma de cursos online"**

La plataforma tiene: web SPA (React), app móvil (iOS/Android), integración server-to-server con un partner de certificados, y opción "Continuar con GitHub".

1. Para cada cliente (SPA, móvil, partner, login social) indica el mecanismo (JWT, OAuth, API Key, sesión) y justifica.
2. Diseña el flujo de login JWT: endpoints, headers y respuesta JSON con `access_token` y `refresh_token`.
3. Para "Login con GitHub" describe el flujo OAuth Authorization Code y al menos dos scopes necesarios.
4. Explica cómo revocarías el acceso de un usuario en JWT vs sesión por cookie.
5. Lista tres errores de seguridad que evitarías (payload sensible, API Key en URL, refresh token en localStorage).

**Criterio de éxito:** mecanismo correcto por contexto, flujos HTTP bien formados, distingue auth vs autorización, menciona revocación y buenas prácticas de almacenamiento.

## Preguntas sugeridas para quiz (5)

1. **¿Qué partes componen un JWT separadas por puntos?**
   - A) username.password.token
   - B) header.payload.signature
   - C) request.response.cookie
   - D) alg.key.exp
   - **Correcta:** B
   - **Feedback:** Un JWT es `header.payload.signature`, cada parte codificada en Base64URL.

2. **¿Por qué no debes guardar contraseñas en el payload de un JWT?**
   - A) Porque el JWT no soporta JSON
   - B) Porque el payload solo está codificado, no cifrado, y es legible por cualquiera
   - C) Porque expira en 5 segundos
   - D) Porque requiere OAuth obligatoriamente
   - **Correcta:** B
   - **Feedback:** Base64URL no es cifrado; decodificar el payload es trivial sin la secret key.

3. **¿Qué mecanismo identifica una aplicación (no un usuario) en cada request?**
   - A) JWT con claim sub
   - B) Sesión por cookie
   - C) API Key
   - D) OAuth Authorization Code
   - **Correcta:** C
   - **Feedback:** La API Key identifica la app cliente; para usuarios se combina con otros mecanismos.

4. **En OAuth 2.0, ¿qué rol emite el access_token?**
   - A) Resource Owner
   - B) Client
   - C) Authorization Server
   - D) Resource Server
   - **Correcta:** C
   - **Feedback:** El Authorization Server (ej. Google) autentica al usuario y emite tokens tras validar el authorization code.

5. **¿Cuál permite revocación inmediata de acceso al borrar el registro en servidor?**
   - A) JWT stateless
   - B) API Key sin rotación
   - C) Sesión por cookie con session store
   - D) JWT con exp de 30 días
   - **Correcta:** C
   - **Feedback:** Las sesiones son stateful; borrar la sesión en el servidor invalida el acceso de inmediato.

## Referencias

- Fuente docente: `kb/education/sources/clases/programacion-orientada-sitios-web/tokens.md`
- Prerrequisitos: `apis`, `protocolos-seguridad`, `http-headers`
- Lecciones relacionadas: `rest-principios`
- RFC 7519 — JSON Web Token: https://www.rfc-editor.org/rfc/rfc7519
- RFC 6749 — OAuth 2.0: https://www.rfc-editor.org/rfc/rfc6749
- MDN — HTTP Authentication: https://developer.mozilla.org/es/docs/Web/HTTP/Authentication
- jwt.io — Debugger educativo: https://jwt.io/
