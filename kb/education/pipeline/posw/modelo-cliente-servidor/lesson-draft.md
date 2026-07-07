---
track: posw
slug: modelo-cliente-servidor
title: "Modelo Cliente-Servidor"
order: 16
prerequisites:
  - react
related:
  - frontend
  - backend
  - http-metodos-status
  - protocolos-seguridad
  - apis
  - herramientas-desarrollo
source_brief: kb/education/pipeline/posw/modelo-cliente-servidor/brief.md
topic_expert: topic-expert-web-services
tsx_sections:
  - ObjetivosSection
  - QueEsClienteServidorSection
  - FlujoHttpSection
  - ArquitecturasSection
  - VariantesSection
  - EjemplosRealesSection
  - CompruebaTuComprensionSection
  - RetoIntegradorSection
  - CierreSection
  - MiniquizFinalSection
---

## Objetivos de aprendizaje

Al finalizar la lección, el estudiante podrá:

- **Definir** el modelo cliente-servidor y distinguir roles de cliente (solicita) y servidor (provee recursos).
- **Describir** el flujo completo al abrir una URL: DNS → TCP → TLS → HTTP request/response → renderizado.
- **Comparar** arquitecturas 2 capas, 3 capas y N capas/microservicios en seguridad, escalabilidad y separación de responsabilidades.
- **Identificar** variantes (P2P, híbrido, serverless) y cuándo cada una aplica en aplicaciones reales.
- **Mapear** aplicaciones cotidianas (búsqueda, correo, streaming, juegos) a cliente, servidor y protocolo subyacente.

## Prerrequisitos

- **Lección `react`:** componentes, estado y consumo de datos en el frontend.
- Familiaridad con URLs y navegación web básica.
- Concepto general de API y JSON (reforzado en lecciones `apis` y `http-metodos-status`).

## Contenido

### Objetivos del tema

**Sección TSX:** `ObjetivosSection`

Esta lección explica el paradigma cliente-servidor que sustenta la web moderna: quién solicita, quién responde, qué ocurre al abrir una URL y cómo organizar capas en aplicaciones reales.

<!-- interactive: Callout -->
{
  "title": "El cliente no es solo el navegador",
  "children": "Un cliente puede ser navegador, app móvil, curl, Postman o un cliente de juego. Lo que los une: inician peticiones y consumen respuestas."
}

---

### 1) ¿Qué es el modelo cliente-servidor?

**Sección TSX:** `QueEsClienteServidorSection`

#### Mapa mental

- **Modelo cliente-servidor:** paradigma de red donde el cliente solicita servicios y el servidor los provee.
- **Request / Response:** intercambio por turnos; el cliente inicia, el servidor responde (datos, error o ambos).
- **Cliente:** navegador, app móvil, `curl`, Postman. Presenta interfaz o consume API.
- **Servidor:** Apache, Nginx, Node.js, Spring Boot, clusters cloud. Procesa lógica, consulta datos y devuelve respuesta.

#### Analogía del banco

Imagina una ventanilla: tú (cliente) pides un servicio; el cajero (servidor) valida, consulta el sistema (BD) y te entrega el resultado. En HTTP: `GET /api/cuenta/saldo` es la petición; el JSON con el saldo es la respuesta.

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente\n  participant S as Servidor\n  C->>S: Request (GET /recurso)\n  S->>S: Procesar lógica\n  S-->>C: Response (200 + datos)"
}

#### Petición HTTP cruda

<!-- code: http -->
```http
GET /productos HTTP/1.1
Host: ejemplo.com
Accept: application/json
User-Agent: Mozilla/5.0
Connection: close
```

#### Respuesta del servidor

<!-- code: http -->
```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 87

[{"id":1,"nombre":"Laptop Pro 15","precio":4500000},{"id":2,"nombre":"Mouse","precio":85000}]
```

#### Cliente con curl

<!-- code: bash -->
```bash
# Resolver y solicitar recurso (curl hace DNS + TCP + TLS internamente)
curl -v https://ejemplo.com/productos

# Solo cabeceras de respuesta
curl -I https://ejemplo.com/productos
```

#### Cliente JavaScript (fetch desde React)

<!-- code: javascript -->
```javascript
// El navegador actúa como cliente HTTP
async function cargarProductos() {
  const response = await fetch("https://ejemplo.com/api/productos");
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return response.json();
}
```

#### Servidor mínimo Node.js

<!-- code: javascript -->
```javascript
import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/productos") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify([{ id: 1, nombre: "Laptop Pro 15" }]));
  } else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(3000, () => console.log("Servidor en puerto 3000"));
```

#### Errores comunes

- Confundir cliente con frontend solamente (también puede ser `curl`, app móvil o ATM).
- Asumir que el servidor es un solo equipo (en producción suele ser cluster, CDN o balanceador).
- Omitir DNS y TLS al explicar "abrir una web".

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Explica la analogía banco/ventanilla aplicada a GET /api/cuenta/saldo. ¿Quién es cliente, servidor y qué sería la base de datos?",
  "hints": ["Tú inicias la petición", "El API procesa", "La BD almacena saldos"],
  "expectedKeywords": ["cliente", "servidor", "base de datos", "petición"],
  "successMessage": "Correcto. El cliente solicita; el servidor procesa y consulta la BD; la respuesta vuelve al cliente."
}

---

### 2) Flujo al abrir una URL

**Sección TSX:** `FlujoHttpSection`

#### Los 8 pasos al escribir `https://ejemplo.com/productos`

1. **Resolución DNS:** `ejemplo.com` → dirección IP.
2. **Conexión TCP** al puerto 443 (HTTPS).
3. **Handshake TLS:** canal cifrado.
4. **HTTP Request:** `GET /productos`.
5. **Servidor procesa:** lógica de negocio.
6. **Consulta BD** (si aplica): `SELECT productos`.
7. **HTTP Response:** status + cuerpo JSON/HTML.
8. **Renderizado** en el cliente (navegador pinta la UI).

<!-- interactive: StepReveal -->
{
  "title": "Flujo al abrir una URL",
  "steps": [
    { "title": "1. DNS", "content": "El navegador resuelve ejemplo.com a una IP (ej. 190.25.80.42)." },
    { "title": "2. TCP + TLS", "content": "Se abre conexión fiable al puerto 443 y se negocia cifrado HTTPS." },
    { "title": "3. HTTP Request", "content": "El cliente envía GET /productos con cabeceras Accept y Host." },
    { "title": "4. Servidor + BD", "content": "El backend ejecuta lógica y puede consultar PostgreSQL u otro motor." },
    { "title": "5. HTTP Response", "content": "El servidor devuelve 200 OK con JSON o HTML." },
    { "title": "6. Renderizado", "content": "El navegador parsea la respuesta y pinta la interfaz; puede disparar más requests." }
  ]
}

#### Secuencia completa

<!-- interactive: MermaidDiagram -->
{
  "chart": "sequenceDiagram\n  participant C as Cliente (Navegador)\n  participant D as DNS\n  participant S as Servidor\n  participant DB as Base de Datos\n  C->>D: Resolver ejemplo.com\n  D-->>C: IP 190.25.80.42\n  C->>S: TCP + TLS + GET /productos\n  S->>DB: SELECT productos\n  DB-->>S: Filas\n  S-->>C: HTTP 200 + JSON\n  C->>C: Renderizar UI"
}

#### Ordenar los pasos

<!-- interactive: CodeChallenge -->
{
  "title": "Ordena el flujo al cargar una página",
  "template": "1. ___\n2. ___\n3. ___\n4. ___\n5. ___\n6. ___",
  "blanks": [
    { "id": "blank1", "answer": "resolución DNS", "placeholder": "paso a" },
    { "id": "blank2", "answer": "TCP a puerto 443", "placeholder": "paso b" },
    { "id": "blank3", "answer": "TLS handshake", "placeholder": "paso c" },
    { "id": "blank4", "answer": "GET /productos", "placeholder": "paso d" },
    { "id": "blank5", "answer": "consulta SQL en servidor", "placeholder": "paso e" },
    { "id": "blank6", "answer": "renderizado en navegador", "placeholder": "paso f" }
  ]
}

#### Dato clave

Una sola URL puede disparar **50–100 requests HTTP** adicionales: JS, CSS, fuentes, imágenes y llamadas API. Optimizar solo el HTML inicial no basta.

---

### 3) Arquitecturas: 2, 3 y N capas

**Sección TSX:** `ArquitecturasSection`

#### Mapa mental

- **2 capas (2-Tier):** cliente ↔ servidor con BD integrada o acceso directo. Simple pero riesgoso si el cliente toca la BD.
- **3 capas (3-Tier):** presentación → lógica/API → datos. Estándar en la web.
- **N capas / microservicios:** API Gateway, servicios independientes, BDs por dominio. Escala por servicio; mayor complejidad operacional.

#### Arquitectura 3 capas

<!-- interactive: MermaidDiagram -->
{
  "chart": "flowchart TB\n  P[Capa 1: Presentación<br/>React / App móvil]\n  L[Capa 2: Lógica<br/>API REST Node/Spring]\n  D[Capa 3: Datos<br/>PostgreSQL / Redis]\n  P -->|HTTPS JSON| L\n  L -->|SQL / protocolo BD| D"
}

#### Comparativa 2-Tier vs 3-Tier

<!-- interactive: CompareTable -->
{
  "headers": ["Aspecto", "2 capas", "3 capas"],
  "rows": [
    ["Seguridad", "Riesgo si el cliente accede directo a BD", "La BD queda detrás de la API"],
    ["Escalabilidad", "La BD recibe conexiones directas del cliente", "Pool de conexiones y caché en el backend"],
    ["Separación", "Lógica mezclada en cliente o servidor único", "Presentación, lógica y datos separados"],
    ["Complejidad", "Menor al inicio", "Mayor, pero mantenible en equipos"],
    ["Ejemplo", "App escritorio + MySQL directo", "React → REST API → PostgreSQL"]
  ]
}

#### Caso real: e-commerce en Black Friday

<!-- interactive: Callout -->
{
  "title": "Colapso con arquitectura 2 capas",
  "children": "200 cajeros conectados directo a MySQL sin pool ni caché provocan timeouts en checkout. Decisión: migrar a 3 capas — React, API Node.js con pool, Redis para stock cacheado, PostgreSQL solo desde el backend."
}

#### Práctica guiada

<!-- interactive: PracticeExercise -->
{
  "prompt": "Dibuja (o describe) una arquitectura 3 capas para una app de pedidos: React, API Spring Boot, PostgreSQL. ¿Qué capa no debe ser accesible desde internet?",
  "hints": ["Capa de datos", "Solo HTTPS al frontend", "API como intermediaria"],
  "expectedKeywords": ["PostgreSQL", "datos", "API", "no expuesta"],
  "successMessage": "Correcto. La capa de datos (PostgreSQL) nunca debe quedar expuesta directamente a internet."
}

---

### 4) Variantes: P2P, híbrido y serverless

**Sección TSX:** `VariantesSection`

#### Mapa mental

- **P2P:** cada nodo es cliente y servidor (BitTorrent, blockchain). Sin servidor central de contenido.
- **Híbrido:** servidor central coordina; clientes comparten datos (Skype, metadatos en Spotify).
- **Serverless:** funciones efímeras en la nube (Lambda, Cloudflare Workers); el proveedor gestiona infraestructura.

#### Cuándo usar cada variante

| Variante | Ventaja | Riesgo / límite |
|----------|---------|-----------------|
| P2P | Sin cuello de botella central | NAT, descubrimiento, muchos "P2P" usan servidores de coordinación |
| Híbrido | Balance costo/confiabilidad | Más piezas que P2P puro |
| Serverless | Escala automática sin administrar servidores | Cold starts, vendor lock-in |

#### Caso real: videollamadas

<!-- interactive: Callout -->
{
  "title": "De P2P puro a modelo híbrido",
  "children": "Sin servidor de señalización estable, las llamadas fallan detrás de NAT corporativo. Decisión: servidor central para autenticación, presencia y signaling (WebSockets); media P2P o TURN relay según red."
}

#### Errores comunes

- Tratar microservicios como obligatorios (añaden complejidad de red y observabilidad).
- Pensar que P2P no tiene servidores (muchos usan servidores de descubrimiento).
- Exponer la BD directamente al cliente en 2-Tier mal aplicado.

---

### 5) Ejemplos reales

**Sección TSX:** `EjemplosRealesSection`

#### Aplicaciones cotidianas

<!-- interactive: CompareTable -->
{
  "headers": ["Aplicación", "Cliente", "Servidor / servicio", "Protocolo"],
  "rows": [
    ["Búsqueda web", "Navegador", "Cluster de indexación", "HTTPS"],
    ["Correo", "Cliente mail / webmail", "SMTP/IMAP servers", "SMTP, IMAP, HTTPS"],
    ["Streaming", "App / navegador", "CDN + API de catálogo", "HTTPS, DASH/HLS"],
    ["Juegos online", "Cliente de juego", "Game server + matchmaking", "TCP/UDP, WebSockets"],
    ["API REST", "React / curl", "Node.js / Spring Boot", "HTTPS + JSON"]
  ]
}

#### Reflexión

<!-- interactive: PracticeExercise -->
{
  "prompt": "Al abrir una tienda online en el navegador, ¿cuántos tipos de cliente-servidor distintos intervienen además del HTML inicial? Nombra al menos tres recursos o servicios.",
  "hints": ["Assets estáticos", "API de productos", "Pasarela de pago"],
  "expectedKeywords": ["API", "CDN", "imágenes", "JavaScript"],
  "successMessage": "Bien. Una página moderna combina HTML, assets, APIs y servicios externos en múltiples requests."
}

---

### Comprueba tu comprensión

**Sección TSX:** `CompruebaTuComprensionSection`

<!-- interactive: PracticeExercise -->
{
  "prompt": "¿Por qué es un error de diseño que la app móvil se conecte directo a PostgreSQL en producción?",
  "hints": ["Credenciales", "Capa de API", "Seguridad"],
  "expectedKeywords": ["credenciales", "expuesta", "API", "seguridad"],
  "successMessage": "Correcto. Expone credenciales y la BD; la API centraliza lógica y protege los datos."
}

---

## Reto integrador

**Sección TSX:** `RetoIntegradorSection`

**"Diseña la arquitectura de un sistema de reservas de cine"**

Requisitos: app web React, app móvil, API de butacas en tiempo real, pasarela de pago externa, panel admin.

1. Identifica al menos **3 tipos de cliente** y **2 tipos de servidor** (o servicios).
2. Elige entre 3-Tier o microservicios y justifica con un criterio de escala o equipo.
3. Enumera el flujo HTTP cuando un usuario reserva la butaca F-12 (desde clic hasta confirmación).
4. Indica qué protocolo usarías para actualizar butacas ocupadas en tiempo real (HTTP polling vs WebSockets).
5. Señala un error de diseño si la app móvil se conectara directo a PostgreSQL.

**Criterio de éxito:** separación clara de capas, BD no expuesta al cliente, flujo DNS→HTTP documentado, justificación de variante arquitectónica.

<!-- interactive: PracticeExercise -->
{
  "prompt": "Completa el reto de reservas de cine: nombra clientes, servidores, flujo HTTP de reserva F-12 y protocolo para butacas en tiempo real.",
  "hints": [
    "React, móvil y panel admin como clientes",
    "API de butacas + pasarela de pago",
    "DNS → TLS → POST reserva",
    "WebSockets para tiempo real"
  ],
  "expectedKeywords": ["WebSocket", "API", "DNS", "PostgreSQL"],
  "successMessage": "Excelente. Has aplicado el modelo cliente-servidor a un caso real con capas bien separadas."
}

---

## Cierre

**Sección TSX:** `CierreSection`

Has visto cómo casi toda la web moderna sigue el modelo cliente-servidor: el cliente inicia, el servidor responde.

**Ideas clave para retener:**

- El **cliente** solicita; el **servidor** procesa y responde. No confundas cliente con "solo navegador".
- Abrir una URL implica **DNS → TCP → TLS → HTTP** antes del renderizado.
- La arquitectura **3 capas** protege la BD detrás de una API.
- **P2P, híbrido y serverless** son variantes con trade-offs distintos.
- Una página puede generar **decenas de requests** adicionales.

**Siguiente paso:** lección `herramientas-desarrollo` — XAMPP y Docker para montar entornos locales reproducibles.

---

## Miniquiz

**Sección TSX:** `MiniquizFinalSection`

<!-- interactive: Quiz -->
{
  "questions": [
    {
      "question": "¿Qué rol cumple el cliente en el modelo cliente-servidor?",
      "options": [
        "Almacena todos los datos de la aplicación",
        "Solicita servicios o recursos al servidor",
        "Solo ejecuta bases de datos",
        "Reemplaza al protocolo HTTP"
      ],
      "correctIndex": 1,
      "feedback": "El cliente inicia peticiones; el servidor procesa y responde."
    },
    {
      "question": "¿Qué ocurre primero al escribir https://ejemplo.com en el navegador?",
      "options": [
        "El servidor ejecuta SQL",
        "Resolución DNS del dominio a IP",
        "Renderizado del HTML",
        "COMMIT de transacción"
      ],
      "correctIndex": 1,
      "feedback": "Sin IP (vía DNS) no se establece la conexión TCP al servidor."
    },
    {
      "question": "Ventaja principal de la arquitectura 3 capas frente a 2 capas con acceso directo a BD:",
      "options": [
        "El cliente tiene credenciales de la base de datos",
        "La capa de datos no queda expuesta directamente al cliente",
        "Elimina la necesidad de un servidor",
        "Solo permite aplicaciones de escritorio"
      ],
      "correctIndex": 1,
      "feedback": "La API intermedia protege la BD y centraliza la lógica de negocio."
    },
    {
      "question": "¿Cuál es un ejemplo de modelo peer-to-peer (P2P)?",
      "options": [
        "Navegador → Apache → MySQL",
        "BitTorrent sin servidor central de archivos",
        "React → REST API → PostgreSQL",
        "AWS Lambda invocada por API Gateway"
      ],
      "correctIndex": 1,
      "feedback": "En P2P los nodos intercambian recursos entre sí sin un servidor central de contenido."
    },
    {
      "question": "En serverless (ej. AWS Lambda), ¿qué gestiona principalmente el proveedor cloud?",
      "options": [
        "El código fuente en el repositorio Git del desarrollador",
        "La infraestructura de ejecución y escalado de funciones",
        "El diseño de la interfaz React",
        "La resolución DNS del dominio del usuario final"
      ],
      "correctIndex": 1,
      "feedback": "El desarrollador sube funciones; la nube ejecuta y escala sin administrar servidores dedicados."
    }
  ]
}
