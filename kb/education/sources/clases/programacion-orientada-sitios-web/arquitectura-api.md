# Instrucciones para frontend-developer: arquitectura-api.html

## Archivo de salida
`clases/programacion-orientada-sitios-web/arquitectura-api.html`

---

1. Crear `clases/programacion-orientada-sitios-web/arquitectura-api.html`. `<html lang="es">`. Título: "Arquitectura de APIs | POSW".
2. Misma paleta, Bootstrap 5, Bootstrap Icons, Google Fonts, highlight.js.
3. Header fijo: "POSW". Nav: "REST", "SOAP", "GraphQL", "gRPC", "Patrones", "Comparativa".
4. Hero: badge "Tema 12", `<h1>` "Arquitectura de APIs", subtítulo "Cómo se estructura internamente cada tipo de API: componentes, flujos y patrones." Botón scroll a `#rest`.
5. Crear `<section id="rest">` padding 80px 0. Contiene:
   - `<h2>` "Arquitectura REST".
   - Diagrama de capas en ASCII:
     ```
     ┌──────────────────────────────────────────────┐
     │              CLIENTE (SPA / Mobile)           │
     └────────────────────┬─────────────────────────┘
                          │ HTTP Request
                          ▼
     ┌──────────────────────────────────────────────┐
     │               API GATEWAY                    │
     │  (Autenticación, Rate Limiting, Logging)      │
     └────────────────────┬─────────────────────────┘
                          │
     ┌────────────────────▼─────────────────────────┐
     │              ROUTER / CONTROLADOR            │
     │   GET /productos → ProductosController       │
     │   POST /pedidos  → PedidosController         │
     └────────────────────┬─────────────────────────┘
                          │
     ┌────────────────────▼─────────────────────────┐
     │              CAPA DE SERVICIO                │
     │   ProductosService: lógica de negocio        │
     └────────────────────┬─────────────────────────┘
                          │
     ┌────────────────────▼─────────────────────────┐
     │              REPOSITORIO / ORM               │
     │   ProductoRepository ↔ PostgreSQL            │
     └──────────────────────────────────────────────┘
     ```
   - Descripción de cada capa:
     - API Gateway: punto de entrada único. Autentica tokens, aplica rate limiting, loguea requests, enruta al microservicio correcto.
     - Controlador: recibe la petición HTTP, extrae parámetros, llama al servicio, devuelve la respuesta.
     - Servicio: contiene la lógica de negocio. Sin dependencia de HTTP (testeable unitariamente).
     - Repositorio: abstrae el acceso a datos. Patrón Repository permite cambiar la BD sin tocar servicios.
   - Estructura de directorios típica en bloque código:
     ```
     src/
     ├── controllers/
     │   ├── productos.controller.ts
     │   └── pedidos.controller.ts
     ├── services/
     │   ├── productos.service.ts
     │   └── pedidos.service.ts
     ├── repositories/
     │   └── producto.repository.ts
     ├── models/
     │   └── producto.model.ts
     ├── middlewares/
     │   ├── auth.middleware.ts
     │   └── rateLimit.middleware.ts
     └── routes/
         └── index.ts
     ```
6. Crear `<section id="soap-arch">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Arquitectura SOAP".
   - Diagrama:
     ```
     ┌──────────────┐      WSDL       ┌──────────────────┐
     │   CLIENTE    │ ◄────────────── │  SOAP SERVICE    │
     │              │                 │                  │
     │ SOAP Request │ ──────────────► │  Web Service     │
     │ (XML/HTTP)   │                 │  Container       │
     │              │ ◄────────────── │  (JAX-WS, .NET)  │
     │ SOAP Response│                 │                  │
     └──────────────┘                 └────────┬─────────┘
                                               │
                                        ┌──────▼──────┐
                                        │  Business   │
                                        │  Logic      │
                                        └──────┬──────┘
                                               │
                                        ┌──────▼──────┐
                                        │  Database   │
                                        └─────────────┘
     ```
   - WSDL: "El contrato WSDL (Web Services Description Language) es un documento XML que describe: los tipos de datos (usando XSD), las operaciones disponibles, los mensajes de entrada/salida y la ubicación del endpoint. Los clientes generan código automáticamente desde el WSDL."
   - WS-* Stack en lista: WS-Security (firma y cifrado), WS-ReliableMessaging (entrega garantizada), WS-AtomicTransaction (transacciones distribuidas), WS-Addressing (headers de enrutamiento).
7. Crear `<section id="graphql-arch">` padding 80px 0. Contiene:
   - `<h2>` "Arquitectura GraphQL".
   - Diagrama:
     ```
     ┌─────────────┐
     │   Cliente   │
     │  (query)    │
     └──────┬──────┘
            │  POST /graphql
            ▼
     ┌─────────────────────────────────────────┐
     │           GraphQL Engine                │
     │  ┌──────────┐  ┌──────────┐            │
     │  │  Schema  │  │ Resolver │            │
     │  │ (tipos,  │  │ (lógica  │            │
     │  │ queries, │  │ por cada │            │
     │  │mutations)│  │ campo)   │            │
     │  └──────────┘  └────┬─────┘            │
     └───────────────────┬─┘─────────────────┘
                         │
           ┌─────────────┼──────────────┐
           ▼             ▼              ▼
      [ REST API ]  [ PostgreSQL ] [ Redis Cache ]
     ```
   - Schema Definition Language (SDL) en bloque código:
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
       actualizarProducto(id: ID!, input: UpdateProductoInput!): Producto!
     }

     type Subscription {
       productoActualizado(id: ID!): Producto!
     }
     ```
   - DataLoader pattern: explicación de que los resolvers de GraphQL pueden generar el problema N+1 (N queries para N items). DataLoader lo resuelve agrupando y deduplicando las consultas en una sola batch.
8. Crear `<section id="grpc-arch">` padding 80px 0 fondo `--surface`. Contiene:
   - `<h2>` "Arquitectura gRPC".
   - Diagrama:
     ```
     ┌─────────────────┐                 ┌─────────────────┐
     │  gRPC Cliente   │                 │  gRPC Servidor  │
     │  (stub generado)│                 │ (implementación)│
     │                 │                 │                 │
     │  productos      │                 │  ProductoService│
     │  .getProducto() │                 │  .ObtenerProd() │
     └────────┬────────┘                 └────────┬────────┘
              │  HTTP/2 + Protobuf binary           │
              └─────────────────────────────────────┘
     ```
   - Tipos de streaming en tabla: Tipo | Descripción | Ejemplo de uso. Datos:
     - Unary | Un request, una respuesta | Obtener un producto por ID
     - Server Streaming | Un request, múltiples respuestas | Listar productos (paginado en stream)
     - Client Streaming | Múltiples requests, una respuesta | Subir archivo en chunks
     - Bidirectional Streaming | Múltiples requests y respuestas | Chat en tiempo real
9. Crear `<section id="patrones">` padding 80px 0. Contiene:
   - `<h2>` "Patrones de Arquitectura de APIs".
   - Cuatro patrones en tarjetas:
     - API Gateway: punto de entrada único que centraliza auth, rate limiting, logging y routing a microservicios.
     - BFF (Backend for Frontend): una API específica por tipo de cliente (BFF Mobile, BFF Web). Evita que el frontend cargue datos innecesarios.
     - Strangler Fig: patrón de migración donde se reemplaza gradualmente un monolito añadiendo nuevos endpoints en microservicios, mientras los viejos siguen funcionando.
     - CQRS (Command Query Responsibility Segregation): separar las operaciones de lectura (Queries) de las de escritura (Commands) en modelos y bases de datos distintos.
10. Crear `<section id="comparativa">` padding 80px 0 fondo `--surface`. Contiene:
    - `<h2>` "Comparativa Arquitectural".
    - Tabla: Aspecto | REST | SOAP | GraphQL | gRPC. Datos:
      - Punto de entrada | Múltiples URIs | Generalmente uno | Uno (`/graphql`) | Por servicio (proto)
      - Contrato | OpenAPI (opcional) | WSDL (obligatorio) | SDL (obligatorio) | .proto (obligatorio)
      - Tipado | Débil (JSON) | Fuerte (XSD) | Fuerte (SDL) | Fuerte (Protobuf)
      - Versionado | URL (`/v1/`, `/v2/`) | WSDL nuevo | Schema evolution | Proto evolution
      - Overhead | Bajo | Alto | Medio | Muy bajo
11. Sección recursos: `tipos-servicios-web.html`, `rest-principios.html`, `http-metodos-status.html`, `apis.html`.
12. Footer estándar. Highlight.js. Animaciones. Responsivo.
