---
track: posw
slug: apis
title: "APIs: Qué son, Tipos y Herramientas"
order: 7
prerequisites:
  - tipos-servicios-web
related:
  - http-metodos-status
  - tokens
  - rest-principios
source_brief: kb/education/pipeline/posw/apis/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - QueEsApiSection
  - TiposApiSection
  - HerramientasApiSection
  - DisenoApiSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** API (Application Programming Interface) como contrato de comunicación entre aplicaciones que oculta la implementación interna.
- **Clasificar** APIs por accesibilidad (pública, privada, partner) y por arquitectura (REST, SOAP, GraphQL, gRPC), enlazando con la lección de tipos de servicios web.
- **Describir** el flujo cliente → API → fuente de datos con request HTTP y respuesta JSON.
- **Usar** herramientas (Postman, curl, Swagger UI, Thunder Client) para probar endpoints y documentar contratos.
- **Aplicar** buenas prácticas de diseño (URIs con sustantivos, versionado, códigos de estado, paginación, OpenAPI) y detectar anti-patrones comunes.

## Prerrequisitos

- **Lección `tipos-servicios-web`:** REST, SOAP, GraphQL, gRPC y cuándo usar cada arquitectura.
- **Lección `http-metodos-status`:** verbos HTTP y códigos de estado semánticos.
- Familiaridad con JSON como formato de intercambio.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección introduce las APIs como contrato entre aplicaciones: qué son, cómo se clasifican, con qué herramientas se prueban y qué decisiones de diseño evitan integraciones frágiles.

<!-- interactive: Callout -->
{
  "title": "API ≠ backend completo",
  "children": "La API es la interfaz expuesta; el backend incluye lógica, base de datos y procesos internos que el consumidor no ve. Confundir ambos lleva a diseños acoplados y difíciles de versionar."
}

---

### 1) ¿Qué es una API?

**Sección TSX:** `QueEsApiSection`

#### Mapa mental

- **API:** conjunto de definiciones y protocolos que permite que dos aplicaciones se comuniquen.
- **Abstracción:** oculta la implementación interna (lenguaje, BD, arquitectura).
- **Contrato:** define qué se puede pedir y qué se recibirá (método, URI, headers, cuerpo, códigos de estado).
- **Interoperabilidad:** sistemas distintos (móvil, web, servidor) colaboran mediante el mismo contrato.

#### Definición y analogía del menú

Una **API** es el contrato por el cual una aplicación solicita operaciones a otra sin conocer su interior. La analogía del restaurante: el cliente no entra a la cocina (backend); pide al mesero (API) usando el vocabulario del menú (endpoints) y recibe la respuesta preparada.

- **Cliente:** app móvil o web que consume datos.
- **Mesero (API):** traduce el pedido a operaciones del servidor.
- **Cocina (backend):** lógica, base de datos, reglas de negocio.
- **Menú (contrato):** endpoints documentados con método, URI y formato de respuesta.

#### Flujo básico cliente → API → datos

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as App Cliente\n  participant A as API Gateway\n  participant S as Servicio / BD\n  C->>A: GET /api/clima?ciudad=Medellin\n  A->>S: Consulta datos\n  S-->>A: Datos meteorológicos\n  A-->>C: 200 OK + JSON"
}

#### Ejemplo: consulta a API pública

<!-- code: http -->
```http
GET /api/clima?ciudad=Medellin HTTP/1.1
Host: api.ejemplo.com
Accept: application/json
X-API-Key: sk_live_abc123XYZ
```

<!-- code: json -->
```json
{
  "ciudad": "Medellin",
  "temperatura": 24,
  "unidad": "C",
  "condicion": "Parcialmente nublado"
}
```

<!-- interactive: StepReveal -->
{
  "title": "Flujo de una petición API",
  "steps": [
    {
      "title": "1. El cliente construye el request",
      "content": "Método HTTP, URI, headers (Accept, API Key) y opcionalmente cuerpo JSON."
    },
    {
      "title": "2. La API valida y enruta",
      "content": "Gateway o servidor verifica autenticación, rate limits y delega al servicio correcto."
    },
    {
      "title": "3. El servicio consulta la fuente de datos",
      "content": "Base de datos, otro microservicio o API externa; el cliente no ve este paso."
    },
    {
      "title": "4. Respuesta HTTP estructurada",
      "content": "Código de estado semántico + JSON. El cliente interpreta el resultado sin conocer la implementación."
    }
  ]
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica la analogía del menú de restaurante aplicada a GET /api/clima?ciudad=Bogota. ¿Quién es el cliente, el mesero, la cocina y el menú?",
  "hints": ["Cliente = quien pide", "Mesero = API", "Cocina = backend", "Menú = endpoints documentados"],
  "expectedKeywords": ["cliente", "API", "backend", "endpoint", "menú"],
  "successMessage": "Correcto. El cliente es la app; la API traduce el pedido; el backend procesa; el menú es el contrato de endpoints."
}

---

### 2) Tipos de API

**Sección TSX:** `TiposApiSection`

#### Mapa mental

- Clasificación por **accesibilidad:** pública, privada, partner.
- Clasificación por **arquitectura:** REST, SOAP, GraphQL, gRPC (ver lección `tipos-servicios-web`).
- Cada tipo implica distintos riesgos de exposición y modelos de consumo.

#### Clasificación visual

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  API[API] --> ACC[Por accesibilidad]\n  API --> ARQ[Por arquitectura]\n  ACC --> PUB[Pública + API Key]\n  ACC --> PRI[Privada interna]\n  ACC --> PAR[Partner acordado]\n  ARQ --> REST[REST HTTP+JSON]\n  ARQ --> SOAP[SOAP XML]\n  ARQ --> GQL[GraphQL]\n  ARQ --> GRPC[gRPC protobuf]"
}

#### Por accesibilidad

<!-- interactive: CompareTable -->
{
  "headers": ["Tipo", "Quién accede", "Ejemplos", "Riesgo principal"],
  "rows": [
    ["Pública (Open API)", "Cualquier desarrollador con registro/API key", "OpenWeatherMap, Google Maps, Stripe", "Abuso sin rate limiting; keys filtradas"],
    ["Privada (interna)", "Solo dentro de la organización", "Microservicios de inventario, payroll interno", "Exposición accidental al internet público"],
    ["Partner", "Socios comerciales con acuerdo", "APIs de pago entre plataformas B2B", "Contratos rotos por cambios sin versionar"]
  ]
}

#### Por arquitectura

- **REST:** HTTP + JSON; la más común en APIs web modernas.
- **SOAP:** XML estricto; sectores financieros y legacy.
- **GraphQL:** el cliente define la forma de la respuesta en una sola consulta.
- **gRPC:** alto rendimiento con Protocol Buffers; común en microservicios internos.

<!-- interactive: Callout -->
{
  "title": "Caso real: API interna expuesta por error",
  "children": "Un API Gateway de inventario queda accesible desde internet sin auth. Un scraper descubre GET /internal/stock y extrae precios mayoristas. Decisión: clasificar APIs (pública/partner/privada); internas solo en red privada o con mTLS; nunca exponer /internal/ sin autenticación."
}

---

### 3) Herramientas para probar APIs

**Sección TSX:** `HerramientasApiSection`

#### Mapa mental

- **GUI:** Postman, Insomnia, Swagger UI, Thunder Client, Hoppscotch — diseño visual, colecciones, documentación.
- **CLI:** curl, HTTPie — pruebas rápidas, scripting, CI/CD.
- **Testing automatizado:** REST Assured (Java) y scripts curl en pipelines.

#### Comparativa de herramientas

<!-- interactive: CompareTable -->
{
  "headers": ["Herramienta", "Tipo", "Caso de uso típico"],
  "rows": [
    ["Postman", "GUI", "Colecciones, entornos, pruebas manuales en equipo"],
    ["curl", "CLI", "Pruebas rápidas, scripts, integración CI/CD"],
    ["Swagger UI", "GUI (docs)", "Explorar contrato OpenAPI interactivo"],
    ["Thunder Client", "GUI (VS Code)", "Probar endpoints sin salir del editor"]
  ]
}

#### Pruebas con curl

<!-- code: bash -->
```bash
# GET básico
curl https://api.ejemplo.com/productos

# GET con header de autenticación
curl -H "Authorization: Bearer TOKEN" \
     https://api.ejemplo.com/usuarios/me

# POST con body JSON
curl -X POST https://api.ejemplo.com/productos \
     -H "Content-Type: application/json" \
     -d '{"nombre": "Teclado", "precio": 150000}'

# PATCH
curl -X PATCH https://api.ejemplo.com/productos/42 \
     -H "Content-Type: application/json" \
     -d '{"precio": 130000}'

# DELETE
curl -X DELETE https://api.ejemplo.com/productos/42

# Ver headers de respuesta
curl -I https://api.ejemplo.com/productos
```

#### Consumo desde JavaScript

<!-- code: javascript -->
```javascript
async function listarProductos(page = 1, limit = 20) {
  const res = await fetch(
    `https://api.ejemplo.com/api/v1/productos?page=${page}&limit=${limit}`,
    { headers: { Accept: "application/json" } }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}
```

<!-- interactive: CodeChallenge -->
{
  "title": "Ordena el flujo de prueba de un endpoint nuevo",
  "template": "1. ___ (definir URI y método)\n2. ___ (probar con curl)\n3. ___ (documentar en OpenAPI)\n4. ___ (crear colección en Postman)\n5. ___ (agregar test en CI)",
  "blanks": [
    { "id": "blank1", "answer": "definir URI y método HTTP", "placeholder": "paso a" },
    { "id": "blank2", "answer": "probar con curl", "placeholder": "paso b" },
    { "id": "blank3", "answer": "documentar en OpenAPI", "placeholder": "paso c" },
    { "id": "blank4", "answer": "crear colección en Postman", "placeholder": "paso d" },
    { "id": "blank5", "answer": "agregar test automatizado en CI", "placeholder": "paso e" }
  ]
}

---

### 4) Diseño de APIs

**Sección TSX:** `DisenoApiSection`

#### Mapa mental

- URIs con **sustantivos**, no verbos; métodos HTTP expresan la acción.
- **Versionado** desde el día uno (`/api/v1/`).
- **HTTPS** en producción; códigos de estado correctos; errores JSON descriptivos.
- **Paginación**, documentación OpenAPI, rate limiting y autenticación (JWT/OAuth).

#### Buenas prácticas vs anti-patrones

<!-- interactive: CompareTable -->
{
  "headers": ["Buena práctica", "Anti-patrón", "Por qué importa"],
  "rows": [
    ["GET /api/v1/productos", "GET /obtenerProductos", "El verbo va en el método HTTP, no en la URI"],
    ["/api/v1/productos?page=1&limit=20", "Listar todo sin paginación", "Evita respuestas enormes y timeouts"],
    ["404 Not Found para recurso inexistente", "200 OK con { error: true }", "El status code comunica el resultado real"],
    ["Versionar /api/v1/ desde el lanzamiento", "Cambios breaking en /api/productos", "Protege integraciones de partners y clientes"]
  ]
}

#### Respuesta de error bien diseñada

<!-- code: json -->
```json
{
  "error": "VALIDATION_ERROR",
  "mensaje": "El precio debe ser mayor a 0.",
  "campos": {
    "precio": "Valor inválido: -500"
  },
  "documentacion": "https://api.ejemplo.com/docs/v1/productos"
}
```

<!-- interactive: Callout -->
{
  "title": "Caso real: fintech sin versionado",
  "children": "Una fintech expone POST /api/pagos sin versión. Seis meses después cambia el campo monto de entero a objeto { valor, moneda }. Tres partners dejan de procesar pagos. Decisión: versionar desde el lanzamiento (/api/v1/pagos); cambios breaking en /api/v2/ con periodo de deprecación."
}

#### Completar buenas prácticas

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el mapping de endpoints",
  "template": "Listar usuarios → GET ___\nCrear producto → POST ___\nNunca usar → GET ___",
  "blanks": [
    { "id": "blank1", "answer": "/api/v1/usuarios", "placeholder": "URI" },
    { "id": "blank2", "answer": "/api/v1/productos", "placeholder": "URI" },
    { "id": "blank3", "answer": "/eliminarProducto/42", "placeholder": "anti-patrón" }
  ]
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- Una **API** es un contrato que permite comunicación entre aplicaciones ocultando la implementación interna (abstracción, interoperabilidad).
- Se clasifican por **accesibilidad** (pública, privada, partner) y por **arquitectura** (REST, SOAP, GraphQL, gRPC).
- El flujo típico: **cliente → HTTP request → API → fuente de datos → HTTP response JSON**.
- **Herramientas:** Postman/Swagger para exploración manual; **curl** para CLI y CI; OpenAPI para documentar el contrato.
- **Diseño:** sustantivos en URIs, versionado `/api/v1/`, códigos de estado semánticos, paginación, rate limiting y auth con tokens.
- **Siguiente lección:** `tokens` — JWT, OAuth 2.0, API Keys y sesiones.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿En qué se diferencia una API pública de una API privada? Da un ejemplo de cada una y un riesgo si se confunden.",
  "hints": ["Pública = desarrolladores externos", "Privada = solo organización", "Riesgo = exposición accidental"],
  "expectedKeywords": ["pública", "privada", "API key", "interna"],
  "successMessage": "Correcto. Pública es accesible con registro/key (Stripe); privada solo interna (microservicios). Exponer una privada al público es un riesgo grave."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un partner reporta que su integración dejó de funcionar tras un cambio en el formato JSON de POST /api/pagos. ¿Qué buena práctica de diseño faltaba desde el inicio?",
  "hints": ["Cambios breaking sin aviso", "Prefijo en la ruta", "v1 vs v2"],
  "expectedKeywords": ["versionado", "v1", "v2", "deprecación"],
  "successMessage": "Correcto. Versionar desde el lanzamiento (/api/v1/pagos) permite publicar cambios breaking en /api/v2/ sin romper clientes existentes."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Qué herramienta usarías para probar un endpoint en un script de CI/CD y cuál para que un nuevo desarrollador explore la API visualmente?",
  "hints": ["CLI vs GUI", "Automatización vs exploración"],
  "expectedKeywords": ["curl", "Postman", "Swagger"],
  "successMessage": "Correcto. curl en CI/CD; Postman o Swagger UI para exploración manual y documentación interactiva."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Diseña y documenta una API de biblioteca universitaria"**

Un frontend web y una app móvil compartirán la misma API para consultar libros, reservar ejemplares y ver préstamos activos.

1. Clasifica la API (pública, privada o partner) y justifica.
2. Define al menos 5 endpoints con método HTTP, URI versionada y descripción breve (listar libros, buscar por ISBN, crear reserva, ver préstamos del usuario, devolver libro).
3. Escribe un ejemplo de request y response JSON para búsqueda y para error de libro no encontrado (con código HTTP correcto).
4. Indica qué herramienta usarías para probar manualmente y cuál para automatizar en CI.
5. Lista dos anti-patrones que evitarías y la buena práctica equivalente.

**Criterio de éxito:** URIs con sustantivos y versión, códigos HTTP semánticos, paginación en listados, mención de autenticación y rate limiting, herramientas adecuadas por contexto.

<!-- code: http -->
```http
GET /api/v1/libros?isbn=9780123456789 HTTP/1.1
Host: biblioteca.universidad.edu
Authorization: Bearer eyJ...
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json

{"isbn": "9780123456789", "titulo": "Algoritmos", "disponibles": 3}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto de la biblioteca: clasifica la API, lista 5 endpoints versionados y escribe la respuesta 404 para ISBN inexistente.",
  "hints": [
    "Partner o privada con auth para estudiantes",
    "GET /api/v1/libros con paginación",
    "POST /api/v1/reservas para crear",
    "404 con JSON estructurado para libro no encontrado"
  ],
  "expectedKeywords": ["GET", "POST", "v1", "404", "paginación"],
  "successMessage": "Excelente. Has diseñado un contrato API coherente con buenas prácticas de versionado y códigos semánticos."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el panorama de APIs: contrato, tipos, herramientas y diseño. Una API bien diseñada es un producto: versionada, documentada y probada antes de que los clientes dependan de ella.

**Ideas clave para retener:**

- La API es el **contrato expuesto**; no confundirla con todo el backend.
- **Versiona desde el día uno** — los cambios breaking sin `/api/v2/` rompen integraciones reales.
- **curl en CI**, Postman/Swagger para humanos; OpenAPI como fuente de verdad del contrato.
- **Anti-patrón grave:** siempre 200 OK con error en el cuerpo JSON.

**Siguiente paso:** lección `tokens` — cómo autenticar y autorizar el acceso a esas APIs.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué propiedad de una API oculta cómo funciona internamente el servidor?",
      "options": [
        "Interoperabilidad",
        "Abstracción",
        "Versionado",
        "Paginación"
      ],
      "correctIndex": 1,
      "feedback": "La abstracción permite usar la API sin conocer la implementación interna (base de datos, lenguaje, etc.)."
    },
    {
      "question": "¿Cuál es la convención correcta para listar productos en una API REST?",
      "options": [
        "GET /obtenerProductos",
        "POST /api/v1/listar-productos",
        "GET /api/v1/productos",
        "GET /api/v1/productos/eliminar"
      ],
      "correctIndex": 2,
      "feedback": "URIs con sustantivos en plural, método GET para lectura, versionado en la ruta."
    },
    {
      "question": "¿Qué tipo de API usa típicamente OpenWeatherMap o Stripe?",
      "options": [
        "API privada interna",
        "API pública con API key",
        "API de partner exclusiva",
        "Solo SOAP"
      ],
      "correctIndex": 1,
      "feedback": "APIs públicas son accesibles a desarrolladores externos, generalmente con registro y API key."
    },
    {
      "question": "¿Qué herramienta CLI es estándar para probar endpoints desde terminal o scripts?",
      "options": [
        "Swagger UI",
        "Thunder Client",
        "curl",
        "Hoppscotch"
      ],
      "correctIndex": 2,
      "feedback": "curl es CLI multiplataforma ideal para pruebas rápidas y CI/CD; las demás son principalmente GUI."
    },
    {
      "question": "Un endpoint devuelve HTTP 200 con { \"error\": true, \"mensaje\": \"No encontrado\" }. ¿Qué anti-patrón es?",
      "options": [
        "No versionar la API",
        "Usar siempre 200 aunque haya errores",
        "Exponer contraseñas hasheadas",
        "Omitir paginación"
      ],
      "correctIndex": 1,
      "feedback": "El código de estado debe reflejar el resultado real (404 para no encontrado, 422 para validación, etc.)."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** APIs: Qué son, Tipos y Herramientas | POSW
- **seoDescription:** Define APIs, clasifica por accesibilidad y arquitectura, prueba endpoints con curl y Postman, y aplica buenas prácticas de diseño REST. Lección 7 del track POSW.
