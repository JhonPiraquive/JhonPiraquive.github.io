---
track: posw
slug: tipos-servicios-web
title: "Tipos de Servicios Web"
order: 6
prerequisites:
  - servicios-web
  - formatos-datos
  - http-metodos-status
related:
  - apis
  - rest-principios
  - arquitectura-api
source_brief: kb/education/pipeline/posw/tipos-servicios-web/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - SoapSection
  - RestSection
  - GraphqlSection
  - GrpcWebsocketsSection
  - ComparativaTiposSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Diferenciar** SOAP (protocolo XML + WSDL) de REST (estilo arquitectónico sobre HTTP) y ubicar su contexto histórico y de uso.
- **Explicar** GraphQL como lenguaje de consulta con endpoint único, resolviendo over-fetching y under-fetching de REST.
- **Describir** gRPC (HTTP/2 + protobuf) y WebSockets (conexión bidireccional persistente) con sus casos de uso típicos.
- **Comparar** SOAP, REST, GraphQL, gRPC y WebSockets en protocolo, formato, contrato, rendimiento y curva de aprendizaje.
- **Elegir** la arquitectura adecuada según escenario: API pública web/mobile, BFF flexible, microservicios internos, tiempo real o integración bancaria legacy.

## Prerrequisitos

- **Lección `servicios-web`:** concepto de servicio web y arquitectura cliente-servidor.
- **Lección `formatos-datos`:** XML y JSON como formatos de intercambio.
- **Lección `http-metodos-status`:** verbos HTTP y código 101 Switching Protocols (WebSocket upgrade).

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

No existe un único tipo de servicio web. Esta lección recorre las arquitecturas más usadas — SOAP, REST, GraphQL, gRPC y WebSockets — y cuándo elegir cada una según público, rendimiento y legado.

<!-- interactive: Callout -->
{
  "title": "Regla de selección",
  "children": "API pública web/mobile → REST; frontend con datos muy específicos → GraphQL; microservicios internos → gRPC; tiempo real → WebSockets; integración bancaria legacy → SOAP. No uses la moda; usa el contexto."
}

---

### 1) SOAP

**Sección TSX:** `SoapSection`

#### Mapa mental

- **Protocolo** de mensajería (no solo estilo).
- Formato estricto **XML**: envelope, header, body.
- Contrato en **WSDL**; transporte HTTP, SMTP o TCP.
- **WS-Security** para firma/cifrado a nivel mensaje.
- Dominante en banca, gobierno, SAP, HL7.

#### Qué es SOAP

**SOAP (Simple Object Access Protocol)** define un formato rígido de mensajes XML. El contrato se publica en **WSDL**; los clientes generan stubs a partir de él. Es verboso pero ofrece seguridad y trazabilidad exigidas en entornos regulados.

#### Mensaje SOAP (XML)

<!-- code: xml -->
```xml
<soapenv:Envelope
  xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/"
  xmlns:usr="http://api.ejemplo.com/usuarios">
  <soapenv:Header/>
  <soapenv:Body>
    <usr:ObtenerUsuario>
      <usr:id>42</usr:id>
    </usr:ObtenerUsuario>
  </soapenv:Body>
</soapenv:Envelope>
```

#### Cuándo usar SOAP

- Integración con **sistemas legacy** que exigen XML y WSDL fijo.
- Requisitos de **WS-Security** (firma digital, cifrado de mensaje).
- Sectores regulados: banca interbancaria, gobierno, salud (HL7).

<!-- interactive: Callout -->
{
  "title": "Caso real: banco colombiano",
  "children": "Conexión a cámara de compensación vía SOAP/XML + WS-Security (contrato WSDL, auditoría). App móvil de saldo usa REST+JSON con API gateway interno. No forzar SOAP al frontend ni REST al switch bancario."
}

---

### 2) REST

**Sección TSX:** `RestSection`

#### Mapa mental

- **Estilo arquitectónico** (Roy Fielding, 2000), no un protocolo único.
- URIs = recursos; métodos HTTP = verbos; códigos de estado = resultado.
- Principios: Stateless, Client-Server, Cacheable, Layered System, Uniform Interface.
- En la práctica: **JSON** predominante; contrato opcional con **OpenAPI**.

#### Principios REST en la práctica

<!-- interactive: CompareTable -->
{
  "headers": ["Principio", "Significado en API"],
  "rows": [
    ["Stateless", "Cada petición lleva toda la info necesaria; sin sesión en servidor"],
    ["Client-Server", "Cliente presenta; servidor expone recursos"],
    ["Cacheable", "GET cacheable con ETag y Cache-Control"],
    ["Uniform Interface", "URIs de recursos + verbos HTTP semánticos"],
    ["Layered System", "Proxies, gateways y balanceadores transparentes"]
  ]
}

#### Endpoints REST (recursos + verbos)

<!-- code: http -->
```http
GET    /api/v1/productos        → Lista productos
GET    /api/v1/productos/42     → Obtener producto 42
POST   /api/v1/productos        → Crear producto
PUT    /api/v1/productos/42     → Reemplazar producto 42
PATCH  /api/v1/productos/42     → Actualizar parcialmente
DELETE /api/v1/productos/42     → Eliminar producto 42
```

#### Respuesta REST con HATEOAS ligero

<!-- code: json -->
```json
{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": 4500000,
  "stock": 12,
  "_links": {
    "self": "/api/v1/productos/42",
    "categoria": "/api/v1/categorias/3"
  }
}
```

#### Anti-patrón: "REST" con todo POST

Un RPC que usa solo POST para leer, crear y borrar **no es RESTful**. REST exige verbos semánticos, recursos identificables y statelessness.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Para una API pública de e-commerce consumida por web y Android, ¿SOAP o REST? Justifica con formato, contrato y curva de aprendizaje.",
  "hints": ["JSON es ligero", "OpenAPI documenta REST", "SOAP es verboso para móvil"],
  "expectedKeywords": ["REST", "JSON", "OpenAPI"],
  "successMessage": "Correcto. REST+JSON con OpenAPI es el estándar de facto para APIs públicas web y móvil."
}

---

### 3) GraphQL

**Sección TSX:** `GraphqlSection`

#### Mapa mental

- Lenguaje de **consulta** y runtime (Facebook 2012, open source 2015).
- **Un endpoint** (`POST /graphql`); el cliente pide campos exactos.
- Resuelve **over-fetching** y **under-fetching** de REST.
- Schema evoluciona; **mutations** para escritura.

#### Over-fetching y under-fetching

- **Over-fetching (REST):** `GET /api/usuarios/42` devuelve 30 campos; el móvil solo necesita `nombre` y `avatar` → desperdicio de ancho de banda.
- **Under-fetching (REST):** cargar un pedido requiere 3 requests (pedido, cliente, items) → latencia acumulada.
- **GraphQL:** una query pide exactamente lo necesario con relaciones anidadas.

#### Query GraphQL

<!-- code: graphql -->
```graphql
query ObtenerPedido($id: ID!) {
  pedido(id: $id) {
    id
    total
    cliente {
      nombre
      email
    }
    items {
      producto {
        nombre
        precio
      }
      cantidad
    }
  }
}
```

#### Respuesta GraphQL (JSON)

<!-- code: json -->
```json
{
  "data": {
    "pedido": {
      "id": "7",
      "total": 890000,
      "cliente": { "nombre": "Ana Ruiz", "email": "ana@ejemplo.com" },
      "items": [
        { "producto": { "nombre": "Teclado", "precio": 320000 }, "cantidad": 1 }
      ]
    }
  }
}
```

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "REST", "GraphQL"],
  "rows": [
    ["Endpoints", "Múltiples URIs por recurso", "Un endpoint /graphql"],
    ["Datos devueltos", "Forma fija del servidor", "Forma definida por el cliente"],
    ["Over-fetching", "Frecuente", "Evitado (solo campos pedidos)"],
    ["Under-fetching", "Varias peticiones", "Query anidada en una request"],
    ["Caché HTTP", "Nativo con GET y ETag", "Más complejo (POST único)"]
  ]
}

<!-- interactive: Callout -->
{
  "title": "GraphQL no es base de datos",
  "children": "GraphQL es capa de API. No reemplaza SQL; sin DataLoader u optimización puedes tener problema N+1 en el resolver."
}

---

### 4) gRPC y WebSockets

**Sección TSX:** `GrpcWebsocketsSection`

#### gRPC — microservicios internos

- Framework RPC de **alto rendimiento** (Google, 2015).
- **HTTP/2** + **Protocol Buffers** (binario, 3–10× más compacto que JSON).
- Contrato en `.proto`; generación de código multi-lenguaje.
- **Streaming bidireccional**; ideal servidor-a-servidor en datacenter.
- **No expuesto directo al navegador** — usar gRPC-Web o gateway REST/GraphQL.

#### Contrato gRPC (.proto)

<!-- code: protobuf -->
```protobuf
syntax = "proto3";

service ProductoService {
  rpc ObtenerProducto (ProductoRequest) returns (ProductoResponse);
}

message ProductoRequest {
  int32 id = 1;
}

message ProductoResponse {
  int32 id = 1;
  string nombre = 2;
  double precio = 3;
  int32 stock = 4;
}
```

#### WebSockets — tiempo real

- Protocolo **full-duplex** sobre TCP persistente.
- Handshake HTTP con `Upgrade: websocket` → respuesta **101 Switching Protocols**.
- Mensajes en ambas direcciones sin nueva petición HTTP por mensaje.
- Casos: chat, notificaciones push, dashboards live, trading, juegos multijugador.

#### Handshake WebSocket

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente\n  participant S as Servidor\n  C->>S: GET /ws (Upgrade: websocket)\n  S-->>C: 101 Switching Protocols\n  C->>S: mensaje JSON\n  S-->>C: respuesta JSON\n  C->>S: close"
}

#### Cliente WebSocket (JavaScript)

<!-- code: javascript -->
```javascript
const ws = new WebSocket('wss://api.ejemplo.com/chat');
ws.onopen = () => ws.send(JSON.stringify({ tipo: 'unirse', sala: 'general' }));
ws.onmessage = (e) => console.log(JSON.parse(e.data));
```

#### gRPC vs WebSockets

| Tecnología | Dirección | Formato | Ideal para |
|------------|-----------|---------|------------|
| gRPC | RPC request/response + streaming | Protobuf binario | Microservicios internos |
| WebSockets | Full-duplex persistente | JSON/texto típico | Push tiempo real al cliente |

<!-- interactive: Callout -->
{
  "title": "Caso real: panel admin",
  "children": "8 requests REST para cargar pedido+cliente+items (under-fetching). Migración: GraphQL en BFF con query anidada; WebSockets para push de nuevo_pedido; microservicios internos a gRPC por eficiencia protobuf."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué gRPC es preferible entre microservicios en el mismo datacenter pero no se expone directo al navegador del usuario?",
  "hints": ["Protobuf binario", "HTTP/2", "Browsers no hablan gRPC nativo"],
  "expectedKeywords": ["protobuf", "HTTP/2", "navegador", "gRPC-Web"],
  "successMessage": "Correcto. gRPC brilla servidor-a-servidor; el browser necesita gRPC-Web o un gateway REST/GraphQL."
}

---

### 5) Comparativa y selección

**Sección TSX:** `ComparativaTiposSection`

#### Panorama de arquitecturas

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  subgraph public [Cliente público]\n    WEB[Web / Mobile]\n  end\n  subgraph styles [Estilos de servicio]\n    REST[REST JSON]\n    GQL[GraphQL]\n    WS[WebSockets]\n  end\n  subgraph internal [Backend interno]\n    GRPC[gRPC protobuf]\n    SOAP[SOAP XML]\n  end\n  WEB --> REST\n  WEB --> GQL\n  WEB --> WS\n  REST --> GRPC\n  SOAP --> GRPC"
}

#### Tabla comparativa general

<!-- interactive: CompareTable -->
{
  "headers": ["Tecnología", "Tipo", "Formato", "Contrato", "Ideal para"],
  "rows": [
    ["SOAP", "Protocolo", "XML", "WSDL + WS-Security", "Banca, gobierno, legacy SAP/HL7"],
    ["REST", "Estilo arquitectónico", "JSON (típico)", "OpenAPI (opcional)", "APIs públicas web y móvil"],
    ["GraphQL", "Lenguaje de consulta", "JSON", "Schema GraphQL", "BFF, frontends con datos específicos"],
    ["gRPC", "Framework RPC", "Protobuf", ".proto", "Microservicios internos alto rendimiento"],
    ["WebSockets", "Protocolo full-duplex", "JSON/texto", "Mensajes ad-hoc o schema", "Tiempo real, push, chat"]
  ]
}

#### Regla de selección paso a paso

<!-- interactive: StepReveal -->
{
  "title": "¿Qué tecnología elegir?",
  "steps": [
    {
      "title": "¿API pública web/mobile?",
      "content": "→ REST + JSON con OpenAPI. Estándar de facto, caché HTTP nativo, curva de aprendizaje baja."
    },
    {
      "title": "¿Frontend necesita formas de datos muy distintas?",
      "content": "→ GraphQL en BFF. Una query con campos exactos; cuidado con caching y autorización por campo."
    },
    {
      "title": "¿Comunicación interna entre microservicios?",
      "content": "→ gRPC + protobuf. Eficiencia en LAN/datacenter; no exponer directo al browser."
    },
    {
      "title": "¿Eventos en tiempo real al cliente?",
      "content": "→ WebSockets (handshake 101). No uses WebSockets si polling o SSE bastan."
    },
    {
      "title": "¿Partner legacy exige XML y WS-Security?",
      "content": "→ SOAP. Mantén el canal legacy; traduce hacia REST/gRPC en gateway interno."
    }
  ]
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- **SOAP:** protocolo XML + WSDL; legacy regulado (banca, gobierno).
- **REST:** estilo sobre HTTP con recursos y verbos; JSON + OpenAPI para APIs públicas.
- **GraphQL:** endpoint único; el cliente define la forma; resuelve over/under-fetching.
- **gRPC:** HTTP/2 + protobuf; microservicios internos; no directo al navegador.
- **WebSockets:** conexión persistente bidireccional; tiempo real con handshake 101.
- **Selección por contexto**, no por moda.
- **Siguiente lección:** `apis` — diseño y consumo de APIs en la práctica.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Describe un caso de over-fetching con REST y cómo GraphQL lo resolvería con una query de solo 3 campos concretos.",
  "hints": ["GET devuelve más de lo necesario", "GraphQL pide solo nombre, email, avatar"],
  "expectedKeywords": ["over-fetching", "GraphQL", "campos"],
  "successMessage": "Correcto. REST devuelve forma fija; GraphQL permite pedir exactamente los campos requeridos."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué anti-patrón ocurre si expones gRPC directamente a la app móvil sin gateway? ¿Qué alternativas existen?",
  "hints": ["Browsers y muchas apps no hablan gRPC nativo", "gRPC-Web, REST gateway"],
  "expectedKeywords": ["gRPC", "gateway", "gRPC-Web", "REST"],
  "successMessage": "Correcto. El cliente no consume gRPC nativo; usa gateway REST/GraphQL o gRPC-Web."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un sistema de trading necesita precios en tiempo real en el dashboard. ¿REST polling cada 5 s, GraphQL o WebSockets? Justifica.",
  "hints": ["Latencia y carga del servidor", "Conexión persistente push"],
  "expectedKeywords": ["WebSockets", "tiempo real", "polling"],
  "successMessage": "Correcto. WebSockets evita polling repetitivo; el servidor empuja actualizaciones al instante."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Arquitectura de servicios para una plataforma de delivery"**

Startup de domicilios con: app cliente (React Native), panel restaurante (web), riders con GPS en tiempo real, pasarela bancaria SOAP legacy y 12 microservicios internos.

1. Asigna **SOAP, REST, GraphQL, gRPC o WebSockets** a cada canal (app cliente, panel, tracking riders, pasarela bancaria, comunicación entre microservicios). Justifica cada elección.
2. Escribe un ejemplo de **query GraphQL** que obtenga pedido + restaurante + items en una sola petición.
3. Esboza el **handshake WebSocket** para actualizar posición del rider en el mapa del cliente.
4. Indica qué **formato** (XML vs JSON vs protobuf) usarías en cada capa y por qué.
5. Señala el **anti-patrón** de exponer gRPC directo a la app móvil.

**Criterio de éxito:** al menos 4 tecnologías bien justificadas, ejemplos GraphQL y WebSocket válidos, distingue público vs interno vs legacy.

<!-- code: graphql -->
```graphql
query PedidoCompleto($id: ID!) {
  pedido(id: $id) {
    id
    estado
    restaurante { nombre direccion }
    items { producto { nombre } cantidad }
  }
}
```

<!-- code: http -->
```http
GET /ws/tracking HTTP/1.1
Host: api.delivery.ejemplo.com
Upgrade: websocket
Connection: Upgrade

HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto delivery: asigna tecnología a cada canal (app, panel, riders, banco, microservicios) y justifica al menos cuatro elecciones.",
  "hints": [
    "App → REST o GraphQL BFF",
    "Riders GPS → WebSockets",
    "Pasarela → SOAP legacy",
    "Entre pods → gRPC",
    "No gRPC directo al móvil"
  ],
  "expectedKeywords": ["REST", "WebSockets", "SOAP", "gRPC"],
  "successMessage": "Excelente. Has diseñado una arquitectura híbrida coherente con público, interno y legacy."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el panorama de tipos de servicios web. Ninguna tecnología gana siempre: la decisión correcta depende del consumidor, el contrato exigido y el rendimiento requerido.

**Ideas clave para retener:**

- **SOAP** persiste donde el regulador y el partner exigen XML + WS-Security.
- **REST** sigue siendo el default para APIs públicas; no confundas "API HTTP" con RESTful.
- **GraphQL** brilla en BFF; añade complejidad operativa (caché, rate limit).
- **gRPC** es para dentro del datacenter; **WebSockets** para push al cliente.
- **Gateway** traduce entre mundos (SOAP↔REST, gRPC↔REST).

**Siguiente paso:** lección `apis` — diseño práctico, versionado y consumo de APIs.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué distingue a SOAP de REST?",
      "options": [
        "SOAP es un estilo; REST es un protocolo XML",
        "SOAP es protocolo con mensajes XML y WSDL; REST es estilo arquitectónico sobre HTTP",
        "Ambos usan solo JSON",
        "REST requiere WS-Security"
      ],
      "correctIndex": 1,
      "feedback": "SOAP define formato estricto XML; REST aprovecha HTTP semántico sin ser un protocolo único."
    },
    {
      "question": "¿Qué problema de REST resuelve GraphQL con una query anidada?",
      "options": [
        "Cifrado TLS",
        "Under-fetching (múltiples requests para datos relacionados)",
        "Integración con SAP",
        "Streaming binario"
      ],
      "correctIndex": 1,
      "feedback": "GraphQL permite obtener entidades relacionadas en una sola petición con la forma exacta requerida."
    },
    {
      "question": "¿Por qué gRPC suele ser más eficiente que REST+JSON en microservicios internos?",
      "options": [
        "Usa XML más pequeño",
        "HTTP/2 y serialización protobuf binaria más compacta",
        "No necesita contrato",
        "Funciona solo en navegadores"
      ],
      "correctIndex": 1,
      "feedback": "Protobuf reduce tamaño y HTTP/2 permite multiplexación; ideal servidor-a-servidor."
    },
    {
      "question": "¿Qué código de estado inicia una conexión WebSocket?",
      "options": [
        "200 OK",
        "404 Not Found",
        "101 Switching Protocols",
        "201 Created"
      ],
      "correctIndex": 2,
      "feedback": "Tras el handshake HTTP con Upgrade: websocket, el servidor responde 101 y la conexión persiste."
    },
    {
      "question": "¿Cuándo elegirías SOAP sobre REST?",
      "options": [
        "API pública para app móvil nueva",
        "Chat en tiempo real",
        "Integración con sistema bancario legacy que exige XML y WS-Security",
        "Microservicios internos en Go"
      ],
      "correctIndex": 2,
      "feedback": "SOAP persiste donde el contrato WSDL y seguridad a nivel mensaje son requisito del ecosistema legacy."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Tipos de Servicios Web: SOAP, REST, GraphQL, gRPC y WebSockets | POSW
- **seoDescription:** Compara SOAP, REST, GraphQL, gRPC y WebSockets. Aprende cuándo usar cada arquitectura según API pública, microservicios internos, tiempo real o integración legacy. Lección 6 del track POSW.
