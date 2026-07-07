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
source: kb/education/sources/clases/programacion-orientada-sitios-web/arquitectura-api.md
topic_expert: topic-expert-web-services
---

## Objetivos medibles

Al finalizar la lección el estudiante podrá:

1. Describir las **capas internas** de una API REST (gateway, controlador, servicio, repositorio).
2. Comparar **arquitecturas SOAP, GraphQL y gRPC** con REST en contrato, tipado y punto de entrada.
3. Explicar **WSDL, SDL y .proto** como contratos formales de cada estilo.
4. Identificar patrones **API Gateway, BFF, Strangler Fig y CQRS** y cuándo aplicarlos.
5. Elegir estilo arquitectónico según **cliente, rendimiento, tipado y legado** (no solo moda).

## Conceptos clave

- **Arquitectura de API:** cómo se organizan componentes internos (routing, negocio, datos), no solo la URL expuesta.
- **REST en capas:** Cliente → API Gateway → Router/Controlador → Servicio → Repositorio/ORM → BD.
- **API Gateway:** entrada única; auth, rate limiting, logging, enrutamiento a microservicios.
- **Controlador:** traduce HTTP a llamadas de servicio; sin lógica de negocio pesada.
- **Servicio:** reglas de negocio; independiente de HTTP (testeable con mocks).
- **Repositorio:** abstrae persistencia; cambiar BD sin tocar servicios (alinea con DIP/SOLID).
- **SOAP:** XML + WSDL obligatorio; WS-Security, WS-ReliableMessaging; común en banca/legado.
- **GraphQL:** un endpoint `/graphql`; Schema (SDL) + Resolvers; riesgo N+1 → DataLoader.
- **gRPC:** HTTP/2 + Protobuf; stubs generados; unary y streaming (server, client, bidireccional).
- **Patrones:** Gateway (centralizar cross-cutting), BFF (API por tipo de cliente), Strangler Fig (migrar monolito gradual), CQRS (separar lecturas y escrituras).
- **Comparativa:** REST (múltiples URIs, JSON débil), SOAP (WSDL, overhead alto), GraphQL (cliente define forma), gRPC (binario, bajo overhead).

## Errores comunes

- **Lógica de negocio en el controlador** — difícil de testear y reutilizar.
- **Saltar capa de servicio** — controlador que hace SQL directo.
- **GraphQL sin DataLoader** — N+1 queries que tumba PostgreSQL.
- **gRPC expuesto al navegador** sin proxy/gateway — incompatibilidad con clientes web puros.
- **BFF innecesario** — tres BFF idénticos sin diferencia real mobile/web.
- **Strangler sin métricas** — endpoints viejos nunca se apagan.
- **CQRS prematuro** — complejidad para un CRUD de 5 tablas sin escala de lectura.
- **Confundir arquitectura de API con estilo REST** — GraphQL también tiene capas internas.

## Casos reales

### 1. Retail: monolito REST sin gateway

Cada microservicio nuevo expone auth distinta; el móvil implementa 4 flujos OAuth. Un cambio de JWT rompe solo la app iOS.

**Decisión clave:** API Gateway centraliza auth y rate limit; BFF Mobile adapta payloads; servicios internos sin HTTP público.

### 2. Media: GraphQL y problema N+1

Lista de 50 posts con autor y comentarios; cada resolver dispara query a usuarios. Latencia p95 pasa de 200 ms a 8 s en Black Friday.

**Decisión clave:** DataLoader por tipo de entidad; batch de IDs; métricas por resolver; límite de profundidad en queries.

## Ejemplos de código sugeridos

### Estructura de directorios REST

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

### Controlador delgado + servicio

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

### Petición REST típica

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

### GraphQL SDL

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

### gRPC — definición .proto

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

### Cliente gRPC en C#

<!-- code: csharp -->
```csharp
// Stub generado desde .proto
var channel = GrpcChannel.ForAddress("https://localhost:5001");
var client = new ProductoService.ProductoServiceClient(channel);

var response = await client.ObtenerProductoAsync(
    new ProductoId { Id = 42 }
);
Console.WriteLine(response.Nombre);
```

### JSON de error consistente (capa API)

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

## Ejercicios de práctica

- **tipo:** diagrama — Dibuja flujo Cliente → Gateway → Controller → Service → Repository → BD para `POST /pedidos`.
- **tipo:** reflexion — ¿Por qué GraphQL puede sufrir N+1 y cómo ayuda DataLoader?
- **tipo:** completar-codigo — Completa capas: `___Controller` recibe HTTP, `___Service` tiene negocio, `___Repository` accede a datos.

## Animación o visual sugerida

- **Diagrama ASCII animado** — capas REST de arriba a abajo (StepReveal).
- **CompareTable — REST vs SOAP vs GraphQL vs gRPC:** contrato, tipado, overhead, versionado.
- **Tarjetas de patrones** — Gateway, BFF, Strangler, CQRS con icono y caso de uso.

## Diagrama Mermaid (si aplica)

### Capas REST

```mermaid
flowchart TD
  C[Cliente SPA / Mobile]
  G[API Gateway<br/>Auth, Rate limit]
  R[Router / Controlador]
  S[Servicio<br/>Lógica de negocio]
  RE[Repositorio / ORM]
  DB[(PostgreSQL)]
  C -->|HTTP| G --> R --> S --> RE --> DB
```

### GraphQL con fuentes múltiples

```mermaid
flowchart TD
  CL[Cliente GraphQL]
  ENG[GraphQL Engine]
  SCH[Schema SDL]
  RES[Resolvers]
  REST[REST legacy]
  PG[(PostgreSQL)]
  RD[(Redis)]
  CL -->|POST /graphql| ENG
  ENG --> SCH
  ENG --> RES
  RES --> REST
  RES --> PG
  RES --> RD
```

### Patrón Strangler Fig

```mermaid
flowchart LR
  M[Monolito legacy]
  N[Nuevos endpoints microservicio]
  P[Proxy / Gateway]
  P --> M
  P --> N
  M -.->|migrar gradualmente| N
```

## Secciones TSX sugeridas

- `ObjetivosSection` — 5 objetivos medibles
- `RestArquitecturaSection` — diagrama de capas + directorios típicos
- `SoapArquitecturaSection` — WSDL, WS-* stack
- `GraphqlArquitecturaSection` — SDL, resolvers, DataLoader
- `GrpcArquitecturaSection` — Protobuf, tipos de streaming
- `PatronesSection` — Gateway, BFF, Strangler, CQRS
- `ComparativaSection` — tabla REST/SOAP/GraphQL/gRPC
- `CompruebaTuComprensionSection` — quiz integrado
- `CierreTrackSection` — cierre del track POSW (última lección)

## Reto integrador

**"Diseña la arquitectura de API para una plataforma de cursos online"**

Requisitos: app web (React), app móvil, panel admin, catálogo de cursos, inscripciones, pagos.

1. Diagrama de capas REST para el servicio de `cursos` (gateway → controller → service → repo).
2. ¿Necesitas BFF separado para mobile? Justifica en 3 bullets.
3. Esquema GraphQL mínimo: `Curso`, `Query.curso(id)`, `Mutation.inscribir`.
4. Indica qué comunicación interna pondrías en gRPC (si alguna) y por qué.
5. Plan Strangler: un endpoint legacy `/api/cursos` en monolito PHP; cómo migrar sin downtime.

**Criterio de éxito:** capas claras, patrón justificado (no over-engineering), SDL válido, plan de migración incremental.

## Preguntas sugeridas para quiz (5)

1. **¿Qué capa contiene la lógica de negocio en una API REST típica?**
   - A) API Gateway
   - B) Controlador
   - C) Servicio
   - D) Middleware de logging
   - **Correcta:** C
   - **Feedback:** El servicio concentra reglas de negocio; el controlador solo adapta HTTP.

2. **¿Qué documento define el contrato en SOAP?**
   - A) OpenAPI
   - B) WSDL
   - C) package.json
   - D) README.md
   - **Correcta:** B
   - **Feedback:** WSDL describe operaciones, tipos XSD y endpoint en XML.

3. **¿Qué problema resuelve DataLoader en GraphQL?**
   - A) Autenticación JWT
   - B) Consultas N+1 por resolvers
   - C) Versionado de REST
   - D) Compresión gzip
   - **Correcta:** B
   - **Feedback:** Agrupa y deduplica cargas de datos relacionados en batch.

4. **¿Qué transporte y formato usa gRPC por defecto?**
   - A) HTTP/1.1 + JSON
   - B) HTTP/2 + Protobuf binario
   - C) WebSockets + XML
   - D) FTP + CSV
   - **Correcta:** B
   - **Feedback:** gRPC usa HTTP/2 y serialización Protobuf para bajo overhead.

5. **¿Qué patrón migra un monolito gradualmente a microservicios?**
   - A) Singleton
   - B) Strangler Fig
   - C) Factory Method
   - D) Observer
   - **Correcta:** B
   - **Feedback:** Strangler enruta tráfico nuevo al microservicio mientras el legacy sigue activo.

## Referencias

- Fuente docente: `kb/education/sources/clases/programacion-orientada-sitios-web/arquitectura-api.md`
- Prerrequisito: `ia-en-desarrollo-web`
- Siguiente lección: ninguna (cierre del track POSW)
- Lecciones relacionadas: `tipos-servicios-web`, `rest-principios`, `apis`, `http-metodos-status`
- GraphQL DataLoader: https://github.com/graphql/dataloader
- gRPC docs: https://grpc.io/docs/
