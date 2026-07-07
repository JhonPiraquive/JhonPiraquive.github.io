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
source: kb/education/sources/clases/programacion-orientada-sitios-web/backend.md
topic_expert: topic-expert-web-services
---

## Objetivos medibles

Al finalizar la lección el estudiante podrá:

1. Definir **backend (server-side)** como la capa que ejecuta en el servidor, gestiona lógica de negocio, persistencia, autenticación e integraciones, y expone APIs al frontend.
2. Enumerar las **seis responsabilidades** del backend: persistencia, auth, lógica de negocio, exposición de APIs, procesamiento en background e integraciones externas.
3. Describir la **arquitectura en capas** (rutas → controladores → servicios → modelos) y su relación con DB, caché y servicios externos.
4. Comparar **frameworks populares** (Express, NestJS, FastAPI, Django, Spring Boot, Laravel, ASP.NET Core) por lenguaje, velocidad, curva y uso típico.
5. Aplicar el **árbol de decisión** para elegir stack backend según experiencia del equipo, tipo de proyecto y criterios de rendimiento, ecosistema y mercado laboral.

## Conceptos clave

- **Backend (server-side):** parte de la aplicación que se ejecuta en el servidor, invisible para el usuario. Gestiona lógica de negocio, acceso a bases de datos, autenticación, integraciones externas y expone APIs que el frontend consume.
- **Analogía del restaurante:** si el frontend es la fachada y el salón, el backend es la cocina. Los chefs (servicios) siguen recetas (lógica de negocio) con ingredientes del almacén (base de datos).
- **Capas de una app web:** Cliente (frontend) → HTTP/WebSocket → API Gateway / Load Balancer → Backend (Rutas → Controladores → Servicios → Modelos) → DB, Caché, Servicios externos.
- **Persistencia de datos:** diseñar modelo de datos, ejecutar consultas, gestionar transacciones.
- **Autenticación y autorización:** verificar identidad (JWT, OAuth), controlar permisos por rol.
- **Lógica de negocio:** reglas del dominio — cálculo de precios, validaciones complejas, flujos de estado.
- **Exposición de APIs:** definir endpoints REST, GraphQL o gRPC que el frontend consume.
- **Procesamiento en background:** colas de trabajos, emails, reportes, procesamiento de imágenes.
- **Integraciones externas:** pasarelas de pago, email, SMS, mapas, IA.
- **Node.js + Express:** minimalista, enorme ecosistema, ideal para APIs REST.
- **Node.js + NestJS:** opinionado, decoradores, arquitectura modular; muy usado en enterprise.
- **Python + FastAPI:** async, documentación OpenAPI automática; ideal ML/AI y modernización.
- **Python + Django:** full-stack con ORM, admin panel y auth incluidos.
- **Java + Spring Boot:** estándar enterprise; inyección de dependencias, seguridad, ORM.
- **PHP + Laravel:** ecosistema maduro; Eloquent ORM, ideal CMS/e-commerce.
- **Go (Gin/Fiber):** alto rendimiento en microservicios.
- **C# + ASP.NET Core:** cross-platform Microsoft, altamente performante.
- **Criterios de elección:** rendimiento (requests/seg), ecosistema de librerías, experiencia del equipo, mercado laboral (Node.js, Python, Java en Colombia), escalabilidad con diseño correcto.
- **Árbol de decisión:** si el equipo ya domina un lenguaje → usarlo; si no → IA/ML → FastAPI; banca/enterprise → Spring o ASP.NET; startup/API rápida → NestJS o Go; CMS/e-commerce → Laravel.

## Errores comunes

- **Poner toda la lógica en el controlador:** mezclar routing, validación y acceso a BD en un solo archivo; separar en capas (controlador → servicio → repositorio).
- **Confundir API con backend completo:** la API es la interfaz expuesta; el backend incluye procesos internos que el cliente no ve.
- **Elegir tecnología solo por benchmarks:** Go puede ser más rápido, pero si el equipo solo conoce Python, la productividad importa más.
- **No validar en servidor:** confiar en validaciones del frontend; el cliente es manipulable.
- **Ignorar manejo de errores HTTP:** devolver siempre 200 o exponer stack traces en producción.
- **Acoplar frontend y backend:** cambios en UI no deberían forzar cambios en la capa de persistencia si la API está bien diseñada.
- **Omitir autenticación en endpoints internos:** microservicios en red privada también deben validar identidad.

## Casos reales

### 1. Startup de delivery: Node.js vs reescritura prematura en Go

Una startup elige Go para su API de pedidos porque leyó que es "más rápido". El equipo de 4 desarrolladores solo conoce JavaScript. Los primeros 3 meses se van en curva de aprendizaje; los bugs de concurrencia retrasan el MVP. La competencia lanza antes.

**Decisión clave:** usar Node.js + NestJS (experiencia del equipo); optimizar consultas SQL y añadir Redis cuando haya tráfico real; migrar hot paths a Go solo si las métricas lo justifican (>10k req/s sostenidos).

### 2. Banco regional: Spring Boot y separación de capas

Un banco despliega un módulo de transferencias con lógica de validación de montos y límites diarios mezclada en el controlador REST. Un cambio en la regla de negocio rompe tres endpoints y requiere redeploy completo.

**Decisión clave:** extraer lógica a `TransferenciaService`; controladores solo orquestan HTTP; tests unitarios en la capa de servicio; Spring Boot con inyección de dependencias para entornos regulados.

## Ejemplos de código sugeridos

### API de productos con Express.js

<!-- code: javascript -->
```javascript
const express = require("express");
const router = express.Router();

// GET /api/v1/productos
router.get("/", async (req, res) => {
  try {
    const productos = await ProductoService.findAll();
    res.json(productos);
  } catch (error) {
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

// GET /api/v1/productos/:id
router.get("/:id", async (req, res) => {
  const producto = await ProductoService.findById(req.params.id);
  if (!producto) return res.status(404).json({ error: "No encontrado" });
  res.json(producto);
});

module.exports = router;
```

### Respuesta JSON de producto

<!-- code: json -->
```json
{
  "id": 42,
  "nombre": "Teclado mecánico",
  "precio": 150000,
  "stock": 12
}
```

### Request HTTP al backend

<!-- code: http -->
```http
GET /api/v1/productos/42 HTTP/1.1
Host: api.tienda.com
Accept: application/json
Authorization: Bearer eyJhbGciOiJIUzI1NiIs...
```

### Crear producto (POST)

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

## Ejercicios de práctica

- **tipo:** reflexion — Explica la analogía del restaurante para una app de reservas de hotel. ¿Qué hace el frontend, qué hace el backend y qué papel tiene la API entre ambos?
- **tipo:** ordenar-pasos — Ordena las capas de una petición `GET /api/v1/habitaciones`: (a) consulta SQL en modelo, (b) request HTTP del navegador, (c) controlador recibe request, (d) servicio aplica reglas de disponibilidad, (e) respuesta JSON al cliente.
- **tipo:** completar-codigo — Completa el árbol de decisión: "Equipo solo conoce Python + proyecto ML → ___"; "Banca regulada + Java en el equipo → ___"; "CMS con e-commerce → ___".

## Animación o visual sugerida

- **StepReveal — capas backend:** Request → Gateway → Rutas → Controlador → Servicio → Modelo → DB/Cache.
- **CompareTable — frameworks:** Express | NestJS | FastAPI | Spring Boot (lenguaje, curva, uso típico).
- **MermaidDiagram — arquitectura completa:** cliente, gateway, backend, DB, Redis, APIs externas.

## Diagrama Mermaid (si aplica)

### Arquitectura en capas

```mermaid
flowchart TD
  C[Cliente / Frontend] -->|HTTP| GW[API Gateway]
  GW --> BE[Backend]
  BE --> R[Rutas]
  R --> CT[Controladores]
  CT --> S[Servicios]
  S --> M[Modelos]
  M --> DB[(Base de datos)]
  S --> CACHE[(Redis)]
  S --> EXT[Servicios externos]
```

### Árbol de decisión de stack

```mermaid
flowchart TD
  START[¿Elegir backend?] --> EXP{¿Equipo con experiencia?}
  EXP -->|Sí| USE[Usar ese lenguaje]
  EXP -->|No| TYPE{¿Tipo de proyecto?}
  TYPE -->|IA/ML| FAST[Python + FastAPI]
  TYPE -->|Banca/Enterprise| ENT[Spring Boot / ASP.NET]
  TYPE -->|Startup API| STARTUP[Node NestJS / Go]
  TYPE -->|CMS/E-commerce| CMS[PHP Laravel]
```

## Secciones TSX sugeridas

- `ObjetivosSection` — 5 objetivos medibles
- `QueEsBackendSection` — definición, analogía restaurante, diagrama de capas
- `ResponsabilidadesBackendSection` — grid de 6 tarjetas (persistencia, auth, lógica, APIs, background, integraciones)
- `TecnologiasBackendSection` — tarjetas por lenguaje + tabla comparativa de frameworks
- `ElegirStackSection` — árbol de decisión y criterios (rendimiento, ecosistema, equipo)
- `EjemploApiProductosSection` — tabs Express / NestJS / FastAPI con `TabbedCodeExample`
- `CompruebaTuComprensionSection` — quiz integrado

## Reto integrador

**"Diseña el backend de una plataforma de cursos online"**

Un frontend React y una app móvil consumirán la misma API para listar cursos, inscribir estudiantes y ver progreso.

1. Enumera las responsabilidades del backend en este dominio (al menos 4) y qué capa las implementa.
2. Elige un stack (lenguaje + framework) y justifica con al menos 3 criterios del árbol de decisión.
3. Define 4 endpoints con método HTTP, URI versionada y código de estado esperado (listar cursos, detalle, inscribir, ver progreso del usuario).
4. Escribe un handler Express o pseudocódigo para `POST /api/v1/inscripciones` con validación de cupos.
5. Indica qué integraciones externas necesitarías (email, pasarela de pago, etc.).

**Criterio de éxito:** separación de capas clara, validación en servidor, códigos HTTP semánticos, stack justificado por contexto del equipo/proyecto, no solo por moda.

## Preguntas sugeridas para quiz (5)

1. **¿Dónde se ejecuta principalmente el código backend?**
   - A) En el navegador del usuario
   - B) En el servidor
   - C) En la CDN
   - D) En la base de datos
   - **Correcta:** B
   - **Feedback:** El backend (server-side) corre en el servidor; el frontend corre en el dispositivo del usuario.

2. **¿Cuál es una responsabilidad típica del backend?**
   - A) Renderizar componentes React
   - B) Gestionar rutas del cliente (SPA routing)
   - C) Persistir datos y aplicar lógica de negocio
   - D) Optimizar CSS y assets estáticos
   - **Correcta:** C
   - **Feedback:** Persistencia, auth y reglas de negocio son responsabilidades del backend; renderizar UI es frontend.

3. **Un equipo solo conoce JavaScript y necesita una API REST rápida. ¿Qué opción es más sensata?**
   - A) Reescribir todo en Rust desde cero
   - B) Node.js + Express o NestJS
   - C) Spring Boot sin experiencia Java
   - D) PHP Laravel para un modelo ML
   - **Correcta:** B
   - **Feedback:** La experiencia del equipo suele pesar más que la velocidad teórica de otro lenguaje.

4. **En la arquitectura en capas, ¿qué hace típicamente un controlador?**
   - A) Ejecuta consultas SQL directamente sin servicios
   - B) Recibe el request HTTP y delega al servicio
   - C) Renderiza HTML en el navegador
   - D) Cachea assets estáticos en CDN
   - **Correcta:** B
   - **Feedback:** El controlador orquesta la petición HTTP; la lógica de negocio vive en la capa de servicio.

5. **¿Por qué el backend debe validar datos aunque el frontend ya los validó?**
   - A) Porque el frontend no puede enviar JSON
   - B) Porque el cliente es manipulable y el servidor es la fuente de verdad
   - C) Porque HTTP no soporta POST
   - D) Porque las bases de datos no aceptan datos inválidos automáticamente
   - **Correcta:** B
   - **Feedback:** Cualquier usuario puede enviar requests directos al API; la validación en servidor es obligatoria.

## Referencias

- Fuente docente: `kb/education/sources/clases/programacion-orientada-sitios-web/backend.md`
- Prerrequisitos: `frontend`
- Lecciones relacionadas: `cache`, `apis`, `modelo-cliente-servidor`, `bases-de-datos`
- Express.js: https://expressjs.com/
- NestJS: https://nestjs.com/
- FastAPI: https://fastapi.tiangolo.com/
