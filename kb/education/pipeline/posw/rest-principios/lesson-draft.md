---
track: posw
slug: rest-principios
title: "Principios REST"
order: 12
prerequisites:
  - apis
  - http-metodos-status
  - cache
related:
  - apis
  - cache
  - http-headers
  - tipos-servicios-web
  - arquitectura-api
  - typescript
source_brief: kb/education/pipeline/posw/rest-principios/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - IntroRestSection
  - StatelessSection
  - ClientServerSection
  - CacheableSection
  - LayeredSection
  - UniformInterfaceSection
  - CodeOnDemandSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** REST como estilo arquitectónico (no protocolo) de Roy Fielding (2000) y enumerar sus seis constraints.
- **Explicar** Stateless, Client-Server, Cacheable, Layered System, Uniform Interface y Code on Demand (opcional) con ejemplos HTTP.
- **Describir** los cuatro sub-constraints de Uniform Interface: identificación de recursos, manipulación por representaciones, mensajes autodescriptivos y HATEOAS.
- **Diferenciar** API REST real de "HTTP API" que solo usa verbos HTTP sin cumplir todos los constraints (especialmente HATEOAS).
- **Ubicar** una API en el modelo de madurez de Richardson (niveles 0–3) y proponer mejoras hacia mayor RESTfulness.

## Prerrequisitos

- **Lección `apis`:** contrato API, endpoints y diseño básico.
- **Lección `http-metodos-status`:** verbos HTTP y códigos de estado semánticos.
- **Lección `cache`:** headers `Cache-Control`, ETag y cacheabilidad.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección presenta los seis constraints REST de Roy Fielding: stateless, cliente-servidor, cacheable, capas, interfaz uniforme y code on demand.

<!-- interactive: Callout -->
{
  "title": "REST ≠ cualquier API con JSON",
  "children": "Muchas APIs llamadas REST son HTTP APIs de nivel 2 en Richardson: usan verbos HTTP pero omiten HATEOAS. Fielding reserva REST para quien cumple todos los constraints."
}

---

### 1) Introducción a REST

**Sección TSX:** `IntroRestSection`

#### Mapa mental

- **REST (Representational State Transfer):** estilo arquitectónico de Roy Fielding (tesis 2000).
- **No es protocolo ni estándar** — se implementa sobre HTTP en la práctica.
- **Seis constraints** definen si un sistema es RESTful.
- **Modelo de Richardson:** niveles 0–3 de madurez REST.

#### Los seis constraints

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  REST[REST - 6 constraints] --> S1[1. Stateless]\n  REST --> S2[2. Client-Server]\n  REST --> S3[3. Cacheable]\n  REST --> S4[4. Layered System]\n  REST --> S5[5. Uniform Interface]\n  REST --> S6[6. Code on Demand - opcional]\n  S5 --> U1[Identificación recursos]\n  S5 --> U2[Representaciones]\n  S5 --> U3[Mensajes autodescriptivos]\n  S5 --> U4[HATEOAS]"
}

#### Modelo de madurez Richardson

<!-- interactive: CompareTable -->
{
  "headers": ["Nivel", "Características", "Ejemplo", "% APIs reales"],
  "rows": [
    ["0 — POX", "Un URI, POST para todo", "POST /api con action en body", "Legacy"],
    ["1 — Recursos", "Múltiples URIs por recurso", "GET /libros, GET /usuarios", "Pocas"],
    ["2 — Verbos HTTP", "Métodos + códigos de estado", "GET /productos/42 → 404", "Mayoría"],
    ["3 — HATEOAS", "_links en respuestas", "agregar_al_carrito.href", "Muy pocas"]
  ]
}

#### Recurso vs acción (anti-patrón)

<!-- code: http -->
```http
# ❌ Identifica acción, no recurso
GET /api/obtenerProducto/42 HTTP/1.1

# ✅ Identifica recurso
GET /api/v1/productos/42 HTTP/1.1
```

---

### 2) Stateless (sin estado)

**Sección TSX:** `StatelessSection`

#### Mapa mental

- Cada petición contiene **toda la información necesaria**.
- El servidor **no guarda contexto de sesión** entre requests.
- El token viaja en **cada llamada** (`Authorization: Bearer`).
- Beneficios: escalabilidad horizontal, caching más simple, resiliencia.

#### Stateless vs stateful

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "Stateless (RESTful)", "Stateful (no RESTful)"],
  "rows": [
    ["Quién guarda estado", "Cliente (token en cada request)", "Servidor (sesión en memoria)"],
    ["Escalabilidad", "Cualquier nodo atiende cualquier request", "Sticky sessions o estado compartido"],
    ["Ejemplo auth", "JWT en header Authorization", "Cookie de sesión opaca tras POST /login"],
    ["Fallo de nodo", "Otro nodo continúa sin pérdida", "401 si sesión estaba en otro nodo"]
  ]
}

#### Request stateless con token

<!-- code: http -->
```http
GET /api/v1/pedidos HTTP/1.1
Host: api.tienda.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Accept: application/json
```

<!-- code: http -->
```http
POST /api/v1/pedidos HTTP/1.1
Host: api.tienda.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{"producto_id": 42, "cantidad": 1}
```

#### Caso real: fintech sin escalar en picos

<!-- interactive: Callout -->
{
  "title": "Pagos con sesión en memoria",
  "children": "La API guarda sesión tras login. En pico de quincena el load balancer envía requests a instancias distintas; usuarios reciben 401 intermitente. Decisión: migrar a JWT stateless; cada instancia valida el token sin estado compartido."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué POST /login que guarda sesión en memoria del servidor viola Stateless? ¿Qué alternativa RESTful usarías?",
  "hints": ["Servidor recuerda estado", "JWT en cada request", "Sin sticky sessions"],
  "expectedKeywords": ["stateless", "JWT", "token", "sesión"],
  "successMessage": "Correcto. Stateless exige que cada request sea autosuficiente; JWT en Authorization evita sesión server-side."
}

---

### 3) Client-Server

**Sección TSX:** `ClientServerSection`

#### Mapa mental

- Componentes **separados** con responsabilidades distintas.
- **Cliente:** UI/UX, estado de pantalla, rutas SPA.
- **Servidor:** lógica, persistencia, auth, integraciones.
- Conectados por **interfaz uniforme**; evolucionan independientemente.

#### Separación de responsabilidades

<!-- interactive: StepReveal -->
{
  "title": "Client-Server en una app de e-commerce",
  "steps": [
    {
      "title": "Cliente (frontend)",
      "content": "Renderiza catálogo, carrito y checkout; consume JSON; no accede directo a la BD."
    },
    {
      "title": "Interfaz uniforme (HTTP + JSON)",
      "content": "Contrato estable: métodos, URIs, Content-Type, códigos de estado."
    },
    {
      "title": "Servidor (backend)",
      "content": "Valida pedidos, calcula totales, persiste en PostgreSQL, integra pasarela de pago."
    },
    {
      "title": "Evolución independiente",
      "content": "Rediseñar la UI no fuerza cambios en la capa de persistencia si la API se mantiene."
    }
  ]
}

#### Beneficio clave

Cambios en la UI no deberían forzar cambios en persistencia si la API está bien diseñada — y viceversa.

---

### 4) Cacheable

**Sección TSX:** `CacheableSection`

#### Mapa mental

- Las respuestas indican **explícitamente** si pueden cachearse.
- Headers: `Cache-Control`, `ETag`, `Last-Modified`.
- Enlaza con la lección `cache`.

#### Respuesta cacheable (catálogo público)

<!-- code: http -->
```http
HTTP/1.1 200 OK
Cache-Control: max-age=3600, public
ETag: "productos-v42"
Content-Type: application/json
```

#### Respuesta no cacheable (dato de usuario)

<!-- code: http -->
```http
HTTP/1.1 200 OK
Cache-Control: no-store, no-cache
Content-Type: application/json
```

#### Sin headers = problema REST

Omitir `Cache-Control` impide que clientes e intermediarios sepan si pueden reutilizar la respuesta — viola el constraint Cacheable.

---

### 5) Layered System (sistema en capas)

**Sección TSX:** `LayeredSection`

#### Mapa mental

- El cliente **no sabe** si habla con el servidor final o con un intermediario.
- Solo conoce la **capa adyacente**.
- Capas típicas: CDN → API Gateway → Load Balancer → servidores.

#### Diagrama de capas

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  C[Cliente] --> CDN[CDN - caché DDoS]\n  CDN --> GW[API Gateway - auth rate limit]\n  GW --> LB[Load Balancer]\n  LB --> A[Servidor A]\n  LB --> B[Servidor B]\n  LB --> C2[Servidor C]"
}

#### Qué ve el cliente

Solo `api.ejemplo.com` — no IPs internas de microservicios. Acoplar el cliente a la topología interna viola Layered System.

---

### 6) Uniform Interface (interfaz uniforme)

**Sección TSX:** `UniformInterfaceSection`

#### Mapa mental

- Constraint **central** de REST; cuatro sub-constraints:
  1. **Identificación de recursos** — URI única (`/productos/42`).
  2. **Manipulación mediante representaciones** — JSON/XML; el cliente envía la representación deseada.
  3. **Mensajes autodescriptivos** — `Content-Type`, método HTTP, códigos de estado dan contexto.
  4. **HATEOAS** — `_links` con acciones posibles desde el estado actual.

#### HATEOAS en JSON

<!-- code: json -->
```json
{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": 4500000,
  "estado": "en_stock",
  "_links": {
    "self": { "href": "/api/v1/productos/42", "method": "GET" },
    "actualizar": { "href": "/api/v1/productos/42", "method": "PUT" },
    "eliminar": { "href": "/api/v1/productos/42", "method": "DELETE" },
    "categoria": { "href": "/api/v1/categorias/3", "method": "GET" },
    "agregar_al_carrito": {
      "href": "/api/v1/carrito/items",
      "method": "POST"
    }
  }
}
```

#### Cliente navegando HATEOAS

<!-- code: javascript -->
```javascript
async function agregarAlCarrito(producto) {
  const link = producto._links?.agregar_al_carrito;
  if (!link) throw new Error("Acción no disponible en este estado");

  const res = await fetch(link.href, {
    method: link.method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ producto_id: producto.id, cantidad: 1 })
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

#### Caso real: marketplace sin HATEOAS

<!-- interactive: Callout -->
{
  "title": "15 URLs hardcodeadas en app móvil",
  "children": "Cada cambio de ruta en backend exige actualización forzada en App Store. Decisión: incluir _links en carrito y checkout; el cliente sigue agregar_al_carrito.href; objetivo Richardson nivel 3 en flujos críticos."
}

#### Ordenar niveles Richardson

<!-- interactive: CodeChallenge -->
{
  "title": "Ordena los niveles de Richardson (menor a mayor RESTfulness)",
  "template": "Nivel más bajo: ___\nSiguiente: ___\nSiguiente: ___\nNivel más alto: ___",
  "blanks": [
    { "id": "blank1", "answer": "un solo URI con POST para todo", "placeholder": "nivel 0" },
    { "id": "blank2", "answer": "múltiples URIs por recurso", "placeholder": "nivel 1" },
    { "id": "blank3", "answer": "verbos HTTP y códigos de estado correctos", "placeholder": "nivel 2" },
    { "id": "blank4", "answer": "HATEOAS con _links", "placeholder": "nivel 3" }
  ]
}

---

### 7) Code on Demand (opcional)

**Sección TSX:** `CodeOnDemandSection`

#### Mapa mental

- Único constraint **opcional** de REST.
- El servidor puede enviar **código ejecutable** al cliente (JavaScript).
- Las **SPAs modernas** lo implementan al descargar bundles JS desde el servidor.

#### Ejemplo implícito

Cuando un frontend React carga `app.a3f9b2.js` desde el servidor y lo ejecuta en el navegador, el servidor transfirió código que el cliente ejecuta — Code on Demand en la práctica.

<!-- interactive: Callout -->
{
  "title": "Opcional pero omnipresente en la web",
  "children": "Casi toda SPA cumple Code on Demand al servir JavaScript. Los otros cinco constraints son obligatorios para llamar al sistema RESTful según Fielding."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **REST** es estilo arquitectónico (Fielding 2000), no protocolo; seis constraints definen RESTfulness.
- **Stateless:** cada request autosuficiente; JWT en lugar de sesión server-side.
- **Client-Server:** UI separada de lógica/persistencia; evolución independiente.
- **Cacheable:** respuestas declaran cacheabilidad con `Cache-Control` y `ETag`.
- **Layered System:** cliente solo ve capa adyacente (CDN, gateway, LB).
- **Uniform Interface:** recursos en URI, representaciones, mensajes autodescriptivos, HATEOAS.
- **Code on Demand:** opcional; SPAs al servir JS.
- **Richardson:** mayoría en nivel 2; HATEOAS (nivel 3) distingue REST verdadero.
- **Siguiente lección:** `typescript` — tipado en el frontend y consumo de APIs.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Una API usa GET /api/getLibros y POST /api/reservarLibro. ¿Qué constraints de Uniform Interface viola y cómo los corregirías?",
  "hints": ["URIs con sustantivos", "Identificación de recursos", "Verbos HTTP"],
  "expectedKeywords": ["recurso", "GET", "POST", "libros", "reservas"],
  "successMessage": "Correcto. Usar GET /api/v1/libros y POST /api/v1/reservas identifica recursos, no acciones en la URI."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué hardcodear 15 URLs en una app móvil contradice HATEOAS? ¿Qué incluirías en la respuesta JSON para evitarlo?",
  "hints": ["_links", "href", "Cambios de ruta sin actualizar app"],
  "expectedKeywords": ["HATEOAS", "_links", "href", "hypermedia"],
  "successMessage": "Correcto. _links guían al cliente a acciones disponibles; cambios de ruta no rompen clientes que navegan hypermedia."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Clasifica esta API en Richardson: usa GET/POST/PUT con códigos 200/404/422 correctos pero sin _links en ninguna respuesta. ¿Qué falta para nivel 3?",
  "hints": ["Verbos + status = nivel 2", "HATEOAS = nivel 3"],
  "expectedKeywords": ["nivel 2", "HATEOAS", "_links", "nivel 3"],
  "successMessage": "Correcto. Es nivel 2; falta HATEOAS con _links en respuestas para alcanzar nivel 3."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Evalúa y mejora una API de biblioteca hacia REST verdadero"**

API actual:

- `POST /api/login` → servidor guarda sesión en memoria
- `GET /api/getLibros` → lista libros
- `POST /api/reservarLibro` con body `{ "isbn": "..." }`
- Sin headers `Cache-Control`; URLs hardcodeadas en app móvil

1. Identifica qué constraints REST viola cada endpoint o práctica.
2. Propón URIs y métodos HTTP alineados con identificación de recursos (Richardson nivel 1–2).
3. Rediseña la autenticación para cumplir Stateless.
4. Añade `_links` en la respuesta de un libro disponible (reservar, ver autor, devolver si prestado).
5. Clasifica la API actual y la propuesta en Richardson (0–3) y justifica.

**Criterio de éxito:** stateless con token, URIs con sustantivos, códigos HTTP semánticos, ejemplo HATEOAS completo, headers de cacheabilidad diferenciados.

<!-- code: json -->
```json
{
  "isbn": "9780123456789",
  "titulo": "Algoritmos",
  "disponible": true,
  "_links": {
    "self": { "href": "/api/v1/libros/9780123456789", "method": "GET" },
    "autor": { "href": "/api/v1/autores/15", "method": "GET" },
    "reservar": { "href": "/api/v1/reservas", "method": "POST" }
  }
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Rediseña la API de biblioteca: auth stateless, URIs corregidas, _links en libro y headers Cache-Control para catálogo vs /usuario/me.",
  "hints": [
    "JWT tras POST /api/v1/auth/login",
    "GET /api/v1/libros",
    "Cache-Control public en catálogo",
    "no-store en datos de usuario"
  ],
  "expectedKeywords": ["stateless", "JWT", "HATEOAS", "_links", "Cache-Control"],
  "successMessage": "Excelente. Has migrado la API hacia REST con constraints claros y Richardson nivel 2–3."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado los seis constraints REST. La mayoría de APIs del mundo real están en Richardson nivel 2; HATEOAS es el salto hacia REST según Fielding.

**Ideas clave para retener:**

- **REST es arquitectura**, no sinónimo de JSON sobre HTTP.
- **Stateless + token** — sesiones server-side impiden escalar horizontalmente.
- **URIs identifican recursos**, no acciones (`/productos/42`, no `/obtenerProducto`).
- **HATEOAS** reduce acoplamiento; el cliente sigue links, no URLs fijas.

**Siguiente paso:** lección `typescript` — tipado estático para consumir APIs con seguridad.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué es REST según Roy Fielding?",
      "options": [
        "Un protocolo de red alternativo a HTTP",
        "Un estilo arquitectónico con seis constraints",
        "Un formato de datos como JSON",
        "Una librería de JavaScript"
      ],
      "correctIndex": 1,
      "feedback": "REST es un estilo arquitectónico definido en la tesis de Fielding (2000), no un protocolo."
    },
    {
      "question": "¿Cuál constraint exige que cada request sea autosuficiente sin sesión en el servidor?",
      "options": [
        "Client-Server",
        "Cacheable",
        "Stateless",
        "Code on Demand"
      ],
      "correctIndex": 2,
      "feedback": "Stateless significa que el servidor no almacena contexto de sesión entre peticiones."
    },
    {
      "question": "¿Qué sub-constraint de Uniform Interface incluye _links en las respuestas JSON?",
      "options": [
        "Identificación de recursos",
        "Manipulación mediante representaciones",
        "HATEOAS",
        "Mensajes autodescriptivos"
      ],
      "correctIndex": 2,
      "feedback": "HATEOAS (Hypermedia As The Engine Of Application State) guía al cliente con links a acciones posibles."
    },
    {
      "question": "En el modelo de Richardson, ¿en qué nivel está la mayoría de APIs REST del mundo real?",
      "options": [
        "Nivel 0 — un URI y POST para todo",
        "Nivel 1 — solo múltiples URIs",
        "Nivel 2 — verbos HTTP y códigos de estado",
        "Nivel 3 — HATEOAS completo"
      ],
      "correctIndex": 2,
      "feedback": "La mayoría usa recursos y verbos HTTP correctamente pero omite HATEOAS (nivel 3)."
    },
    {
      "question": "¿Cuál es el único constraint REST opcional?",
      "options": [
        "Stateless",
        "Layered System",
        "Uniform Interface",
        "Code on Demand"
      ],
      "correctIndex": 3,
      "feedback": "Code on Demand permite enviar código ejecutable al cliente; es el único constraint opcional."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Principios REST: Constraints y Richardson | POSW
- **seoDescription:** Aprende los seis constraints REST de Roy Fielding — Stateless, Client-Server, Cacheable, Layered, Uniform Interface y HATEOAS — y el modelo de madurez Richardson. Lección 12 del track POSW.
