---
track: posw
slug: backend
title: "Backend: Tecnologías y Frameworks"
order: 10
prerequisites:
  - frontend
related:
  - cache
  - apis
  - modelo-cliente-servidor
  - bases-de-datos
  - herramientas-desarrollo
source_brief: kb/education/pipeline/posw/backend/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - QueEsBackendSection
  - ResponsabilidadesBackendSection
  - TecnologiasBackendSection
  - ComoElegirBackendSection
  - EjemplosBackendSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** backend (server-side) como la capa que ejecuta en el servidor, gestiona lógica de negocio, persistencia, autenticación e integraciones, y expone APIs al frontend.
- **Enumerar** las seis responsabilidades del backend: persistencia, auth, lógica de negocio, exposición de APIs, procesamiento en background e integraciones externas.
- **Describir** la arquitectura en capas (rutas → controladores → servicios → modelos) y su relación con DB, caché y servicios externos.
- **Comparar** frameworks populares (Express, NestJS, FastAPI, Django, Spring Boot, Laravel, ASP.NET Core) por lenguaje, curva de aprendizaje y uso típico.
- **Aplicar** el árbol de decisión para elegir stack backend según experiencia del equipo, tipo de proyecto y criterios de rendimiento, ecosistema y mercado laboral.

## Prerrequisitos

- **Lección `frontend`:** capa cliente, SPA y consumo de APIs.
- **Lección `apis`:** contrato API, endpoints y diseño REST básico.
- Familiaridad con HTTP y JSON.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección cubre qué es el backend, sus responsabilidades, frameworks disponibles, cómo elegir stack y ejemplos de código en capas.

<!-- interactive: Callout -->
{
  "title": "Backend ≠ solo API",
  "children": "La API es la interfaz expuesta; el backend incluye lógica interna, base de datos, colas y procesos que el cliente nunca ve. Diseñar solo endpoints sin capas lleva a código frágil."
}

---

### 1) ¿Qué es el backend?

**Sección TSX:** `QueEsBackendSection`

#### Mapa mental

- **Backend (server-side):** código que corre en el servidor, invisible para el usuario final.
- **Responsabilidades centrales:** lógica de negocio, persistencia, autenticación, integraciones.
- **Contrato con el frontend:** expone APIs (REST, GraphQL, gRPC) que el cliente consume.
- **Analogía restaurante:** frontend = salón y menú; backend = cocina; API = mesero que traduce pedidos.

#### Analogía del restaurante

En una app de reservas de hotel:

- **Frontend (salón):** formularios, calendario, UX.
- **API (mesero):** traduce `GET /api/v1/habitaciones` a operaciones internas.
- **Backend (cocina):** valida disponibilidad, consulta BD, aplica reglas de precio y cancelación.

#### Arquitectura en capas

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  C[Cliente / Frontend] -->|HTTP| GW[API Gateway]\n  GW --> BE[Backend]\n  BE --> R[Rutas]\n  R --> CT[Controladores]\n  CT --> S[Servicios]\n  S --> M[Modelos]\n  M --> DB[(Base de datos)]\n  S --> CACHE[(Redis)]\n  S --> EXT[Servicios externos]"
}

#### Flujo de una petición

<!-- interactive: StepReveal -->
{
  "title": "Capas de una petición GET /api/v1/productos/42",
  "steps": [
    {
      "title": "1. Request HTTP del cliente",
      "content": "El navegador o app móvil envía GET con headers (Accept, Authorization)."
    },
    {
      "title": "2. Gateway y rutas",
      "content": "El API Gateway enruta a la instancia correcta; las rutas mapean URI a controlador."
    },
    {
      "title": "3. Controlador orquesta",
      "content": "Recibe el request, valida formato básico y delega al servicio. No ejecuta SQL directo."
    },
    {
      "title": "4. Servicio aplica reglas de negocio",
      "content": "Cálculos, validaciones complejas, coordinación con caché o APIs externas."
    },
    {
      "title": "5. Modelo consulta persistencia",
      "content": "ORM o consulta SQL devuelve datos; respuesta JSON con código HTTP semántico."
    }
  ]
}

#### Request al backend

<!-- code: http -->
```http
GET /api/v1/productos/42 HTTP/1.1
Host: api.tienda.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica la analogía del restaurante para una app de reservas de hotel. ¿Qué hace el frontend, qué hace el backend y qué papel tiene la API?",
  "hints": ["Frontend = salón/UX", "Backend = cocina/lógica", "API = mesero/contrato"],
  "expectedKeywords": ["frontend", "backend", "API", "lógica", "persistencia"],
  "successMessage": "Correcto. El frontend muestra la UI; la API traduce pedidos HTTP; el backend procesa reglas y datos."
}

---

### 2) Responsabilidades del backend

**Sección TSX:** `ResponsabilidadesBackendSection`

#### Mapa mental

- **Persistencia:** modelo de datos, consultas, transacciones.
- **Autenticación y autorización:** JWT, OAuth, permisos por rol.
- **Lógica de negocio:** reglas del dominio (precios, validaciones, flujos de estado).
- **Exposición de APIs:** endpoints REST/GraphQL/gRPC.
- **Procesamiento en background:** colas, emails, reportes, imágenes.
- **Integraciones externas:** pagos, email, SMS, mapas, IA.

#### Grid de responsabilidades

<!-- interactive: CompareTable -->
{
  "headers": ["Responsabilidad", "Qué hace", "Capa típica", "Ejemplo"],
  "rows": [
    ["Persistencia", "Guardar y recuperar datos", "Modelo / Repositorio", "SELECT habitaciones disponibles"],
    ["Auth", "Verificar identidad y permisos", "Middleware + Servicio", "Validar JWT en cada request"],
    ["Lógica de negocio", "Reglas del dominio", "Servicio", "Calcular precio con descuento por temporada"],
    ["Exposición de APIs", "Contrato HTTP para clientes", "Rutas + Controlador", "GET /api/v1/cursos"],
    ["Background", "Tareas asíncronas", "Worker / Cola", "Enviar email de confirmación"],
    ["Integraciones", "Servicios de terceros", "Servicio / Adaptador", "Stripe, SendGrid, Google Maps"]
  ]
}

#### Errores comunes

<!-- interactive: Callout -->
{
  "title": "Caso real: banco con lógica en el controlador",
  "children": "Un banco mezcla validación de montos y límites diarios en el controlador REST. Un cambio de regla rompe tres endpoints. Decisión: extraer lógica a TransferenciaService; controladores solo orquestan HTTP; tests unitarios en la capa de servicio."
}

#### Ordenar capas de una petición

<!-- interactive: CodeChallenge -->
{
  "title": "Ordena el flujo de GET /api/v1/habitaciones",
  "template": "1. ___\n2. ___\n3. ___\n4. ___\n5. ___",
  "blanks": [
    { "id": "blank1", "answer": "request HTTP del navegador", "placeholder": "paso a" },
    { "id": "blank2", "answer": "controlador recibe request", "placeholder": "paso b" },
    { "id": "blank3", "answer": "servicio aplica reglas de disponibilidad", "placeholder": "paso c" },
    { "id": "blank4", "answer": "consulta SQL en modelo", "placeholder": "paso d" },
    { "id": "blank5", "answer": "respuesta JSON al cliente", "placeholder": "paso e" }
  ]
}

---

### 3) Tecnologías y frameworks

**Sección TSX:** `TecnologiasBackendSection`

#### Mapa mental

- **Node.js:** Express (minimalista), NestJS (enterprise, modular).
- **Python:** FastAPI (async, OpenAPI), Django (full-stack con ORM).
- **Java:** Spring Boot (estándar enterprise).
- **PHP:** Laravel (CMS/e-commerce).
- **Go:** Gin/Fiber (microservicios de alto rendimiento).
- **C#:** ASP.NET Core (cross-platform Microsoft).

#### Comparativa de frameworks

<!-- interactive: CompareTable -->
{
  "headers": ["Framework", "Lenguaje", "Curva", "Uso típico"],
  "rows": [
    ["Express", "JavaScript/Node.js", "Baja", "APIs REST rápidas, startups"],
    ["NestJS", "TypeScript/Node.js", "Media", "Enterprise, arquitectura modular"],
    ["FastAPI", "Python", "Media", "ML/AI, APIs modernas con OpenAPI auto"],
    ["Django", "Python", "Media", "Full-stack, admin panel incluido"],
    ["Spring Boot", "Java", "Alta", "Banca, sistemas regulados"],
    ["Laravel", "PHP", "Media", "CMS, e-commerce"],
    ["ASP.NET Core", "C#", "Media-Alta", "Enterprise Microsoft, alto rendimiento"]
  ]
}

#### Caso real: startup vs benchmarks

<!-- interactive: Callout -->
{
  "title": "Startup de delivery: Go prematuro",
  "children": "Un equipo de 4 elige Go por benchmarks pero solo conoce JavaScript. Tres meses en curva de aprendizaje; la competencia lanza antes. Decisión: Node.js + NestJS; optimizar SQL y añadir Redis cuando haya tráfico real; migrar hot paths solo si métricas lo justifican (>10k req/s)."
}

---

### 4) Cómo elegir el backend

**Sección TSX:** `ComoElegirBackendSection`

#### Mapa mental

- **Experiencia del equipo** pesa más que benchmarks teóricos.
- **Tipo de proyecto:** IA/ML, banca, startup API, CMS.
- **Criterios:** rendimiento, ecosistema, mercado laboral, escalabilidad con diseño correcto.

#### Árbol de decisión

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  START[¿Elegir backend?] --> EXP{¿Equipo con experiencia?}\n  EXP -->|Sí| USE[Usar ese lenguaje]\n  EXP -->|No| TYPE{¿Tipo de proyecto?}\n  TYPE -->|IA/ML| FAST[Python + FastAPI]\n  TYPE -->|Banca/Enterprise| ENT[Spring Boot / ASP.NET]\n  TYPE -->|Startup API| STARTUP[NestJS / Go]\n  TYPE -->|CMS/E-commerce| CMS[PHP Laravel]"
}

#### Completar árbol de decisión

<!-- interactive: CodeChallenge -->
{
  "title": "Completa el árbol de decisión de stack",
  "template": "Equipo solo conoce Python + proyecto ML → ___\nBanca regulada + Java en el equipo → ___\nCMS con e-commerce → ___",
  "blanks": [
    { "id": "blank1", "answer": "Python + FastAPI", "placeholder": "stack" },
    { "id": "blank2", "answer": "Spring Boot", "placeholder": "stack" },
    { "id": "blank3", "answer": "PHP Laravel", "placeholder": "stack" }
  ]
}

#### Errores a evitar

- Elegir tecnología solo por benchmarks sin considerar el equipo.
- No validar en servidor (el cliente es manipulable).
- Poner toda la lógica en el controlador.
- Devolver siempre 200 o exponer stack traces en producción.

---

### 5) Ejemplos de backend

**Sección TSX:** `EjemplosBackendSection`

#### Mapa mental

- **Separación de capas:** rutas → controlador → servicio → modelo.
- **Validación en servidor** antes de persistir.
- **Códigos HTTP semánticos:** 201 creado, 404 no encontrado, 422 validación.

#### Listar productos (Express)

<!-- code: javascript -->
```javascript
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const productos = await ProductoService.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

router.get("/:id", async (req, res) => {
  const producto = await ProductoService.findById(req.params.id);
  if (!producto) return res.status(404).json({ error: "No encontrado" });
  res.json(producto);
});

module.exports = router;
```

#### Crear producto con validación

<!-- code: javascript -->
```javascript
router.post("/", async (req, res) => {
  const { nombre, precio } = req.body;
  if (!nombre || precio <= 0) {
    return res.status(422).json({
      error: "VALIDATION_ERROR",
      mensaje: "Nombre requerido y precio mayor a 0"
    });
  }
  const producto = await ProductoService.create({ nombre, precio });
  res.status(201).json(producto);
});
```

#### Respuesta JSON

<!-- code: json -->
```json
{
  "id": 42,
  "nombre": "Teclado mecánico",
  "precio": 150000,
  "stock": 12
}
```

---

### Resumen

**Sección TSX:** `ResumenSection`

- El **backend** ejecuta en el servidor: lógica de negocio, persistencia, auth, integraciones y APIs.
- **Seis responsabilidades:** persistencia, auth, lógica, APIs, background, integraciones externas.
- **Arquitectura en capas:** rutas → controladores → servicios → modelos → DB/caché/externos.
- **Frameworks:** Express/NestJS (Node), FastAPI/Django (Python), Spring Boot (Java), Laravel (PHP), ASP.NET Core (C#).
- **Elegir stack:** experiencia del equipo primero; luego tipo de proyecto y criterios de rendimiento.
- **Siguiente lección:** `cache` — cómo acelerar el backend con caché en servidor, CDN y navegador.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué el backend debe validar datos aunque el frontend ya los validó? Da un ejemplo de ataque si omites validación en servidor.",
  "hints": ["Cliente manipulable", "curl/Postman directo", "Precio negativo en POST"],
  "expectedKeywords": ["servidor", "validación", "manipulable", "cliente"],
  "successMessage": "Correcto. Cualquier usuario puede enviar requests directos al API; el servidor es la fuente de verdad."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Un equipo solo conoce JavaScript y necesita lanzar una API REST en 6 semanas. ¿Qué stack recomendarías y por qué NO elegirías Go desde cero?",
  "hints": ["Productividad del equipo", "Curva de aprendizaje", "NestJS o Express"],
  "expectedKeywords": ["Node.js", "NestJS", "Express", "experiencia", "equipo"],
  "successMessage": "Correcto. La experiencia del equipo suele pesar más que benchmarks teóricos de otro lenguaje."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "En la arquitectura en capas, ¿qué hace un controlador y qué NO debería hacer? ¿Dónde va la lógica de negocio?",
  "hints": ["Orquesta HTTP", "No SQL directo", "Capa de servicio"],
  "expectedKeywords": ["controlador", "servicio", "delega", "HTTP"],
  "successMessage": "Correcto. El controlador recibe el request y delega; la lógica de negocio vive en la capa de servicio."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Diseña el backend de una plataforma de cursos online"**

Un frontend React y una app móvil consumirán la misma API para listar cursos, inscribir estudiantes y ver progreso.

1. Enumera al menos 4 responsabilidades del backend en este dominio y qué capa las implementa.
2. Elige un stack (lenguaje + framework) y justifica con al menos 3 criterios del árbol de decisión.
3. Define 4 endpoints con método HTTP, URI versionada y código de estado esperado (listar cursos, detalle, inscribir, ver progreso).
4. Escribe un handler Express o pseudocódigo para `POST /api/v1/inscripciones` con validación de cupos.
5. Indica qué integraciones externas necesitarías (email, pasarela de pago, etc.).

**Criterio de éxito:** separación de capas clara, validación en servidor, códigos HTTP semánticos, stack justificado por contexto del equipo/proyecto.

<!-- code: javascript -->
```javascript
router.post("/inscripciones", async (req, res) => {
  const { cursoId, usuarioId } = req.body;
  const cupos = await InscripcionService.cuposDisponibles(cursoId);
  if (cupos <= 0) {
    return res.status(409).json({ error: "SIN_CUPOS", mensaje: "Curso lleno" });
  }
  const inscripcion = await InscripcionService.crear({ cursoId, usuarioId });
  res.status(201).json(inscripcion);
});
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto de cursos online: lista 4 responsabilidades, elige stack justificado y define POST /api/v1/inscripciones con validación de cupos.",
  "hints": [
    "Auth + persistencia + lógica de cupos + email",
    "NestJS si equipo TypeScript",
    "409 Conflict si sin cupos",
    "201 Created al inscribir"
  ],
  "expectedKeywords": ["POST", "v1", "cupos", "201", "servicio"],
  "successMessage": "Excelente. Has diseñado un backend con capas, validación en servidor y stack justificado."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado el panorama del backend: responsabilidades, capas, frameworks y criterios de elección. Un backend bien estructurado separa concerns y valida en servidor.

**Ideas clave para retener:**

- El backend **no es solo la API**; incluye lógica, BD, colas e integraciones internas.
- **Controlador orquesta; servicio decide** — no mezcles reglas de negocio con routing HTTP.
- **Valida siempre en servidor** — el cliente es manipulable.
- **Elige stack por equipo y proyecto**, no solo por benchmarks de lenguajes.

**Siguiente paso:** lección `cache` — Redis, CDN y headers HTTP para reducir carga en el backend.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Dónde se ejecuta principalmente el código backend?",
      "options": [
        "En el navegador del usuario",
        "En el servidor",
        "En la CDN",
        "En la base de datos"
      ],
      "correctIndex": 1,
      "feedback": "El backend (server-side) corre en el servidor; el frontend corre en el dispositivo del usuario."
    },
    {
      "question": "¿Cuál es una responsabilidad típica del backend?",
      "options": [
        "Renderizar componentes React",
        "Gestionar rutas del cliente (SPA routing)",
        "Persistir datos y aplicar lógica de negocio",
        "Optimizar CSS y assets estáticos"
      ],
      "correctIndex": 2,
      "feedback": "Persistencia, auth y reglas de negocio son responsabilidades del backend; renderizar UI es frontend."
    },
    {
      "question": "Un equipo solo conoce JavaScript y necesita una API REST rápida. ¿Qué opción es más sensata?",
      "options": [
        "Reescribir todo en Rust desde cero",
        "Node.js + Express o NestJS",
        "Spring Boot sin experiencia Java",
        "PHP Laravel para un modelo ML"
      ],
      "correctIndex": 1,
      "feedback": "La experiencia del equipo suele pesar más que la velocidad teórica de otro lenguaje."
    },
    {
      "question": "En la arquitectura en capas, ¿qué hace típicamente un controlador?",
      "options": [
        "Ejecuta consultas SQL directamente sin servicios",
        "Recibe el request HTTP y delega al servicio",
        "Renderiza HTML en el navegador",
        "Cachea assets estáticos en CDN"
      ],
      "correctIndex": 1,
      "feedback": "El controlador orquesta la petición HTTP; la lógica de negocio vive en la capa de servicio."
    },
    {
      "question": "¿Por qué el backend debe validar datos aunque el frontend ya los validó?",
      "options": [
        "Porque el frontend no puede enviar JSON",
        "Porque el cliente es manipulable y el servidor es la fuente de verdad",
        "Porque HTTP no soporta POST",
        "Porque las bases de datos no aceptan datos inválidos automáticamente"
      ],
      "correctIndex": 1,
      "feedback": "Cualquier usuario puede enviar requests directos al API; la validación en servidor es obligatoria."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Backend: Tecnologías y Frameworks | POSW
- **seoDescription:** Define el backend server-side, sus seis responsabilidades, arquitectura en capas, frameworks (Express, NestJS, FastAPI, Spring Boot) y criterios para elegir stack. Lección 10 del track POSW.
