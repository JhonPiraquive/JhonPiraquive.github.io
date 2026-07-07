---
track: posw
slug: servicios-web
title: "Servicios Web"
order: 1
prerequisites: []
related:
  - formatos-datos
  - tipos-servicios-web
  - principios-solid
source_brief: kb/education/pipeline/posw/servicios-web/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosDelTemaSection
  - QueEsServicioWebSection
  - ObjetivosServiciosWebSection
  - IntroSolidPreviewSection
  - ResumenSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** servicio web como sistema máquina-a-máquina con interfaz estandarizada (típicamente HTTP) y **distinguirlo** de un sitio web estático orientado solo a humanos.
- **Enumerar** al menos cuatro objetivos de los servicios web (interoperabilidad, compartir datos, escalabilidad, modularidad, estandarización o acceso remoto) con un ejemplo concreto de cada uno.
- **Describir** el flujo cliente → servicio web → recurso (base de datos u otro servicio) usando un diagrama o analogía (p. ej. ATM).
- **Explicar** por qué SOLID aplica al diseño de servicios web y **nombrar** cada letra del acrónimo con un ejemplo de endpoint o módulo.
- **Identificar** en un escenario empresarial cuándo conviene exponer funcionalidad como servicio en lugar de duplicar lógica en cada cliente.

## Prerrequisitos

- Conocimientos básicos de programación y de la web (navegador, URL, peticiones).
- Familiaridad con el concepto de cliente y servidor en red.
- No se requiere experiencia previa en APIs REST ni en arquitectura distribuida; esta es la primera lección del track POSW.

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosDelTemaSection`

Esta lección introduce qué es un servicio web, por qué las organizaciones los adoptan y una vista previa de SOLID aplicado a APIs. Los objetivos medibles se listan arriba.

<!-- interactive: Callout -->
{
  "title": "Contrato público",
  "children": "Un servicio web no es solo código en un servidor: es una interfaz estandarizada que otros sistemas consumen. Cambiar rutas o respuestas sin versionar rompe clientes existentes."
}

---

### 1) ¿Qué es un servicio web?

**Sección TSX:** `QueEsServicioWebSection`

#### Mapa mental

- Interacción **máquina-a-máquina** por red.
- Interfaz **estandarizada** (HTTP, JSON, XML).
- Cliente consume; servicio publica y orquesta persistencia u otros servicios.
- Distinto de una página HTML solo para humanos.

#### Qué es

Un **servicio web** es un sistema de software diseñado para que aplicaciones heterogéneas — distintos lenguajes y plataformas — se comuniquen sin intervención humana directa. Expone funcionalidades mediante interfaces estandarizadas (generalmente HTTP) como **recursos consumibles** por múltiples clientes.

#### Analogía ATM

Como un cajero automático: no importa la marca de tarjeta ni el lenguaje interno del banco; la interfaz estandarizada permite retiro o consulta a cualquier cliente compatible. El **cliente** es quien inserta la tarjeta; la **interfaz** es el protocolo del cajero; el **sistema interno** del banco valida y ejecuta la operación.

#### Arquitectura cliente → servicio → recurso

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart LR\n  C1[Cliente React] --> SW[Servicio Web]\n  C2[Cliente Android] --> SW\n  C3[Cliente Python] --> SW\n  SW --> DB[(Base de Datos)]\n  SW --> OTRO[Otro Servicio]"
}

#### Sitio web vs servicio web

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "Sitio web estático", "Servicio web"],
  "rows": [
    ["Consumidor", "Humano en navegador", "Otra aplicación o script"],
    ["Interfaz", "HTML/CSS para lectura", "API HTTP con contrato (JSON/XML)"],
    ["Propósito", "Mostrar contenido", "Exponer datos y operaciones programáticas"],
    ["Ejemplo", "Página \"Acerca de\"", "GET /api/productos/42 → JSON"]
  ]
}

#### Ejemplo: petición y respuesta mínima

<!-- code: http -->
```http
GET /api/productos/42 HTTP/1.1
Host: tienda.ejemplo.com
Accept: application/json
```

<!-- code: json -->
```json
{
  "id": 42,
  "nombre": "Laptop Pro 15",
  "precio": { "valor": 4500000, "moneda": "COP" },
  "stock": 12
}
```

#### Anti-patrón: lógica duplicada en cada cliente

<!-- code: javascript -->
```javascript
// Evitar: cada cliente recalcula descuentos distinto
function totalCarrito(items) {
  let total = items.reduce((s, i) => s + i.precio * i.cantidad, 0);
  if (items.length > 3) total *= 0.9; // regla duplicada en web, móvil, etc.
  return total;
}
```

#### Patrón: cliente delgado, servicio con la regla

<!-- code: http -->
```http
POST /api/carrito/calcular-total HTTP/1.1
Host: tienda.ejemplo.com
Content-Type: application/json

{"items":[{"productoId":42,"cantidad":2}]}
```

<!-- interactive: Callout -->
{
  "title": "Caso real: fintech con tres apps",
  "children": "Una startup lanza web (React), móvil (Kotlin) y batch (Python). Cada equipo valida montos distinto; aparecen discrepancias. Decisión clave: extraer un servicio de pagos HTTP+JSON con reglas centralizadas y clientes delgados."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica la analogía del ATM: ¿qué parte es el cliente, qué parte es la interfaz estandarizada y qué parte es el sistema interno del banco?",
  "hints": ["Cliente = quien consume", "Interfaz = protocolo del cajero", "Interno = validación y persistencia"],
  "expectedKeywords": ["cliente", "interfaz", "banco", "ATM"],
  "successMessage": "Correcto. El cliente consume la interfaz; el servicio interno ejecuta reglas y accede a datos."
}

---

### 2) Objetivos de los servicios web

**Sección TSX:** `ObjetivosServiciosWebSection`

#### Mapa mental

- **Interoperabilidad:** Java, Python, Go, C# se comunican con estándares abiertos.
- **Compartir datos y lógica:** una sola fuente de verdad para web, móvil y batch.
- **Escalabilidad independiente:** escalar solo el módulo con más carga.
- **Modularidad:** microservicios con responsabilidades acotadas.
- **Estandarización:** HTTP, JSON, REST reducen fricción entre equipos.
- **Acceso remoto:** servicios alcanzables por internet entre organizaciones.

#### Para qué sirve cada objetivo

| Objetivo | Qué resuelve | Ejemplo concreto |
|----------|--------------|------------------|
| Interoperabilidad | Integrar stacks distintos sin librerías nativas compartidas | App Kotlin consume API Java vía HTTP+JSON |
| Compartir datos | Evitar reglas duplicadas en cada cliente | Un solo servicio de pagos para web y móvil |
| Escalabilidad | No escalar todo el monolito por un cuello de botella | Solo el servicio de catálogo en Black Friday |
| Modularidad | Cambios localizados y despliegues independientes | Servicio de notificaciones separado de usuarios |
| Estandarización | Menor curva de integración | Contrato REST documentado con OpenAPI |
| Acceso remoto | Colaboración entre organizaciones | Partner externo consume tu API de inventario |

<!-- interactive: StepReveal -->
{
  "title": "Objetivos de los servicios web",
  "steps": [
    {
      "title": "1. Interoperabilidad",
      "content": "Sistemas en distintos lenguajes y SO se comunican con HTTP y formatos estándar, sin compartir el mismo runtime."
    },
    {
      "title": "2. Compartir datos y lógica",
      "content": "El servicio centraliza reglas de negocio; los clientes solo presentan UI o ejecutan scripts delgados."
    },
    {
      "title": "3. Escalabilidad independiente",
      "content": "Si el catálogo recibe más tráfico, escalas ese componente sin tocar checkout ni usuarios."
    },
    {
      "title": "4. Modularidad",
      "content": "Cada servicio encapsula una responsabilidad; el sistema completo se compone de piezas independientes."
    },
    {
      "title": "5. Estandarización y acceso remoto",
      "content": "Protocolos ampliamente adoptados facilitan integración; los servicios son alcanzables desde cualquier red con internet."
    }
  ]
}

<!-- interactive: Callout -->
{
  "title": "Caso real: e-commerce en Black Friday",
  "children": "Un monolito escala horizontalmente pero la base de datos colapsa. El equipo separa servicio de catálogo (lectura intensiva, cacheable) del de pedidos. Escala independiente del componente con más carga."
}

#### Flujo típico de una operación

Ordena mentalmente: (a) cliente envía petición HTTP → (b) servicio valida y ejecuta lógica → (c) servicio persiste o consulta datos → (d) servicio responde con JSON → (e) cliente muestra resultado.

<!-- interactive: CodeChallenge -->
{
  "title": "Completa la definición",
  "template": "Un servicio web permite interacción ___-a-___ mediante interfaces ___.",
  "blanks": [
    { "id": "blank1", "answer": "máquina", "placeholder": "tipo de actor" },
    { "id": "blank2", "answer": "máquina", "placeholder": "receptor" },
    { "id": "blank3", "answer": "estandarizadas", "placeholder": "característica de la interfaz" }
  ]
}

---

### 3) Introducción a SOLID en servicios web

**Sección TSX:** `IntroSolidPreviewSection`

#### Mapa mental

- SOLID = cinco principios de diseño OO (Robert C. Martin).
- Especialmente relevantes al estructurar y evolucionar APIs.
- Mal particionado → endpoints frágiles y deuda en integraciones.

#### Los cinco principios

<!-- interactive: CompareTable -->
{
  "headers": ["Letra", "Principio", "Ejemplo en API"],
  "rows": [
    ["S", "Single Responsibility", "/usuarios no mezcla pagos ni emails de marketing"],
    ["O", "Open/Closed", "Nuevo tipo de auth sin modificar el controlador existente"],
    ["L", "Liskov Substitution", "RepositorioSQL y RepositorioMongo intercambiables vía IRepositorio"],
    ["I", "Interface Segregation", "ILector e IEscritor en lugar de una interfaz gigante"],
    ["D", "Dependency Inversion", "El servicio depende de IRepositorio, no de MySQLRepositorio"]
  ]
}

#### Capas de una API bien particionada

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TD\n  EP[Endpoint /usuarios] --> SRV[Servicio Usuarios]\n  SRV --> REPO[IRepositorio]\n  REPO --> SQL[RepositorioSQL]\n  REPO --> MONGO[RepositorioMongo]"
}

<!-- interactive: Callout -->
{
  "title": "Error frecuente",
  "children": "Tratar SOLID como teoría ajena a APIs. Si /usuarios/registro también procesa pagos y envía emails, violas SRP y dificultas pruebas y despliegues independientes."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Para el principio D (Dependency Inversion), ¿por qué el servicio no debería importar directamente MySQLRepositorio en su controlador?",
  "hints": ["Piensa en pruebas con mock", "Cambiar de motor de BD sin tocar lógica de negocio"],
  "expectedKeywords": ["abstracción", "IRepositorio", "acoplamiento", "test"],
  "successMessage": "Correcto. Depender de abstracciones desacopla la lógica de la implementación concreta y facilita pruebas y cambios de persistencia."
}

---

### Resumen

**Sección TSX:** `ResumenSection`

- Un **servicio web** es máquina-a-máquina con interfaz estandarizada (HTTP); distinto de un sitio estático solo para humanos.
- **Objetivos clave:** interoperabilidad, compartir lógica, escalabilidad, modularidad, estandarización y acceso remoto.
- **Cliente delgado + servicio centralizado** evita inconsistencias entre web, móvil y batch.
- Flujo típico: petición HTTP → validación → persistencia/consulta → respuesta JSON.
- **SOLID** (preview): SRP en endpoints, OCP al extender, LSP/ISP en contratos, DIP en repositorios.
- **Siguiente lección:** `formatos-datos` — XML y JSON como formatos de intercambio.

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

Antes del cierre, verifica que puedes aplicar los conceptos de la lección.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Enumera dos razones por las que un banco legacy en Java y una app móvil en Kotlin deberían integrarse vía servicio web en lugar de compartir librería nativa.",
  "hints": ["Piensa en plataformas distintas", "Interoperabilidad y contrato HTTP"],
  "expectedKeywords": ["interoperabilidad", "HTTP", "lenguaje", "contrato"],
  "successMessage": "Correcto. La interoperabilidad depende de protocolo y formato, no de compartir el mismo stack o librería nativa."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Ordena el flujo: (a) servicio responde con JSON, (b) cliente envía petición HTTP, (c) servicio persiste o consulta datos, (d) servicio valida y ejecuta lógica, (e) cliente muestra resultado. Indica el orden correcto.",
  "hints": ["Empieza con la petición del cliente", "Termina con la presentación en el cliente"],
  "expectedKeywords": ["b", "d", "c", "a", "e"],
  "successMessage": "Correcto. Orden: (b) petición → (d) validar/ejecutar → (c) persistir/consultar → (a) responder JSON → (e) mostrar."
}

<!-- interactive: PracticeExercise -->
{
  "prompt": "Identifica qué principio SOLID se viola si /usuarios/registro también procesa pagos y envía emails de marketing.",
  "hints": ["Un módulo, una razón para cambiar", "Letra S del acrónimo"],
  "expectedKeywords": ["SRP", "Single", "Responsabilidad"],
  "successMessage": "Correcto. Viola Single Responsibility: un endpoint con demasiadas responsabilidades distintas."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Diseña el servicio de una biblioteca universitaria"**

Una universidad necesita que la app web, la app móvil y un script de reportes consulten préstamos de libros sin duplicar reglas.

1. Identifica **qué expone el servicio** (consultar disponibilidad, registrar préstamo, devolver libro) y **qué hace cada cliente** (solo UI o script).
2. Dibuja el diagrama cliente → servicio → base de datos (y si aplica otro servicio de notificaciones).
3. Para cada operación, indica qué principio SOLID proteges si separas módulo de préstamos del de usuarios.
4. Escribe una petición HTTP de ejemplo para `GET` consultar libro por ISBN y el JSON de respuesta esperado.
5. Explica qué pasa si cada cliente calcula multas por retraso por su cuenta.

**Criterio de éxito:** distingue servicio vs sitio estático, justifica centralizar lógica, diagrama claro, ejemplo HTTP+JSON válido, al menos dos principios SOLID aplicados al diseño.

<!-- code: http -->
```http
GET /api/libros/978-0123456789 HTTP/1.1
Host: biblioteca.universidad.edu
Accept: application/json
```

<!-- code: json -->
```json
{
  "isbn": "978-0123456789",
  "titulo": "Introducción a Servicios Web",
  "disponible": true,
  "ejemplares": 3
}
```

<!-- interactive: PracticeExercise -->
{
  "prompt": "Implementa el reto de la biblioteca: describe las operaciones del servicio, el diagrama cliente→servicio→DB y al menos dos principios SOLID que aplicaste al separar módulos.",
  "hints": [
    "Servicio expone consulta, préstamo y devolución",
    "Clientes solo UI o script",
    "SRP al separar usuarios de préstamos",
    "DIP si el servicio usa IRepositorioLibros"
  ],
  "expectedKeywords": ["préstamo", "SRP", "HTTP", "cliente"],
  "successMessage": "Excelente. Has integrado arquitectura cliente-servicio, centralización de lógica y criterios SOLID en el diseño."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has completado la introducción a los servicios web. Estos conceptos son la base del track POSW: sin distinguir servicio de sitio estático, sin centralizar lógica y sin particionar responsabilidades, será difícil avanzar en formatos, protocolos y diseño de APIs.

**Ideas clave para retener:**

- **Servicio web** = máquina-a-máquina + interfaz estandarizada; el contrato es público y versionable.
- **Centralizar lógica** en el servidor evita inconsistencias entre plataformas.
- **Escalar por módulo** es más eficiente que escalar monolitos enteros.
- **SOLID** (preview) guía endpoints y capas mantenibles; profundizarás en `principios-solid`.

**Siguiente paso:** lección `formatos-datos` — XML y JSON para el intercambio de datos entre clientes y servicios.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué define mejor a un servicio web?",
      "options": [
        "Una página HTML para humanos",
        "Un sistema máquina-a-máquina con interfaz estandarizada en red",
        "Solo una base de datos en la nube",
        "Un framework de frontend"
      ],
      "correctIndex": 1,
      "feedback": "Un servicio web expone funcionalidad para que otras aplicaciones la consuman programáticamente, típicamente vía HTTP."
    },
    {
      "question": "¿Cuál es un beneficio de la escalabilidad independiente en arquitectura de servicios?",
      "options": [
        "Obliga a escalar todo el monolito junto",
        "Solo el componente con más carga puede escalarse sin tocar el resto",
        "Elimina la necesidad de bases de datos",
        "Impide usar múltiples lenguajes"
      ],
      "correctIndex": 1,
      "feedback": "Modularidad permite escalar el servicio de pagos, catálogo u otro módulo según demanda real."
    },
    {
      "question": "En SOLID, el principio de Responsabilidad Única (S) implica que…",
      "options": [
        "Un endpoint debe hacer todo para reducir archivos",
        "Cada módulo tiene una sola razón para cambiar",
        "Solo puede haber una clase en el proyecto",
        "No se permiten interfaces"
      ],
      "correctIndex": 1,
      "feedback": "/usuarios no debería mezclar pagos ni envío de emails; cada responsabilidad va en su módulo."
    },
    {
      "question": "La analogía del ATM ilustra principalmente…",
      "options": [
        "Que los servicios web solo funcionan con tarjetas de crédito",
        "Interoperabilidad mediante interfaz estandarizada independiente del emisor",
        "Que HTTP no es necesario",
        "Que los servicios web no usan redes"
      ],
      "correctIndex": 1,
      "feedback": "Cualquier tarjeta compatible usa la misma interfaz del cajero, igual que clientes heterogéneos usan la misma API."
    },
    {
      "question": "¿Qué problema resuelve centralizar lógica en el servicio frente a duplicarla en clientes?",
      "options": [
        "Más inconsistencias entre plataformas",
        "Reglas de negocio coherentes y un solo lugar para corregir bugs",
        "Imposibilita la interoperabilidad",
        "Obliga a un solo lenguaje de programación"
      ],
      "correctIndex": 1,
      "feedback": "Compartir datos y lógica en el servidor evita que web, móvil y batch implementen reglas distintas."
    }
  ]
}

---

## SEO (sugerencias)

- **seoTitle:** Servicios Web: definición, objetivos y SOLID | POSW
- **seoDescription:** Aprende qué es un servicio web, arquitectura cliente-servidor, interoperabilidad, escalabilidad y preview de SOLID aplicado a APIs. Primera lección del track POSW.
