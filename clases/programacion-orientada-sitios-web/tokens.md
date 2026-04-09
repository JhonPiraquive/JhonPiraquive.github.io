# Instrucciones para frontend-developer: tokens.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/tokens.html`

---

1. Crear `clases/programacion-orientada-sitios-web/tokens.html`. `<html lang="es">`. Título: "Tokens de Autenticación | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "JWT", "OAuth 2.0", "API Key", "Sesiones", "Comparativa".
4. Hero: badge "Tema 7", `<h1>` "Tokens y Autenticación", subtítulo "JWT, OAuth 2.0, API Keys y sesiones: cómo los servicios web verifican identidades." Botón scroll a `#jwt`.
5. Crear `<section id="jwt">` padding 80px 0. Contiene:
   - `<h2>` "JWT — JSON Web Token".
   - Párrafo: "JWT (RFC 7519) es un estándar para transmitir afirmaciones (claims) entre dos partes de forma segura y compacta. Un JWT es una cadena codificada en Base64URL dividida en tres partes por puntos: `header.payload.signature`. No requiere almacenamiento en el servidor (stateless)."
   - Estructura visual en tres bloques de colores distintos (rojo, fucsia, azul):
     - Bloque rojo: "HEADER" — JSON con algoritmo y tipo:
       ```json
       {
         "alg": "HS256",
         "typ": "JWT"
       }
       ```
     - Bloque fucsia: "PAYLOAD" — claims del usuario:
       ```json
       {
         "sub": "99",
         "nombre": "Ana García",
         "rol": "admin",
         "iat": 1725177600,
         "exp": 1725264000
       }
       ```
     - Bloque azul: "SIGNATURE":
       ```
       HMACSHA256(
         base64UrlEncode(header) + "." + base64UrlEncode(payload),
         SECRET_KEY
       )
       ```
   - Ejemplo de token JWT real (truncado) en bloque monospace:
     ```
     eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9
     .eyJzdWIiOiI5OSIsIm5vbWJyZSI6IkFuYSBHYXJjw61hIiwicm9sIjoiYWRtaW4ifQ
     .dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk
     ```
   - Flujo de autenticación JWT en diagrama ASCII:
     ```
     [Cliente]                    [Servidor]
        │                              │
        │── POST /login ───────────────►│
        │   {email, password}          │
        │                              │ Valida credenciales
        │◄── 200 OK {token: "eyJ..."} ──│ Firma JWT
        │                              │
        │  (almacena token en memoria/ │
        │   localStorage)              │
        │                              │
        │── GET /api/perfil ───────────►│
        │   Authorization: Bearer eyJ.│
        │                              │ Verifica firma
        │◄── 200 OK {datos usuario} ───│ Sin consulta a DB
     ```
   - Claims importantes: `sub` (subject/usuario), `iat` (issued at), `exp` (expiration), `iss` (issuer), `aud` (audience).
   - Advertencia en tarjeta roja: "El payload de un JWT NO está cifrado, solo codificado en Base64URL. Cualquier persona puede decodificarlo. Nunca almacenes datos sensibles (contraseñas, datos de tarjeta) en el payload."
   - Flujo de refresh token: explicación de que el `access_token` expira rápido (15min-1h) y el `refresh_token` dura más (7-30 días) y permite obtener un nuevo access token sin re-loguearse.
6. Crear `<section id="oauth">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "OAuth 2.0".
   - Párrafo: "OAuth 2.0 (RFC 6749) es un framework de autorización (no autenticación) que permite que una aplicación de terceros acceda a recursos de un usuario en otro servicio, sin que el usuario comparta sus credenciales con el tercero."
   - Analogía: "Es como darle a un aparcacoches la llave de valet de tu coche. Puede mover el coche (acceso limitado), pero no puede abrir la guantera (acceso restringido). Y tú decides cuándo revocar esa llave."
   - Cuatro roles en tarjetas:
     - Resource Owner: el usuario dueño de los datos.
     - Client: la aplicación que quiere acceder.
     - Authorization Server: emite tokens (ej. Google, GitHub).
     - Resource Server: protege y sirve los recursos (ej. Google Drive API).
   - Flujo Authorization Code (el más seguro) en diagrama ASCII:
     ```
     [Usuario]          [App Cliente]       [Auth Server]      [API]
        │                    │                    │               │
        │ Clic "Login con     │                    │               │
        │  Google"           │                    │               │
        │◄───────────────────│                    │               │
        │                    │── Redirect ─────► │               │
        │                    │   ?client_id=...  │               │
        │ Inicia sesión en   │                   │               │
        │  Google ──────────────────────────────►│               │
        │                    │                   │ Emite code    │
        │◄───────────────────────────────────────│               │
        │  Redirect a app    │                   │               │
        │  con ?code=XYZ     │                   │               │
        │───────────────────►│                   │               │
        │                    │── POST /token ───►│               │
        │                    │   code=XYZ        │ Valida code   │
        │                    │◄── access_token ──│               │
        │                    │                   │               │
        │                    │── GET /userinfo ─────────────────►│
        │                    │   Bearer token    │               │
        │                    │◄── {datos user} ──────────────────│
     ```
   - Scopes: explicación de que los scopes limitan qué puede hacer el token. Ejemplo: `read:email`, `write:repos`, `openid`.
   - OpenID Connect (OIDC): mención de que OIDC es una capa de identidad sobre OAuth 2.0 que agrega el `id_token` y el endpoint `/userinfo`.
7. Crear `<section id="apikey">` padding 80px 0. Contiene:
   - `<h2>` "API Key".
   - Párrafo: "Una API Key es una cadena de caracteres única que identifica a una aplicación (no a un usuario). Se genera en el portal del proveedor y se envía en cada request como header o query param."
   - Formas de envío en bloque código:
     ```bash
     # Como header (recomendado)
     curl -H "X-API-Key: sk_live_abc123XYZ" \
          https://api.ejemplo.com/datos

     # Como query parameter (menos seguro, queda en logs)
     curl "https://api.ejemplo.com/datos?api_key=sk_live_abc123XYZ"
     ```
   - Casos de uso: acceso de servidor a servidor, acceso a APIs públicas con cuota (OpenWeatherMap, Google Maps).
   - Limitaciones:
     - No identifica al usuario, solo a la aplicación.
     - Sin expiración nativa (hay que rotar manualmente).
     - Si se filtra, hay que revocar y regenerar.
   - Recomendación: prefijar por entorno (`sk_live_` para producción, `sk_test_` para desarrollo), como hace Stripe.
8. Crear `<section id="sesiones">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Autenticación por Sesión (Cookies)".
   - Párrafo: "El modelo de sesión es el mecanismo tradicional de la web. El servidor crea un registro de sesión en memoria o base de datos, genera un `session_id` y lo envía al cliente en una cookie. En cada request, el navegador envía la cookie automáticamente."
   - Flujo en diagrama ASCII:
     ```
     [Navegador]                   [Servidor]              [Session Store]
          │                             │                        │
          │── POST /login ─────────────►│                        │
          │   {email, password}         │                        │
          │                             │── Guardar sesión ─────►│
          │                             │   session_id: "abc123" │
          │◄── Set-Cookie: sid=abc123 ──│                        │
          │                             │                        │
          │── GET /perfil ─────────────►│                        │
          │   Cookie: sid=abc123        │── Buscar sesión ──────►│
          │                             │◄── {userId: 99} ───────│
          │◄── 200 OK {datos} ──────────│                        │
     ```
   - Comparativa sesión vs JWT en tabla: Aspecto | Sesión | JWT. Datos:
     - Estado en servidor | Sí (stateful) | No (stateless)
     - Escalabilidad | Requiere sesión compartida | Escala fácilmente
     - Revocación | Inmediata (borra la sesión) | Difícil antes de expirar
     - Tamaño | Solo el session_id (pequeño) | El token completo (mayor)
     - Uso típico | Apps web tradicionales | APIs, mobile, microservicios
9. Crear `<section id="comparativa">` padding 80px 0. Contiene:
   - `<h2>` "¿Cuándo usar cada mecanismo?".
   - Tabla: Mecanismo | Identifica | Stateless | Revocación | Mejor para. Datos:
     - JWT | Usuario | Sí | Difícil | APIs REST, microservicios, mobile
     - OAuth 2.0 | App + Usuario | Sí | Moderada | Login social, acceso delegado
     - API Key | Aplicación | Sí | Manual | APIs públicas, server-to-server
     - Sesión | Usuario | No | Inmediata | Apps web tradicionales con SSR
   - Regla de decisión en tarjeta: "¿Construyes una API consumida por mobile/SPA? → JWT. ¿Necesitas 'Login con Google/GitHub'? → OAuth 2.0 + OIDC. ¿API de servidor a servidor con cuota? → API Key. ¿App web clásica con servidor que renderiza HTML? → Sesión + cookie."
10. Sección recursos: `protocolos-seguridad.html`, `apis.html`, `http-headers.html`, `rest-principios.html`.
11. Footer estándar. Highlight.js. Animaciones. Responsivo.
