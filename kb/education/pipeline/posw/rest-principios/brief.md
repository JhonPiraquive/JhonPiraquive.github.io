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
source: kb/education/sources/clases/programacion-orientada-sitios-web/rest-principios.md
topic_expert: topic-expert-web-services
---

## Objetivos medibles

Al finalizar la lección el estudiante podrá:

1. Definir **REST** como estilo arquitectónico (no protocolo) de Roy Fielding (2000) y enumerar sus **seis constraints**.
2. Explicar **Stateless**, **Client-Server**, **Cacheable**, **Layered System**, **Uniform Interface** y **Code on Demand** (opcional) con ejemplos HTTP.
3. Describir los **cuatro sub-constraints** de Uniform Interface: identificación de recursos, manipulación por representaciones, mensajes autodescriptivos y HATEOAS.
4. Diferenciar **API REST real** de "HTTP API" que solo usa verbos HTTP sin cumplir todos los constraints (especialmente HATEOAS).
5. Ubicar una API en el **modelo de madurez de Richardson** (niveles 0–3) y proponer mejoras hacia mayor RESTfulness.

## Conceptos clave

- **REST (Representational State Transfer):** estilo arquitectónico definido por Roy Fielding en su tesis doctoral (2000). Un sistema es RESTful solo si cumple los seis constraints.
- **No es un protocolo ni estándar:** muchas APIs llamadas "REST" son en realidad HTTP APIs que no cumplen todos los constraints.
- **1. Stateless (sin estado):** cada petición contiene toda la información necesaria; el servidor no guarda contexto de sesión entre requests. El token viaja en cada llamada.
- **Beneficios stateless:** escalabilidad horizontal (cualquier servidor atiende cualquier request), caching más simple, resiliencia ante fallos.
- **Stateful (no RESTful):** el servidor recuerda sesión tras `POST /login`; `GET /pedidos` depende de estado previo.
- **2. Client-Server:** componentes separados con responsabilidades distintas conectados por interfaz uniforme. Cliente: UI/UX, estado de pantalla, rutas. Servidor: lógica, persistencia, auth, integraciones. Evolucionan independientemente.
- **3. Cacheable:** las respuestas indican explícitamente si pueden cachearse (`Cache-Control`, `ETag`). Ver lección `cache`.
- **4. Layered System:** el cliente no sabe si habla con el servidor final o con intermediarios (CDN, gateway, load balancer). Solo conoce la capa adyacente.
- **Capas típicas:** Cliente → CDN → API Gateway → Load Balancer → Servidores A/B/C.
- **5. Uniform Interface (central):** interfaz estandarizada que desacopla componentes. Cuatro sub-constraints:
  - **Identificación de recursos:** URI única por recurso (`/productos/42` identifica el producto, no la acción).
  - **Manipulación mediante representaciones:** el cliente trabaja con representaciones (JSON, XML); para modificar envía la representación deseada.
  - **Mensajes autodescriptivos:** `Content-Type`, método HTTP y códigos de estado dan suficiente contexto para procesar el mensaje.
  - **HATEOAS:** las respuestas incluyen `_links` con acciones posibles desde el estado actual; el cliente navega la API sin URLs hardcodeadas.
- **HATEOAS poco implementado:** muchas APIs omiten hypermedia por complejidad; Fielding las llama HTTP APIs, no REST verdadero.
- **6. Code on Demand (opcional):** el servidor puede enviar código ejecutable al cliente (JavaScript). Único constraint opcional. Las SPAs lo implementan implícitamente al descargar JS.
- **Modelo de Richardson:** Nivel 0 (un URI, POST todo) → Nivel 1 (múltiples URIs/recursos) → Nivel 2 (verbos HTTP + códigos de estado; donde está la mayoría) → Nivel 3 (HATEOAS; REST según Fielding).

## Errores comunes

- **Llamar REST a cualquier API con JSON:** usar GET/POST en URIs no basta; faltan constraints como stateless o HATEOAS.
- **Sesiones server-side con cookies de sesión opacas:** contradice stateless; preferir token en cada request (`Authorization: Bearer`).
- **URLs que identifican acciones:** `/obtenerProducto/42` viola identificación de recursos; usar `GET /productos/42`.
- **Omitir headers de cacheabilidad:** sin `Cache-Control` el cliente no sabe si puede reutilizar la respuesta.
- **Hardcodear URLs en el cliente:** sin HATEOAS, cada cambio de ruta rompe apps móviles y web.
- **Asumir que el cliente conoce la topología interna:** acoplar a IPs de microservicios viola layered system; usar un único host público (`api.ejemplo.com`).
- **Confundir REST con SOAP o GraphQL:** REST es estilo arquitectónico sobre HTTP; GraphQL y gRPC son paradigmas distintos.

## Casos reales

### 1. Fintech: sesiones server-side impiden escalar en picos

Una API de pagos guarda sesión en memoria del servidor tras login. En el pico de quincena, el load balancer envía requests a instancias distintas; usuarios reciben 401 intermitente porque su sesión está en otro nodo.

**Decisión clave:** migrar a stateless con JWT en header `Authorization`; cada instancia valida el token sin estado compartido; escalar horizontalmente añadiendo nodos sin sticky sessions.

### 2. Marketplace: API sin HATEOAS rompe cliente móvil en cada release

El equipo publica nuevas rutas (`/api/v2/checkout/express`) y depreca otras. La app móvil tiene 15 URLs hardcodeadas; cada cambio de backend exige actualización forzada en App Store.

**Decisión clave:** incluir `_links` en respuestas de carrito y checkout; el cliente sigue `agregar_al_carrito.href`; cambios de ruta no rompen clientes que navegan hypermedia. Objetivo: Richardson nivel 3 en flujos críticos.

## Ejemplos de código sugeridos

### Stateless: cada request lleva el token

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

### Respuesta cacheable vs no cacheable

<!-- code: http -->
```http
HTTP/1.1 200 OK
Cache-Control: max-age=3600, public
ETag: "productos-v42"
Content-Type: application/json
```

<!-- code: http -->
```http
HTTP/1.1 200 OK
Cache-Control: no-store, no-cache
Content-Type: application/json
```

### HATEOAS en respuesta JSON

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

### Cliente navegando HATEOAS (JavaScript)

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

### Identificación de recurso vs acción (anti-patrón)

<!-- code: http -->
```http
# ❌ Identifica acción, no recurso
GET /api/obtenerProducto/42 HTTP/1.1

# ✅ Identifica recurso
GET /api/v1/productos/42 HTTP/1.1
```

## Ejercicios de práctica

- **tipo:** reflexion — ¿Por qué un sistema con sesión guardada en memoria del servidor tras `POST /login` viola el constraint Stateless? ¿Qué alternativa RESTful usarías?
- **tipo:** ordenar-pasos — Ordena los niveles de Richardson de menor a mayor RESTfulness: (a) HATEOAS con `_links`, (b) un solo URI con POST para todo, (c) múltiples URIs por recurso, (d) verbos HTTP y códigos de estado correctos.
- **tipo:** diagrama — Dibuja (texto o Mermaid) las capas entre cliente y servidor: CDN, API Gateway, Load Balancer y tres instancias backend. ¿Qué ve el cliente?

## Animación o visual sugerida

- **StepReveal — seis constraints:** uno por paso con icono y ejemplo breve.
- **CompareTable — stateless vs stateful:** quién guarda estado, escalabilidad, ejemplo de request.
- **CompareTable — Richardson 0–3:** características, ejemplo, % APIs reales.
- **MermaidDiagram — layered system:** cliente → CDN → gateway → LB → servidores.

## Diagrama Mermaid (si aplica)

### Seis constraints REST

```mermaid
flowchart TD
  REST[REST - 6 constraints] --> S1[1. Stateless]
  REST --> S2[2. Client-Server]
  REST --> S3[3. Cacheable]
  REST --> S4[4. Layered System]
  REST --> S5[5. Uniform Interface]
  REST --> S6[6. Code on Demand - opcional]
  S5 --> U1[Identificación recursos]
  S5 --> U2[Representaciones]
  S5 --> U3[Mensajes autodescriptivos]
  S5 --> U4[HATEOAS]
```

### Sistema en capas

```mermaid
flowchart TD
  C[Cliente] --> CDN[CDN - caché DDoS]
  CDN --> GW[API Gateway - auth rate limit]
  GW --> LB[Load Balancer]
  LB --> A[Servidor A]
  LB --> B[Servidor B]
  LB --> C2[Servidor C]
```

### Modelo de Richardson

```mermaid
flowchart BT
  L0[Nivel 0 - POX\nun URI POST todo]
  L1[Nivel 1 - Recursos\nURIs múltiples]
  L2[Nivel 2 - Verbos HTTP\ncódigos de estado]
  L3[Nivel 3 - HATEOAS\nhypermedia links]
  L0 --> L1 --> L2 --> L3
```

## Secciones TSX sugeridas

- `ObjetivosSection` — 5 objetivos medibles
- `QueEsRestSection` — definición Fielding, no es protocolo, panel introductorio
- `StatelessSection` — regla, analogía restaurante, diagrama stateless vs stateful
- `ClientServerSection` — separación responsabilidades, diagrama cliente/servidor
- `CacheableSection` — regla, ejemplos Cache-Control, enlace a lección `cache`
- `LayeredSystemSection` — diagrama CDN → Gateway → LB → servidores
- `UniformInterfaceSection` — cuatro sub-constraints + ejemplo HATEOAS JSON
- `CodeOnDemandSection` — constraint opcional, SPAs modernas
- `RichardsonSection` — pirámide niveles 0–3 con ejemplos
- `CompruebaTuComprensionSection` — quiz integrado

## Reto integrador

**"Evalúa y mejora una API de biblioteca hacia REST verdadero"**

Se te entrega una API actual:

- `POST /api/login` → servidor guarda sesión en memoria
- `GET /api/getLibros` → lista libros
- `POST /api/reservarLibro` con body `{ "isbn": "..." }`
- Sin headers `Cache-Control`; URLs hardcodeadas en app móvil

1. Identifica qué constraints REST viola cada endpoint o práctica.
2. Propón URIs y métodos HTTP alineados con identificación de recursos (Richardson nivel 1–2).
3. Rediseña la autenticación para cumplir Stateless.
4. Añade `_links` en la respuesta de un libro disponible (reservar, ver autor, devolver si prestado).
5. Clasifica la API actual y la propuesta en el modelo de Richardson (0–3) y justifica.

**Criterio de éxito:** stateless con token, URIs con sustantivos, códigos HTTP semánticos, al menos un ejemplo HATEOAS completo, headers de cacheabilidad diferenciados para catálogo vs datos de usuario.

## Preguntas sugeridas para quiz (5)

1. **¿Qué es REST según Roy Fielding?**
   - A) Un protocolo de red alternativo a HTTP
   - B) Un estilo arquitectónico con seis constraints
   - C) Un formato de datos como JSON
   - D) Una librería de JavaScript
   - **Correcta:** B
   - **Feedback:** REST es un estilo arquitectónico definido en la tesis de Fielding (2000), no un protocolo.

2. **¿Cuál constraint exige que cada request sea autosuficiente sin sesión en el servidor?**
   - A) Client-Server
   - B) Cacheable
   - C) Stateless
   - D) Code on Demand
   - **Correcta:** C
   - **Feedback:** Stateless significa que el servidor no almacena contexto de sesión entre peticiones.

3. **¿Qué sub-constraint de Uniform Interface incluye `_links` en las respuestas JSON?**
   - A) Identificación de recursos
   - B) Manipulación mediante representaciones
   - C) HATEOAS
   - D) Mensajes autodescriptivos
   - **Correcta:** C
   - **Feedback:** HATEOAS (Hypermedia As The Engine Of Application State) guía al cliente con links a acciones posibles.

4. **En el modelo de Richardson, ¿en qué nivel está la mayoría de APIs "REST" del mundo real?**
   - A) Nivel 0 — un URI y POST para todo
   - B) Nivel 1 — solo múltiples URIs
   - C) Nivel 2 — verbos HTTP y códigos de estado
   - D) Nivel 3 — HATEOAS completo
   - **Correcta:** C
   - **Feedback:** La mayoría usa recursos y verbos HTTP correctamente pero omite HATEOAS (nivel 3).

5. **¿Cuál es el único constraint REST opcional?**
   - A) Stateless
   - B) Layered System
   - C) Uniform Interface
   - D) Code on Demand
   - **Correcta:** D
   - **Feedback:** Code on Demand permite enviar código ejecutable al cliente; es el único constraint opcional.

## Referencias

- Fuente docente: `kb/education/sources/clases/programacion-orientada-sitios-web/rest-principios.md`
- Prerrequisitos: `apis`, `http-metodos-status`, `cache`
- Siguiente lección: `typescript`
- Lecciones relacionadas: `tipos-servicios-web`, `arquitectura-api`, `http-headers`
- Tesis original: Roy Fielding — "Architectural Styles and the Design of Network-based Software Architectures" (2000)
- Richardson Maturity Model: https://martinfowler.com/articles/richardsonMaturityModel.html
