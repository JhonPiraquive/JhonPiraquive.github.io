---
track: posw
slug: arquitectura-api
title: "Arquitectura de APIs"
order: 22
prerequisites:
  - ia-en-desarrollo-web
related:
  - tipos-servicios-web
  - rest-principios
  - apis
  - http-metodos-status
source_brief: kb/education/pipeline/posw/arquitectura-api/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - RestArquitecturaSection
  - SoapArquitecturaSection
  - GraphqlArquitecturaSection
  - GrpcArquitecturaSection
  - PatronesSection
  - ComparativaSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - CierreTrackSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Describir** las capas internas de una API REST (gateway, controlador, servicio, repositorio).
- **Comparar** arquitecturas SOAP, GraphQL y gRPC con REST en contrato, tipado y punto de entrada.
- **Explicar** WSDL, SDL y `.proto` como contratos formales de cada estilo.
- **Identificar** patrones API Gateway, BFF, Strangler Fig y CQRS y cuándo aplicarlos.
- **Elegir** estilo arquitectónico según cliente, rendimiento, tipado y legado (no solo moda).

## Prerrequisitos

- **Lección `ia-en-desarrollo-web`:** flujo de verificación y contexto de proyecto.
- **Lecciones `rest-principios`, `apis`, `http-metodos-status`:** verbos HTTP, status codes y recursos REST.
- **Lección `principios-solid`:** DIP y capas de servicio/repositorio.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosSection`

Arquitectura de API describe **cómo se organizan los componentes internos** (routing, negocio, datos), no solo la URL expuesta. REST, GraphQL y gRPC pueden compartir capas similares por dentro.

<!-- interactive: Callout -->
{
  "title": "Arquitectura ≠ estilo REST",
  "children": "GraphQL también tiene controladores/resolvers, servicios y repositorios. No confundas el estilo de contrato externo con la organización interna."
}

---

### 1) REST en capas

**Sección TSX:** `RestArquitecturaSection`

#### Flujo de capas

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  C[Cliente SPA / Mobile]\n  G[API Gateway<br/>Auth, Rate limit]\n  R[Router / Controlador]\n  S[Servicio<br/>Lógica de negocio]\n  RE[Repositorio / ORM]\n  DB[(PostgreSQL)]\n  C -->|HTTP| G --> R --> S --> RE --> DB"
}

#### Estructura de directorios típica

<!-- code: bash -->
```bash
src/
├── controllers/
│   ├── productos.controller.ts
│   └── pedidos.controller.ts
├── services/
│   └── productos.service.ts
├── repositories/
│   └── producto.repository.ts
├── middlewares/
│   ├── auth.middleware.ts
│   └── rateLimit.middleware.ts
└── routes/
    └── index.ts
```

#### Controlador delgado + servicio

<!-- code: typescript -->
```typescript
// productos.controller.ts
export class ProductosController {
  constructor(private readonly service: ProductosService) {}

  async getById(req: Request, res: Response): Promise<void> {
    const id = Number(req.params.id);
    const producto = await this.service.findById(id);
    res.status(200).json(producto);
  }
}

// productos.service.ts
export class ProductosService {
  constructor(private readonly repo: ProductoRepository) {}

  async findById(id: number): Promise<Producto> {
    const producto = await this.repo.buscarPorId(id);
    if (!producto) throw new NotFoundError(`Producto ${id}`);
    return producto;
  }
}
```

#### Petición REST típica

<!-- code: http -->
```http
GET /api/v1/productos/42 HTTP/1.1
Host: api.ejemplo.com
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": 4500000,
  "categoriaId": 3
}
```

#### Errores comunes

- Lógica de negocio en el controlador — difícil de testear.
- Controlador que hace SQL directo — salta la capa de servicio.

#### StepReveal: capas de arriba a abajo

<!-- interactive: StepReveal -->
{
  "title": "Capas REST de arriba a abajo",
  "steps": [
    { "title": "API Gateway", "content": "Entrada única: auth, rate limiting, logging, enrutamiento a microservicios." },
    { "title": "Controlador", "content": "Traduce HTTP a llamadas de servicio; sin lógica de negocio pesada." },
    { "title": "Servicio", "content": "Reglas de negocio; independiente de HTTP; testeable con mocks." },
    { "title": "Repositorio", "content": "Abstrae persistencia; cambiar BD sin tocar servicios (DIP)." },
    { "title": "Base de datos", "content": "PostgreSQL, MongoDB u otro motor según el dominio." }
  ]
}

---

### 2) SOAP y WSDL

**Sección TSX:** `SoapArquitecturaSection`

#### Características

- XML + **WSDL** obligatorio como contrato formal.
- WS-Security, WS-ReliableMessaging.
- Común en banca y sistemas legados.

#### Cuándo elegir SOAP

- Integraciones enterprise con contratos estrictos y seguridad WS-*.
- Legado que ya expone WSDL; migración costosa.

#### Errores comunes

- Elegir SOAP para un CRUD JSON nuevo sin requisito de legado.
- Ignorar el overhead XML frente a JSON/Protobuf.

---

### 3) GraphQL: SDL, resolvers y DataLoader

**Sección TSX:** `GraphqlArquitecturaSection`

#### Un endpoint, schema tipado

<!-- code: graphql -->
```graphql
type Producto {
  id: ID!
  nombre: String!
  precio: Float!
  categoria: Categoria!
  reviews: [Review!]!
}

type Query {
  producto(id: ID!): Producto
  productos(filtro: ProductoFiltro): [Producto!]!
}

type Mutation {
  crearProducto(input: CreateProductoInput!): Producto!
}
```

#### Fuentes múltiples

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  CL[Cliente GraphQL]\n  ENG[GraphQL Engine]\n  SCH[Schema SDL]\n  RES[Resolvers]\n  REST[REST legacy]\n  PG[(PostgreSQL)]\n  RD[(Redis)]\n  CL -->|POST /graphql| ENG\n  ENG --> SCH\n  ENG --> RES\n  RES --> REST\n  RES --> PG\n  RES --> RD"
}

#### Problema N+1 y DataLoader

<!-- interactive: Callout -->
{
  "title": "Black Friday: 200 ms → 8 s",
  "children": "Lista de 50 posts con autor y comentarios; cada resolver dispara query a usuarios. Decisión: DataLoader por tipo de entidad, batch de IDs, métricas por resolver, límite de profundidad en queries."
}

#### Errores comunes

- GraphQL sin DataLoader — N+1 queries que tumba PostgreSQL.
- Queries sin límite de profundidad — DoS accidental.

---

### 4) gRPC: Protobuf y streaming

**Sección TSX:** `GrpcArquitecturaSection`

#### Definición .proto

<!-- code: protobuf -->
```protobuf
syntax = "proto3";

service ProductoService {
  rpc ObtenerProducto(ProductoId) returns (Producto);
  rpc ListarProductos(ListarRequest) returns (stream Producto);
}

message ProductoId { int32 id = 1; }

message Producto {
  int32 id = 1;
  string nombre = 2;
  double precio = 3;
}
```

#### Cliente gRPC en C#

<!-- code: csharp -->
```csharp
var channel = GrpcChannel.ForAddress("https://localhost:5001");
var client = new ProductoService.ProductoServiceClient(channel);

var response = await client.ObtenerProductoAsync(
    new ProductoId { Id = 42 }
);
Console.WriteLine(response.Nombre);
```

#### Características

- **HTTP/2 + Protobuf** binario — bajo overhead.
- Stubs generados desde `.proto`.
- Unary y streaming (server, client, bidireccional).

#### Errores comunes

- gRPC expuesto al navegador sin proxy/gateway — incompatibilidad con clientes web puros.
- Usar gRPC para APIs públicas simples cuando REST/JSON basta.

---

### 5) Patrones arquitectónicos

**Sección TSX:** `PatronesSection`

#### API Gateway

Entrada única: auth, rate limiting, logging, enrutamiento a microservicios.

#### BFF (Backend for Frontend)

API adaptada por tipo de cliente (mobile vs web). Evita BFF idénticos sin diferencia real.

#### Strangler Fig

Migrar monolito gradualmente: proxy enruta tráfico nuevo al microservicio mientras el legacy sigue activo.

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  M[Monolito legacy]\n  N[Nuevos endpoints microservicio]\n  P[Proxy / Gateway]\n  P --> M\n  P --> N\n  M -.->|migrar gradualmente| N"
}

#### CQRS

Separar lecturas y escrituras. Evitar CQRS prematuro en un CRUD de 5 tablas sin escala de lectura.

#### Caso real: retail sin gateway

<!-- interactive: Callout -->
{
  "title": "Cuatro flujos OAuth en el móvil",
  "children": "Cada microservicio expone auth distinta; un cambio de JWT rompe solo la app iOS. Decisión: API Gateway centraliza auth y rate limit; BFF Mobile adapta payloads; servicios internos sin HTTP público."
}

#### Completar capas

<!-- interactive: CodeChallenge -->
{
  "title": "Completa las capas REST",
  "template": "___ recibe HTTP y traduce a llamadas\n___ contiene la lógica de negocio\n___ accede a la base de datos",
  "blanks": [
    { "id": "blank1", "answer": "Controller", "placeholder": "capa HTTP" },
    { "id": "blank2", "answer": "Service", "placeholder": "negocio" },
    { "id": "blank3", "answer": "Repository", "placeholder": "persistencia" }
  ]
}

---

### 6) Comparativa REST vs SOAP vs GraphQL vs gRPC

**Sección TSX:** `ComparativaSection`

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "REST", "SOAP", "GraphQL", "gRPC"],
  "rows": [
    ["Contrato", "OpenAPI (opcional)", "WSDL obligatorio", "SDL Schema", ".proto"],
    ["Formato", "JSON típico", "XML", "JSON", "Protobuf binario"],
    ["Punto de entrada", "Múltiples URIs", "Endpoint SOAP", "Un /graphql", "Servicios RPC"],
    ["Tipado", "Débil (JSON)", "Fuerte (XSD)", "Fuerte (Schema)", "Fuerte (generado)"],
    ["Overhead", "Bajo-medio", "Alto", "Medio (riesgo N+1)", "Bajo"],
    ["Cuándo elegir", "APIs públicas CRUD", "Banca/legado WS-*", "Cliente define forma", "Comunicación interna microservicios"]
  ]
}

#### JSON de error consistente

<!-- code: json -->
```json
{
  "error": {
    "code": "PRODUCTO_NO_ENCONTRADO",
    "message": "No existe producto con id 42",
    "status": 404
  }
}
```

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué GraphQL puede sufrir N+1 y cómo ayuda DataLoader? Responde en 2–3 frases.",
  "hints": ["Resolvers anidados", "Batch de IDs", "Una query por tipo"],
  "expectedKeywords": ["N+1", "DataLoader", "batch", "resolver"],
  "successMessage": "Correcto. DataLoader agrupa y deduplica cargas de entidades relacionadas en una sola consulta por tipo."
}

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja mentalmente el flujo Cliente → Gateway → Controller → Service → Repository → BD para POST /pedidos. ¿Qué capa valida stock y qué capa ejecuta SQL?",
  "hints": ["Negocio en Service", "SQL en Repository"],
  "expectedKeywords": ["Service", "Repository", "stock"],
  "successMessage": "Correcto. El servicio valida stock y reglas de negocio; el repositorio ejecuta persistencia."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Diseña la arquitectura de API para una plataforma de cursos online"**

Requisitos: app web (React), app móvil, panel admin, catálogo de cursos, inscripciones, pagos.

1. Diagrama de capas REST para el servicio de `cursos` (gateway → controller → service → repo).
2. ¿Necesitas BFF separado para mobile? Justifica en 3 bullets.
3. Esquema GraphQL mínimo: `Curso`, `Query.curso(id)`, `Mutation.inscribir`.
4. Indica qué comunicación interna pondrías en gRPC (si alguna) y por qué.
5. Plan Strangler: endpoint legacy `/api/cursos` en monolito PHP; cómo migrar sin downtime.

**Criterio de éxito:** capas claras, patrón justificado (no over-engineering), SDL válido, plan de migración incremental.

<!-- code: graphql -->
```graphql
type Curso {
  id: ID!
  titulo: String!
  precio: Float!
  instructor: String!
}

type Query {
  curso(id: ID!): Curso
}

type Mutation {
  inscribir(cursoId: ID!, usuarioId: ID!): Inscripcion!
}

type Inscripcion {
  id: ID!
  curso: Curso!
  fecha: String!
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Completa el reto: justifica si usarías BFF mobile y qué endpoint migrarías primero con Strangler Fig.",
  "hints": [
    "BFF si payloads mobile difieren",
    "Strangler: proxy enruta tráfico nuevo",
    "gRPC interno para pagos si baja latencia"
  ],
  "expectedKeywords": ["BFF", "Strangler", "gateway", "capas"],
  "successMessage": "Excelente. Has diseñado arquitectura de API con patrones justificados."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has recorrido la arquitectura interna de APIs y los estilos REST, SOAP, GraphQL y gRPC.

**Ideas clave para retener:**

- **Gateway → Controller → Service → Repository → BD** es el flujo REST típico.
- El **servicio** concentra negocio; el **controlador** solo adapta HTTP.
- **WSDL** (SOAP), **SDL** (GraphQL) y **.proto** (gRPC) son contratos formales.
- **DataLoader** resuelve N+1 en GraphQL; **Strangler Fig** migra monolitos gradualmente.
- Elige estilo por **cliente, rendimiento, tipado y legado**, no por moda.
- Evita over-engineering: CQRS y BFF solo cuando el caso lo justifica.

**Cierre del track POSW**

**Sección TSX:** `CierreTrackSection`

Con `arquitectura-api` cierras el track Programación Orientada a Sitios Web. Has pasado del modelo cliente-servidor hasta el diseño de APIs empresariales, bases de datos, SOLID, naming e IA en el flujo de desarrollo.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué capa contiene la lógica de negocio en una API REST típica?",
      "options": [
        "API Gateway",
        "Controlador",
        "Servicio",
        "Middleware de logging"
      ],
      "correctIndex": 2,
      "feedback": "El servicio concentra reglas de negocio; el controlador solo adapta HTTP."
    },
    {
      "question": "¿Qué documento define el contrato en SOAP?",
      "options": [
        "OpenAPI",
        "WSDL",
        "package.json",
        "README.md"
      ],
      "correctIndex": 1,
      "feedback": "WSDL describe operaciones, tipos XSD y endpoint en XML."
    },
    {
      "question": "¿Qué problema resuelve DataLoader en GraphQL?",
      "options": [
        "Autenticación JWT",
        "Consultas N+1 por resolvers",
        "Versionado de REST",
        "Compresión gzip"
      ],
      "correctIndex": 1,
      "feedback": "Agrupa y deduplica cargas de datos relacionados en batch."
    },
    {
      "question": "¿Qué transporte y formato usa gRPC por defecto?",
      "options": [
        "HTTP/1.1 + JSON",
        "HTTP/2 + Protobuf binario",
        "WebSockets + XML",
        "FTP + CSV"
      ],
      "correctIndex": 1,
      "feedback": "gRPC usa HTTP/2 y serialización Protobuf para bajo overhead."
    },
    {
      "question": "¿Qué patrón migra un monolito gradualmente a microservicios?",
      "options": [
        "Singleton",
        "Strangler Fig",
        "Factory Method",
        "Observer"
      ],
      "correctIndex": 1,
      "feedback": "Strangler enruta tráfico nuevo al microservicio mientras el legacy sigue activo."
    }
  ]
}
