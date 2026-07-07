---
track: posw
slug: http-metodos-status
title: "Métodos HTTP y Códigos de Estado"
order: 4
prerequisites:
  - protocolos-seguridad
related:
  - http-headers
  - apis
  - rest-principios
source_brief: kb/education/pipeline/posw/http-metodos-status/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - MetodosHttpSection
  - CrudHttpSection
  - CodigosEstadoSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** métodos HTTP (verbos) como indicadores de intención del cliente sobre un recurso, citando RFC 9110 y al menos cinco métodos comunes (GET, POST, PUT, PATCH, DELETE).
- **Clasificar** métodos según propiedades **Safe** (no modifica estado) e **Idempotente** (múltiples requests idénticos = mismo efecto) y aplicar esa distinción al diseño de APIs.
- **Mapear** operaciones **CRUD** a métodos HTTP y URIs de ejemplo (`POST /api/productos`, `GET /api/productos/42`, etc.).
- **Agrupar** códigos de estado en familias 1xx–5xx y elegir el código adecuado en escenarios concretos (200, 201, 204, 400, 401, 403, 404, 422, 429, 500, 503).
- **Interpretar** respuestas HTTP completas (línea de estado, headers, cuerpo JSON) y distinguir errores del cliente (4xx) de errores del servidor (5xx).

## Prerrequisitos

- **Lección `protocolos-seguridad`:** HTTP/HTTPS, TLS y capas de red.
- **Lección `formatos-datos`:** lectura de JSON en respuestas API.
- Familiaridad con el concepto de recurso identificado por URI.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección cubre la semántica de los verbos HTTP y el significado de los códigos de estado en respuestas. Son la base para diseñar APIs REST coherentes y para depurar integraciones cliente-servidor.

<!-- interactive: Callout -->
{
  "title": "Contrato semántico",
  "children": "El método y el código de estado no son decoración: comunican intención y resultado. Un cliente que ignora 404 y solo lee el cuerpo JSON tendrá bugs difíciles de detectar."
}

---

### 1) Métodos HTTP (verbos)

**Sección TSX:** `MetodosHttpSection`

#### Mapa mental

- Los **métodos** indican la **acción** sobre un recurso en una URI.
- Semántica definida en **RFC 9110**.
- Propiedades clave: **Safe** (no cambia estado) e **Idempotente** (repetir = mismo efecto).
- GET, HEAD, OPTIONS son Safe; POST y PATCH en general no son idempotentes.

#### Qué son los métodos HTTP

Un **método HTTP** (verbo) expresa la intención del cliente: leer, crear, reemplazar, modificar parcialmente o eliminar un recurso. El servidor interpreta método + URI + headers + cuerpo para ejecutar la operación.

#### Métodos principales

<!-- interactive: CompareTable -->
{
  "headers": ["Método", "Safe", "Idempotente", "Uso típico"],
  "rows": [
    ["GET", "Sí", "Sí", "Obtener representación del recurso (solo lectura)"],
    ["POST", "No", "No", "Crear recurso o procesar acción no idempotente"],
    ["PUT", "No", "Sí", "Reemplazar recurso completo en el URI"],
    ["PATCH", "No", "No (en general)", "Actualización parcial de campos"],
    ["DELETE", "No", "Sí", "Eliminar el recurso del URI"],
    ["HEAD", "Sí", "Sí", "Como GET sin cuerpo; verificar existencia o headers"],
    ["OPTIONS", "Sí", "Sí", "Métodos soportados; preflight CORS"]
  ]
}

#### Ejemplo: GET vs POST

<!-- code: http -->
```http
GET /api/productos/42 HTTP/1.1
Host: tienda.ejemplo.com
Accept: application/json
```

<!-- code: http -->
```http
POST /api/productos HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{"nombre": "Teclado mecánico", "precio": 320000}
```

#### Safe e Idempotente explicados

- **Safe:** el método no modifica estado en el servidor. GET solo lee; nunca uses GET para eliminar (`GET /api/usuarios/5/eliminar` es un anti-patrón grave: se cachea y se re-ejecuta).
- **Idempotente:** enviar la misma petición N veces produce el mismo efecto que una vez. PUT y DELETE son idempotentes; POST no lo es — repetir `POST /api/pagos` puede duplicar cobros.

<!-- interactive: StepReveal -->
{
  "title": "Safe e Idempotente en la práctica",
  "steps": [
    {
      "title": "1. GET es Safe",
      "content": "Solicitar GET /api/productos/42 diez veces no crea ni borra productos; solo lee la representación actual."
    },
    {
      "title": "2. POST no es idempotente",
      "content": "Dos POST idénticos a /api/pagos pueden generar dos transacciones distintas si no hay clave de idempotencia."
    },
    {
      "title": "3. PUT es idempotente",
      "content": "Reemplazar el producto 42 con el mismo JSON varias veces deja el recurso en el mismo estado final."
    },
    {
      "title": "4. DELETE es idempotente",
      "content": "Eliminar el recurso 42 dos veces: la primera devuelve 204; la segunda puede devolver 404, pero el estado final es 'no existe'."
    }
  ]
}

<!-- interactive: Callout -->
{
  "title": "Caso real: doble cobro por reintento",
  "children": "Un móvil con mala conexión reenvía POST /api/pagos al no recibir respuesta. Sin Idempotency-Key ni verificación de duplicados, el backend cobra dos veces. Documenta que POST no es idempotente; usa PUT/PATCH para actualizaciones de estado."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Para cada método indica Safe e Idempotente: GET, POST, PUT, DELETE. Explica por qué POST no es idempotente con un ejemplo de pago.",
  "hints": ["Safe = no modifica estado", "POST crea efectos nuevos en cada envío", "Piensa en doble cobro"],
  "expectedKeywords": ["GET", "Safe", "POST", "idempotente", "pago"],
  "successMessage": "Correcto. GET es Safe e idempotente; POST no es idempotente porque cada envío puede crear un nuevo efecto (p. ej. otro cargo)."
}

---

### 2) CRUD y métodos HTTP

**Sección TSX:** `CrudHttpSection`

#### Mapa mental

- **CRUD:** Create, Read, Update, Delete sobre recursos.
- Cada operación se mapea a un **verbo HTTP** y una **URI de recurso**.
- Create → POST en colección; Read → GET; Update total → PUT; Update parcial → PATCH; Delete → DELETE.

#### Tabla CRUD ↔ HTTP

<!-- interactive: CompareTable -->
{
  "headers": ["Operación", "Método", "URI ejemplo"],
  "rows": [
    ["Create (crear)", "POST", "/api/productos"],
    ["Read (leer uno)", "GET", "/api/productos/42"],
    ["Read (listar)", "GET", "/api/productos"],
    ["Update total", "PUT", "/api/productos/42"],
    ["Update parcial", "PATCH", "/api/productos/42"],
    ["Delete", "DELETE", "/api/productos/42"]
  ]
}

#### Ciclo CRUD completo

<!-- code: http -->
```http
# Crear
POST /api/productos HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{"nombre": "Teclado mecánico", "precio": 320000}

# Leer
GET /api/productos/7 HTTP/1.1
Host: tienda.ejemplo.com
Accept: application/json

# Actualizar parcialmente
PATCH /api/productos/7 HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{"precio": 295000}

# Eliminar
DELETE /api/productos/7 HTTP/1.1
Host: tienda.ejemplo.com
```

#### Flujo secuencia CRUD

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente\n  participant S as Servidor\n  C->>S: POST /api/productos\n  S-->>C: 201 Created + Location\n  C->>S: GET /api/productos/7\n  S-->>C: 200 OK + JSON\n  C->>S: PATCH /api/productos/7\n  S-->>C: 200 OK\n  C->>S: DELETE /api/productos/7\n  S-->>C: 204 No Content"
}

#### Anti-patrón: POST para todo

Usar POST para actualizar o eliminar rompe la semántica HTTP, dificulta caché y proxies, y confunde a los consumidores de la API. Las actualizaciones deben ser PUT o PATCH; la eliminación, DELETE.

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el mapping CRUD",
  "template": "Listar todos los productos → ___ `/api/productos`\nEliminar producto 42 → ___ `/api/productos/42`",
  "blanks": [
    { "id": "blank1", "answer": "GET", "placeholder": "método" },
    { "id": "blank2", "answer": "DELETE", "placeholder": "método" }
  ]
}

---

### 3) Códigos de estado HTTP

**Sección TSX:** `CodigosEstadoSection`

#### Mapa mental

- Código de **3 dígitos** en la línea de estado de la respuesta.
- Primer dígito = **familia** (1xx–5xx).
- Debe reflejar el resultado real; no ocultar errores en JSON con 200 OK.

#### Familias de códigos

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  R[Respuesta HTTP] --> F1[1xx Info]\n  R --> F2[2xx Éxito]\n  R --> F3[3xx Redirección]\n  R --> F4[4xx Error cliente]\n  R --> F5[5xx Error servidor]"
}

<!-- interactive: StepReveal -->
{
  "title": "Familias de status codes",
  "steps": [
    {
      "title": "1xx — Informativos",
      "content": "100 Continue, 101 Switching Protocols (upgrade WebSocket). Raramente visibles en APIs REST típicas."
    },
    {
      "title": "2xx — Éxito",
      "content": "200 OK, 201 Created (POST + Location), 204 No Content (DELETE sin cuerpo), 206 Partial Content."
    },
    {
      "title": "3xx — Redirecciones",
      "content": "301 Moved Permanently, 302 Found, 304 Not Modified (caché válida con ETag)."
    },
    {
      "title": "4xx — Errores del cliente",
      "content": "400 Bad Request, 401 Unauthorized (falta auth), 403 Forbidden (sin permiso), 404 Not Found, 422 Unprocessable Entity (validación), 429 Too Many Requests."
    },
    {
      "title": "5xx — Errores del servidor",
      "content": "500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout."
    }
  ]
}

#### 401 vs 403

- **401 Unauthorized:** no autenticado — falta token o credencial inválida. El cliente debe autenticarse antes de reintentar.
- **403 Forbidden:** autenticado pero **sin permiso** para ese recurso. Reintentar sin cambiar credenciales no ayuda.

#### Ejemplos de respuestas

**201 Created (POST exitoso):**

<!-- code: http -->
```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/usuarios/99

{
  "id": 99,
  "nombre": "Carlos López",
  "email": "carlos@ejemplo.com",
  "creado_en": "2025-09-01T10:30:00Z"
}
```

**404 Not Found:**

<!-- code: http -->
```http
HTTP/1.1 404 Not Found
Content-Type: application/json

{
  "error": "NOT_FOUND",
  "mensaje": "El producto con id 999 no existe.",
  "timestamp": "2025-09-01T10:31:00Z"
}
```

**422 Unprocessable Entity (validación):**

<!-- code: json -->
```json
{
  "error": "VALIDATION_ERROR",
  "campos": {
    "email": "El formato del email es inválido.",
    "precio": "El precio debe ser mayor a 0."
  }
}
```

<!-- interactive: Callout -->
{
  "title": "Caso real: API con siempre 200 OK",
  "children": "Una API devuelve HTTP 200 con { \"ok\": false, \"mensaje\": \"Producto no encontrado\" }. Clientes que solo miran el status muestran stock incorrecto. Decisión: usar 404, 422 y 429 con cuerpo JSON estructurado."
}

#### Errores frecuentes

- Devolver **404** cuando el recurso existe pero los datos son inválidos → usar **400** o **422**.
- Devolver **500** por validación fallida del cliente → reservar 5xx para fallos internos.
- Omitir header **Location** en **201 Created** → el cliente no sabe dónde quedó el recurso nuevo.

---

### Resumen

**Sección TSX:** `ResumenSection`

- Los **métodos HTTP** expresan intención sobre un recurso (RFC 9110): GET lee, POST crea, PUT reemplaza, PATCH actualiza parcialmente, DELETE elimina.
- **Safe** = no modifica estado (GET, HEAD, OPTIONS). **Idempotente** = repetir no cambia el efecto final (GET, PUT, DELETE; POST y PATCH en general no).
- **CRUD** se mapea a verbos y URIs: POST colección, GET recurso, PUT/PATCH actualización, DELETE eliminación.
- **Códigos de estado** agrupan resultado en familias 1xx–5xx; 4xx = error del cliente, 5xx = error del servidor.
- **401** = falta autenticación; **403** = sin permiso. **201** + `Location` para creación; **204** para DELETE sin cuerpo.
- **Siguiente lección:** `http-headers` — metadatos, CORS y seguridad en mensajes HTTP.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un cliente recibe 401 en GET /api/perfil. ¿Debe reintentar la misma petición sin cambios? ¿Y si recibe 403? Justifica con la diferencia entre ambos códigos.",
  "hints": ["401 = no autenticado", "403 = autenticado sin permiso", "¿Cambiar credenciales ayuda?"],
  "expectedKeywords": ["401", "403", "token", "permiso"],
  "successMessage": "Correcto. Con 401 debe autenticarse (token); con 403 ya está autenticado pero no tiene permiso — reintentar igual no sirve."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué es peligroso usar GET /api/usuarios/5/eliminar para borrar un usuario? Menciona Safe e idempotencia/caché.",
  "hints": ["GET es Safe en teoría pero esta URL modifica", "Los proxies y navegadores pueden cachear GET"],
  "expectedKeywords": ["GET", "DELETE", "cache", "Safe"],
  "successMessage": "Correcto. GET no debe modificar estado; además puede cachearse y ejecutarse sin intención. Usa DELETE."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un POST crea un usuario y el servidor responde 200 OK sin header Location. ¿Qué código y header debería usar en su lugar?",
  "hints": ["Código para recurso creado", "Header que indica la URI del nuevo recurso"],
  "expectedKeywords": ["201", "Location", "Created"],
  "successMessage": "Correcto. 201 Created con header Location apunta al recurso recién creado."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Diseña el contrato HTTP de una API de reservas de hotel"**

Un frontend y una app móvil consumen la misma API para consultar habitaciones, crear reservas, modificar fechas y cancelar.

1. Define **URIs y métodos HTTP** para: listar habitaciones disponibles, obtener habitación por id, crear reserva, cambiar fecha (parcial), cancelar reserva.
2. Para cada operación indica si el método es **Safe** e **Idempotente** y justifica.
3. Escribe la **respuesta HTTP completa** (status + headers + JSON) para: reserva creada exitosamente, habitación inexistente, fechas inválidas (checkout antes de checkin).
4. Explica qué pasa si el móvil **reintenta POST /api/reservas** tras timeout sin protección de idempotencia.
5. Indica qué código usarías si el hotel está en mantenimiento y la API no puede atender temporalmente.

**Criterio de éxito:** mapping CRUD correcto, distingue 401/403/404/422/503, respuestas HTTP bien formadas, menciona idempotencia en POST.

<!-- code: http -->
```http
POST /api/reservas HTTP/1.1
Host: hotel.ejemplo.com
Content-Type: application/json

{"habitacionId": 12, "checkin": "2025-10-01", "checkout": "2025-10-05"}

HTTP/1.1 201 Created
Content-Type: application/json
Location: /api/reservas/501

{"id": 501, "habitacionId": 12, "estado": "confirmada"}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto del hotel: lista operaciones con método y URI, indica Safe/Idempotente en cada una y escribe al menos una respuesta 422 para fechas inválidas.",
  "hints": [
    "Listar habitaciones → GET /api/habitaciones",
    "Crear reserva → POST /api/reservas",
    "Cambiar fecha → PATCH /api/reservas/{id}",
    "Cancelar → DELETE /api/reservas/{id}",
    "Mantenimiento → 503 Service Unavailable"
  ],
  "expectedKeywords": ["GET", "POST", "PATCH", "DELETE", "201", "422"],
  "successMessage": "Excelente. Has aplicado semántica HTTP, CRUD y códigos de estado en un contrato de API coherente."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado métodos HTTP y códigos de estado. Estos elementos son el vocabulario que comparten cliente y servidor: el verbo dice qué quieres hacer; el código dice qué pasó.

**Ideas clave para retener:**

- **No uses GET para modificar** ni **200 OK para ocultar errores** en el cuerpo JSON.
- **POST no es idempotente** — protege pagos y creaciones con claves de idempotencia o verificación de duplicados.
- **401 ≠ 403:** autenticación vs autorización.
- **201 + Location** comunica dónde quedó el recurso nuevo.

**Siguiente paso:** lección `http-headers` — metadatos del mensaje, CORS preflight y headers de seguridad.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué método HTTP es adecuado para obtener datos sin modificar el servidor?",
      "options": [
        "POST",
        "GET",
        "DELETE",
        "PATCH"
      ],
      "correctIndex": 1,
      "feedback": "GET es Safe e Idempotente; solo solicita representación del recurso."
    },
    {
      "question": "¿Cuál es la diferencia principal entre PUT y PATCH?",
      "options": [
        "PUT es solo para eliminar",
        "PUT reemplaza el recurso completo; PATCH aplica cambios parciales",
        "PATCH siempre es Safe",
        "PUT no puede crear recursos"
      ],
      "correctIndex": 1,
      "feedback": "PUT sustituye toda la representación; PATCH actualiza solo los campos enviados."
    },
    {
      "question": "Un cliente no envió token Bearer. ¿Qué código debe devolver el servidor?",
      "options": [
        "403 Forbidden",
        "404 Not Found",
        "401 Unauthorized",
        "500 Internal Server Error"
      ],
      "correctIndex": 2,
      "feedback": "401 indica que falta autenticación; 403 es cuando ya está autenticado pero sin permiso."
    },
    {
      "question": "¿Qué código indica que un recurso fue creado exitosamente con POST?",
      "options": [
        "200 OK",
        "204 No Content",
        "201 Created",
        "301 Moved Permanently"
      ],
      "correctIndex": 2,
      "feedback": "201 Created es la respuesta estándar de POST exitoso; suele incluir header Location."
    },
    {
      "question": "¿Por qué POST generalmente no es idempotente?",
      "options": [
        "Porque siempre devuelve 404",
        "Porque cada petición idéntica puede crear un nuevo recurso o efecto distinto",
        "Porque no permite JSON",
        "Porque solo funciona con HTTPS"
      ],
      "correctIndex": 1,
      "feedback": "Repetir POST puede duplicar recursos; PUT/DELETE repetidos tienen el mismo efecto final."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Métodos HTTP y Códigos de Estado | POSW
- **seoDescription:** Aprende verbos HTTP (GET, POST, PUT, PATCH, DELETE), propiedades Safe e Idempotente, mapping CRUD y familias de códigos 1xx–5xx. Lección 4 del track POSW.
