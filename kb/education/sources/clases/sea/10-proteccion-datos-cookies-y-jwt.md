# Protección de datos del usuario: cookies seguras y autenticación con tokens (JWT)

## Objetivos de aprendizaje

- Explicar qué datos de usuario son sensibles y por qué.
- Describir qué hace una cookie de sesión y qué banderas la protegen.
- Enumerar banderas y prácticas: Secure, HttpOnly, SameSite, expiración.
- Explicar qué es JWT y cuándo usarlo (y cuándo no).
- Identificar 4 riesgos típicos: XSS/robo de token, expiración mal gestionada, almacenamiento inseguro, falta de rotación.
- Redactar una política simple de sesión: duración, renovación y cierre.

## Prerrequisitos

Entender login, sesión y headers HTTP a nivel básico.

## Protección de datos: idea central

Proteger datos es reducir exposición: recolectar lo mínimo, almacenar lo necesario, acceder con permisos estrictos y transmitir con seguridad. En aplicaciones web, el manejo de sesión (cookies/tokens) es una puerta principal: si se roba, el atacante “se convierte” en el usuario.

## Cookies seguras (lo esencial)

Una cookie puede guardar un identificador de sesión. Las banderas no son “decoración”: definen si viaja solo por HTTPS (Secure), si JavaScript puede leerla (HttpOnly) y cómo se envía en contextos de terceros (SameSite). La expiración y el cierre de sesión reducen el tiempo útil para un atacante.

## JWT (token) explicado sin humo

JWT es un formato de token que contiene “claims” y puede firmarse para evitar modificación. No es magia ni cifrado por defecto. Se usa cuando quieres autenticación sin estado en ciertos escenarios, pero exige cuidado: expiración corta, rotación, y protección contra robo.

## Ejemplo real (historia)

Historia: “La sesión eterna”. Una app crea un token que nunca expira “para no molestar al usuario”. Un día una computadora compartida queda con sesión abierta. Otra persona entra y accede a datos privados. El problema no fue el usuario: fue diseñar autenticación sin límites de tiempo ni cierre claro.

## Ejemplo técnico (qué debe mostrar)

El ejemplo debe mostrar: (1) una respuesta de servidor que crea una cookie de sesión con banderas correctas, (2) un JWT típico (en partes) para ilustrar estructura, y (3) una decisión: cuándo cookie de sesión vs JWT. No se debe enseñar a “poner JWT en localStorage” como recomendación sin advertencias.

```http
HTTP/1.1 200 OK
Set-Cookie: session_id=sess_abc123; Path=/; Secure; HttpOnly; SameSite=Lax; Max-Age=3600
Content-Type: application/json

{"ok":true}
```

```json
{
  "sub": "u_12345",
  "iat": 1713700000,
  "exp": 1713703600,
  "roles": ["user"]
}
```

## Diagrama (Mermaid)

### Ciclo de sesión: login → uso → expiración → renovación

```mermaid
flowchart LR
  login[Login] --> emit[Emitir_cookie_o_token]
  emit --> uso[Uso_normal_(requests)]
  uso --> exp[Expiracion]
  exp --> refresh[Renovacion_(si_aplica)]
  refresh --> uso
  uso --> logout[Logout]
  logout --> inval[Invalidar_sesion]

  robo[Robo_de_sesion] -.-> uso
  exp -.->|"Limita_tiempo_util"| robo
```

## Reto interactivo (sin código)

Escribe una “política de sesión” en 5 líneas: duración, inactividad, renovación, logout, y qué hacer ante sospecha (revocar/rotar).

## Mini-quiz (5 preguntas)

1. V/F: HttpOnly reduce riesgo de robo de cookie vía JavaScript.
2. V/F: JWT es cifrado por defecto.
3. Secure en cookies significa:
4. Un buen control para reducir impacto de token robado es:
5. En 1 frase, ¿cuál es el riesgo de una sesión “eterna”?

- A) Solo por HTTPS
- B) Se guarda cifrada
- C) No expira

- A) Expiración corta
- B) Sin expiración
- C) Compartir tokens

Respuestas: (1) V, (2) F, (3) A, (4) A, (5) Respuesta esperada: si se roba/quedan abiertas, el atacante tiene acceso por tiempo indefinido.
